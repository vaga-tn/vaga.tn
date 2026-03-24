"use client"

import { useState } from "react"
import { Check, Download, Server, HeadphonesIcon, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const BASE_PRICE = 2500
const HARDWARE_OPTIONS = [
  { label: "Aucun", value: "none", price: 0 },
  { label: "8 GB RAM", value: "8gb", price: 1100 },
  { label: "16 GB RAM", value: "16gb", price: 1500 },
]

export function PricingCalculator() {
  const [hardware, setHardware] = useState<"none" | "8gb" | "16gb">("none")
  const [support, setSupport] = useState(false)
  const [retainer, setRetainer] = useState(false)

  const hardwarePrice = HARDWARE_OPTIONS.find((o) => o.value === hardware)!.price
  const total = BASE_PRICE + hardwarePrice + (support ? 500 : 0) + (retainer ? 1200 : 0)

  const lineItems = [
    { label: "Logiciel ERP VAGA (toutes les applications incluses)", price: BASE_PRICE, always: true },
    { label: `Matériel serveur — ${HARDWARE_OPTIONS.find((o) => o.value === hardware)!.label}`, price: hardwarePrice, always: false, active: hardware !== "none" },
    { label: "Support prioritaire (1 an)", price: 500, always: false, active: support },
    { label: "Contrat de maintenance & retainer", price: 1200, always: false, active: retainer },
  ]

  function handleDownloadPDF() {
    const printWindow = window.open("", "_blank", "width=800,height=600")
    if (!printWindow) return

    const activeItems = lineItems.filter((item) => item.always || item.active)

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <title>Devis VAGA ERP</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #18181b; padding: 48px; max-width: 680px; margin: 0 auto; }
          .header { border-bottom: 2px solid #3ecf8e; padding-bottom: 24px; margin-bottom: 32px; }
          .logo { font-size: 28px; font-weight: 900; letter-spacing: -1px; }
          .logo span { color: #3ecf8e; }
          .subtitle { color: #71717a; font-size: 13px; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.1em; }
          .date { color: #71717a; font-size: 12px; margin-top: 16px; }
          h2 { font-size: 18px; font-weight: 700; margin-bottom: 16px; color: #18181b; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; padding: 8px 0; border-bottom: 1px solid #e4e4e7; }
          th:last-child { text-align: right; }
          td { padding: 12px 0; border-bottom: 1px solid #f4f4f5; font-size: 14px; }
          td:last-child { text-align: right; font-weight: 600; }
          .total-row { background: #f0fdf4; }
          .total-row td { padding: 16px 8px; border: none; font-size: 16px; font-weight: 800; }
          .total-label { color: #18181b; }
          .total-price { color: #3ecf8e; font-size: 22px; }
          .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #a1a1aa; }
          @media print { body { padding: 32px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">VAGA</div>
          <div class="subtitle">ERP pour entreprises tunisiennes</div>
          <div class="date">Devis généré le ${new Date().toLocaleDateString("fr-TN", { year: "numeric", month: "long", day: "numeric" })}</div>
        </div>

        <h2>Récapitulatif de votre configuration</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Montant (TND)</th>
            </tr>
          </thead>
          <tbody>
            ${activeItems.map((item) => `
            <tr>
              <td>${item.label}</td>
              <td>${item.price.toLocaleString("fr-TN")}</td>
            </tr>`).join("")}
            <tr class="total-row">
              <td class="total-label">TOTAL — Paiement unique</td>
              <td class="total-price">${total.toLocaleString("fr-TN")} TND</td>
            </tr>
          </tbody>
        </table>

        <div class="footer">
          <p>Ce devis est valable 30 jours. Prix HT. VAGA ERP — vaga@maak-corp.tn — vaga.tn</p>
          <p style="margin-top:8px;">Pas de frais par utilisateur. Pas d'abonnement caché.</p>
        </div>
        <script>window.onload = () => { window.print(); }</script>
      </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative border border-zinc-200 bg-white/80 backdrop-blur-sm">
        {/* Badge */}
        <div className="absolute top-0 px-3 py-1 text-xs font-semibold tracking-wide -translate-y-1/2 bg-white border rounded-full shadow-sm right-8 border-zinc-200 text-zinc-600">
          CONFIGUREZ VOTRE OFFRE
        </div>

        <div className="p-8 pt-10 space-y-6">

          {/* Hardware toggle */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Matériel serveur</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {HARDWARE_OPTIONS.map((opt) => {
                const active = hardware === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setHardware(opt.value as typeof hardware)}
                    className={[
                      "flex flex-col items-center gap-1 rounded-none border p-3 text-sm font-medium transition-all cursor-pointer",
                      active
                        ? "border-[#3ecf8e] bg-[#3ecf8e]/10 text-zinc-900"
                        : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-700",
                    ].join(" ")}
                  >
                    <span className="text-xs font-bold">{opt.label}</span>
                    {opt.price > 0 && (
                      <span className={active ? "text-[#3ecf8e] font-semibold text-xs" : "text-zinc-400 text-xs"}>
                        +{opt.price.toLocaleString("fr-TN")} TND
                      </span>
                    )}
                    {opt.price === 0 && (
                      <span className="text-xs text-zinc-300">inclus</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <HeadphonesIcon className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Options</span>
            </div>

            {[
              { id: "support", label: "Support prioritaire (1 an)", price: 500, checked: support, onChange: () => setSupport((v) => !v), icon: HeadphonesIcon },
              { id: "retainer", label: "Contrat de maintenance & retainer", price: 1200, checked: retainer, onChange: () => setRetainer((v) => !v), icon: RefreshCw },
            ].map(({ id, label, price, checked, onChange }) => (
              <label
                key={id}
                htmlFor={id}
                className={[
                  "flex items-center justify-between gap-4 border p-4 cursor-pointer transition-all",
                  checked
                    ? "border-[#3ecf8e] bg-[#3ecf8e]/10"
                    : "border-zinc-200 bg-white hover:border-zinc-300",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={[
                      "h-5 w-5 shrink-0 border flex items-center justify-center transition-colors",
                      checked ? "bg-[#3ecf8e] border-[#3ecf8e]" : "bg-white border-zinc-300",
                    ].join(" ")}
                  >
                    {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </div>
                  <input id={id} type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
                  <span className={`text-sm font-medium ${checked ? "text-zinc-900" : "text-zinc-600"}`}>
                    {label}
                  </span>
                </div>
                <span className={`text-sm font-bold shrink-0 ${checked ? "text-[#3ecf8e]" : "text-zinc-400"}`}>
                  +{price.toLocaleString("fr-TN")} TND
                </span>
              </label>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-zinc-200" />

          {/* Total */}
          <div className="flex items-baseline justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-500">Total — Paiement unique</p>
              <p className="text-xs text-zinc-400">Pas d&apos;abonnement. Pas de frais cachés.</p>
            </div>
            <div className="text-right">
              <span
                className="text-5xl font-black leading-none tracking-tighter"
                style={{ color: "#3ecf8e" }}
              >
                {total.toLocaleString("fr-TN")}
              </span>
              <span className="ml-1 text-lg font-bold text-zinc-400">TND</span>
            </div>
          </div>

          {/* Line items breakdown */}
          <div className="p-4 space-y-2 border bg-zinc-50 border-zinc-100">
            {lineItems
              .filter((item) => item.always || item.active)
              .map((item) => (
                <div key={item.label} className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-[#3ecf8e]" />
                    {item.label}
                  </span>
                  <span className="font-semibold text-zinc-700">{item.price.toLocaleString("fr-TN")} TND</span>
                </div>
              ))}
          </div>

          {/* CTA */}
          <Button
            onClick={handleDownloadPDF}
            className="w-full gap-2 bg-[#3ecf8e] hover:bg-[#2db97a] text-zinc-900 font-bold border-none"
            size="lg"
          >
            <Download className="w-4 h-4" />
            Télécharger le devis PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
