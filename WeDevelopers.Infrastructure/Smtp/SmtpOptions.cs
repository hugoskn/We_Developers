namespace WeDevelopers.Infrastructure.Smtp
{
    public sealed class SmtpOptions
    {
        public const string SectionName = "SmtpSettings";

        public string Host { get; set; } = string.Empty;
        public int Port { get; set; } = 587;
        public string EmailFrom { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
    }
}
