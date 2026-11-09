type ContactEmail = {
  name: string
  email: string
  message: string
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]!)

export function createContactEmail({ name, email, message }: ContactEmail) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\r\n?|\n/g, '<br>')
  const replyHref = `mailto:${encodeURIComponent(email)}`

  return {
    text: `Neue Kontaktanfrage über die Website\n\nName: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    html: `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Neue Kontaktanfrage</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f1f5f0;color:#111827;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f1f5f0;">
      <tr><td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #dce7db;border-radius:14px;overflow:hidden;">
          <tr><td style="height:6px;background-color:#1e4620;font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr><td style="padding:28px 32px 20px;">
            <img src="cid:logo@enisshala-gartenbau.de" width="210" height="70" alt="Enis Shala Gartenbau" style="display:block;width:210px;max-width:100%;height:auto;border:0;">
          </td></tr>
          <tr><td style="padding:12px 32px 28px;">
            <p style="margin:0 0 12px;color:#56775a;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Kontaktformular</p>
            <h1 style="margin:0;color:#1e4620;font-size:28px;line-height:1.25;font-weight:700;">Neue Kontaktanfrage</h1>
            <p style="margin:14px 0 0;color:#4b5563;font-size:15px;line-height:1.6;">Eine Nachricht wurde über die Website von Enis Shala Gartenbau gesendet.</p>
          </td></tr>
          <tr><td style="padding:0 32px 28px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f8f4;border:1px solid #dce7db;border-radius:10px;">
              <tr><td style="padding:20px 22px 10px;">
                <p style="margin:0 0 6px;color:#617265;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Name</p>
                <p style="margin:0;color:#111827;font-size:17px;line-height:1.5;font-weight:600;word-break:break-word;">${safeName}</p>
              </td></tr>
              <tr><td style="padding:10px 22px 20px;">
                <p style="margin:0 0 6px;color:#617265;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">E-Mail</p>
                <a href="${replyHref}" style="color:#1e4620;font-size:16px;line-height:1.5;text-decoration:underline;word-break:break-all;">${safeEmail}</a>
              </td></tr>
            </table>
          </td></tr>
          <tr><td style="padding:0 32px 26px;">
            <p style="margin:0 0 10px;color:#617265;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Nachricht</p>
            <p style="margin:0;color:#111827;font-size:16px;line-height:1.7;word-break:break-word;">${safeMessage}</p>
          </td></tr>
          <tr><td style="padding:0 32px 34px;">
            <a href="${replyHref}" style="display:inline-block;background-color:#1e4620;border-radius:999px;color:#ffffff;font-size:14px;font-weight:700;line-height:1.2;padding:15px 24px;text-decoration:none;">Direkt antworten</a>
          </td></tr>
          <tr><td style="border-top:1px solid #e3eae2;background-color:#f9fafb;padding:20px 32px;">
            <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.6;">Diese E-Mail wurde automatisch über das Kontaktformular der Website erstellt. Antworten Sie direkt auf diese Nachricht, um die anfragende Person zu erreichen.</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`
  }
}
