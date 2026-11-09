import type { H3Event } from 'h3'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getContactConfig(event: H3Event) {
  const config = useRuntimeConfig(event)
  const smtpUser = config.brevoSmtpUser.trim()
  const smtpKey = config.brevoSmtpKey.trim()
  const senderEmail = config.brevoSenderEmail.trim()
  const recipient = config.contactRecipient.trim()
  const port = Number(config.brevoSmtpPort)

  return {
    smtpUser,
    smtpKey,
    senderEmail,
    recipient,
    port,
    available: Boolean(emailPattern.test(smtpUser) && smtpKey && emailPattern.test(senderEmail) && emailPattern.test(recipient) && [587, 465, 2525].includes(port))
  }
}
