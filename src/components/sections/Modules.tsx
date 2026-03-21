import Image from "next/image"

const modules = [
  { name: "STOCK", icon: '/apps/inventory.webp' },
  { name: "CLIENT", icon: '/apps/clients.webp' },
  { name: "FOURNISSEURS", icon: '/apps/suppliers.webp' },
  { name: "ACHAT", icon: '/apps/sales.webp' },
  { name: "VENTE", icon: '/apps/purchase.webp' },
  { name: "COMPTABILITE", icon: '/apps/bank.webp' },
  { name: "CALENDRIER", icon: '/apps/calendar.webp' },
  { name: "ENTREPRISE", icon: '/apps/company.webp' },
  { name: "DRIVE", icon: '/apps/drive.webp' },
  { name: "POS", icon: '/apps/pos.webp' },
  { name: "PARAMETRES", icon: '/apps/settings.webp' },
  { name: "STAFF", icon: '/apps/staff.webp' },
  { name: "TRESORERIE", icon: '/apps/treasury.webp' },
  { name: "VÉHICULES", icon: '/apps/vehicles.webp' },
  { name: "ÉQUIPEMENTS", icon: '/apps/equipment.webp' },
  { name: "ANALYSE", icon: '/apps/analytics.webp' },
  { name: "DOSSIERS", icon: '/apps/dossier.webp' },
  { name: "CRM", icon: '/apps/crm.webp' },
]

export function Modules() {
  return (
    <section className="py-24 bg-white" id="modules">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Une suite logicielle, des possibilités infinies
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Activez uniquement les modules dont vous avez besoin. Une flexibilité totale pour votre structure.
          </p>
        </div>

        {/* Seamless Grid Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-zinc-200 border border-zinc-200 gap-[1px] rounded-sm overflow-hidden">
          {modules.map((module) => (
            <div
              key={module.name}
              className="bg-white hover:bg-zinc-50 transition-colors py-10 flex flex-col items-center justify-center text-center gap-4 group"
            >
              <Image src={module.icon} alt={module.name} width={64} height={64} className="grayscale group-hover:grayscale-0" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                {module.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
