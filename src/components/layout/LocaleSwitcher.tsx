"use client"

import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const otherLocale = locale === "fr" ? "en" : "fr"
  const label = locale === "fr" ? "EN" : "FR"

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors border border-zinc-300 px-2 py-0.5 rounded-full"
    >
      {label}
    </Link>
  )
}
