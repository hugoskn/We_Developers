namespace WeDevelopers.Infrastructure.Smtp.EmailTemplates
{
    public static class SuccessUserRegistrationTemplate
    {
        private const string Subject = "Welcome to WeDevelopers — You're in.";

        public static EmailTemplate Create(string emailTo) => new(emailTo, Subject, HtmlBody);

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
                    <p style='margin:0 0 12px;font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;letter-spacing:2px;text-transform:uppercase;'>// account_created</p>
                    <h1 style='margin:0 0 16px;font-family:Arial,sans-serif;font-size:32px;font-weight:800;color:#eeeae3;letter-spacing:-1px;line-height:1.1;'>
                      You&rsquo;re in the crew.
                    </h1>
                    <table border='0' cellpadding='0' cellspacing='0' width='48' style='margin-bottom:24px;'>
                      <tr>
                        <td style='background-color:#f0b429;height:2px;font-size:0;line-height:0;'>&nbsp;</td>
                      </tr>
                    </table>
                    <p style='margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#7c7870;line-height:1.7;'>
                      Your WeDevelopers account has been created. Welcome to a community built by developers, for developers — where you learn, build, and grow together.
                    </p>
                    <p style='margin:0 0 32px;font-family:Arial,sans-serif;font-size:15px;color:#7c7870;line-height:1.7;'>
                      Here&rsquo;s what you can explore:
                    </p>
                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='margin-bottom:36px;'>
                      <tr>
                        <td style='padding:12px 0;border-top:1px solid #1a1a17;'>
                          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                              <td width='28' valign='top' style='font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;padding-top:2px;'>01</td>
                              <td>
                                <p style='margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#eeeae3;'>Creator Program</p>
                                <p style='margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#7c7870;'>Build in public, earn revenue share from our monetized channels.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style='padding:12px 0;border-top:1px solid #1a1a17;'>
                          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                              <td width='28' valign='top' style='font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;padding-top:2px;'>02</td>
                              <td>
                                <p style='margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#eeeae3;'>Career Exchange</p>
                                <p style='margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#7c7870;'>Skip the recruiter — connect directly with top companies and teams.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style='padding:12px 0;border-top:1px solid #1a1a17;'>
                          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                              <td width='28' valign='top' style='font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;padding-top:2px;'>03</td>
                              <td>
                                <p style='margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#eeeae3;'>Academy</p>
                                <p style='margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#7c7870;'>High-signal courses and content from practitioners, not influencers.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style='padding:12px 0;border-top:1px solid #1a1a17;border-bottom:1px solid #1a1a17;'>
                          <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                              <td width='28' valign='top' style='font-family:&quot;Courier New&quot;,monospace;font-size:11px;color:#c9940f;padding-top:2px;'>04</td>
                              <td>
                                <p style='margin:0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#eeeae3;'>Community</p>
                                <p style='margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#7c7870;'>Join a tight-knit network of developers who get things done.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <table border='0' cellpadding='0' cellspacing='0'>
                      <tr>
                        <td style='border-radius:6px;background-color:#f0b429;'>
                          <a href='https://wedevelopers.dev' target='_blank'
                             style='display:inline-block;padding:14px 28px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#0a0800;text-decoration:none;letter-spacing:0.3px;'>
                            Go to WeDevelopers &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
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
                You received this email because you created an account at
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
