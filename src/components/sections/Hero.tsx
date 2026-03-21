import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16 container mx-auto">
      <div className="flex flex-col items-center gap-8">

        <h1 className="text-5xl font-thin text-center tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.1]">
          L'ERP & Logiciel de Gestion en Tunisie
          <br />
          <span className="text-brand font-normal">Moderne, Fiable et Pas Cher</span>
        </h1>

        <p className="text-lg text-black text-center max-w-3xl font-thin">
          L'alternative de confiance pour la <strong>gestion commerciale</strong> et <strong>facturation</strong> de votre entreprise.
          VAGA numérise votre activité avec des outils modernes, robustes et à un prix abordable pour les PME tunisiennes.
        </p>

        <div className="flex flex-wrap items-center">
          <Link href="/#contact" className="rounded-full bg-brand text-zinc-900 hover:bg-brand-600 border border-zinc-900 h-9 px-4 py-2 cursor-pointer flex items-center">
            Demander une démo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
