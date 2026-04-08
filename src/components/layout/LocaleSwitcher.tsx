"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"

const LOCALES = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
]

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-2.5 py-1.5 border border-zinc-200 hover:border-zinc-400 rounded-full"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase text-xs tracking-wide">{locale}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-36 bg-white border border-zinc-200 shadow-md z-50">
          {LOCALES.map(({ code, label }) => (
            <Link
              key={code}
              href={pathname}
              locale={code}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
            >
              <span>{label}</span>
              {locale === code && <Check className="w-3.5 h-3.5 text-[#3ecf8e]" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
