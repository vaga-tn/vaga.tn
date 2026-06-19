import { Check } from "lucide-react"
import { getTranslations } from "next-intl/server"
import SectionTitle from "../layout/SectionTitle"

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
        { label: t("installLabel"), value: "500 TND" },
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
    <section id="tarification" className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container relative z-10 px-4 mx-auto text-left lg:px-0">

        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border ${plan.highlight ? "border-[#3ecf8e] bg-[#f0fdf4]/40" : "border-zinc-200 bg-white"}`}
            >
              <div className="px-6 pt-6 pb-4 border-b border-zinc-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-zinc-900">{plan.name}</h3>
                  <span className={`px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase ${plan.highlight ? "bg-[#3ecf8e] text-white" : "bg-zinc-100 text-zinc-500"}`}>
                    {plan.badge}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-[#3ecf8e]">{plan.price}</span>
                  <span className="text-sm font-semibold text-zinc-500">{plan.unit}</span>
                  <span className="ml-1 text-xs text-zinc-400">{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 px-6 py-4 space-y-3">
                {plan.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="font-semibold text-zinc-900">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="px-6 pt-4 pb-6 space-y-2">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-sm text-zinc-600">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#3ecf8e]" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
