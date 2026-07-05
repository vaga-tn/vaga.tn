import { BadgeCheck } from "lucide-react"
import { getTranslations } from "next-intl/server"
import SectionTitle from "../layout/SectionTitle"
import { CTA } from "../ui/cta"

export async function Pricing() {
  const t = await getTranslations("sections.pricing")

  const plans = [
    {
      name: "VAGA Box",
      badge: t("boxBadge"),
      price: "3 000",
      unit: "TND",
      period: t("oneTime"),
      items: [
        { label: t("licenseLabel"), value: "3 000 TND" },
      ],
      features: [t("boxFeat1"), t("boxFeat2"), t("boxFeat3")],
      highlight: false,
    },
    {
      name: "VAGA Cloud",
      badge: t("cloudBadge"),
      price: "1 700",
      unit: "TND",
      period: t("oneTime"),
      items: [
        { label: t("licenseLabel"), value: "1 700 TND" },
        { label: t("monthlyLabel"), value: "250 TND/mois" },
      ],
      features: [t("cloudFeat1"), t("cloudFeat2"), t("cloudFeat3")],
      highlight: true,
    },
  ]

  return (
    <section className="bg-white">
      <section id="tarification" className="relative py-24 bg-[#EEEEEA]">
        <div className="container relative z-10 px-4 mx-auto space-y-8 text-left lg:px-0">

          <SectionTitle title={t("title")} subtitle={t("subtitle")} />

          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`px-4 py-8 space-y-8 relative flex flex-col rounded-lg border ${plan.highlight ? "border-[#3ecf8e] bg-[#E2F0E7]" : "border-[#676A6F] bg-[#EFEFED]"}`}
              >
                <div className="border-b border-zinc-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-zinc-900">{plan.name}</h3>
                    <span className={`px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase ${plan.highlight ? "bg-[#3ecf8e] text-white" : "bg-[#DADADB] text-zinc-500"}`}>
                      {plan.badge}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-regular ${plan.highlight ? "text-[#3ecf8e]" : "text-[#676A6F]"}`}>{plan.price}</span>
                    <span className="text-sm font-semibold text-zinc-500">{plan.unit}</span>
                    <span className="ml-1 text-xs text-zinc-400">{plan.period}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  {plan.items.map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">{item.label}</span>
                      <span className="font-semibold text-zinc-900">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 ">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-base text-zinc-600">
                      <BadgeCheck className={`w-4 h-4 ${plan.highlight ? "text-[#3ecf8e]" : "text-[#676A6F]"}`} />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-full">
            <CTA />
          </div>
        </div>
      </section>
    </section>
  )
}
