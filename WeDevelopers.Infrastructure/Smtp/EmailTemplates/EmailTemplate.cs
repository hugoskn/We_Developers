namespace WeDevelopers.Infrastructure.Smtp.EmailTemplates
{
    public sealed record EmailTemplate(string To, string Subject, string HtmlBody);
}
