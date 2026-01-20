# VAGA Landing Page

A modern, bilingual landing page for VAGA business solutions by MAAK CORP. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean black and white theme with smooth animations and transitions
- **Bilingual Support**: Full internationalization support for English and French
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Product Mockups**: Professional placeholder mockups for all products
- **Contact Form**: Netlify Forms integration for easy contact submissions
- **Product Showcase**: Dedicated pages for each VAGA product:
  - VAGA ERP - Complete Business Management
  - VAGA SM - Support Management Platform
  - VAGA AUTO - Automotive Dealership Suite
  - VAGA IMMO - Real Estate Management

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Forms**: Netlify Forms (no backend required)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The app will redirect to either `/en` or `/fr` based on your locale preference.

## Project Structure

```
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Home page
│   │   └── products/      # Product detail pages
│   │       ├── erp/
│   │       ├── sm/
│   │       ├── auto/
│   │       └── immo/
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx    # Product card component
│   └── ProductDetailPage.tsx  # Product detail template
├── messages/
│   ├── en.json            # English translations
│   └── fr.json            # French translations
├── lib/
│   └── utils.ts           # Utility functions
├── i18n.ts                # i18n configuration
└── middleware.ts          # Next.js middleware for i18n routing
```

## Internationalization

The site supports English and French. To switch languages, click the globe icon in the header.

### Adding Translations

Edit the JSON files in the `messages/` directory:
- `messages/en.json` - English translations
- `messages/fr.json` - French translations

## Customization

### Colors

The theme uses a black and white color scheme defined in `app/globals.css` using CSS variables. Customize the colors by modifying the `:root` and `.dark` selectors.

### Products

To add or modify products:
1. Update translations in `messages/en.json` and `messages/fr.json`
2. Create a new page in `app/[locale]/products/`
3. Add the product card to the home page

## Documentation

- **[CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)** - Complete guide to Netlify Forms setup
- **[MOCKUPS_INFO.md](./MOCKUPS_INFO.md)** - Information about product mockups
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview and features

## Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Netlify](https://app.netlify.com)
3. Build settings are pre-configured in `netlify.toml`
4. Configure form notifications (see CONTACT_FORM_SETUP.md)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Note: If deploying to Vercel, you'll need an alternative form handling solution.

## Next Steps

1. **Analytics**: Add Google Analytics or similar
2. **Real Images**: Replace mockups with actual product screenshots
3. **Animations**: Enhance with framer-motion or similar
4. **CMS**: Integrate with a headless CMS for easy content management
5. **SEO**: Add meta tags and sitemap generation

## License

Copyright © 2026 MAAK CORP. All rights reserved.
