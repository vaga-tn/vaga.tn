import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Modules } from "@/components/sections/Modules"
import { Infrastructure } from "@/components/sections/Infrastructure"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { CarbonReport } from "@/components/sections/CarbonReport"
import { Contact } from "@/components/sections/Contact"
import CallToAction from "@/components/sections/CallToAction"
import { FAQ_ITEMS } from "@/data/faq"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vaga.tn",
    languages: {
      "fr-TN": "https://vaga.tn",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-background text-zinc-900 scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <Modules />
      <CarbonReport />
      <Infrastructure />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
