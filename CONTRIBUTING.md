# Contributing & Project Structure

This document explains the repo layout and how to add new blog posts, documentation pages, and UI routes.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [AnalogJS](https://analogjs.org) — Angular meta-framework with SSR |
| Build tool | [Vite](https://vitejs.dev) |
| Monorepo | [Nx](https://nx.dev) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| Content | `@analogjs/content` — markdown files with YAML frontmatter |
| Routing | File-based routing via `@analogjs/router` |

---

## Repo Layout

```
vaga.tn/                          ← Nx workspace root
├── my-app/                       ← The main application
│   ├── src/
│   │   ├── content/              ← All markdown content (blog posts, docs)
│   │   │   ├── blog/             ← One .md file = one blog post
│   │   │   └── docs/             ← One .md file = one documentation page
│   │   ├── app/
│   │   │   ├── models/
│   │   │   │   └── content.models.ts   ← TypeScript interfaces for frontmatter
│   │   │   ├── pages/            ← File-based routes (see below)
│   │   │   ├── app.config.ts     ← Angular providers (client)
│   │   │   └── app.config.server.ts    ← Angular providers (SSR)
│   │   ├── server/
│   │   │   └── routes/api/       ← API endpoints (h3/Nitro)
│   │   └── styles.css            ← Global styles + Tailwind + Prism theme
│   ├── vite.config.ts            ← Vite + AnalogJS config
│   ├── tailwind.config.js        ← Tailwind content paths
│   └── tsconfig.json             ← TypeScript config (includes @app/* alias)
├── my-app-e2e/                   ← Playwright e2e tests
└── nx.json                       ← Nx workspace config
```

---

## File-Based Routing

Routes are driven entirely by the file structure under `my-app/src/app/pages/`. You never configure routes manually.

### Naming conventions

| File pattern | URL | Notes |
|---|---|---|
| `index.page.ts` | `/` (of its folder) | Default route for that directory |
| `about.page.ts` | `/about` | Named route |
| `[slug].page.ts` | `/:slug` | Dynamic segment — param name = filename inside `[]` |
| `(group).page.ts` | *(no URL segment)* | Layout wrapper — renders `<router-outlet>` for its children |

### Current route tree

```
pages/
├── index.page.ts                 →  /              (landing page, no sidebar)
└── (app).page.ts                 →  layout with left nav sidebar
    └── (app)/
        ├── blog.page.ts          →  passthrough layout (just <router-outlet>)
        │   └── blog/
        │       ├── index.page.ts →  /blog          (card grid list)
        │       └── [slug].page.ts→  /blog/:slug    (post detail)
        ├── docs.page.ts          →  passthrough layout (just <router-outlet>)
        │   └── docs/
        │       ├── index.page.ts →  /docs          (doc index list)
        │       └── [slug].page.ts→  /docs/:slug    (doc detail + sidebar)
        └── changelog.page.ts     →  /changelog
```

> **Important:** Whenever you have both a `foo.page.ts` and a `foo/` directory at the same level,
> `foo.page.ts` **must** be a layout component that renders `<router-outlet>`.
> The actual page content for `/foo` goes in `foo/index.page.ts`.

### TypeScript path alias

Use `@app/*` anywhere to reference files under `src/app/` without counting `../` levels:

```ts
import { BlogPostAttributes } from '@app/models/content.models';
```

---

## Adding a Blog Post

1. **Create a markdown file** in `my-app/src/content/blog/`:

   ```
   my-app/src/content/blog/my-new-post.md
   ```

2. **Add frontmatter** at the top of the file:

   ```markdown
   ---
   title: My New Post
   date: 2026-03-01
   description: A short summary shown on the blog listing card.
   slug: my-new-post
   author: Your Name
   tags:
     - announcements
   ---

   # My New Post

   Your content here. Standard markdown works: **bold**, _italic_, `code`, links, lists, headings, etc.

   ## Code blocks are syntax-highlighted

   ```typescript
   const hello = 'world';
   ```
   ```

3. **That's it.** The post appears automatically on `/blog` and is reachable at `/blog/my-new-post`.

### Blog frontmatter reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Displayed as the post heading and card title |
| `date` | string (ISO 8601) | ✅ | Used for sorting (newest first). Format: `YYYY-MM-DD` |
| `description` | string | ✅ | Shown on the listing card and below the post title |
| `slug` | string | ✅ | URL slug — must match the filename for consistency |
| `author` | string | optional | Shown below the description on the detail page |
| `tags` | string[] | optional | Not rendered yet, available for future filtering |
| `draft` | boolean | optional | Set to `true` to hide from listings without deleting the file |

---

## Adding a Documentation Page

1. **Create a markdown file** in `my-app/src/content/docs/`:

   ```
   my-app/src/content/docs/configuration.md
   ```

2. **Add frontmatter** at the top:

   ```markdown
   ---
   title: Configuration
   order: 2
   description: How to configure the application for your environment.
   ---

   # Configuration

   Your content here.
   ```

3. **That's it.** The page appears in:
   - The `/docs` index listing
   - The sidebar on every `/docs/:slug` page (sorted by `order`)
   - Accessible at `/docs/configuration`

### Docs frontmatter reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Displayed as the page heading and sidebar link |
| `order` | number | ✅ | Controls sidebar sort order — lower numbers appear first |
| `description` | string | ✅ | Shown on the `/docs` index card |
| `draft` | boolean | optional | Set to `true` to hide the page without deleting it |

> **Note:** Doc filenames do not need a `slug` field — the filename itself (without `.md`) becomes the URL slug.
> E.g. `configuration.md` → `/docs/configuration`.

---

## Adding a New UI Route

For pages that don't need markdown (e.g. a pricing page, dashboard, etc.):

1. Create a `.page.ts` file inside `my-app/src/app/pages/`:

   ```ts
   // my-app/src/app/pages/(app)/pricing.page.ts
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-pricing-page',
     standalone: true,
     template: `
       <div class="p-8">
         <h1 class="text-4xl font-bold">Pricing</h1>
       </div>
     `,
   })
   export default class PricingPageComponent {}
   ```

   Placing it inside `(app)/` wraps it with the left navigation sidebar automatically.

2. **Add a nav link** in `my-app/src/app/pages/(app).page.ts` if you want it in the sidebar.

3. The route `/pricing` is now live. No router configuration needed.

---

## Adding an API Endpoint

Server routes live in `my-app/src/server/routes/`. The folder structure maps to URL paths.

```ts
// my-app/src/server/routes/api/v1/hello.ts  →  GET /api/v1/hello
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return { message: 'Hello World' };
});
```

---

## Markdown Styling

Rendered markdown content is wrapped in a `<div class="md-content">`. Styles for headings, paragraphs, code blocks, etc. live in `my-app/src/styles.css` under the `/* Markdown content styles */` section.

Syntax highlighting uses the **Prism Tomorrow** theme, loaded via:
```css
@import 'prismjs/themes/prism-tomorrow.css';
```

To change the theme, replace that import with any other theme from the `prismjs/themes/` directory.

---

## Development Commands

Run from the **workspace root** (`vaga.tn/`):

```bash
# Start dev server (http://localhost:4200)
npx nx serve my-app

# Production build
npx nx build my-app

# Run unit tests
npx nx test my-app

# Run e2e tests
npx nx e2e my-app-e2e

# View all available Nx targets
npx nx show project my-app
```

---

## SSR Notes

- All pages are server-side rendered by default via AnalogJS + Nitro.
- `injectContent()` returns an `Observable` — always use the `async` pipe in templates. Angular's `TransferState` serialises the result from SSR to the client so content is never fetched twice.
- `injectContentFiles()` is synchronous and SSR-safe — it reads from a build-time registry.
- The landing page (`pages/index.page.ts`) is deliberately placed **outside** the `(app)` layout group so it renders full-width with no sidebar.
