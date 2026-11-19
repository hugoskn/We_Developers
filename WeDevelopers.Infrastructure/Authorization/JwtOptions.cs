using System.ComponentModel.DataAnnotations;

namespace WeDevelopers.Infrastructure.Authorization
{
    public sealed class JwtOptions
    {
        public const string SectionName = "Jwt";

        [Required, MinLength(32)]
        public string SigningKey { get; set; } = string.Empty;

        [Required]
        public string Issuer { get; set; } = string.Empty;

        [Required]
        public string Audience { get; set; } = string.Empty;

        [Range(1, 720)]
        public int ExpiryHours { get; set; } = 24;
    }
}
