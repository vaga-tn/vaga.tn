# VAGA — Product Feature Map (for marketing website)

Compiled from a full codebase exploration of this repo (apps/frontend, apps/api, supabase/migrations, README.md, apps/docs). Intended as source material for a marketing/lead-gen website in a separate repo — captures what the product actually does, not implementation detail.

## Product Purpose

VAGA is a **French-language, Tunisia-focused invoicing/ERP web app** ("VAGA Suite"). Positioned as a self-hosted, data-sovereign alternative to Odoo/Sage-style incumbents for Tunisian SMBs. Covers the full commercial document lifecycle (quote → order → delivery → invoice), stock, treasury, and company/staff admin, wrapped around Tunisian fiscal specifics (TVA, Timbre Fiscal, Retenue à la Source).

## Core Modules / Features

- **Commercial document lifecycle ("Documents")** — 11 document types across sales and purchase pipelines: Devis (quote) → Commande (order) → Bon de Livraison (delivery note) → Facture (client invoice) → Avoir (credit note); purchase side: Commande Fournisseur → Bon de Réception (reception note) → Facture Fournisseur → Avoir Fournisseur; plus Bon de Sortie/Bon de Retour (stock-out/return notes) and Proforma. Documents "transform" into the next stage with full traceability (`transformed_into_*` timestamps).
- **Invoicing & credit notes (Facturation)** — subtotal (HT), VAT, Timbre Fiscal, totals (TTC), paid amount, balance due; draft/sent states; avoirs linked back to originating invoices with reason tracking.
- **Client & supplier management (Tiers)** — dedicated Clients/Fournisseurs modules, contact persons, addresses, bank details (RIB), tax IDs, CIN, configurable per-client price tiers.
- **Client credit / statement tracking (Crédit & Paiements)** — real-time Débit/Crédit/Solde client statement (double-entry style), configurable credit limit ("Crédit Maximum") enforced **at the database level** (blocks new invoices that would exceed the limit), plus a frontend warning.
- **Payments & Treasury (Trésorerie / Caisse)** — cash registers ("caisses") with balance-tracking triggers, payment recording (cash/check/transfer/card), payment reasons, running ledger.
- **Stock / Inventory management** — multi-warehouse: products (categories, families/"marques", SKU/barcode, service vs. product type, min-quantity thresholds, negative-stock rules), warehouses and warehouse locations/bins, stock movement ledger (`stock_move_groups`/`stock_move_lines`) for IN/OUT movements. Validating a Bon de Livraison or Bon de Réception auto-generates real stock movements.
- **Multi-price-tier selling** — 3 sale price tiers per product (`prix_vente_1/2/3`) for different customer segments.
- **Retenue à la Source (RS) — withholding tax module** — consult/generate withholding-tax certificates for sales and purchases, PDF certificate export, and **TEJ-compatible XML** declaration export (Tunisian tax authority format).
- **Document export / e-invoicing** — PDF invoice generation (Puppeteer/Handlebars) and XML export.
- **Drive** — file-management module for shared company files/documents, with storage policies.
- **Notes** — freeform notes attachable to clients, products, and vehicles.
- **Company / staff administration ("Mon Entreprise")** — company profile (raison sociale, matricule fiscal, industry sector), addresses, equipment ("Équipements"), bank accounts, and a **fleet/vehicle management** sub-module (status: available/in-service/maintenance/out-of-service; fuel type incl. electric/hybrid).
- **Staff & role-based access control** — owners invite staff, assign roles, restrict each role to specific app modules (`allowed_apps`) — lightweight internal RBAC gating every module.
- **Statistics / Dashboards** — home, dashboard, per-dossier, per-caisse, per-party statistics: receivables, debts, revenue, paid/unpaid totals, invoice counts by type, total expenses.
- **Smart Search** — unified "Odoo-style" search bar reused across all module list views, with field-scoped queries (e.g. `name:`).
- **Accounting periods ("Dossiers")** — invoices/documents organized within date-ranged accounting folders/periods.

## Technical Differentiators

- **Tunisia data sovereignty** — self-hosted in Tunisia, encryption at rest/in transit, no cross-border data transfer.
- **Client-side / field-level encryption** — client data (names, emails, addresses, tax IDs) encrypted client-side via a dedicated `packages/crypto` package; admins only see encrypted blobs plus non-sensitive metadata.
- **Database-enforced business rules** — credit-limit enforcement and client balance sync implemented as Postgres triggers/functions (`check_client_credit_limit`, `sync_client_balance_from_invoice`, `get_client_statement`), not just app logic.
- **Multi-tenant architecture** — `companies` (tenant) + `users` (auth identity) + `company_members` (join, with role) + `staff_roles` (`allowed_apps`); one user can belong to multiple companies, switching an "active company," fully isolated via RLS.
- **Row Level Security (RLS)** on every table, scoped by company/tenant — primary tenant-isolation mechanism (Supabase Postgres).
- **Tunisian fiscal/tax specifics** — Matricule Fiscal, CIN, RIB, Timbre Fiscal on every invoice, configurable TVA/tax rates (percentage or fixed, document or line level), full RS certificate + TEJ XML declaration generation.
- **PDF/XML generation pipeline** via Puppeteer + Handlebars (NestJS backend) — polished, print-ready official documents.

## Target Audience / Market Signals

- All in-app labels/terminology in **French** (Devis, Facture, Bon de Livraison, Bon de Réception, Avoir, Trésorerie, Entrepôts, Retenue à la Source, Matricule Fiscal, Timbre Fiscal, CIN, RIB) — targets **Francophone North African / Tunisian SMBs and back-office/accounting users**.
- Explicit "Tunisia Data Sovereignty" and local-regulation compliance messaging in the README.
- Fleet/vehicle + equipment tracking + multi-warehouse stock suggests targeting SMBs with physical operations (distribution, trading, light industry, services with company vehicles) — not pure digital-service businesses.

## Tech Stack

- **Frontend**: Angular 17, PrimeNG, Tailwind CSS, Quill rich-text editor, custom `ui-components` Angular library, Jest.
- **Backend**: NestJS 11 (Express), TypeORM + `pg`, Supabase JS client, JWT auth via Passport, Swagger/OpenAPI, Puppeteer + Handlebars, Winston logging.
- **Database**: Supabase (self-hosted Postgres) — migrations, RLS policies, Postgres functions/triggers for core business rules, Supabase Storage for Drive.
- **Docs**: Docusaurus (`apps/docs`).
- **Monorepo**: PNPM workspaces + Turborepo; `packages/shared-types`, `packages/utils`, `packages/assets`, `packages/crypto`.
- **Deployment**: Docker Compose (dev/prod), Netlify config, automated backup scripts.

## Key Internal File References (this repo)

- `README.md`
- `apps/docs/docs/intro.md`, `apps/docs/docs/development/*.md` (esp. `client-statement-managment.md`, `invoice-stock-sync.md`)
- `packages/shared-types/src/invoice.types.ts` (document-type enum)
- `apps/frontend/projects/erp/src/app/core/contants.ts` (`VAGA_APPS`, full module/menu list)
- `apps/frontend/projects/erp/src/app/features/root/app-routing.module.ts`
- `supabase/migrations/20260122143000_initial_schema.sql`, `20260407000000_restructure_companies_users.sql`, `20260411000001_add_allowed_apps_to_roles.sql`, `20260411000002_get_my_permissions_rpc.sql`, `20260313012701_create_stock_module.sql`, `20260206120219_taxes_table.sql`, `20260416000001_create_vehicles_table.sql`
- `apps/api/src/features/export/export.controller.ts` (PDF/XML/RS exports)
- `apps/api/src/features/stats/stats.controller.ts` (dashboard KPIs)
