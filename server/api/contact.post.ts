import nodemailer from 'nodemailer'
import { getContactConfig } from '../utils/contact-config'
import { createContactEmail } from '../utils/contact-email'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const lastSentAt = new Map<string, number>()
const inFlight = new Set<string>()
const cooldownMs = 30_000

export default defineEventHandler(async (event) => {
  const contentLength = Number(getRequestHeader(event, 'content-length') || 0)
  if (contentLength > 25_000) {
    throw createError({ statusCode: 413, statusMessage: 'Die Nachricht ist zu lang.' })
  }

  const body = await readBody<Record<string, unknown>>(event)
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Ungültige Anfrage.' })
  }

  // Honeypot: silently discard automated submissions.
  if (typeof body.website === 'string' && body.website.trim()) return { ok: true }

  if (typeof body.name !== 'string' || typeof body.email !== 'string' || typeof body.message !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Bitte füllen Sie alle Felder aus.' })
  }

  const name = body.name.trim()
  const email = body.email.trim()
  const message = body.message.trim()

  if (name.length < 2 || name.length > 100 || /[\r\n\x00-\x1f]/.test(name) ||
      email.length > 254 || !emailPattern.test(email) ||
      message.length < 10 || message.length > 5_000) {
    throw createError({ statusCode: 400, statusMessage: 'Bitte prüfen Sie Ihre Eingaben.' })
  }

  const { smtpUser, smtpKey, senderEmail, recipient, port, available } = getContactConfig(event)
  if (!available) {
    throw createError({ statusCode: 503, statusMessage: 'Das Kontaktformular ist derzeit nicht verfügbar.' })
  }

  const clientKey = getRequestIP(event) || email.toLowerCase()
  const now = Date.now()
  if (inFlight.has(clientKey) || now - (lastSentAt.get(clientKey) || 0) < cooldownMs) {
    throw createError({ statusCode: 429, statusMessage: 'Bitte warten Sie kurz vor der nächsten Anfrage.' })
  }

  inFlight.add(clientKey)
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: smtpUser, pass: smtpKey },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000
    })

    const content = createContactEmail({ name, email, message })
    const logo = await useStorage('assets:server').getItemRaw('enis-shala-logo.png')
    if (!logo) throw new Error('Email logo asset is missing')
    const result = await transporter.sendMail({
      from: { name: 'Enis Shala Gartenbau', address: senderEmail },
      to: recipient,
      replyTo: { name, address: email },
      subject: 'Neue Kontaktanfrage über die Website',
      text: content.text,
      html: content.html,
      attachments: [{
        filename: 'enis-shala-logo.png',
        content: Buffer.from(logo),
        contentType: 'image/png',
        cid: 'logo@enisshala-gartenbau.de'
      }]
    })

    if (!result.accepted.length) throw new Error('SMTP did not accept the recipient')
    lastSentAt.set(clientKey, Date.now())
    if (lastSentAt.size > 1_000) {
      for (const [key, sentAt] of lastSentAt) {
        if (Date.now() - sentAt > cooldownMs) lastSentAt.delete(key)
      }
    }
    return { ok: true }
  } catch (error) {
    console.error('Contact email could not be sent:', error instanceof Error ? error.message : 'Unknown SMTP error')
    throw createError({ statusCode: 502, statusMessage: 'Die Nachricht konnte nicht versendet werden.' })
  } finally {
    inFlight.delete(clientKey)
  }
})
