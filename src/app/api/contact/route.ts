import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const SUBJECT_LABELS: Record<string, string> = {
  demo: "Demande de Démonstration",
  custom_dev: "Développement Sur Mesure",
  support: "Support Client / Technique",
  other: "Autre demande",
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
  const data = await res.json()
  // v3 returns a score 0.0–1.0; require at least 0.5
  return data.success === true && data.score >= 0.5
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Champs manquants." }, { status: 400 })
    }

    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: "Vérification échouée." }, { status: 403 })
    }

    const subjectLabel = SUBJECT_LABELS[subject] ?? subject

    await resend.emails.send({
      from: "VAGA Contact <contact@mail.vaga.tn>",
      to: "vaga@maak-corp.tn",
      replyTo: email,
      subject: `[VAGA] ${subjectLabel} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e4e4e7;max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="padding:32px 40px 24px;border-bottom:2px solid #3ecf8e;">
                    <span style="font-size:22px;font-weight:900;letter-spacing:-1px;color:#18181b;">VAGA</span>
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#71717a;margin-left:12px;">Nouveau message</span>
                  </td>
                </tr>

                <!-- Subject badge -->
                <tr>
                  <td style="padding:28px 40px 0;">
                    <span style="display:inline-block;background:#f0fdf4;color:#3ecf8e;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:4px 12px;border:1px solid #3ecf8e;">
                      ${subjectLabel}
                    </span>
                  </td>
                </tr>

                <!-- Fields -->
                <tr>
                  <td style="padding:24px 40px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:16px;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#71717a;">Nom</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#18181b;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:16px;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#71717a;">Email</p>
                          <p style="margin:0;font-size:15px;color:#18181b;">
                            <a href="mailto:${email}" style="color:#3ecf8e;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:0;">
                          <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#71717a;">Message</p>
                          <div style="background:#f9f9f9;border-left:3px solid #3ecf8e;padding:16px 20px;">
                            <p style="margin:0;font-size:14px;line-height:1.7;color:#3f3f46;white-space:pre-wrap;">${message}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Reply CTA -->
                <tr>
                  <td style="padding:28px 40px 32px;">
                    <a href="mailto:${email}"
                       style="display:inline-block;background:#3ecf8e;color:#18181b;font-size:13px;font-weight:700;text-decoration:none;padding:10px 24px;">
                      Répondre à ${name}
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:20px 40px;border-top:1px solid #f4f4f5;background:#fafafa;">
                    <p style="margin:0;font-size:11px;color:#a1a1aa;">
                      Message reçu via le formulaire de contact sur vaga.tn
                    </p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] Resend error:", err)
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
