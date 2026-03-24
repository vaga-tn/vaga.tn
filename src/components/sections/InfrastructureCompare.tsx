"use client"

import { useState } from "react"
import { CloudCog, Server, Check, X, ArrowLeftRight } from "lucide-react"
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

export function InfrastructureCompare() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger */}
      <div className="flex justify-center mt-10">
        <Button
          variant="outline"
          size="lg"
          className="gap-2 rounded-none border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900"
          onClick={() => setOpen(true)}
        >
          <ArrowLeftRight className="w-4 h-4" />
          Comparer les deux options
        </Button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-3xl bg-white border border-zinc-200 shadow-2xl max-h-[90vh] flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 shrink-0">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#1A2B3C" }}>
                  Comparatif Cloud vs Box
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Choisissez l&apos;option adaptée à votre infrastructure
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
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
                    <th className="w-1/2 px-6 py-4 text-xs font-semibold tracking-widest text-left uppercase text-zinc-400">
                      Fonctionnalité
                    </th>
                    <th className="w-1/4 px-4 py-4 text-center">
                      <span className="flex flex-col items-center gap-1">
                        <CloudCog className="w-5 h-5" style={{ color: "#3ecf8e" }} />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1A2B3C" }}>
                          Vaga Cloud
                        </span>
                      </span>
                    </th>
                    <th className="w-1/4 px-4 py-4 text-center">
                      <span className="flex flex-col items-center gap-1">
                        <Server className="w-5 h-5 text-zinc-600" />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1A2B3C" }}>
                          Vaga Box
                        </span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className={row.box.highlight ? "bg-[#f0fdf4]/60" : "hover:bg-zinc-50/60"}
                    >
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
                            <span className={`text-xs ${row.box.highlight ? "font-semibold text-zinc-700" : "text-zinc-500"}`}>
                              {row.box.value}
                            </span>
                          </span>
                        ) : row.box.yes === false ? (
                          <span className="inline-flex flex-col items-center gap-1">
                            <X className="w-4 h-4 mx-auto text-zinc-300" />
                            <span className="text-xs text-zinc-400">{row.box.value}</span>
                          </span>
                        ) : (
                          <span className={`text-xs ${row.box.highlight ? "font-semibold text-zinc-700" : "text-zinc-500"}`}>
                            {row.box.value}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-zinc-100 bg-zinc-50 shrink-0">
              <p className="text-xs text-zinc-400">
                Les deux options incluent le logiciel VAGA complet, sans frais par utilisateur.
              </p>
              <Button
                size="sm"
                className="rounded-none shrink-0 bg-[#3ecf8e] hover:bg-[#2db97a] text-zinc-900 font-bold border-none"
                onClick={() => setOpen(false)}
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
