# VAGA — Competitive Landscape & SEO Positioning (Tunisia ERP/Invoicing market)

Research date: 2026-07-12. Source material for a marketing/lead-gen website — informs positioning, comparison-page targets, and keyword clusters. See [feature-map.md](./feature-map.md) for what VAGA itself does.

## Market Context — the dominant driver right now

**Finance Law 2026 (Article 53)** made e-invoicing via **TTN El Fatoora** (TEIF XML format) mandatory for all VAT-registered businesses in Tunisia, effective **January 1, 2026, with no grace period**.

- **Applies to**: all legal entities/individuals subject to VAT in Tunisia, regardless of size/sector. Exempt: businesses under franchise or total VAT exemption.
- **Covered documents**: sales invoices and credit notes. Quotes, proformas, and delivery notes are NOT mandatory submissions (yet).
- **Compliance steps**: obtain an ANCE electronic certificate → create an El Fatoora account → select compliant invoicing software → configure fiscal data → test in TTN sandbox → go to production.
- **Penalties**: 100–500 TND per non-compliant paper invoice, capped at 50,000 TND/year, plus TVA adjustment risk and invoice invalidity with assujetti clients.

**Implication**: this is currently the highest-intent, most time-sensitive search driver in the entire market. Compliance/urgency messaging ("conformité TTN El Fatoora", "TEIF", "éviter les pénalités facture électronique") should anchor the SEO strategy, not sit as a secondary feature bullet.

## Competitor Tiers

### Tier 1 — Global horizontal (awareness-stage reference point)

**Odoo**
- The default reference point for Tunisian PMEs. Modular (30+ modules: CRM, sales, accounting, stock, HR), French UI, large local integrator ecosystem (Expert IT 370, Iconconcept, Groupe RIF, IT4IT, BRM Tunisie, Tunisie Innovation).
- Weakness to exploit: generic/global product, not natively Tunisia-compliance-built — needs local integrators and customization for TEIF/TEJ; implementation + integrator costs stack up quickly for SMBs.
- SEO angle: "alternative à Odoo pour PME tunisiennes", "Odoo vs [VAGA] conformité fiscale tunisienne", "Odoo sans intégrateur".

### Tier 2 — Direct local ERP competitors (closest to VAGA's scope)

**eFactureTN** — closest head-to-head competitor.
- Positioning: all-in-one cloud ERP for Tunisian businesses with built-in e-invoicing.
- Target: auto-entrepreneurs, freelancers, TPE/PME, professions libérales, cabinets comptables, 17+ verticals (pharmacies, retail, construction, healthcare).
- Features: invoicing, quotes, BL, credit notes, Tunisian-standard accounting, payroll/HR, fiscal calendar, multi-currency, multi-warehouse inventory, purchase/vendor management, treasury, bank reconciliation, auto TVA/FODEC/withholding calc, XAdES e-signature, TTN auto-transmission, TEIF v1.8.8, QR codes, RBAC, client portal, cabinet-comptable mode.
- Pricing: Free tier (prepaid e-facture packs) → Tanit 12 DT/mo (5 free e-factures, 1 user) → Elissa 25 DT/mo (26 free, 3 users) → Jugurtha 49 DT/mo (55 free, 10 users) → Hannibal 129 DT/mo (120 free, unlimited users). Prepaid packs 25–5,000 e-factures, ~1,200–1,800 DT/unit. +25 DT/year TTN fee (waived on annual plans).
- Security: AES-256 at rest, SSL/TLS, 10-year legal archival.
- Integrations: Odoo, PrestaShop, Sage, Cegid, QAD MFG/PRO, Excel/CSV, EDI, REST API, WhatsApp, email.
- **Gap vs. VAGA**: no mention of DB-enforced credit limits, client-side field encryption, or fleet management as a distinct module.

**Clever-ERP**
- Positioning: "Smart ERP • Cloud Conforme TEIF", Tunisian PMEs.
- Modules: procurement (PO, supplier receipts, invoice tracking, delivery alerts), sales (quotes, BL, invoicing, payment tracking), finance (multi-currency, real-time balances, reports), inventory (real-time movements, multi-site, min-threshold alerts), e-invoicing (XML TEIF, XAdES-B, auto TTN submission, archival).
- Pricing: **not disclosed** — "request a quote" only; free trial offered.
- Location: Bizerte, Tunisia.
- **Gap vs. VAGA**: opaque pricing is a friction point VAGA can beat with transparent tiers.

**Megasoft ERP**
- Positioning: broad, legacy-feel, licensed software ("Unique Payment — Lifetime Activation" per module) rather than modern SaaS subscription.
- Scale: 69+ modules — finance/accounting/payroll/HR/e-invoicing, sales/stock/purchasing/CRM/e-commerce, fleet management, GMAO (maintenance), time tracking, industry-specific packages (retail, garages, gyms).
- Differentiators claimed: AI-guided support, cloud auto-backup, 12-month warranty, mobile app.
- **Angle for VAGA**: "modern SaaS vs. legacy desktop-era licensing" — Megasoft's breadth signals an older, less focused product; VAGA can win on UX/modernity and lack of per-module licensing friction.

### Tier 3 — Compliance/accounting-forward, lighter on ERP

**Hesabi**
- Positioning: bridge between manual Excel and "local software," accounting + compliance-first, cloud SaaS.
- Features: automated TEIF XML generation, integrated TEJ + Jibaya DMI compliance, AI import, real-time accountant-portal collaboration, quoting, payroll.
- Pricing: Starter 390 TND/year, Pro 790 TND/year (adds TTN/TEJ/accounting/payroll/AI import/quoting), Cabinet 2490 TND/year (accountant portal). 14-day free trial.
- **Gap vs. VAGA**: weak on stock/multi-warehouse and fleet — better fit for pure services/accounting firms than businesses with physical operations.

**Qwerty** — automates tax declarations (VAT, IRPP, integrated TEJ transmission); accounting-forward, not a full ERP.

**Iberis** — online invoicing, professional invoices, automatic payment reminders, get-paid-faster focus; lighter tool.

**Swiver** — invoicing/gestion commerciale SaaS for micro-enterprises/SMEs; claims >75% time reduction on purchase/sales invoice handling via automation.

**Bison** — invoicing + quotes + stock + basic CRM; free-for-life basic plan.

**Fatoura / elfatoora.digital / fatoura.tn** — free/simple invoice & quote generation tools for individuals/micro-businesses.

These Tier 3 tools are not real competitors for mid-size PMEs needing multi-warehouse stock, treasury, and fleet, but they shape market pricing expectations (multiple free tiers exist) and will co-occur in the same search results.

## Whitespace / Positioning Opportunities for VAGA

1. **Data sovereignty + client-side encryption** — none of the researched competitors mention this. Genuine differentiator, especially valuable for finance/legal/health verticals handling sensitive client data.
2. **Database-enforced credit limits & client statements** — competitors describe invoicing/stock but not automated, DB-level credit-risk control (can't be bypassed by app bugs).
3. **Full breadth in one modern SaaS** — multi-warehouse stock + treasury + fleet + RBAC + RS/TEJ in a single product. Only eFactureTN matches this breadth among competitors found; others are either lighter (pure invoicing) or heavier/legacy (Megasoft).
4. **Transparent pricing** — Clever-ERP hides pricing behind "request a quote"; Megasoft uses legacy per-module licensing. VAGA can build trust with clear tiers (eFactureTN-style).
5. **Modern SaaS UX vs. legacy competitors** — positioning against Megasoft's licensing-era feel and Odoo's generic/global nature.

## Suggested SEO Keyword Clusters

1. **Compliance/urgency intent** (highest priority, time-sensitive): "conformité TTN El Fatoora", "TEIF facture électronique Tunisie", "pénalités facture papier Tunisie 2026", "logiciel facturation électronique conforme Tunisie", "déclaration TEJ automatique".
2. **Competitor-comparison intent**: "alternative à Odoo Tunisie", "eFactureTN vs [VAGA]", "Hesabi vs [VAGA]", "meilleur logiciel ERP Tunisie PME", "Clever-ERP alternative".
3. **Feature intent**: "gestion de stock multi-entrepôt Tunisie", "gestion de flotte véhicules PME", "logiciel devis facture bon de livraison", "gestion trésorerie caisse Tunisie", "retenue à la source XML".
4. **Trust/differentiation intent**: "hébergement de données Tunisie", "logiciel facturation données chiffrées", "ERP tunisien souveraineté des données".

## Next Steps (not yet done)

- Draft the site's information architecture (page list) around these clusters.
- Draft on-page positioning/copy for a homepage + comparison pages (vs. Odoo, vs. eFactureTN) + a TTN El Fatoora compliance landing page.
- Decide product naming/domain for the public-facing site (separate from this internal repo name).

## Sources

- [Hesabi — Facturation électronique obligatoire Tunisie 2026](https://hesabi.tn/actualites/facturation-electronique-obligatoire-tunisie-2026)
- [Hesabi — Tarifs](https://hesabi.tn/tarifs)
- [Hesabi — TEJ Retenue à la Source](https://hesabi.tn/tej-retenue-source-tunisie)
- [eFactureTN](https://efacturetn.com/fr/)
- [Clever-ERP](https://www.clever-erp.com/)
- [Megasoft ERP](https://www.megasofterp.com/)
- [Bison](https://www.bison.tn/)
- [Swiver](https://swiver.io/)
- [Facture Tunisie](https://facture-tunisie.com/)
- [Fatoura en ligne](https://fatouraenligne.tn/)
- [Iberis](https://finances.iberis.io/)
- [Qwerty](https://qwerty.tn/)
- [TEIF Manager](https://www.teif.tn/)
- [ICS — Facturation électronique](https://website.ics-tn.com/facturation-electronique)
- [Fatoora.tn — Facturation électronique / cadre légal TEIF](http://fatoora.tn/electronic-invoice/)
- [Odoo Partners — Tunisia](https://www.odoo.com/partners/country/tunisia-212)
- [Expert IT 370 — Odoo Tunisie](https://expertit370.com/erp-gestion-dentreprise/odoo-tunisie/pourquoi-les-pme-en-tunisie-passent-a-un-erp-comme-odoo-en-2026/)
