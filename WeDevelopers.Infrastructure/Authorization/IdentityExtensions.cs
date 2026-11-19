using System.Security.Claims;
using Microsoft.IdentityModel.JsonWebTokens;
using MongoDB.Bson;

namespace WeDevelopers.Infrastructure.Authorization
{
    public static class IdentityExtensions
    {
        public static string? GetUserEmail(this ClaimsPrincipal principal) =>
            principal.FindFirstValue(JwtRegisteredClaimNames.Email);

        public static ObjectId? GetUserId(this ClaimsPrincipal principal) =>
            ObjectId.TryParse(principal.FindFirstValue(JwtRegisteredClaimNames.Sub), out var id) ? id : null;
    }
}
