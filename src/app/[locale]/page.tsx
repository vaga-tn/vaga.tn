import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { getMessages } from "next-intl/server"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Modules } from "@/components/sections/Modules"
import { Previews } from "@/components/sections/Previews"
import { Infrastructure } from "@/components/sections/Infrastructure"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { CarbonReport } from "@/components/sections/CarbonReport"
import { StructuredData } from "@/components/StructuredData"

const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact))

export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const otherLocale = locale === "fr" ? "en" : "fr"

  return {
    alternates: {
      canonical: `https://vaga.tn/${locale}`,
      languages: {
        "fr": `https://vaga.tn/fr`,
        "en": `https://vaga.tn/en`,
        "x-default": `https://vaga.tn/fr`,
      },
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })
  const faqItems = messages.faqItems as Array<{ q: string; a: string }>

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.isArray(faqItems)
      ? faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
      : [],
  }

  return (
    <main className="min-h-screen font-sans bg-[#F3F5F6] text-zinc-900 scroll-smooth">
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <Modules />
      <Previews />
      <CarbonReport />
      <Infrastructure />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
