import Image from "next/image"
import { FileCheck, Leaf, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section"

const SCOPES = [
  {
    label: "Scope 1",
    description: "Flotte véhicules & machines",
    color: "#3ecf8e",
  },
  {
    label: "Scope 2",
    description: "Électricité & climatisation",
    color: "#2db97a",
  },
  {
    label: "Scope 3",
    description: "Fournisseurs, logistique & voyages",
    color: "#1A2B3C",
  },
]

const FEATURES = [
  { icon: Leaf, text: "Calcul CO₂e automatique selon les normes ISO 14064" },
  { icon: FileCheck, text: "Rapport PDF certifié généré en un clic" },
  { icon: Globe, text: "Export-Ready pour l'UE & les marchés internationaux" },
]

export function CarbonReport() {

  const SECTION = SECTIONS.carbon;

  return (
    <section id="bilan-carbone" className="sectionWrapper">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

        {/* Left — content */}
        <div className="space-y-6">
          <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

          {/* Scope badges */}
          <div className="space-y-3">
            {SCOPES.map(({ label, description, color }) => (
              <div key={label} className="flex items-center gap-4 px-4 py-3 border border-zinc-100 bg-zinc-50">
                <span
                  className="shrink-0 text-xs font-bold tracking-wider uppercase px-2 py-0.5"
                  style={{ background: color, color: "#fff" }}
                >
                  {label}
                </span>
                <span className="text-sm text-zinc-700">{description}</span>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <ul className="space-y-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#3ecf8e" }} />
                {text}
              </li>
            ))}
          </ul>

          <Link href="https://vaga.tn/blog/bilan-carbone-entreprise-tunisie-iso-14064
" className="flex items-center px-4 py-2 border rounded-full cursor-pointer w-fit bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 h-9">
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Right — graphic */}
        <Image
          src="/fennec_carbon.webp"
          alt="Calcul bilan carbone CO2e automatique ISO 14064"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
          loading="lazy"
        />

      </div>
    </section>
  )
}
