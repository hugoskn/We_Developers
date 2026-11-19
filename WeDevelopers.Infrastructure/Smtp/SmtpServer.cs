using MailKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using WeDevelopers.Infrastructure.Smtp.EmailTemplates;

namespace WeDevelopers.Infrastructure.Smtp
{
    public sealed class SmtpServer(IOptions<SmtpOptions> options, ILogger<SmtpServer> logger) : ISmtpServer
    {
        public async Task SendAsync(EmailTemplate email, CancellationToken cancellationToken = default)
        {
            var settings = options.Value;
            try
            {
                using var message = new MimeMessage();
                message.From.Add(MailboxAddress.Parse(settings.EmailFrom));
                message.To.Add(MailboxAddress.Parse(email.To));
                message.Subject = email.Subject;
                message.Body = new BodyBuilder { HtmlBody = email.HtmlBody }.ToMessageBody();

                using var client = new SmtpClient { Timeout = 10000 };
                await client.ConnectAsync(settings.Host, settings.Port, SecureSocketOptions.StartTls, cancellationToken);
                await client.AuthenticateAsync(settings.EmailFrom, settings.Key, cancellationToken);
                await client.SendAsync(message, cancellationToken);
                await client.DisconnectAsync(true, cancellationToken);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to send email '{Subject}'", email.Subject);
            }
        }
    }
}
