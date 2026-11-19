using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;

namespace WeDevelopers.Infrastructure.Authorization
{
    public interface IUserManagerService
    {
        Task<(ApplicationUser? User, string? Error)> CreateUserAsync(string email, string password);
        Task<(ApplicationUser? User, SignInResult Result)> CheckPasswordAsync(string email, string password);
        Task<ApplicationUser?> FindByIdAsync(ObjectId userId);
        Task<IdentityResult> UpdateUserAsync(ApplicationUser user);
        Task<string?> GeneratePasswordResetTokenAsync(string email);
        Task<IdentityResult> ResetPasswordAsync(string email, string encodedToken, string newPassword);
    }
}
