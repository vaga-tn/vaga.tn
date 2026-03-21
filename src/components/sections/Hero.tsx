import React from "react"
import { ArrowRight, BarChart3, Users, FileText, Database, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16 container mx-auto">
      <div className="flex flex-col items-center gap-8">

        <h1 className="text-5xl font-thin text-center tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.1]">
          Fini le chaos
          <br />
          <span className="text-brand font-normal">Pilotez votre réussite</span>
        </h1>

        <p className="text-lg text-black text-center max-w-3xl font-thin">
          VAGA est une suite logicielle complète conçue pour répondre aux besoins spécifiques des entreprises tunisiennes. De la gestion des ventes à la comptabilité, en passant par le stock et les clients, VAGA vous accompagne dans la digitalisation de votre activité.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="rounded-full">
            Demander une démo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full">
            Contacter le support
          </Button>
        </div>
      </div>
    </section>
  )
}
