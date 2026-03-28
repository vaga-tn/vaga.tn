"use client"

import { useState, useCallback } from "react"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section"

type Status = "idle" | "loading" | "success" | "error"

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!executeRecaptcha) return
    setStatus("loading")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const recaptchaToken = await executeRecaptcha("contact")

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      })

      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }, [executeRecaptcha])

  const SECTION = SECTIONS.contact;

  return (
    <section id="contact" className="py-24 border-t bg-zinc-50 border-zinc-200">
      <div className="container px-4 mx-auto lg:px-0">

        <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

        <div className="max-w-2xl mx-auto">

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center border border-[#3ecf8e] bg-[#f0fdf4]">
              <CheckCircle className="h-10 w-10 text-[#3ecf8e]" />
              <div>
                <p className="text-lg font-bold text-zinc-900">Message envoyé !</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Notre équipe vous recontactera dans les plus brefs délais.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-xs underline transition-colors text-zinc-400 underline-offset-4 hover:text-zinc-600"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-900">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full flex h-10 rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nom@entreprise.com"
                    className="w-full flex h-10 rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-zinc-900">
                  Sujet de votre demande
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full flex h-10 rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all"
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option value="demo">Demande de Démonstration</option>
                  <option value="custom_dev">Développement Sur Mesure</option>
                  <option value="support">Support Client / Technique</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full flex rounded-none border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] focus:border-transparent transition-all min-h-[120px] resize-y"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 text-sm text-red-600 border border-red-200 bg-red-50">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full gap-2 bg-[#3ecf8e] hover:bg-[#2db97a] text-zinc-900 font-bold border-none rounded-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer la demande"
                )}
              </Button>

              <p className="text-xs text-center text-zinc-400">
                Ce formulaire est protégé par reCAPTCHA.{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">
                  Politique de confidentialité
                </a>{" "}
                &{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">
                  Conditions d&apos;utilisation
                </a>{" "}
                Google.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  )
}
