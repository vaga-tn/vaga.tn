import Image from "next/image"
import { FileCheck, Leaf, Globe, ArrowRight, Car, AirVent, Plane, BadgeCheck } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import SectionTitle from "../layout/SectionTitle"
import { CTA } from "../ui/cta"

export async function CarbonReport() {
  const sectionT = await getTranslations("sections.carbon")
  const t = await getTranslations("carbon")

  const SCOPES = [
    { label: t("scope1Label"), description: t("scope1Desc"), color: "#CDECE2", icon: { label: "Car", color: "#A1D8C5" } },
    { label: t("scope2Label"), description: t("scope2Desc"), color: "#9EDBD2", icon: { label: "AirVent", color: "#48A59B" } },
    { label: t("scope3Label"), description: t("scope3Desc"), color: "#B5DBF7", icon: { label: "Plane", color: "#619EC3" } },
  ]

  const ICON_MAP = { Car, AirVent, Plane } as const

  const FEATURES = [
    { icon: BadgeCheck, text: t("feature1") },
    { icon: BadgeCheck, text: t("feature2") },
    { icon: Globe, text: t("feature3") },
  ]

  return (
    <section id="bilan-carbone" className="bg-white">
      <div className="grid grid-cols-1 gap-12 sectionWrapper lg:grid-cols-2 lg:items-start">

        {/* Left — content */}
        <div className="space-y-6">
          <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

          {/* Scope badges */}
          <div className="space-y-3">
            {SCOPES.map(({ label, description, color, icon }) => (
              <div key={label} className="flex items-center justify-between px-4 py-3 rounded-lg" style={{ background: color, color: "#fff" }}>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-black">{label}:</span>
                  <span className="text-sm text-zinc-700">{description}</span>
                </div>
                <div>
                  {(() => {
                    const Icon = ICON_MAP[icon.label as keyof typeof ICON_MAP]
                    return Icon ? <Icon className="w-5 h-5" style={{ color: icon.color }} /> : null
                  })()}
                </div>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <ul className="space-y-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="w-6 h-6" style={{ color: "#AED3CD" }} />
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>

          <CTA />
        </div>

        {/* Right — graphic */}
        <Image
          src="/fennec_carbon.webp"
          alt="Calcul bilan carbone CO2e automatique ISO 14064"
          width={1024}
          height={1024}
          className="object-contain w-full h-auto"
          loading="lazy"
        />

      </div>
    </section>
  )
}
