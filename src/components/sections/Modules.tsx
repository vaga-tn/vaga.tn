import Image from "next/image"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section";

const modules = [
  { name: "Stock", icon: '/apps/inventory.webp' },
  { name: "Clients", icon: '/apps/clients.webp' },
  { name: "Fournisseurs", icon: '/apps/suppliers.webp' },
  { name: "Achats", icon: '/apps/sales.webp' },
  { name: "Ventes", icon: '/apps/purchase.webp' },
  { name: "Calendrier", icon: '/apps/calendar.webp' },
  { name: "Entreprise", icon: '/apps/company.webp' },
  { name: "POS", icon: '/apps/pos.webp' },
  { name: "Paraemetres", icon: '/apps/settings.webp' },
  { name: "Equipe", icon: '/apps/staff.webp' },
  { name: "Tresorerie", icon: '/apps/treasury.webp' },
  { name: "Banques", icon: '/apps/bank.webp' },
  { name: "Véhicules", icon: '/apps/vehicles.webp' },
  { name: "Dossier", icon: '/apps/dossier.webp' },
  { name: "CRM", icon: '/apps/crm.webp' },
]

export function Modules() {

  const SECTION = SECTIONS.apps;

  return (
    <section className="sectionWrapper" id="modules">

      <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

      {/* Seamless Grid Container */}
      <div className="grid grid-cols-4 gap-4 mx-auto overflow-hidden w-fit lg:grid-cols-6">
        {modules.map((module) => (
          <div
            key={module.name}
            className="flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="p-4 bg-white border border-solid rounded-md border-zinc-400">
              <Image src={module.icon} alt={`Module ${module.name} - VAGA ERP Tunisie`} width={64} height={64} className="object-contain w-16 h-16" />
            </div>
            <span className="text-sm font-normal text-black capitalize">
              {module.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
