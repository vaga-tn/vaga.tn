import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

export default async function CallToAction() {
  const t = await getTranslations("callToAction")

  return (
    <div className="bg-zinc-50 py-24 border-b border-zinc-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-8">
          {t("titlePrefix")}<span className="text-brand">{t("titleHighlight")}</span>
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand/90 transition-colors"
          >
            {t("cta")}
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500 flex-wrap">
          <span className="flex items-center gap-2">✓ {t("feature1")}</span>
          <span className="flex items-center gap-2">✓ {t("feature2")}</span>
          <span className="flex items-center gap-2">✓ {t("feature3")}</span>
        </div>
      </div>
    </div>
  )
}
