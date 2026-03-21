import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-zinc-900">
          Questions Fréquentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-semibold text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
              Comment se passe la migration depuis Excel ?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              Nous vous accompagnons de A à Z. Nos experts importent vos données actuelles directement dans VAGA SUITE. La transition se fait en douceur sans perte d'historique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-semibold text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
              VAGA SUITE est-il conforme à la réglementation ?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              Absolument. VAGA SUITE est entièrement conforme aux normes comptables et fiscales tunisiennes en vigueur, et est régulièrement mis à jour pour refléter tout changement législatif.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-semibold text-zinc-800 hover:text-zinc-900 data-[state=open]:text-zinc-900">
              Quel type de support proposez-vous ?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              Nous offrons un support local dédié et réactif, disponible par téléphone et par email. De plus, une formation initiale est incluse pour assurer la prise en main rapide par vos équipes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  )
}
