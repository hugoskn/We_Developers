using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using WeDevelopers.Infrastructure.Authorization;
using WeDevelopers.Infrastructure.Smtp;
using WeDevelopers.Infrastructure.Smtp.EmailTemplates;
using WeDevelopers.Server.Models;

namespace WeDevelopers.Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController(IUserManagerService userManager, ISmtpServer smtpServer, IConfiguration configuration) : ControllerBase
    {
        [HttpGet]
        public UserAccountModel Get() => new(User.GetUserEmail());

        [AllowAnonymous]
        [EnableRateLimiting("auth")]
        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordModel model)
        {
            var token = await userManager.GeneratePasswordResetTokenAsync(model.Email);
            if (token is not null)
            {
                var baseUrl = configuration["App:BaseUrl"] ?? throw new InvalidOperationException("App:BaseUrl is not configured.");
                var resetLink = $"{baseUrl.TrimEnd('/')}/reset-password?email={Uri.EscapeDataString(model.Email)}&token={token}";
                // ponytail: email is sent fire-and-forget so response time doesn't reveal whether the account exists; it is lost if the app stops mid-send. Upgrade to a background email queue if delivery must be guaranteed.
                _ = smtpServer.SendAsync(PasswordRecoveryTemplate.Create(model.Email, resetLink));
            }

            return Ok();
        }

        [AllowAnonymous]
        [EnableRateLimiting("auth")]
        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword(ResetPasswordModel model)
        {
            var result = await userManager.ResetPasswordAsync(model.Email, model.Token, model.NewPassword);
            if (result.Succeeded)
                return Ok();

            var detail = result.Errors.Any(e => e.Code == nameof(IdentityErrorDescriber.InvalidToken))
                ? "This reset link is invalid or has expired. Please request a new one."
                : string.Join(" ", result.Errors.Select(e => e.Description));
            return Problem(detail, statusCode: StatusCodes.Status400BadRequest);
        }
    }
}
