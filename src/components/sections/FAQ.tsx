import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { FAQ_ITEMS } from "@/data/faq"

export function FAQ() {
  return (
    <section className="relative py-24 bg-white">
      <div className="container px-4 mx-auto lg:px-0">

        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
          Questions Fréquentes
        </h2>

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

      </div>
    </section>
  )
}
