"use client"

import { useState, useEffect } from "react"
import { Check, Download, Server, HeadphonesIcon, Wrench } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

const BOX_PRICE = 3500
const CLOUD_PRICE = 2700
const SETUP_FEE = 450
const RETAINER_FEE = 300

export function PricingCalculator() {
  const [engine, setEngine] = useState<"cloud" | "box">("cloud")
  const [retainer, setRetainer] = useState(true)

  const t = useTranslations("pricingCalculator")

  const isCloud = engine === "cloud"

  // Enforce mandatory support flag based on selections
  useEffect(() => {
    if (isCloud) {
      setRetainer(true)
    } else {
      setRetainer(false)
    }
  }, [isCloud])

  const ENGINE_OPTIONS = [
    { label: "VAGA Cloud", value: "cloud", price: CLOUD_PRICE, sub: t("cloudSub") },
    { label: "VAGA Box", value: "box", price: BOX_PRICE, sub: t("boxSub") },
  ]

  const enginePrice = isCloud ? CLOUD_PRICE : BOX_PRICE
  const setupFee = isCloud ? 0 : SETUP_FEE
  const effectiveRetainer = isCloud ? true : retainer

  // Totals mapping
  const totalOneTime = enginePrice + setupFee
  const totalMonthly = effectiveRetainer ? RETAINER_FEE : 0

  const lineItems = [
    { label: isCloud ? "Licence VAGA Cloud" : "Licence VAGA Box", price: enginePrice, always: true },
    { label: "Installation & Config VAGA Box", price: SETUP_FEE, always: false, active: !isCloud },
    { label: "Support (Retainer) - Mensuel", price: RETAINER_FEE, always: false, active: effectiveRetainer, isMonthly: true },
  ]

  function handleDownloadPDF() {
    const printWindow = window.open("", "_blank", "width=800,height=600")
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <title>Devis VAGA Suite</title>
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
          .sub { font-size: 11px; color: #71717a; margin-top: 3px; }
          .total-row { background: #f0fdf4; }
          .total-row td { padding: 16px 8px; border: none; font-size: 16px; font-weight: 800; }
          .total-label { color: #18181b; }
          .total-price { color: #3ecf8e; font-size: 22px; }
          .conditions { margin-top: 32px; padding: 16px; background: #f0fdf4; border-left: 3px solid #3ecf8e; font-size: 13px; color: #18181b; }
          .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #a1a1aa; }
          @media print { body { padding: 32px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">VAGA <span>Suite</span></div>
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
            ${isCloud ? `
            <tr>
              <td>
                Hébergement VAGA Cloud
                <div class="sub">Infrastructure hébergée clé en main</div>
              </td>
              <td>${CLOUD_PRICE.toLocaleString("fr-TN")}</td>
            </tr>` : `
            <tr>
              <td>
                VAGA Box (Serveur dédié on-premise)
                <div class="sub">Licence locale</div>
              </td>
              <td>${BOX_PRICE.toLocaleString("fr-TN")}</td>
            </tr>
            <tr>
              <td>
                Installation &amp; Config (Mise en Service)
                <div class="sub">Installation physique, Config réseau, VPN &amp; Sécurisation</div>
              </td>
              <td>${SETUP_FEE.toLocaleString("fr-TN")}</td>
            </tr>`}
            
            ${effectiveRetainer ? `
            <tr>
              <td>
                Support (Retainer)
                <div class="sub">Correction de bugs et résolution de bloqueurs techniques${isCloud ? " — Obligatoire pour l'hébergement Cloud" : ""}</div>
              </td>
              <td>${RETAINER_FEE} / mois</td>
            </tr>` : ""}
            
            <tr class="total-row">
              <td class="total-label">TOTAL</td>
              <td class="total-price">
                ${totalOneTime.toLocaleString("fr-TN")} TND ${totalMonthly > 0 ? `+ ${totalMonthly} TND/mois` : ""}
              </td>
            </tr>
          </tbody>
        </table>

        <div class="conditions">
          <p style="font-weight:700;margin-bottom:6px;">Conditions de règlement</p>
          <p>Frais uniques : 50% à la commande, 50% à la mise en service. Validité du devis : 30 jours.</p>
          ${totalMonthly > 0 ? `<p style="margin-top:4px;">Frais récurrents : Paiement mensuel pour le support retainer.</p>` : ""}
        </div>
        <div class="footer">
          <p>Ce devis est valable 30 jours. Prix HT. VAGA Suite — vaga@maak-corp.tn — vaga.tn</p>
        </div>
        <script>window.onload = () => { window.print(); }</script>
      </body>
      </html>
    `)
    printWindow.document.close()
  }

  const isLocked = isCloud
  const checked = effectiveRetainer
  const handleRetainerChange = () => {
    if (!isCloud) setRetainer((v) => !v)
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative border border-zinc-200 bg-white/80 backdrop-blur-sm">
        {/* Badge */}
        <div className="absolute top-0 px-3 py-1 text-xs font-semibold tracking-wide -translate-y-1/2 bg-white border rounded-full shadow-sm right-8 border-zinc-200 text-zinc-600">
          {t("configureBadge")}
        </div>

        <div className="p-8 pt-10 space-y-6">

          {/* Engine selector */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">{t("engineSection")}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {ENGINE_OPTIONS.map((opt) => {
                const active = engine === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setEngine(opt.value as typeof engine)}
                    className={[
                      "flex flex-col items-center gap-1 rounded-none border p-3 text-sm font-medium transition-all cursor-pointer",
                      active
                        ? "border-[#3ecf8e] bg-[#3ecf8e]/10 text-zinc-900"
                        : "border-slate-200 bg-white text-zinc-500 hover:border-slate-300 hover:text-zinc-700",
                    ].join(" ")}
                  >
                    <span className="text-xs font-bold">{opt.label}</span>
                    <span className={active ? "text-[#3ecf8e] font-semibold text-xs" : "text-zinc-400 text-xs"}>
                      {opt.price.toLocaleString("fr-TN")} TND
                    </span>
                    {opt.sub && (
                      <span className="text-[10px] text-slate-500 text-center leading-tight mt-0.5">{opt.sub}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Setup fee — shown only when box is selected */}
          {!isCloud && (
            <div className="flex items-start gap-3 p-4 border border-slate-200 bg-slate-50">
              <Wrench className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-700">Installation Obligatoire</p>
                <p className="text-xs text-slate-500 leading-snug mt-0.5">Configuration physique, réseau & sécurisation</p>
              </div>
              <span className="text-sm font-bold text-zinc-700 shrink-0">+{SETUP_FEE.toLocaleString("fr-TN")} TND</span>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <HeadphonesIcon className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">{t("optionsSection")}</span>
            </div>

            <label
              htmlFor="retainer"
              className={[
                "flex items-center justify-between gap-4 border p-4 transition-all",
                isLocked ? "cursor-not-allowed" : "cursor-pointer",
                checked
                  ? "border-[#3ecf8e] bg-[#3ecf8e]/10"
                  : "border-slate-200 bg-white hover:border-slate-300",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    "h-5 w-5 mt-0.5 shrink-0 border flex items-center justify-center transition-colors",
                    checked ? "bg-[#3ecf8e] border-[#3ecf8e]" : "bg-white border-slate-300",
                    isLocked ? "opacity-70" : "",
                  ].join(" ")}
                >
                  {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </div>
                <input
                  id="retainer"
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={handleRetainerChange}
                  disabled={isLocked}
                />
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${checked ? "text-zinc-900" : "text-zinc-600"}`}>
                      Support (Retainer)
                    </span>
                    {isLocked && (
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 leading-none">
                        {t("requiredCloud")}
                      </span>
                    )}
                  </div>
                  <span className="text-xs leading-snug text-slate-500">Correction de bugs et résolution de bloqueurs</span>
                </div>
              </div>
              <span className={`text-sm font-bold shrink-0 ${checked ? "text-[#3ecf8e]" : "text-zinc-400"}`}>
                +{RETAINER_FEE.toLocaleString("fr-TN")} TND/mois
              </span>
            </label>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-zinc-200" />

          {/* Total */}
          <div className="flex items-baseline justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-500">{t("totalLabel")}</p>
              {totalMonthly > 0 && (
                <p className="text-xs font-medium text-zinc-500">
                  + {totalMonthly.toLocaleString("fr-TN")} TND / mois de support
                </p>
              )}
            </div>
            <div className="text-right">
              <span
                className="text-5xl font-black leading-none tracking-tighter"
                style={{ color: "#3ecf8e" }}
              >
                {totalOneTime.toLocaleString("fr-TN")}
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
                    <Check className="h-3 w-3 text-[#3ecf8e] shrink-0" />
                    {item.label}
                  </span>
                  <span className="ml-2 font-semibold text-zinc-700 shrink-0">
                    {item.price.toLocaleString("fr-TN")} TND{item.isMonthly ? "/mois" : ""}
                  </span>
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
            {t("downloadPdf")}
          </Button>

          {/* Disclaimer */}
          <p className="text-xs italic leading-relaxed text-center text-slate-500">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </div>
  )
}