# VAGA — Site Structure, Layout & Copy Plan

Status: **draft v1 — sitemap + page layouts locked for review; copy not yet written.**
Builds on [feature-map.md](./feature-map.md) (product truth) and [competitor-analysis.md](./competitor-analysis.md) (positioning/SEO). Technology, theme, and UI components are explicitly out of scope until this is locked.

Site identity assumed from repo: brand **VAGA**, domain **vaga.tn**, based in **Sousse, Tunisia**, French-language site.

---

## 1. Sitemap / Information Architecture

Priority = build order once we move to copy/coding. Phase 1 = launch scope. Phase 2 = fast-follow (content marketing / long-tail).

| # | URL | Page | Primary keyword target | Funnel stage | Phase |
|---|-----|------|------------------------|--------------|-------|
| 1 | `/` | Homepage | "logiciel ERP Tunisie PME", "logiciel de gestion commerciale Tunisie" | Awareness → Consideration | 1 |
| 2 | `/fonctionnalites` | Features hub (pillar page) | "logiciel de gestion commerciale Tunisie" (topic cluster hub) | Consideration | 1 |
| 3 | `/fonctionnalites/facturation-devis` | Devis, commandes, BL, factures, avoirs | "logiciel devis facture bon de livraison" | Consideration | 1 |
| 4 | `/fonctionnalites/gestion-stock` | Multi-warehouse inventory | "gestion de stock multi-entrepôt Tunisie" | Consideration | 1 |
| 5 | `/fonctionnalites/tresorerie` | Caisse, paiements, trésorerie | "gestion trésorerie caisse Tunisie" | Consideration | 1 |
| 6 | `/fonctionnalites/clients-credit` | Tiers, crédit client, relevé de compte | "gestion crédit client Tunisie", "relevé de compte client" | Consideration | 1 |
| 7 | `/fonctionnalites/facturation-electronique-teif` | TTN El Fatoora / TEIF compliance | "conformité TTN El Fatoora", "TEIF facture électronique Tunisie" | Consideration (standard feature, not urgency-led) | 1 |
| 8 | `/fonctionnalites/retenue-source-tej` | RS certificates + TEJ XML | "retenue à la source XML", "déclaration TEJ automatique" | Consideration | 1 |
| 9 | `/fonctionnalites/gestion-flotte` | Fleet/vehicle management | "gestion de flotte véhicules PME" | Consideration | 2 |
| 10 | `/fonctionnalites/equipe-permissions` | Staff, roles, RBAC | "gestion des accès ERP", "rôles et permissions logiciel gestion" | Consideration | 2 |
| 11 | `/fonctionnalites/statistiques` | Dashboards/KPIs | "tableau de bord PME Tunisie" | Consideration | 2 |
| 12 | `/securite-donnees` | Data sovereignty & encryption (differentiator) | "hébergement de données Tunisie", "logiciel facturation données chiffrées", "souveraineté des données ERP" | Trust / Decision | 1 |
| 13 | `/tarifs` | Pricing (transparent tiers) | "prix logiciel ERP Tunisie", "tarif logiciel facturation Tunisie" | Decision | 1 |
| 14 | `/secteurs` (optional hub) | Verticals: distribution, négoce, garages/flotte, cabinets comptables | long-tail vertical queries | Consideration | 2 |
| 15 | `/ressources` (blog index) | Content marketing hub | supports all clusters, esp. TEIF/TEJ explainers | Awareness | 2 |
| 16 | `/a-propos` | Company story (Sousse-based, data-sovereignty mission) | brand/trust, E-E-A-T | Trust | 1 |
| 17 | `/demo` | Demo request (primary conversion goal — Cal.com booking embed, to be wired in later) | "demander une démo ERP Tunisie" | Decision → Conversion | 1 |
| 18 | `/mentions-legales`, `/confidentialite` | Legal pages | required for trust/E-E-A-T, not keyword targets | — | 1 |

Comparison pages (`/comparatifs/*` — vs. Odoo, eFactureTN, etc.) are **dropped from scope for now**, not shipping in this round. Keep the competitor research in [competitor-analysis.md](./competitor-analysis.md) for later — revisit if/when comparison pages come back into scope.

**Global nav (header)**: Fonctionnalités (dropdown) · Sécurité · Tarifs · Ressources · [CTA button: Demander une démo]
**Footer**: full sitemap links by column (Produit / Entreprise / Légal), social if any, "Hébergé en Tunisie 🇹🇳" trust badge.

---

## 2. Page Layout Templates

Section-by-section structure per page type. No visual design yet — just what blocks exist, in what order, and why.

### 2.1 Homepage (`/`)

1. **Hero** — H1 = primary value prop (modern ERP, Tunisian PMEs, one platform). Subhead = concrete scope (devis→facture, stock, trésorerie, conformité TEIF). Primary CTA "Demander une démo", secondary CTA "Voir les tarifs". Visual: product screenshot/mockup (asset already exists in `public/apps`).
2. **Trust bar** — short line/badges: "Hébergé en Tunisie", "Données chiffrées", "Conforme TTN El Fatoora", "Fonctionne sans internet (VAGA Box)" — four-differentiator strip, de-emphasizing TEIF as just one of four, not the headline.
3. **Problem → solution framing** — the PME pain (Excel/paper, disconnected tools, non-compliant invoicing, no visibility on stock/trésorerie) vs. VAGA as the single platform.
4. **Feature highlights grid** — 6–8 cards linking to `/fonctionnalites/*` pages (Facturation, Stock, Trésorerie, Crédit client, Flotte, TEIF/TEJ, Statistiques, Sécurité). Each card = icon + 1-line benefit + link.
5. **Differentiator deep-dive: Sécurité & Souveraineté** — dedicated section (not just a badge) explaining client-side encryption + Tunisia hosting, linking to `/securite-donnees`. This is the whitespace advantage — deserves real estate, not a footnote.
6. **Pricing teaser** — VAGA Cloud (1 700 TND + 250 TND/mois) vs. VAGA Box (3 000 TND, one-time, no recurring fee) snapshot, "sans abonnement caché" framing, link to `/tarifs`.
7. **Social proof** — omitted for now (no testimonials/logos to show at launch). Leave the section out entirely rather than using placeholder/fake content; revisit once real customer references exist.
8. **FAQ** — 5–6 Q&As targeting long-tail queries (e.g., "VAGA est-il conforme à la facturation électronique TEIF ?", "Où sont hébergées mes données ?", "Combien coûte VAGA ?", "VAGA fonctionne-t-il sans connexion internet ?") — good for featured-snippet SEO.
9. **Final CTA band** — repeat demo CTA, links to `/demo`.

### 2.2 Feature/module page template (`/fonctionnalites/*`)

Applies to all module pages (facturation-devis, gestion-stock, tresorerie, clients-credit, teif, retenue-source-tej, gestion-flotte, equipe-permissions, statistiques).

1. **Hero** — H1 = keyword-aligned title (e.g., "Gestion de stock multi-entrepôt pour PME tunisiennes"). Subhead = 1-sentence scope. CTA: demo.
2. **Core capability breakdown** — 3–5 subsections, each a concrete capability pulled straight from feature-map.md (e.g. for stock: produits/catégories, entrepôts/emplacements, mouvements de stock, seuils min/stock négatif, sync auto avec BL/BR). Screenshot per subsection where an asset exists in `public/apps`.
3. **"Pourquoi VAGA" differentiator callout** — the 1–2 things competitors don't do for this module specifically (e.g., stock: auto stock-move generation from document validation; crédit: DB-enforced credit limit; TEIF: bundled with full ERP instead of point solution).
4. **Related modules** — cross-links to 2–3 adjacent feature pages (internal linking for topic cluster SEO).
5. **FAQ** — 3–4 questions specific to this module.
6. **CTA band**.

### 2.3 Sécurité & Souveraineté des données (`/securite-donnees`)

1. **Hero** — H1 targeting "souveraineté des données ERP Tunisie". Framed as trust, not just tech spec.
2. **Data sovereignty explainer** — self-hosted in Tunisia, no cross-border transfer, legal/compliance angle for regulated verticals.
3. **Client-side encryption explainer** — plain-language description of what's encrypted (names, emails, addresses, tax IDs), what admins can/can't see, why it matters (breach-proofing, staff-access limits).
4. **Database-enforced business rules** — credit limits and balance sync as Postgres-level guarantees, framed as "can't be bypassed by a bug or a rogue app update."
5. **RLS / multi-tenant isolation** — plain-language: your company's data is walled off, even in a shared platform.
6. **Comparison callout** — "none of the researched alternatives publish this" whitespace claim (kept honest/qualified, stated in general terms since named-competitor comparison pages aren't shipping right now).
7. **CTA band**.

### 2.4 Tarifs (`/tarifs`)

Confirmed real pricing (from current live site, vaga.tn) — two deployment models, both **one-time license + optional hosting**, not per-user subscriptions:

- **VAGA Cloud** (recommended) — 1 700 TND one-time license + 250 TND/mois server & maintenance. Hosted, accessible from anywhere, auto updates/backups, zero server maintenance for the client.
- **VAGA Box** (on-premise) — 3 000 TND one-time, no recurring fee. A physical mini-PC delivered and configured on-site; runs the full ERP locally, works without internet, 100% data stays on the client's premises.

This deployment duality (Cloud vs. Box) is a **real, previously-uncaptured differentiator** — see note in §5 below. It deserves its own explainer block on this page, not just a plan-comparison table.

1. **Hero** — H1 "Un ERP plus abordable. Sans abonnement caché." (adapt from existing site headline "A Cheaper ERP. No Hidden Subscription.") — subhead: no per-user fees, full team access, one-time pricing vs. competitors' recurring per-user/per-invoice models (eFactureTN, Hesabi, Clever-ERP all bill monthly/annually and/or per user).
2. **Pricing cards** — VAGA Box vs. VAGA Cloud, side by side, "Recommandé" badge on Cloud, exact numbers above.
3. **Deployment explainer ("Comment souhaitez-vous déployer VAGA ?")** — expands the two options: Cloud = zero server, accessible anywhere, multi-site/mobile teams; Box = works with zero internet, ideal for warehouses/zones with unstable connectivity. Include the Tunisia-specific callout already validated on the live site: frequent DSL/Ooredoo/Topnet outages in Sousse, Sfax, and industrial zones — Box keeps invoicing/stock/delivery-notes running through an outage.
4. **What's included** — confirm both plans ship the full module set (no per-module gating, unlike Megasoft's per-module licensing) — reinforces "no hidden subscription" claim.
5. **FAQ** — can we switch from Box to Cloud later? what does "maintenance" cover? is there a trial/demo first?
6. **CTA band** — "Demander une démo" → `/demo`.

### 2.5 Demo (`/demo`)

1. **Hero** — short H1 ("Réservez votre démo"), 1-line reassurance on what happens in the call (duration, no-commitment framing).
2. **Cal.com booking embed** — slot reserved for the booking widget the user will wire in later; copy work here is just the surrounding hero/trust microcopy, not the booking UI itself.
3. **Reassurance strip** — 3 short bullets (e.g., "15 minutes", "sans engagement", "réponse sous 24h") to reduce booking friction.

### 2.6 Blog/resource article template (`/ressources/[slug]`) — phase 2

1. Standard long-form article layout: H1, intro, H2 sections, at least one internal link to a relevant feature or comparison page, author/date (E-E-A-T), CTA block mid-article and at end.

### 2.7 À propos (`/a-propos`)

1. **Hero** — founding story angle: built in Sousse, for Tunisian PMEs, data-sovereignty mission.
2. **Why VAGA exists** — the gap it fills (Odoo too generic/needs integrators; local tools too narrow).
3. **Team/location** (as much as is comfortable to disclose).
4. **CTA band**.

---

## 3. Copy — not started

Per your direction, copy comes after structure/layout sign-off. Once this is approved, recommended drafting order (highest SEO/business leverage first):

1. Homepage
2. `/tarifs` (now unblocked — real pricing confirmed)
3. `/securite-donnees` (core differentiator, feeds homepage copy)
4. `/fonctionnalites/*` module pages (in the phase-1 order listed above)
5. `/demo`, `/a-propos`, legal pages

(Comparison pages dropped from this round's scope — see §1.)

## 4. Resolved inputs

- **Pricing** — confirmed from live site: VAGA Cloud 1 700 TND one-time + 250 TND/mois, VAGA Box 3 000 TND one-time (on-premise, no recurring fee). Captured in §2.5.
- **Social proof** — no testimonials for now; homepage social-proof section is omitted at launch, not faked.
- **Primary conversion page** — `/demo`, booking handled by a Cal.com embed the user will wire in later. Copy work only needs to cover the surrounding hero/reassurance microcopy (§2.6), not the booking flow itself.

## 5. New differentiator surfaced this round — deployment flexibility

The pricing screenshots revealed a genuine differentiator not captured in the original competitor research: **VAGA Box**, an on-premise mini-PC appliance that runs the full ERP with zero internet dependency, explicitly positioned against frequent DSL/Ooredoo/Topnet outages in Sousse, Sfax, and industrial zones. No competitor in [competitor-analysis.md](./competitor-analysis.md) offers a hardware/offline option — this is as strong a whitespace claim as data sovereignty and encryption, and should be added to that document's whitespace list and keyword clusters (e.g., "ERP fonctionne sans internet", "logiciel de gestion hors ligne Tunisie"). It also sharpens the Megasoft comparison: VAGA's one-time pricing is per-suite, not per-module like Megasoft's legacy licensing, and it still ships as modern software (cloud or appliance) rather than desktop-era installs.
