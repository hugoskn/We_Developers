using System.Buffers.Text;
using System.Text;
using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;

namespace WeDevelopers.Infrastructure.Authorization
{
    public sealed class UserManagerService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager) : IUserManagerService
    {
        public async Task<(ApplicationUser? User, string? Error)> CreateUserAsync(string email, string password)
        {
            var user = new ApplicationUser { UserName = email, Email = email };
            var result = await userManager.CreateAsync(user, password);
            return result.Succeeded ? (user, null) : (null, string.Join(" ", result.Errors.Select(e => e.Description)));
        }

        public async Task<(ApplicationUser? User, SignInResult Result)> CheckPasswordAsync(string email, string password)
        {
            var user = await userManager.FindByEmailAsync(email);
            if (user is null)
                return (null, SignInResult.Failed);

            return (user, await signInManager.CheckPasswordSignInAsync(user, password, lockoutOnFailure: true));
        }

        public Task<ApplicationUser?> FindByIdAsync(ObjectId userId) => userManager.FindByIdAsync(userId.ToString());

        public Task<IdentityResult> UpdateUserAsync(ApplicationUser user) => userManager.UpdateAsync(user);

        public async Task<string?> GeneratePasswordResetTokenAsync(string email)
        {
            var user = await userManager.FindByEmailAsync(email);
            if (user is null || user.IsDeleted == true)
                return null;

            var token = await userManager.GeneratePasswordResetTokenAsync(user);
            return Base64Url.EncodeToString(Encoding.UTF8.GetBytes(token));
        }

        public async Task<IdentityResult> ResetPasswordAsync(string email, string encodedToken, string newPassword)
        {
            var user = await userManager.FindByEmailAsync(email);
            if (user is null || user.IsDeleted == true || !TryDecodeToken(encodedToken, out var token))
                return IdentityResult.Failed(new IdentityErrorDescriber().InvalidToken());

            return await userManager.ResetPasswordAsync(user, token, newPassword);
        }

        private static bool TryDecodeToken(string encodedToken, out string token)
        {
            try
            {
                token = Encoding.UTF8.GetString(Base64Url.DecodeFromChars(encodedToken));
                return true;
            }
            catch (FormatException)
            {
                token = string.Empty;
                return false;
            }
        }
    }
}
