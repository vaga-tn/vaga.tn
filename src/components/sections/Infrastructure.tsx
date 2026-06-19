import Image from "next/image"
import { CloudCog, Server, Wifi, WifiOff, Shield, RefreshCw, HardDrive, Zap } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"
import SectionTitle from "../layout/SectionTitle"

export async function Infrastructure() {
  const sectionT = await getTranslations("sections.infrastructure")
  const t = await getTranslations("infrastructure")

  const CLOUD_FEATURES = [
    { icon: Zap, text: t("cloudFeature1") },
    { icon: RefreshCw, text: t("cloudFeature2") },
    { icon: Shield, text: t("cloudFeature3") },
    { icon: Wifi, text: t("cloudFeature4") },
  ]

  const BOX_FEATURES = [
    { icon: WifiOff, text: t("boxFeature1") },
    { icon: HardDrive, text: t("boxFeature2") },
    { icon: Shield, text: t("boxFeature3") },
    { icon: Server, text: t("boxFeature4") },
  ]

  return (
    <section id="deploiement" className="bg-gradient-to-r from-[#F1F1F4] to-[#EAE8EF]">

      <div className="sectionWrapper">

        {/* Header */}
        <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* --- Vaga Cloud --- */}
          <Card className="relative bg-white rounded-none shadow-none border-zinc-200">
            <div
              className="absolute top-0 px-3 py-1 text-xs font-bold tracking-widest uppercase -translate-y-1/2 rounded-full shadow-sm right-6"
              style={{ background: "#3ecf8e", color: "#fff" }}
            >
              {t("recommended")}
            </div>

            <CardHeader className="pt-8 pb-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 border shrink-0 border-zinc-100 bg-zinc-50">
                  <CloudCog className="w-6 h-6" style={{ color: "#3ecf8e" }} />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">{t("option1")}</p>
                  <h3 className="text-xl font-bold" style={{ color: "#1A2B3C" }}>{t("cloudTitle")}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{t("cloudTagline")}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-sm leading-relaxed text-zinc-600">{t("cloudDescription")}</p>
              <ul className="space-y-3">
                {CLOUD_FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                    <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#3ecf8e" }} />
                    {text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* --- Vaga Box --- */}
          <Card className="relative bg-white rounded-none shadow-none border-zinc-200">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm bg-[#1A2B3C] text-white">
              {t("internetIndependence")}
            </div>

            <CardHeader className="pt-8 pb-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 border shrink-0 border-zinc-100 bg-zinc-50">
                  <Server className="w-6 h-6 text-zinc-700" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">{t("option2")}</p>
                  <h3 className="text-xl font-bold" style={{ color: "#1A2B3C" }}>{t("boxTitle")}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{t("boxTagline")}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-sm leading-relaxed text-zinc-600">{t("boxDescription")}</p>
              <ul className="space-y-3">
                {BOX_FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                    <Icon className="h-4 w-4 shrink-0 mt-0.5 text-zinc-500" />
                    {text}
                  </li>
                ))}
              </ul>

              {/* DSL callout */}
              <div className="py-1 pl-4 border-l-2" style={{ borderColor: "#3ecf8e" }}>
                <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-zinc-500">
                  {t("calloutTitle")}
                </p>
                <p className="text-sm text-zinc-600">{t("calloutText")}</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </section>
  )
}
