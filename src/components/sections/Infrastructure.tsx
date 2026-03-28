import Image from "next/image"
import { CloudCog, Server, Wifi, WifiOff, Shield, RefreshCw, HardDrive, Zap } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InfrastructureCompare } from "./InfrastructureCompare"
import SectionTitle from "../layout/SectionTitle"
import { SECTIONS } from "@/data/section"

const CLOUD_FEATURES = [
  { icon: Zap, text: "Accès instantané depuis n'importe quel appareil" },
  { icon: RefreshCw, text: "Mises à jour & sauvegardes automatiques" },
  { icon: Shield, text: "Hébergement sécurisé, zéro maintenance serveur" },
  { icon: Wifi, text: "Idéal pour les équipes multi-sites et mobiles" },
]

const BOX_FEATURES = [
  { icon: WifiOff, text: "100 % opérationnel même sans Internet" },
  { icon: HardDrive, text: "Données stockées dans vos propres locaux" },
  { icon: Shield, text: "Indépendance totale vis-à-vis du réseau" },
  { icon: Server, text: "Mini-PC silencieux livré & configuré sur place" },
]


export function Infrastructure() {
  const SECTION = SECTIONS.infrastructure;

  return (
    <section id="deploiement" className="space-y-8 sectionWrapper">

      {/* Header */}
      <SectionTitle title={SECTION.title} subtitle={SECTION.subtitle} />

      {/* Two-column cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* --- Vaga Cloud --- */}
        <Card className="relative bg-white rounded-none shadow-none border-zinc-200">
          {/* Recommended badge */}
          <div
            className="absolute top-0 px-3 py-1 text-xs font-bold tracking-widest uppercase -translate-y-1/2 rounded-full shadow-sm right-6"
            style={{ background: "#3ecf8e", color: "#fff" }}
          >
            Recommandé
          </div>

          <CardHeader className="pt-8 pb-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border shrink-0 border-zinc-100 bg-zinc-50">
                <CloudCog className="w-6 h-6" style={{ color: "#3ecf8e" }} />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">Option 1</p>
                <h3 className="text-xl font-bold" style={{ color: "#1A2B3C" }}>Vaga Cloud</h3>
                <p className="mt-1 text-sm text-zinc-500">Zéro serveur. Zéro maintenance. 100 % en ligne.</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="overflow-hidden">
              <Image
                src="/fennec-cloud.webp"
                alt="Vaga Cloud"
                width={250}
                height={50}
                className="object-contain mx-auto"
                loading="lazy"
              />
            </div>

            <p className="text-sm leading-relaxed text-zinc-600">
              Votre ERP hébergé sur nos serveurs sécurisés. Accédez à VAGA depuis n&apos;importe quel navigateur,
              n&apos;importe où dans le monde — sans vous soucier des mises à jour, des sauvegardes ou de la maintenance serveur.
            </p>

            <ul className="space-y-3">
              {CLOUD_FEATURES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                  <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#3ecf8e" }} />
                  {text}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* --- Vaga Box --- */}
        <Card className="relative bg-white rounded-none shadow-none border-zinc-200">
          {/* Internet independence badge */}
          <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm bg-[#1A2B3C] text-white">
            Indépendance Internet
          </div>

          <CardHeader className="pt-8 pb-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border shrink-0 border-zinc-100 bg-zinc-50">
                <Server className="w-6 h-6 text-zinc-700" />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-400">Option 2</p>
                <h3 className="text-xl font-bold" style={{ color: "#1A2B3C" }}>Vaga Box</h3>
                <p className="mt-1 text-sm text-zinc-500">Votre ERP sur site. Tourne même si le DSL tombe.</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="overflow-hidden">
              <Image
                src="/fennec-on-premise.webp"
                alt="Vaga Box"
                width={200}
                height={50}
                className="object-contain mx-auto"
                loading="lazy"
              />
            </div>

            <p className="text-sm leading-relaxed text-zinc-600">
              Un mini-PC discret installé dans vos locaux. Votre ERP tourne en local — coupure DSL, panne Ooredoo ou Topnet —
              rien n&apos;arrête votre production. Idéal pour les entrepôts et les zones à connectivité instable.
            </p>

            <ul className="space-y-3">
              {BOX_FEATURES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-zinc-700">
                  <Icon className="h-4 w-4 shrink-0 mt-0.5 text-zinc-500" />
                  {text}
                </li>
              ))}
            </ul>

            {/* DSL callout */}
            <div className="py-1 pl-4 border-l-2" style={{ borderColor: "#3ecf8e" }}>
              <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-zinc-500">
                Pourquoi c&apos;est important en Tunisie
              </p>
              <p className="text-sm text-zinc-600">
                Les coupures DSL restent fréquentes à Sousse, Sfax, et dans les zones industrielles.
                Avec Vaga Box, votre équipe continue de travailler — bons de livraison, stock, facturation — sans interruption.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compare CTA + Modal — isolated client boundary */}
      <InfrastructureCompare />

    </section>
  )
}
