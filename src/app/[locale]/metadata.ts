import type { Metadata } from 'next';
import { seoConfig } from '@/lib/seo';

export function generateMetadata(locale: string): Metadata {
  const isEnglish = locale === 'en';

  const baseKeywords = [
    ...seoConfig.keywords.primary,
    ...seoConfig.keywords.secondary,
    ...seoConfig.keywords.industries,
  ];

  const title = isEnglish
    ? 'VAGA - Business Management Software | ERP Solutions Tunisia'
    : 'VAGA - Logiciel Gestion Commerciale | ERP Tunisie Sousse';

  const description = isEnglish
    ? 'Professional ERP software solutions for businesses in Sousse, Tunisia. Manage commerce, real estate, automotive, and support services with VAGA by MAAK CORP.'
    : 'Solutions ERP professionnelles pour entreprises à Sousse, Tunisie. Logiciel de gestion commerciale, facturation électronique, immobilier et automobile par MAAK CORP.';

  return {
    title: {
      default: title,
      template: `%s | ${seoConfig.siteName}`,
    },
    description,
    keywords: baseKeywords,
    authors: [{ name: seoConfig.company.legalName, url: seoConfig.siteUrl }],
    creator: seoConfig.company.legalName,
    publisher: seoConfig.company.legalName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${seoConfig.siteUrl}/${locale}`,
      languages: {
        'en': `${seoConfig.siteUrl}/en`,
        'fr': `${seoConfig.siteUrl}/fr`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      alternateLocale: locale === 'en' ? 'fr_FR' : 'en_US',
      url: `${seoConfig.siteUrl}/${locale}`,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: `${seoConfig.siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${seoConfig.siteUrl}/og-image.png`],
      creator: '@__aymkh',
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // other: 'your-other-verification-code',
    },
  };
}
