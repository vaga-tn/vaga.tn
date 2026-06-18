"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import ReCAPTCHA from "react-google-recaptcha"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2, Mail, MapPin, Phone } from "lucide-react"
import SectionTitle from "../layout/SectionTitle"

type Status = "idle" | "loading" | "success" | "error"

const INPUT_CLASS = "w-full h-10 rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all"

const SELECT_CLASS = "w-full h-10 rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const t = useTranslations("contact")
  const sectionT = useTranslations("sections.contact")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!recaptchaToken) return

    setStatus("loading")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    if (data.phone) data.phone = data.phone.replace(/[\s\-]/g, "")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      })

      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch {
      setStatus("error")
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
    }
  }

  return (
    <section id="contact" className="py-24 border-t bg-zinc-50 border-zinc-200">
      <div className="container px-4 mx-auto lg:px-0">

        <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

        <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">

          {/* ── Left: Form ── */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center border border-[#3ecf8e] bg-[#f0fdf4]">
                <CheckCircle className="h-10 w-10 text-[#3ecf8e]" />
                <div>
                  <p className="text-lg font-bold text-zinc-900">{t("successTitle")}</p>
                  <p className="max-w-xs mx-auto mt-1 text-sm text-zinc-500">
                    {t("successMessage")}
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs underline transition-colors text-zinc-400 underline-offset-4 hover:text-zinc-600"
                >
                  {t("sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Row 1 — Nom + Entreprise */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-zinc-900">
                      {t("nameFull")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t("namePlaceholder")}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-zinc-900">
                      {t("companyName")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={t("companyPlaceholder")}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                {/* Row 2 — Email + Téléphone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-900">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t("emailPlaceholder")}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-zinc-900">
                      {t("phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder={t("phonePlaceholder")}
                      inputMode="numeric"
                      className={INPUT_CLASS}
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^\d\s\-+]/g, "")
                      }}
                    />
                  </div>
                </div>

                {/* Row 3 — Sujet */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-zinc-900">
                    {t("subject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className={SELECT_CLASS}
                  >
                    <option value="" disabled>{t("subjectPlaceholder")}</option>
                    <option value="demo">{t("subjectDemo")}</option>
                    <option value="devis_box">{t("subjectDevisBox")}</option>
                    <option value="support">{t("subjectSupport")}</option>
                    <option value="other">{t("subjectOther")}</option>
                  </select>
                </div>

                {/* Row 4 — Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-900">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="w-full rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all min-h-[120px] resize-y"
                  />
                </div>

                {/* reCAPTCHA v2 */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => setRecaptchaToken(token)}
                  onExpired={() => setRecaptchaToken(null)}
                />

                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-3 text-sm text-red-600 border border-red-200 bg-red-50">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {t("errorMessage")}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading" || !recaptchaToken}
                  className="w-full gap-2 bg-[#3ecf8e] hover:bg-[#2db97a] text-zinc-900 font-bold border-none rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    t("submit")
                  )}
                </Button>

              </form>
            )}
          </div>

          {/* ── Right: Quick Info card ── */}
          <div className="p-6 space-y-5 bg-white border border-zinc-200">
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">
                {t("infoDirectContact")}
              </p>
              <p className="text-lg font-bold text-zinc-900">MAAK CORP</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#3ecf8e] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-zinc-400">{t("infoEmail")}</p>
                  <a
                    href="mailto:vaga@maak-corp.tn"
                    className="text-sm text-zinc-700 hover:text-[#3ecf8e] transition-colors"
                  >
                    vaga@maak-corp.tn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#3ecf8e] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-zinc-400">{t("infoPhone")}</p>
                  <a
                    href="tel:+21695593387"
                    className="text-sm text-zinc-700 hover:text-[#3ecf8e] transition-colors"
                  >
                    +216 95 593 387
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3ecf8e] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-zinc-400">{t("infoAddress")}</p>
                  <p className="text-sm text-zinc-700">{t("infoAddressValue")}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-1 border-t border-zinc-100">
              <p className="text-xs text-zinc-400">{t("infoResponseTime")}</p>
              <p className="text-xs text-zinc-400">{t("infoDemoNote")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
