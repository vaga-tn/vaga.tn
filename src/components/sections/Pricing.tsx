import { getTranslations } from "next-intl/server"
import SectionTitle from "../layout/SectionTitle"
import { PricingCalculator } from "./PricingCalculator"

export async function Pricing() {
  const t = await getTranslations("sections.pricing")

  return (
    <section id="tarification" className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container relative z-10 px-4 mx-auto text-left lg:px-0">

        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <PricingCalculator />

      </div>
    </section>
  )
}
