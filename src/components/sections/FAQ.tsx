import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export function FAQ() {

  const FAQS = [
    {
      q: 'Comment se passe la migration depuis Excel ?',
      a: 'Nous vous accompagnons de A à Z. Nos experts importent vos données actuelles directement dans VAGA SUITE. La transition se fait en douceur sans perte d\'historique.',
    },
    {
      q: 'VAGA SUITE est-il conforme à la réglementation ?',
      a: 'Absolument. VAGA SUITE est entièrement conforme aux normes comptables et fiscales tunisiennes en vigueur, et est régulièrement mis à jour pour refléter tout changement législatif.',
    },
    {
      q: 'Quel type de support proposez-vous ?',
      a: ' Nous offrons un support local dédié et réactif, disponible par téléphone et par email. De plus, une formation initiale est incluse pour assurer la prise en main rapide par vos équipes.',
    },
    {
      q: 'Où sont stockées mes données ?',
      a: 'Nous accordons une importance capitale à la souveraineté de vos données. Vos informations sont stockées sur des serveurs sécurisés avec des sauvegardes quotidiennes automatiques. Vous restez le seul propriétaire de vos données.',
    },
    {
      q: 'Que signifie "Sans abonnement caché" ?',
      a: 'Contrairement aux solutions SaaS classiques qui vous facturent chaque mois indéfiniment, notre modèle est transparent. Vous payez pour ce que vous utilisez, sans frais de licence mensuels obligatoires qui augmentent avec le temps.',
    },
    {
      q: 'L\'installation et la formation sont-elles incluses ?',
      a: 'Oui, nous proposons des packs d\'accompagnement pour configurer le logiciel selon vos besoins spécifiques et former votre équipe pour une prise en main immédiate.',
    },
    {
      q: 'Puis-je importer mes données existantes (Excel, etc.) ?',
      a: 'Absolument. Vaga Suite permet l\'importation facile de vos listes de produits, clients et fournisseurs via des fichiers Excel ou CSV pour que vous puissiez commencer à travailler en quelques minutes.',
    },
    {
      q: 'Le logiciel est-il modulable selon la taille de mon entreprise ?',
      a: 'Tout à fait. Vous pouvez commencer avec le module Inventaire et Ventes, puis ajouter la Comptabilité ou les RH au fur et à mesure que votre entreprise grandit. Vous ne payez que pour les fonctionnalités dont vous avez réellement besoin.',
    },
  ];
  return (
    <section className="relative py-24 bg-white">
      <div className="container px-4 mx-auto lg:px-0">

        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
          Questions Fréquentes
        </h2>

        <div className="max-w-7xl">
          <Accordion type="single" collapsible className="w-full">
            {
              FAQS.map((faq, index) => (
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
