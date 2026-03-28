import Image from "next/image"
import { FileCheck, Leaf, Globe } from "lucide-react"

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
  return (
    <section id="bilan-carbone" className="sectionWrapper">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

        {/* Left — content */}
        <div>
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Bilan Carbone Annuel
            </h2>
            <p className="max-w-2xl text-lg text-zinc-600">
              VAGA collecte automatiquement vos données d&apos;activité et calcule vos émissions CO₂e sur les trois scopes — sans saisie manuelle. Obtenez un rapport certifié prêt pour vos partenaires et appels d&apos;offres européens.
            </p>
          </div>

          {/* Scope badges */}
          <div className="mb-10 space-y-3">
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
