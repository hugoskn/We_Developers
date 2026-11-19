using System.Net;

namespace WeDevelopers.Infrastructure.Smtp.EmailTemplates
{
    public static class PasswordRecoveryTemplate
    {
        private const string Subject = "Reset your WeDevelopers password";

        public static EmailTemplate Create(string emailTo, string resetLink) =>
            new(emailTo, Subject, HtmlBody.Replace("{{RESET_LINK}}", WebUtility.HtmlEncode(resetLink)));

        private const string HtmlBody = """
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
</head>
<body style='margin:0;padding:0;background-color:#080807;font-family:Arial,sans-serif;'>
  <table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color:#080807;padding:40px 16px;'>
    <tr>
      <td align='center'>
        <table border='0' cellpadding='0' cellspacing='0' width='560' style='max-width:560px;width:100%;'>
          <tr>
            <td align='center' style='padding-bottom:32px;'>
              <table border='0' cellpadding='0' cellspacing='0'>
                <tr>
                  <td style='font-family:Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.5px;'>
                    <span style='color:#f0b429;'>We</span><span style='color:#eeeae3;'>Developers</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style='background-color:#111110;border:1px solid #252520;border-radius:12px;overflow:hidden;'>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                  <td style='background-color:#f0b429;height:3px;font-size:0;line-height:0;'>&nbsp;</td>
                </tr>
              </table>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                  <td style='padding:48px 40px 40px;'>
                    <p style='margin:0 0 12px;font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;letter-spacing:2px;text-transform:uppercase;'>// password_reset</p>
                    <h1 style='margin:0 0 16px;font-family:Arial,sans-serif;font-size:32px;font-weight:800;color:#eeeae3;letter-spacing:-1px;line-height:1.1;'>
                      Reset your password.
                    </h1>
                    <table border='0' cellpadding='0' cellspacing='0' width='48' style='margin-bottom:24px;'>
                      <tr>
                        <td style='background-color:#f0b429;height:2px;font-size:0;line-height:0;'>&nbsp;</td>
                      </tr>
                    </table>
                    <p style='margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#7c7870;line-height:1.7;'>
                      We received a request to reset the password for your WeDevelopers account. Click the button below to choose a new one.
                    </p>
                    <p style='margin:0 0 32px;font-family:Arial,sans-serif;font-size:15px;color:#7c7870;line-height:1.7;'>
                      This link expires in 1 hour and can only be used once. Do not share it with anyone.
                    </p>
                    <table border='0' cellpadding='0' cellspacing='0' style='margin-bottom:32px;'>
                      <tr>
                        <td style='border-radius:6px;background-color:#f0b429;'>
                          <a href='{{RESET_LINK}}' target='_blank'
                             style='display:inline-block;padding:14px 28px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0a0800;text-decoration:none;letter-spacing:0.3px;'>
                            Reset password &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p style='margin:0;font-family:Arial,sans-serif;font-size:13px;color:#7c7870;line-height:1.7;'>
                      If you didn&rsquo;t request a password reset, you can safely ignore this email. Your password will not change.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style='padding:28px 0 0;text-align:center;'>
              <p style='margin:0 0 8px;font-family:Arial,sans-serif;font-size:12px;color:#3e3e3a;'>
                &copy; WeDevelopers. All rights reserved.
              </p>
              <p style='margin:0;font-family:Arial,sans-serif;font-size:12px;color:#3e3e3a;'>
                You received this email because a password reset was requested for your account at
                <a href='https://wedevelopers.dev' style='color:#7a5c0a;text-decoration:none;'>wedevelopers.dev</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
""";
    }
}
