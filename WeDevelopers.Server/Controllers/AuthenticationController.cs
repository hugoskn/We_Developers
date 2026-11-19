using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using WeDevelopers.Infrastructure.Authorization;
using WeDevelopers.Infrastructure.Smtp;
using WeDevelopers.Infrastructure.Smtp.EmailTemplates;
using WeDevelopers.Server.Models;

namespace WeDevelopers.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableRateLimiting("auth")]
    public class AuthenticationController(IUserManagerService userManager, JwtTokenizer jwtTokenizer, ISmtpServer smtpServer) : ControllerBase
    {
        [HttpPost("Login")]
        public async Task<ActionResult<UserTokenModel>> Login(EmailPasswordModel model)
        {
            var (user, result) = await userManager.CheckPasswordAsync(model.Email, model.Password);
            if (user is null || !result.Succeeded)
                return Problem("Invalid email or password.", statusCode: StatusCodes.Status401Unauthorized);

            if (user.IsDeleted == true)
                return Problem("This account was deleted. Please contact support.", statusCode: StatusCodes.Status403Forbidden);

            return new UserTokenModel(user.Id.ToString(), jwtTokenizer.GenerateToken(user.Id, user.Email ?? model.Email));
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserTokenModel>> Register(EmailPasswordModel model)
        {
            var (user, error) = await userManager.CreateUserAsync(model.Email, model.Password);
            if (user is null)
                return Problem(error, statusCode: StatusCodes.Status409Conflict);

            await smtpServer.SendAsync(SuccessUserRegistrationTemplate.Create(model.Email));
            return new UserTokenModel(user.Id.ToString(), jwtTokenizer.GenerateToken(user.Id, model.Email));
        }

        [Authorize]
        [HttpDelete("DeleteUserAccount")]
        public async Task<IActionResult> DeleteUserAccount()
        {
            var userId = User.GetUserId();
            var user = userId is null ? null : await userManager.FindByIdAsync(userId.Value);
            if (user is null || user.IsDeleted == true)
                return NotFound();

            user.IsDeleted = true;
            var result = await userManager.UpdateUserAsync(user);
            return result.Succeeded ? NoContent() : Problem("The account could not be deleted.");
        }
    }
}
