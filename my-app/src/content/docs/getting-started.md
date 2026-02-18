---
title: Getting Started
order: 1
description: How to set up and run this application for the first time.
---

# Getting Started

This guide will walk you through setting up and running the project locally.

## Prerequisites

- **Node.js** 20 or later
- **npm** 10 or later

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
npm install
```

## Running the Development Server

Start the dev server with:

```bash
npx nx serve my-app
```

The application will be available at `http://localhost:4200`. The server supports hot module replacement (HMR) — changes to files are reflected instantly without a full reload.

## Building for Production

```bash
npx nx build my-app
```

The output is placed in `dist/my-app/`. The build includes both client and server bundles for SSR.

## Adding More Documentation

To add a new documentation page, create a `.md` file in `src/content/docs/` with frontmatter like this:

```markdown
---
title: My New Page
order: 2
description: A short description shown in the docs index.
---
```

The `order` field controls its position in the docs sidebar.
