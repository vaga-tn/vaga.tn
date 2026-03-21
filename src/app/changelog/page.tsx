import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { changelogData } from "@/data/changelog"
import CallToAction from "@/components/sections/CallToAction"

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-zinc-900 scroll-smooth">
      <Header />

      {/* Changelog Header */}
      <div className="pt-32 pb-24 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl mb-4">
            Changelog
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Restez à jour avec les dernières améliorations, correctifs et fonctionnalités de VAGA SUITE.
          </p>
        </div>
      </div>

      {/* Changelog Timeline Content */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative border-l border-zinc-200 ml-4 md:ml-12 lg:ml-24">
            {changelogData.map((item) => (
              <div key={item.id} className="relative mb-24 last:mb-0 pl-8 md:pl-16 flex flex-col md:flex-row gap-6 md:gap-16">

                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-[0.35rem] w-[9px] h-[9px] bg-zinc-300 rounded-sm ring-4 ring-white" />

                {/* Left Column (Title & Date) */}
                <div className="md:w-64 shrink-0 mt-0">
                  <h2 className="text-sm font-semibold text-zinc-900 mb-2 leading-snug">
                    {item.leftTitle}
                  </h2>
                  <time className="text-sm text-zinc-500 font-mono block">
                    {item.date}
                  </time>
                </div>

                {/* Right Column (Detailed Content) */}
                <div className="flex-1 mt-6 md:mt-0 space-y-6">
                  {item.rightTitle && (
                    <h3 className="text-xl font-medium text-zinc-900">{item.rightTitle}</h3>
                  )}

                  {item.description.map((paragraph, index) => (
                    <p key={index} className="text-zinc-600 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {item.listSection && (
                    <div className="space-y-3 pt-4">
                      <h4 className="text-sm font-semibold text-zinc-900">{item.listSection.title}</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 marker:text-zinc-400">
                        {item.listSection.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.linksSection && (
                    <div className="space-y-3 pt-4">
                      <h4 className="text-sm font-semibold text-zinc-900">{item.linksSection.title}</h4>
                      <ul className="space-y-2 text-sm text-zinc-600">
                        {item.linksSection.links.map((link, i) => (
                          <li key={i}>
                            {link.label}: <a href={link.url} className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors text-zinc-900">{link.url}</a>
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
