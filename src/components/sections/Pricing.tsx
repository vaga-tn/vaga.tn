import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="tarification" className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto text-left relative z-10 px-4 lg:px-0">

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Tarif Unique. Précision Totale.
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Pas de frais par utilisateur. La puissance pour toute votre équipe sans limite de croissance.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="relative border border-zinc-200 bg-white/80 backdrop-blur-sm p-8">
            {/* Tag */}
            <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600 shadow-sm">
              OFFRE UNIQUE
            </div>

            <div className="flex flex-col items-center gap-4 mb-8 mt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-black tracking-tighter text-zinc-900">3,500.00</span>
                <span className="text-2xl font-bold tracking-tight text-zinc-500">TND</span>
              </div>
              <p className="text-sm font-medium text-zinc-500 tracking-widest uppercase">
                PAIEMENT UNIQUE
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-4 gap-x-8 text-left mb-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-sm font-semibold text-zinc-700">UTILISATEURS ILLIMITÉS</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-sm font-semibold text-zinc-700">MISES À JOUR INCLUSES</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-sm font-semibold text-zinc-700">SUPPORT LOCAL TUNISIEN</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0" />
                <span className="text-sm font-semibold text-zinc-700">FORMATION INCLUSE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
