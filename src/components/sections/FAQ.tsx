import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { getTranslations, getMessages } from "next-intl/server"
import SectionTitle from "../layout/SectionTitle"

export async function FAQ() {
  const t = await getTranslations("sections.faq")
  const messages = await getMessages()
  const faqItems = messages.faqItems as Array<{ q: string; a: string }>

  // Generate clean JSON-LD for semantic LLM scrapers & search platforms
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }

  return (
    <section className="bg-white">
      {/* Inject Structured Data for AI Overview & Semantic Scrapers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="sectionWrapper">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="max-w-7xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem value={"item-" + index} key={index}>
                {/* 
                  Optimization: Added asChild and wrapped with an H3 tag.
                  This structures the question semantically for both SEO crawlers and screen readers.
                */}
                <h3>
                  <AccordionTrigger className="text-left text-base font-semibold text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
                    {faq.q}
                  </AccordionTrigger>
                </h3>
                <AccordionContent className="prose text-zinc-600 prose-zinc max-w-none">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="absolute bottom-0 right-0 pointer-events-none">
          <Image
            src="/fennec_faq.webp"
            alt=""
            loading="eager"
            width={120}
            height={120}
            className="w-[120px] h-[120px] object-contain"
          />
        </div>
      </section>
    </section>
  )
}