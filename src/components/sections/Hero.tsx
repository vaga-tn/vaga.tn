import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="sectionWrapper">
      <div className="flex flex-col items-center justify-center h-full gap-8">

        <h1 className="text-5xl font-normal text-center tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.1]">
          L'ERP Tout-en-Un en Tunisie
          <br />
          Moderne, Fiable et <span className="paint-highlight">Pas Cher</span>
        </h1>

        <p className="max-w-3xl text-lg font-thin text-center text-black">
          L'alternative de confiance pour la <strong>gestion commerciale</strong> et <strong>facturation</strong> de votre entreprise.
          VAGA numérise votre activité avec des outils modernes, robustes et à un prix abordable pour les PME tunisiennes.
        </p>

        <div className="flex flex-wrap items-center">
          <Link href="/#contact" className="flex items-center px-4 py-2 border rounded-full cursor-pointer bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 h-9">
            Demander une démo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
