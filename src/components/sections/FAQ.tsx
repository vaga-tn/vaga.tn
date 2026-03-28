import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { FAQ_ITEMS } from "@/data/faq"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section";

export function FAQ() {

  const SECTION = SECTIONS.faq;

  return (
    <section className="sectionWrapper">

      <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

      <div className="max-w-7xl">
        <Accordion type="single" collapsible className="w-full">
          {
            FAQ_ITEMS.map((faq, index) => (
              <AccordionItem value={"item-" + index} key={index}>
                <AccordionTrigger className="text-base font-semibold text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src="/fennec_faq.webp" alt="Fennec VAGA" loading="eager" width={120} height={120} className="w-[120px] h-[120px] object-contain" />
      </div>


    </section>
  )
}
