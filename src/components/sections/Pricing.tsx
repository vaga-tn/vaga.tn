import { PricingCalculator } from "./PricingCalculator"

export function Pricing() {
  return (
    <section id="tarification" className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto text-left relative z-10 px-4 lg:px-0">

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Un ERP Moins Cher. Sans Abonnement Caché.
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            L&apos;alternative moderne et abordable pour les entreprises tunisiennes (Sousse et au-delà). Pas de frais par utilisateur, une puissance totale pour votre équipe.
          </p>
        </div>

        <PricingCalculator />

      </div>
    </section>
  )
}
