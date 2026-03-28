import Image from "next/image"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section";

const modules = [
  { name: "Stock", icon: '/apps/inventory.webp' },
  { name: "Clients", icon: '/apps/clients.webp' },
  { name: "Fournisseurs", icon: '/apps/suppliers.webp' },
  { name: "Achats", icon: '/apps/sales.webp' },
  { name: "Ventes", icon: '/apps/purchase.webp' },
  { name: "Comptabilite", icon: '/apps/bank.webp' },
  { name: "Calendrier", icon: '/apps/calendar.webp' },
  { name: "Entreprise", icon: '/apps/company.webp' },
  { name: "Drive", icon: '/apps/drive.webp' },
  { name: "POS", icon: '/apps/pos.webp' },
  { name: "Paraemetres", icon: '/apps/settings.webp' },
  { name: "Contacts", icon: '/apps/contacts.webp' },
  { name: "Equipe", icon: '/apps/staff.webp' },
  { name: "Tresorerie", icon: '/apps/treasury.webp' },
  { name: "Banques", icon: '/apps/bank.webp' },
  { name: "Véhicules", icon: '/apps/vehicles.webp' },
  { name: "Équipements", icon: '/apps/equipment.webp' },
  { name: "Analyse", icon: '/apps/analytics.webp' },
  { name: "Dossier", icon: '/apps/dossier.webp' },
  { name: "CRM", icon: '/apps/crm.webp' },
]

export function Modules() {

  const SECTION = SECTIONS.apps;

  return (
    <section className="sectionWrapper" id="modules">

      <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

      {/* Seamless Grid Container */}
      <div className="max-w-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 bg-zinc-200 border border-zinc-200 gap-[1px] rounded-sm overflow-hidden">
        {modules.map((module) => (
          <div
            key={module.name}
            className="flex flex-col items-center justify-center gap-4 py-10 text-center transition-colors bg-white"
          >
            <Image src={module.icon} alt={`Module ${module.name} - VAGA ERP Tunisie`} width={64} height={64} className="object-contain w-16 h-16" />
            <span className="text-sm font-bold text-black capitalize">
              {module.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
