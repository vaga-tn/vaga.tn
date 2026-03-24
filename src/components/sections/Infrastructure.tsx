"use client"

import { useState } from "react"
import Image from "next/image"
import { CloudCog, Server, Check, X, ArrowLeftRight, Wifi, WifiOff, Shield, RefreshCw, HardDrive, Zap } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const COMPARE_ROWS = [
  {
    feature: "Connexion Internet requise",
    cloud: { value: "Oui", yes: true },
    box: { value: "Non", yes: false, highlight: true },
  },
  {
    feature: "Indépendance aux coupures DSL",
    cloud: { value: "Non", yes: false },
    box: { value: "Oui, fonctionne hors-ligne", yes: true, highlight: true },
  },
  {
    feature: "Accès multi-sites / mobile",
    cloud: { value: "Oui, partout dans le monde", yes: true },
    box: { value: "Réseau local + VPN", yes: null },
  },
  {
    feature: "Mises à jour automatiques",
    cloud: { value: "Oui, sans intervention", yes: true },
    box: { value: "Manuelles", yes: null },
  },
  {
    feature: "Hébergement des données",
    cloud: { value: "Serveurs sécurisés Vaga", yes: true },
    box: { value: "Vos propres locaux", yes: true },
  },
  {
    feature: "Sauvegardes",
    cloud: { value: "Automatiques & redondantes", yes: true },
    box: { value: "Configurées par vous", yes: null },
  },
  {
    feature: "Investissement matériel",
    cloud: { value: "Aucun", yes: true },
    box: { value: "Mini-PC inclus en option", yes: null },
  },
  {
    feature: "Idéal pour",
    cloud: { value: "Bureaux multi-sites, équipes mobiles", yes: null },
    box: { value: "Entrepôts, zones à DSL instable", yes: null, highlight: true },
  },
]

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
  const [compareOpen, setCompareOpen] = useState(false)

  return (
    <>
      <section id="deploiement" className="py-24 bg-white">
        <div className="container px-4 mx-auto lg:px-0">

          {/* Header */}
          <div className="mb-14">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#1A2B3C" }}>
              Comment souhaitez-vous déployer VAGA ?
            </h2>
            <p className="max-w-2xl text-lg text-zinc-500">
              Deux architectures pensées pour la réalité tunisienne. Choisissez celle qui correspond à votre infrastructure , ou combinez les deux.
            </p>
          </div>

          {/* Two-column cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* --- Vaga Cloud --- */}
            <Card
              className="relative transition-all duration-300 bg-white rounded-none shadow-none group border-zinc-200 hover:shadow-md"
              style={{ "--hover-border": "#E3F2FD" } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#E3F2FD")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e4e4e7")}
            >
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
                <div className="aspect-[16/9] overflow-hidden border border-zinc-100">
                  <Image
                    src="/fennec-cloud.webp"
                    alt="Vaga Cloud"
                    width={600}
                    height={338}
                    className="object-contain w-full h-full p-4"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">
                  Votre ERP hébergé sur nos serveurs sécurisés. Accédez à VAGA depuis n&apos;importe quel navigateur, n&apos;importe où dans le monde , sans vous soucier des mises à jour, des sauvegardes ou de la maintenance serveur.
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
            <Card
              className="relative transition-all duration-300 bg-white rounded-none shadow-none group border-zinc-200 hover:shadow-md"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#E3F2FD")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e4e4e7")}
            >
              {/* Internet independence callout */}
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
                <div className="aspect-[16/9] overflow-hidden border border-zinc-100">
                  <Image
                    src="/fennec-on-premise.webp"
                    alt="Vaga Box , On-Premise"
                    width={600}
                    height={338}
                    className="object-contain w-full h-full p-4"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">
                  Un mini-PC discret installé dans vos locaux. Votre ERP tourne en local , coupure DSL, panne Ooredoo ou Topnet , rien n&apos;arrête votre production. Idéal pour les entrepôts et les zones à connectivité instable.
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
                  <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-zinc-500">Pourquoi c&apos;est important en Tunisie</p>
                  <p className="text-sm text-zinc-600">
                    Les coupures DSL restent fréquentes à Sousse, Sfax, et dans les zones industrielles. Avec Vaga Box, votre équipe continue de travailler , bons de livraison, stock, facturation , sans interruption.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compare CTA */}
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-none border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900"
              onClick={() => setCompareOpen(true)}
            >
              <ArrowLeftRight className="w-4 h-4" />
              Comparer les deux options
            </Button>
          </div>

        </div>
      </section>

      {/* ── Comparison Modal ── */}
      {compareOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setCompareOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCompareOpen(false)} />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-3xl bg-white border border-zinc-200 shadow-2xl max-h-[90vh] flex flex-col">

            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 shrink-0">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#1A2B3C" }}>Comparatif Cloud vs Box</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Choisissez l&apos;option adaptée à votre infrastructure</p>
              </div>
              <button
                onClick={() => setCompareOpen(false)}
                className="flex items-center justify-center w-8 h-8 transition-colors border border-zinc-200 hover:bg-zinc-50"
                aria-label="Fermer"
              >
                <X className="w-4 h-4 text-zinc-500" />
              </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 border-b bg-zinc-50 border-zinc-200">
                  <tr>
                    <th className="w-1/2 px-6 py-4 text-xs font-semibold tracking-widest text-left uppercase text-zinc-400">Fonctionnalité</th>
                    <th className="w-1/4 px-4 py-4 text-center">
                      <span className="flex flex-col items-center gap-1">
                        <CloudCog className="w-5 h-5" style={{ color: "#3ecf8e" }} />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1A2B3C" }}>Vaga Cloud</span>
                      </span>
                    </th>
                    <th className="w-1/4 px-4 py-4 text-center">
                      <span className="flex flex-col items-center gap-1">
                        <Server className="w-5 h-5 text-zinc-600" />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1A2B3C" }}>Vaga Box</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={i} className={row.box.highlight ? "bg-[#f0fdf4]/60" : "hover:bg-zinc-50/60"}>
                      <td className="px-6 py-4 font-medium text-zinc-700">{row.feature}</td>
                      <td className="px-4 py-4 text-center">
                        {row.cloud.yes === true ? (
                          <span className="inline-flex flex-col items-center gap-1">
                            <Check className="w-4 h-4 mx-auto" style={{ color: "#3ecf8e" }} />
                            <span className="text-xs text-zinc-500">{row.cloud.value}</span>
                          </span>
                        ) : row.cloud.yes === false ? (
                          <span className="inline-flex flex-col items-center gap-1">
                            <X className="w-4 h-4 mx-auto text-zinc-300" />
                            <span className="text-xs text-zinc-400">{row.cloud.value}</span>
                          </span>
                        ) : (
                          <span className="text-xs text-zinc-500">{row.cloud.value}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {row.box.yes === true ? (
                          <span className="inline-flex flex-col items-center gap-1">
                            <Check className="w-4 h-4 mx-auto" style={{ color: "#3ecf8e" }} />
                            <span className={`text-xs ${row.box.highlight ? "font-semibold text-zinc-700" : "text-zinc-500"}`}>{row.box.value}</span>
                          </span>
                        ) : row.box.yes === false ? (
                          <span className="inline-flex flex-col items-center gap-1">
                            <X className="w-4 h-4 mx-auto text-zinc-300" />
                            <span className="text-xs text-zinc-400">{row.box.value}</span>
                          </span>
                        ) : (
                          <span className={`text-xs ${row.box.highlight ? "font-semibold text-zinc-700" : "text-zinc-500"}`}>{row.box.value}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-zinc-100 bg-zinc-50 shrink-0">
              <p className="text-xs text-zinc-400">Les deux options incluent le logiciel VAGA complet, sans frais par utilisateur.</p>
              <Button
                size="sm"
                className="rounded-none shrink-0 bg-[#3ecf8e] hover:bg-[#2db97a] text-zinc-900 font-bold border-none"
                onClick={() => setCompareOpen(false)}
              >
                Compris
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
