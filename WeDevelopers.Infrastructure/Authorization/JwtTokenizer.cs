using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;

namespace WeDevelopers.Infrastructure.Authorization
{
    public sealed class JwtTokenizer(IOptions<JwtOptions> options)
    {
        private readonly JsonWebTokenHandler _handler = new();

        public static SymmetricSecurityKey CreateSigningKey(string signingKey) => new(Encoding.UTF8.GetBytes(signingKey));

        public string GenerateToken(ObjectId userId, string email)
        {
            var jwt = options.Value;
            return _handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = jwt.Issuer,
                Audience = jwt.Audience,
                Expires = DateTime.UtcNow.AddHours(jwt.ExpiryHours),
                SigningCredentials = new SigningCredentials(CreateSigningKey(jwt.SigningKey), SecurityAlgorithms.HmacSha256),
                Claims = new Dictionary<string, object>
                {
                    [JwtRegisteredClaimNames.Sub] = userId.ToString(),
                    [JwtRegisteredClaimNames.Email] = email
                }
            });
        }
    }
}
