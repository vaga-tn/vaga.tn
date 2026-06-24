import Image from "next/image"
import { Server, Wifi, WifiOff, Shield, RefreshCw, HardDrive, Zap } from "lucide-react"
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
    <section id="deploiement" className="relative bg-white">

      <div className="sectionWrapper">

        {/* Header */}
        <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* --- Vaga Cloud --- */}
          <Card className="relative bg-[#D8F4E9] rounded-lg shadow-none border-[#23805C]">
            <div
              className="absolute top-0 px-3 py-1 text-xs font-bold tracking-widest uppercase -translate-y-1/2 rounded-full shadow-sm right-6"
              style={{ background: "#23805C", color: "#fff" }}
            >
              {t("recommended")}
            </div>

            <CardHeader>
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#23805C]">{t("option1")}</p>
                <h3 className="text-3xl font-bold" style={{ color: "#1A2B3C" }}>{t("cloudTitle")}</h3>
                <p className="text-sm text-zinc-500">{t("cloudTagline")}</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-12">
              <ul className="space-y-2">
                {CLOUD_FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-base text-zinc-700">
                    <Icon className="w-4 h-4" style={{ color: "#23805C" }} />
                    {text}
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-zinc-700">{t("cloudDescription")}</p>
            </CardContent>
          </Card>

          {/* --- Vaga Box --- */}
          <Card className="relative bg-[#EFE6D5] rounded-lg shadow-none border-[#C7BDA9]">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm bg-[#1A2B3C] text-white">
              {t("internetIndependence")}
            </div>

            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#C7BDA9]">{t("option2")}</p>
                  <h3 className="text-3xl font-bold" style={{ color: "#1A2B3C" }}>{t("boxTitle")}</h3>
                  <p className="text-sm text-zinc-500">{t("boxTagline")}</p>
                  <p className="text-sm leading-relaxed text-zinc-600">{t("boxDescription")}</p>

                </div>
                <div>
                  <Image src="/box.webp" alt="VAGA" width={500} height={141} priority className="object-contain" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {BOX_FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-base text-zinc-700">
                    <Icon className="w-4 h-4" />
                    {text}
                  </li>
                ))}
              </ul>

              {/* DSL callout */}
              <div className="bg-[#E1D3B8] p-2 rounded-lg text-black" style={{ borderColor: "#3ecf8e" }}>
                <p className="text-xs font-semibold tracking-wider uppercase">
                  {t("calloutTitle")}
                </p>
                <p className="text-base">{t("calloutText")}</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </section>
  )
}
