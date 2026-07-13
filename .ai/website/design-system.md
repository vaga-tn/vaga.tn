# VAGA — Design System (v2 — validated via mockup)

Status: **v2 — supersedes the v1 draft (Resend/Supabase audit, navy/mint/tan tokens).** That direction was dropped after the homepage mockup round: the validated aesthetic is **black on white, Tally-inspired** ([tally.so](https://tally.so)).

**Source of truth: [`/vaga-home-mockup.html`](../../vaga-home-mockup.html)** (repo root) — the user-validated homepage mockup. Every token below is extracted from it. When mockup and this doc disagree, the mockup wins — **except for dark mode**: the mockup is light-only (it predates the toggle decision); §2b and §10 of this doc are the reference for the dark theme.

---

## 1. Aesthetic principles

1. **Strictly monochrome.** No accent color, in either theme. Ink does all the work: CTAs are solid ink, links are ink, emphasis is weight — not hue. (v1's navy/mint/tan and the two-accent Cloud/Box color coding are dropped for the marketing site.)
2. **1px borders, not shadows.** Cards and sections separate with thin `--border` lines. The only shadows allowed: the soft drop under the hero product frame, and the *hard offset* shadow on doodle chips (see §6).
3. **Whitespace-generous, centered hero, tight bold headlines.** Tally's rhythm: big centered statements, ~88px section padding, content max-width 1040px.
4. **Playful but restrained.** Personality comes from a few hand-drawn touches (squiggle underline, rotated doodle chips) — used once or twice per page, not everywhere.
5. **The product visual is drawn in HTML**, not a screenshot: the real VAGA launcher UI ("Bonjour, Aymen" screen) recreated inside a browser-chrome frame. Crisp at any DPI, theme-consistent by construction.

## 2. Color tokens

The site ships **both themes** with a header toggle (see §10). Light is the default and the design's home base; dark is a true inversion of the same monochrome system — still no accent color in either theme. Set `color-scheme: light dark` on `:root` so native UI (scrollbars, form controls) follows.

### 2a. Light (default)

| Token | Value | Use |
|---|---|---|
| `--page` | `#FFFFFF` | page background |
| `--ink` | `#0B0B0C` | headlines, primary text, solid CTA background, icon strokes |
| `--ink-contrast` | `#FFFFFF` | text/icons on top of `--ink` surfaces (CTA labels) |
| `--body` | `#52525B` | body copy |
| `--muted` | `#8E8E96` | microcopy, captions, kickers |
| `--border` | `#E6E6E3` | 1px card/section borders |
| `--border-strong` | `#0B0B0C` | emphasized borders (recommended plan card, doodle chips, chain steps) |
| `--fill` | `#FAFAF8` | subtle fills (app tiles, sidebar-type surfaces) |
| `--header-bg` | `rgba(255,255,255,.92)` | sticky header (with `backdrop-filter: blur(8px)`) |
| `--frame-shadow` | `0 24px 60px -30px rgba(11,11,12,.25)` | product-frame drop shadow |

### 2b. Dark

Not a palette change — the same system inverted. `--ink` flips to off-white, the solid CTA becomes a **white button with black text**, borders become white-alpha.

| Token | Value | Use |
|---|---|---|
| `--page` | `#0B0B0C` | page background (same hex as light ink — deliberate symmetry) |
| `--ink` | `#F4F4F2` | headlines, primary text, solid CTA background, icon strokes |
| `--ink-contrast` | `#0B0B0C` | text/icons on top of `--ink` surfaces (CTA labels) |
| `--body` | `#A7A7AE` | body copy |
| `--muted` | `#77777F` | microcopy, captions, kickers |
| `--border` | `rgba(255,255,255,.13)` | 1px card/section borders |
| `--border-strong` | `#F4F4F2` | emphasized borders |
| `--fill` | `#141416` | subtle fills (app tiles, launcher surfaces) |
| `--header-bg` | `rgba(11,11,12,.88)` | sticky header (same blur) |
| `--frame-shadow` | `0 24px 60px -30px rgba(0,0,0,.6)` | product-frame drop shadow |

Dark-theme notes:
- Card/tile backgrounds stay `--page` or `--fill`; separation comes from borders, same as light. No elevated-gray card stack à la Material.
- Doodle chips & flagbox: border and hard offset shadow use `--ink` (off-white) on `--page` chips — the sketchy look inverts cleanly.
- The cipher block, squiggle underline, chain pills, and check icons all reference `--ink`/`--muted`, so they invert for free — build every component against tokens, never hardcoded hex.
- The product-preview launcher recreation follows the site theme (it's token-built HTML, not a screenshot) — acceptable even though the real app may be light-only.
- Emoji (🇹🇳) and the recommended-plan tag (`--ink` pill with `--ink-contrast` text) need no special-casing.

## 3. Typography

- **Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif`. (If a webfont is added at build time, Inter is the drop-in choice; the mockup validates fine on the system stack.)
- **Monospace** (`ui-monospace, SFMono-Regular, Menlo, Consolas`) is reserved for the in-app launcher recreation (greeting, date, meta line) — it mirrors the real product UI. Not used in marketing copy.
- **Scale** (from mockup):
  - H1: `clamp(38px, 6vw, 58px)` / 800 / letter-spacing `-0.03em` / line-height 1.12
  - H2: `clamp(28px, 4vw, 38px)` / 800 / same tracking
  - H3 (card titles): 18px / 700 / `-0.01em`
  - Body: 16px / 400 / line-height 1.6 (hero subhead 18px, card body 14.5px)
  - Microcopy/captions: 13–13.5px, `--muted`
  - Overline labels (footer column heads, table heads): 11–12px, uppercase, letter-spacing `.06–.07em`, `--muted`
- Headlines get `text-wrap: balance`. Prices and any digit columns get `font-variant-numeric: tabular-nums`.

## 4. Spacing & radius

- Container: **max-width 1040px**, 24px side padding. Narrow text blocks: 680px.
- Section padding: **88px** vertical (64px under 560px viewport). Hero: 96px top.
- Radii: buttons **8px** (large CTAs 10px), cards **14–16px**, app tiles 16px, pills/badges/trust items **999px**. The v1 pill-button rule is dropped — buttons are rounded rectangles like Tally's, not pills.

## 5. Core components (all present in the mockup)

- **Header**: sticky, `--header-bg` + `backdrop-filter: blur(8px)`, 1px bottom border, 64px tall. Logo = lowercase wordmark `vaga` (800) + `.tn` in `--muted`. Right-aligned links (14.5px, `--body`), theme toggle icon button (§10), solid ink CTA button.
- **Buttons**: solid ink with white text (primary), white with `--border` border darkening to ink on hover (secondary/ghost). Arrow `→` inside the primary CTA nudges 2px right on hover.
- **Trust bar**: centered row of pill badges (1px border, checkmark SVG + 14px/600 label) under a muted one-line kicker.
- **Feature cards**: 3-column grid (2 at ≤860px, 1 at ≤560px), 1px border, 14px radius, border turns ink on hover. Content: 38px outlined icon tile (1px ink border, 9px radius) + H3 + one-line benefit + "En savoir plus →" link.
- **Document chain**: pills with 1.5px ink borders joined by `→` separators (Devis → Commande → BL → Facture) + muted caption.
- **Security cards**: 2-up bordered panels. Signature effect: the **cipher block** — monospace gibberish with bold plaintext fragments, fading out via CSS `mask-image` gradient (visualizes client-side encryption). Second card carries the rotated "🇹🇳 Sousse, Tunisie" flagbox chip.
- **Pricing cards**: 2-up, 16px radius. Recommended plan = **2px ink border** + floating uppercase "Recommandé" tag (ink pill, top-left overlap) + solid CTA; other plan = 1px border + ghost CTA. Amount 36px/800 tabular.
- **FAQ**: native `<details>/<summary>`, top+bottom 1px rules, `+` marker rotating 45° when open. One column, 680px.
- **Footer**: 4 columns (brand+tagline / Produit / Entreprise / Légal), uppercase overline column heads, "🇹🇳 Hébergé en Tunisie" pill badge, bottom bar with © line.

## 6. Playful signature elements (use sparingly)

- **Doodle chips** (hero only): small white chips with 1.5px ink border, **3px 3px 0 hard offset shadow**, rotated ±2–4°, one of them dashed-border with no shadow. Content = product claims ("Devis → Facture ✓", "Stock à jour ✓", "TEIF ✓").
- **Squiggle underline**: hand-drawn SVG path under one key phrase in the H1 (3px stroke, round caps). One per page maximum.
- These replace Tally's marker doodles; do not add mascots/illustrations to the marketing site. (Fennec mascot + circuit-board motif from v1 are **out of scope for the site**; they remain product/brand assets.)

## 7. Product-preview frame

- Browser chrome: 1px border, 14px radius, three 10px gray dots + URL pill (`app.vaga.tn`), soft shadow `0 24px 60px -30px rgba(11,11,12,.25)`, max-width 960px.
- Inside: faithful HTML recreation of the **real launcher screen** — top bar (4 centered outline icons + ink user button), monospace greeting block ("Lundi …", "Bonjour, …", "Tout est en ordre.", meta line with underlined links), 11-app tile grid (86px `--fill` tiles, 16px radius, 34px outline icons, 12.5px labels), "Developed & Maintained by MAAK CORP" footer line.
- App order: Drive, Inventaire, Trésorerie, Fournisseurs, Clients, Achats, Ventes, Retenue à la source, Mon Entreprise, Statistiques, Parametres.

## 8. Iconography

All icons are inline SVG, stroke-based (`stroke-width` 1.4–1.6, round caps/joins, `currentColor`), no fills, no icon library dependency. Checkmarks in lists/badges: 14–15px, 2px stroke.

## 9. Accessibility & motion

- Interactive-looking = interactive; keyboard focus must stay visible when built for real.
- Transitions are minimal (border-color, arrow nudge, `+` rotation, 0.15–0.2s ease) and wrapped in `@media (prefers-reduced-motion: reduce)` kill-switch.
- Body copy `--body` passes WCAG AA in both themes. `--muted` does **not** (≈3.3:1 on white) — reserve it for decorative microcopy (kickers, captions, © line) and never for content someone must read; anything informational at small sizes uses `--body`. Don't use `--muted` below 12px.

## 10. Theme toggle pattern

Decision: light/dark toggle in the header (sun/moon icon button, right of the nav links, before the CTA). Framework-agnostic — works identically in Astro or Next.js.

**Resolution order**: user override (`localStorage.theme = "light" | "dark"`) → OS preference (`prefers-color-scheme`) → light.

**CSS structure** — token-level only; components never branch on theme:

```css
:root { color-scheme: light dark; /* §2a light tokens */ }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* §2b dark tokens */ }
}
:root[data-theme="dark"] { /* §2b dark tokens (explicit override) */ }
```

(The duplicated dark block can be a preprocessor mixin/`@apply` group so it's written once.)

**FOUC guard** — inline `<script>` in `<head>`, before any paint:

```html
<script>
  try {
    const t = localStorage.theme;
    if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
  } catch {}
</script>
```

**Toggle behavior**: clicking sets `documentElement.dataset.theme` and persists to `localStorage`. If the chosen theme matches the OS preference, *remove* the override (delete the localStorage key and the attribute) so the site follows the OS again. Button gets `aria-label="Activer le thème sombre/clair"` reflecting the action, not the state.

**Assets**: none to swap — logo is text, icons are `currentColor` SVG, product preview is token-built HTML. Nothing on the site is a raster image that bakes in a background.

---

Next: carry these tokens into the real build (Tailwind theme or CSS custom properties, per framework choice) and reuse the mockup's markup as the structural reference for the homepage.
