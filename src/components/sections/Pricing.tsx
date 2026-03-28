import { SECTIONS } from "@/data/section";
import SectionTitle from "../layout/SectionTitle"
import { PricingCalculator } from "./PricingCalculator"

export function Pricing() {

  const SECTION = SECTIONS.pricing;

  return (
    <section id="tarification" className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container relative z-10 px-4 mx-auto text-left lg:px-0">

        <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

        <PricingCalculator />

      </div>
    </section>
  )
}
