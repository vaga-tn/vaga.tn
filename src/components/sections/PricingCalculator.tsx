"use client"

import { useState, useEffect } from "react"
import { Check, Download, Server, HeadphonesIcon, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const BASE_PRICE = 2500
const SETUP_FEE = 450

const ENGINE_OPTIONS = [
  { label: "VAGA Cloud", value: "none", price: 0, sub: "Hébergement Géré", storage: "Stockage inclus : 10 GB (Docs & BDD)" },
  { label: "VAGA Box", value: "box", price: 1500, sub: "Serveur dédié on-premise", storage: null },
]

const OPTIONS_CONFIG = [
  {
    id: "support",
    label: "Pack Support Opérationnel",
    hint: "Réponse < 4h, Max 3 interventions/mois (Ticket/WhatsApp). Assistance sur modules existants.",
    price: 500,
  },
  {
    id: "retainer",
    label: "Maintenance & Cloud Sérénité",
    hint: "Backups quotidiens, mises à jour de sécurité et 2h d'assistance technique/mois.",
    price: 1200,
  },
]

export function PricingCalculator() {
  const [engine, setEngine] = useState<"none" | "box">("none")
  const [support, setSupport] = useState(false)
  const [retainer, setRetainer] = useState(false)

  const isCloud = engine === "none"

  // Auto-check and lock retainer when Cloud is selected
  useEffect(() => {
    if (isCloud) setRetainer(true)
  }, [isCloud])

  const enginePrice = ENGINE_OPTIONS.find((o) => o.value === engine)!.price
  const setupFee = isCloud ? 0 : SETUP_FEE
  const effectiveRetainer = isCloud ? true : retainer
  const total = BASE_PRICE + enginePrice + setupFee + (support ? 500 : 0) + (effectiveRetainer ? 1200 : 0)

  const lineItems = [
    { label: "Licence VAGA Suite (toutes les applications incluses)", price: BASE_PRICE, always: true },
    { label: "Hébergement VAGA Cloud — Inclus", price: 0, always: false, active: isCloud },
    { label: "VAGA Box (Serveur dédié on-premise)", price: enginePrice, always: false, active: !isCloud },
    { label: "Installation & Config (Mise en Service)", price: SETUP_FEE, always: false, active: !isCloud },
    { label: "Pack Support Opérationnel (1 an)", price: 500, always: false, active: support },
    { label: "Maintenance & Cloud Sérénité (1 an)", price: 1200, always: false, active: effectiveRetainer },
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
            <tr>
              <td>Licence VAGA Suite (toutes les applications incluses)</td>
              <td>${BASE_PRICE.toLocaleString("fr-TN")}</td>
            </tr>
            ${!isCloud ? `
            <tr>
              <td>
                VAGA Box (Serveur dédié on-premise)
                <div class="sub">Installation physique on-premise</div>
              </td>
              <td>${enginePrice.toLocaleString("fr-TN")}</td>
            </tr>
            <tr>
              <td>
                Installation &amp; Config (Mise en Service)
                <div class="sub">Installation physique (Sousse), Config réseau, VPN &amp; Sécurisation</div>
              </td>
              <td>${SETUP_FEE.toLocaleString("fr-TN")}</td>
            </tr>` : `
            <tr>
              <td>
                Hébergement VAGA Cloud (Géré)
                <div class="sub">Infrastructure hébergée, aucune installation requise · Stockage inclus : 10 GB (Docs &amp; BDD)</div>
              </td>
              <td>Inclus</td>
            </tr>`}
            ${support ? `
            <tr>
              <td>
                Pack Support Opérationnel (1 an)
                <div class="sub">Réponse &lt; 4h, Max 3 interventions/mois (Ticket/WhatsApp). Assistance sur modules existants.</div>
              </td>
              <td>500</td>
            </tr>` : ""}
            ${effectiveRetainer ? `
            <tr>
              <td>
                Maintenance &amp; Cloud Sérénité (1 an)
                <div class="sub">Backups quotidiens, mises à jour de sécurité et 2h d'assistance technique incluses/mois${isCloud ? " — Requis pour l'hébergement Cloud" : ""}</div>
              </td>
              <td>1 200</td>
            </tr>` : ""}
            <tr class="total-row">
              <td class="total-label">TOTAL — Paiement unique</td>
              <td class="total-price">${total.toLocaleString("fr-TN")} TND</td>
            </tr>
          </tbody>
        </table>

        <div class="conditions">
          <p style="font-weight:700;margin-bottom:6px;">Conditions de règlement</p>
          <p>50% à la commande, 50% à la mise en service. Validité du devis : 30 jours.</p>
          <p style="margin-top:6px;color:#71717a;font-size:12px;">Facilités de paiement disponibles sur demande. La licence est acquise à vie — les frais annuels couvrent uniquement les services et l'infrastructure.</p>
        </div>
        <div class="footer">
          <p>Ce devis est valable 30 jours. Prix HT. VAGA Suite — vaga@maak-corp.tn — vaga.tn</p>
          <p style="margin-top:8px;">Pas de frais par utilisateur. Pas d'abonnement caché.</p>
          <p style="margin-top:8px;font-style:italic;">VAGA est une solution évolutive. Les développements spécifiques hors-standard font l'objet d'un devis complémentaire.</p>
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

          {/* Engine selector */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">VAGA Engine</span>
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
                    {opt.price > 0 ? (
                      <>
                        <span className={active ? "text-[#3ecf8e] font-semibold text-xs" : "text-zinc-400 text-xs"}>
                          +{opt.price.toLocaleString("fr-TN")} TND
                        </span>
                        {opt.sub && (
                          <span className="text-[10px] text-slate-500 text-center leading-tight mt-0.5">{opt.sub}</span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className={`text-[10px] font-semibold mt-0.5 ${active ? "text-[#3ecf8e]" : "text-slate-400"}`}>
                          {opt.sub}
                        </span>
                        <span className={`text-[10px] text-center leading-tight mt-0.5 ${active ? "text-zinc-600" : "text-slate-400"}`}>
                          {opt.storage}
                        </span>
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Setup fee — shown only when a box is selected */}
          {!isCloud && (
            <div className="flex items-start gap-3 p-4 border border-slate-200 bg-slate-50">
              <Wrench className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-700">Frais de Mise en Service</p>
                <p className="text-xs text-slate-500 leading-snug mt-0.5">
                  Installation physique (Sousse), Config réseau, VPN &amp; Sécurisation
                </p>
              </div>
              <span className="text-sm font-bold text-zinc-700 shrink-0">+{SETUP_FEE.toLocaleString("fr-TN")} TND</span>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <HeadphonesIcon className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Options</span>
            </div>

            {OPTIONS_CONFIG.map(({ id, label, hint, price }) => {
              const isRetainer = id === "retainer"
              const checked = isRetainer ? effectiveRetainer : support
              const isLocked = isRetainer && isCloud
              const onChange = isRetainer
                ? () => { if (!isCloud) setRetainer((v) => !v) }
                : () => setSupport((v) => !v)

              return (
                <label
                  key={id}
                  htmlFor={id}
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
                      id={id}
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={onChange}
                      disabled={isLocked}
                    />
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${checked ? "text-zinc-900" : "text-zinc-600"}`}>
                          {label}
                        </span>
                        {isLocked && (
                          <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 leading-none">
                            Requis Cloud
                          </span>
                        )}
                      </div>
                      <span className="text-xs leading-snug text-slate-500">{hint}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-bold shrink-0 ${checked ? "text-[#3ecf8e]" : "text-zinc-400"}`}>
                    +{price.toLocaleString("fr-TN")} TND/an
                  </span>
                </label>
              )
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-zinc-200" />

          {/* Total */}
          <div className="flex items-baseline justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-zinc-500">Total — Paiement unique</p>
              <p className="text-xs text-zinc-400">Pas d&apos;abonnement. Pas de frais cachés.</p>
              <p className="mt-1 text-xs font-medium underline cursor-pointer text-slate-600">
                Facilités de paiement disponibles (3x sans frais)
              </p>
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

          {/* Licence note */}
          <p className="pl-3 text-xs leading-relaxed border-l-2 text-slate-500 border-slate-200">
            Note : La licence est acquise à vie, les frais annuels couvrent uniquement les services et l&apos;infrastructure.
          </p>

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
                    {item.price === 0 ? "Inclus" : `${item.price.toLocaleString("fr-TN")} TND`}
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
            Télécharger le devis PDF
          </Button>

          {/* Disclaimer */}
          <p className="text-xs italic leading-relaxed text-center text-slate-500">
            VAGA est une solution évolutive. Les développements spécifiques hors-standard font l&apos;objet d&apos;un devis complémentaire.
          </p>
        </div>
      </div>
    </div>
  )
}
