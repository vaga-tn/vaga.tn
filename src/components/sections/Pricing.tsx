import React from "react"
import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="tarification" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">
            Tarif Unique. Précision Totale.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Pas de frais par utilisateur. La puissance pour toute votre équipe sans limite de croissance.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
            {/* Tag */}
            <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-300">
              OFFRE UNIQUE
            </div>
            
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-black tracking-tighter">3500</span>
                <span className="text-2xl font-bold tracking-tight text-zinc-400">TND</span>
              </div>
              <p className="text-sm font-medium text-zinc-500 tracking-widest uppercase">
                PAIEMENT UNIQUE / AN
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left mb-10">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-500 shrink-0" />
                <span className="text-sm font-semibold text-zinc-300">UTILISATEURS ILLIMITÉS</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-500 shrink-0" />
                <span className="text-sm font-semibold text-zinc-300">MISES À JOUR INCLUSES</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-500 shrink-0" />
                <span className="text-sm font-semibold text-zinc-300">SUPPORT LOCAL TUNISIEN</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-zinc-500 shrink-0" />
                <span className="text-sm font-semibold text-zinc-300">FORMATION INCLUSE</span>
              </div>
            </div>

            <button className="w-full rounded-md bg-white px-8 py-4 text-sm font-bold tracking-widest text-black transition-colors hover:bg-zinc-200">
              COMMENCER L'INSTALLATION
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
