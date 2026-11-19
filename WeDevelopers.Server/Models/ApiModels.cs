using System.ComponentModel.DataAnnotations;

namespace WeDevelopers.Server.Models
{
    public sealed record EmailPasswordModel(
        [Required, EmailAddress, MaxLength(256)] string Email,
        [Required, MaxLength(128)] string Password);

    public sealed record ForgotPasswordModel(
        [Required, EmailAddress, MaxLength(256)] string Email);

    public sealed record ResetPasswordModel(
        [Required, EmailAddress, MaxLength(256)] string Email,
        [Required, MaxLength(2048)] string Token,
        [Required, MaxLength(128)] string NewPassword);

    public sealed record UserTokenModel(string UserId, string Token);

    public sealed record UserAccountModel(string? Email);

    public sealed record UserDetailsDto(
        [MaxLength(100)] string? FirstName,
        [MaxLength(100)] string? LastName);
}
