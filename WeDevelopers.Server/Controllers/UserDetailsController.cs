using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WeDevelopers.Infrastructure.Authorization;
using WeDevelopers.Repositories.MongoRepository;
using WeDevelopers.Repositories.MongoRepository.MongoEntities;
using WeDevelopers.Server.Models;

namespace WeDevelopers.Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserDetailsController(IMongoRepository<UserDetailsEntity> userDetailsRepository) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<UserDetailsDto>> GetUserDetails(CancellationToken cancellationToken)
        {
            if (User.GetUserId() is not { } userId)
                return Unauthorized();

            var userDetails = await userDetailsRepository.FirstOrDefaultAsync(ud => ud.Id == userId, cancellationToken);
            return new UserDetailsDto(userDetails?.FirstName ?? string.Empty, userDetails?.LastName ?? string.Empty);
        }

        [HttpPost]
        public async Task<IActionResult> SaveUserDetails(UserDetailsDto model, CancellationToken cancellationToken)
        {
            if (User.GetUserId() is not { } userId)
                return Unauthorized();

            var update = Builders<UserDetailsEntity>.Update
                .Set(ud => ud.FirstName, model.FirstName?.Trim() ?? string.Empty)
                .Set(ud => ud.LastName, model.LastName?.Trim() ?? string.Empty)
                .SetOnInsert(ud => ud.CreatedDate, DateTime.UtcNow);

            await userDetailsRepository.UpdateOneAsync(ud => ud.Id == userId, update, upsert: true, cancellationToken);
            return NoContent();
        }
    }
}
