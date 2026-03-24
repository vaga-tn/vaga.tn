import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"

export const metadata: Metadata = {
  title: "Changelog | VAGA ERP",
  description: "Suivez les dernières améliorations, correctifs et nouvelles fonctionnalités de VAGA SUITE.",
  alternates: {
    canonical: "https://vaga.tn/changelog",
    languages: {
      "fr-TN": "https://vaga.tn/changelog",
    },
  },
}
import { Footer } from "@/components/layout/Footer"
import { changelogData } from "@/data/changelog"
import CallToAction from "@/components/sections/CallToAction"
import Image from "next/image"

export default function ChangelogPage() {
  return (
    <main className="min-h-screen font-sans bg-background text-zinc-900 scroll-smooth">
      <Header />

      {/* Changelog Header */}
      <div className="relative border-b sectionWrapper border-zinc-400">
        <div className="container px-4 mx-auto lg:px-0">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Changelog
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            Restez à jour avec les dernières améliorations, correctifs et fonctionnalités de VAGA SUITE.
          </p>
        </div>
        <Image src="/fennec_changelog.webp" alt="VAGA" width={154} height={154} className="absolute bottom-0 right-0 z-10 object-contain opacity-50 lg:opacity-100" />
      </div>

      {/* Changelog Timeline Content */}
      <div className="py-24 bg-white">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="relative ml-4 border-l border-zinc-200 md:ml-12 lg:ml-24">
            {changelogData.map((item) => (
              <div key={item.id} className="relative flex flex-col gap-6 pl-8 mb-24 last:mb-0 md:pl-16 md:flex-row md:gap-16">

                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-[0.35rem] w-[9px] h-[9px] bg-zinc-300 rounded-sm ring-4 ring-white" />

                {/* Left Column (Title & Date) */}
                <div className="mt-0 md:w-64 shrink-0">
                  <h2 className="mb-2 text-sm font-semibold leading-snug text-zinc-900">
                    {item.leftTitle}
                  </h2>
                  <time className="block font-mono text-sm text-zinc-500">
                    {item.date}
                  </time>
                </div>

                {/* Right Column (Detailed Content) */}
                <div className="flex-1 mt-6 space-y-6 md:mt-0">
                  {item.rightTitle && (
                    <h3 className="text-xl font-medium text-zinc-900">{item.rightTitle}</h3>
                  )}

                  {item.description.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-relaxed text-zinc-600">
                      {paragraph}
                    </p>
                  ))}

                  {item.listSection && (
                    <div className="pt-4 space-y-3">
                      <h4 className="text-sm font-semibold text-zinc-900">{item.listSection.title}</h4>
                      <ul className="pl-5 space-y-2 text-sm list-disc text-zinc-600 marker:text-zinc-400">
                        {item.listSection.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.linksSection && (
                    <div className="pt-4 space-y-3">
                      <h4 className="text-sm font-semibold text-zinc-900">{item.linksSection.title}</h4>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        {item.linksSection.links.map((link, i) => (
                          <li key={i}>
                            {link.label}: <a href={link.url} className="underline transition-colors underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 text-zinc-900">{link.url}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />

      <Footer />
    </main>
  )
}
