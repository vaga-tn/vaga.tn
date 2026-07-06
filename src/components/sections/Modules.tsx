import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { CTA } from "../ui/cta"

const MODULE_ICONS: Record<string, string> = {
  stock: "/apps/inventory.webp",
  warehouse: "/apps/warehouses.webp",
  clients: "/apps/clients.webp",
  suppliers: "/apps/suppliers.webp",
  purchases: "/apps/sales.webp",
  sales: "/apps/purchase.webp",
  treasury: "/apps/treasury.webp",
  calendar: "/apps/calendar.webp",
  pos: "/apps/pos.webp",
  settings: "/apps/settings.webp",
  company: "/apps/company.webp",
  team: "/apps/staff.webp",
  vehicles: "/apps/vehicles.webp",
  addresses: "/apps/addresses.webp",
  banking: "/apps/bank.webp",
  files: "/apps/dossier.webp",
  crm: "/apps/crm.webp",
  drive: "/apps/drive.webp",
  tej: "/apps/tej.webp",
  statistics: "/apps/statistics.webp",
}

const MODULE_KEYS = Object.keys(MODULE_ICONS)

export async function Modules() {
  const t = await getTranslations("modules")
  const sectionT = await getTranslations("sections.apps")

  return (
    <section className="bg-[#F3F5F6]" id="modules">

      <section className="space-y-24 sectionWrapper">

        <div className="grid grid-cols-4 gap-8 mx-auto overflow-hidden w-fit lg:grid-cols-6">
          {MODULE_KEYS.map((key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-2 text-center lg:gap-4"
            >
              <div className="overflow-hidden bg-white border border-solid rounded-md lg:p-4 border-zinc-400">
                <Image
                  src={MODULE_ICONS[key]}
                  alt={`Module ${t(key)} - VAGA ERP Tunisie`}
                  width={64}
                  height={64}
                  className="object-contain w-16 h-16"
                />
              </div>
              <span className="text-xs font-normal text-black capitalize lg:text-sm">
                {t(key)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <CTA />
        </div>
      </section>

    </section>
  )
}
