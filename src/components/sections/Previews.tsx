"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import SectionTitle from "../layout/SectionTitle"

const PREVIEW_ITEMS = [
  { key: "customization", gif: "/previews/customization.gif" },
  { key: "multiCompany", gif: "/previews/multi-company.gif" },
  { key: "clients", gif: "/previews/client.gif" },
  { key: "documents", gif: "/previews/document-lifecycle.gif" },
  { key: "inventory", gif: "/previews/inventory.gif" },
]

export function Previews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionT = useTranslations("sections.previews")
  const t = useTranslations("previews")

  return (
    <section className="relative py-24 bg-white bg-[radial-gradient(#00000040_1px,transparent_1px)] [background-size:16px_16px]">
      <section className="sectionWrapper">
        <SectionTitle title={sectionT("title")} subtitle={sectionT("subtitle")} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:justify-start">
          {/* Left: vertical carousel */}
          <div className="max-w-xl space-y-2">
            {PREVIEW_ITEMS.map((item, index) => (
              <button
                key={item.key}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-6 py-2 rounded-xl transition-all duration-300 ease-in-out border border-solid border-border ${index === activeIndex
                  ? "bg-brand/70 text-zinc-900"
                  : "bg-white/70 text-black hover:bg-zinc-100"
                  }`}
              >
                <span className={`text-lg ${index === activeIndex ? "font-bold" : ""}`}>
                  {t(item.key)}
                </span>
                {index === activeIndex && (
                  <p className="text-sm font-normal leading-relaxed text-black">
                    {t(`${item.key}Desc`)}
                  </p>
                )}
              </button>
            ))}
          </div>

          <div></div>
        </div>
      </section>

      {/* Right: GIF preview */}
      <div className="absolute overflow-hidden -translate-y-1/2 border rounded-lg shadow-md top-1/2 w-fit h-fit -right-0 bg-zinc-300 ">
        <Image
          src={PREVIEW_ITEMS[activeIndex].gif}
          alt={t(PREVIEW_ITEMS[activeIndex].key)}
          height={650}
          width={1000}
          className="object-contain "
          unoptimized
        />
      </div>
    </section>
  )
}
