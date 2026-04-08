import Image from "next/image"
import { FileCheck, Leaf, Globe, ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import SectionTitle from "../layout/SectionTitle"

export async function CarbonReport() {
  const sectionT = await getTranslations("sections.carbon")
  const t = await getTranslations("carbon")

  const SCOPES = [
    { label: t("scope1Label"), description: t("scope1Desc"), color: "#3ecf8e" },
    { label: t("scope2Label"), description: t("scope2Desc"), color: "#2db97a" },
    { label: t("scope3Label"), description: t("scope3Desc"), color: "#1A2B3C" },
  ]

  const FEATURES = [
    { icon: Leaf, text: t("feature1") },
    { icon: FileCheck, text: t("feature2") },
    { icon: Globe, text: t("feature3") },
  ]

  return (
    <section id="bilan-carbone" className="sectionWrapper">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

        {/* Left — content */}
        <div className="space-y-6">
          <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

          {/* Scope badges */}
          <div className="space-y-3">
            {SCOPES.map(({ label, description, color }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3 border border-zinc-100 bg-zinc-50">
                <span
                  className="shrink-0 text-xs font-bold tracking-wider uppercase px-2 py-0.5"
                  style={{ background: color, color: "#fff" }}
                >
                  {label}
                </span>
                <span className="text-sm text-zinc-700">{description}</span>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <ul className="space-y-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#3ecf8e" }} />
                {text}
              </li>
            ))}
          </ul>

          <Link
            href="/blog/bilan-carbone-entreprise-en-tunisie-obligations-methode-iso-14064-et-calcul"
            className="flex items-center px-4 py-2 border rounded-full cursor-pointer w-fit bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 h-9"
          >
            {t("learnMore")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Right — graphic */}
        <Image
          src="/fennec_carbon.webp"
          alt="Calcul bilan carbone CO2e automatique ISO 14064"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
          loading="lazy"
        />

      </div>
    </section>
  )
}
