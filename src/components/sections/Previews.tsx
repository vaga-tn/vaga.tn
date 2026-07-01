"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Users, Building2, Package, Sliders, FileText, Sparkles } from "lucide-react"

const PREVIEW_ITEMS = [
  { key: "customization", Icon: Sliders, gif: "/previews/customization.gif" },
  { key: "multiCompany", Icon: Building2, gif: "/previews/multi-company.gif" },
  { key: "clients", Icon: Users, gif: "/previews/client.gif" },
  { key: "documents", Icon: FileText, gif: "/previews/document-lifecycle.gif" },
  { key: "inventory", Icon: Package, gif: "/previews/inventory.gif" },
]

export function Previews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionT = useTranslations("sections.previews")
  const t = useTranslations("previews")
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = PREVIEW_ITEMS.map((_, i) => {
      const el = panelRefs.current[i]
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { threshold: 0.5 },
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <section className="relative py-24 bg-white bg-[radial-gradient(#3ecf8e_1px,transparent_1px)] [background-size:16px_16px]">

      <section className="container relative px-4 py-24 mx-auto lg:px-0 lg:flex lg:gap-16">

        {/* LEFT */}
        <div className="lg:w-[30%] lg:shrink-0 lg:sticky lg:top-64 space-y-4 h-fit max-w-fit">

          <div className="inline-flex items-center gap-1.5 rounded-lg border border-brand/30 px-2 py-1 text-xs font-normal text-brand backdrop-blur-lg bg-white/30">
            <Sparkles className="size-3.5" />
            {sectionT("title")}
          </div>

          <h2 className="text-3xl font-bold leading-tight text-blmack md:text-4xl">
            {sectionT("subtitle")}
          </h2>

          <div className="flex flex-col items-start gap-4">
            {PREVIEW_ITEMS.map(({ key, Icon }, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={key}
                  tabIndex={0}
                  role="button"
                  onClick={() =>
                    panelRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      panelRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                  }}
                  className={`relative w-full cursor-pointer rounded-2xl border outline-none transition-all duration-500 ease-in-out focus-visible:ring-1 focus-visible:ring-white/30 ${isActive
                    ? "border-brand/50 bg-brand/10 text-black opacity-100"
                    : "border-border bg-white/50 backdrop-blur-sm text-zinc-500 hover:opacity-60 focus-visible:opacity-60"
                    }`}
                >
                  <div className="flex items-center gap-2 px-4 py-2">
                    <div
                      className="flex items-center justify-center transition-colors duration-500 rounded-full shrink-0"
                      style={{
                        width: 28,
                        height: 28,
                        backgroundColor: "rgba(62, 207, 142, 0.25)"
                      }}
                    >
                      <Icon
                        className="size-3.5 transition-colors duration-500"
                        style={{
                          color: "#3ecf8e"
                        }}
                      />
                    </div>
                    <span
                      className={`text-sm transition-all duration-500 ${isActive ? "font-semibold" : "font-medium"
                        }`}
                    >
                      {t(key)}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="px-4 pb-4 text-xs leading-relaxed text-black">
                      {t(`${key}Desc`)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* RIGHT */}
        <div className="mt-16 lg:mt-0 lg:w-[62%] lg:self-center">
          <div className="flex flex-col gap-12 lg:gap-24">
            {PREVIEW_ITEMS.map(({ key, gif, Icon }, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={key}
                  ref={(el) => {
                    panelRefs.current[index] = el
                  }}
                  data-feature-id={key}
                  className="scroll-mt-24"
                >
                  {/* Mobile label */}
                  <div className="mb-4 lg:hidden">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Icon className="size-4 text-brand" />
                      {t(key)}
                    </h3>
                  </div>

                  {/* GIF card */}
                  <div className="relative overflow-hidden border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-xl shadow-2xl">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={gif}
                        alt={t(key)}
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>

                  {/* Description below card */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-sm leading-relaxed text-white/60">
                      {t(`${key}Desc`)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </section>

    </section>
  )
}
