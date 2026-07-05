"use client"

import { useTranslations } from "next-intl"
import { Mail, MapPin, Phone, FacebookIcon } from "lucide-react"
import SectionTitle from "../layout/SectionTitle"
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"


export function Contact() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  const t = useTranslations("contact")
  const sectionT = useTranslations("sections.contact")

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container px-4 mx-auto lg:px-0">

        <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">

          {/* ── Left: Form ── */}
          <div>
            <Cal namespace="30min"
              calLink="aymkh/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "dark" }}
            />
          </div>

          {/* ── Right: Quick Info card ── */}
          <div className="p-6 space-y-5 bg-white border rounded-lg shadow-sm border-zinc-200 h-fit">
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">
                {t("infoDirectContact")}
              </p>
              <p className="text-lg font-bold text-zinc-900">MAAK CORP</p>
            </div>

            <div className="space-y-5">
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

              <div className="flex items-start gap-3">
                <FacebookIcon className="w-4 h-4 text-[#3ecf8e] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-zinc-400">facebook</p>
                  <a href="https://www.facebook.com/profile.php?id=61591143806065" target="_blank">VAGA Suite</a>
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
