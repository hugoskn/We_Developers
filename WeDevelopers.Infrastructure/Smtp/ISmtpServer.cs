using WeDevelopers.Infrastructure.Smtp.EmailTemplates;

namespace WeDevelopers.Infrastructure.Smtp
{
    public interface ISmtpServer
    {
        Task SendAsync(EmailTemplate email, CancellationToken cancellationToken = default);
    }
}
