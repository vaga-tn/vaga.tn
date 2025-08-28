import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeatureSection';
import WhyTunisiaSection from '@/components/WhyTunisiaSection';
import PricingSection from '@/components/PricingSection';
import GoogleAnalytics from '@/utils/GoogleAnalytics';
import TawkScript from '@/utils/TawkTo';
import GuideSection from '@/components/GuideSection';
import NicheSection from '@/components/Niche';

export const metadata: Metadata = {
    title: 'VAGA - Premier SaaS 100% Tunisien',
    description: 'Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
    keywords: [
        'CRM Tunisie',
        'logiciel gestion client Tunisie',
        'facturation Tunisie',
        'SaaS Tunisien',
        'gestion entreprise Tunisie',
        'traites lettres de change',
        'RH Tunisie',
        'données locales Tunisie'
    ],
    openGraph: {
        title: 'VAGA - Premier SaaS 100% Tunisien',
        description: 'Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
        url: 'https://vaga.tn',
        siteName: 'VAGA',
        locale: 'fr_TN',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VAGA - ERP 100% Tunisien'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VAGA - Premier SaaS 100% Tunisien',
        description: 'Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
        images: ['/twitter-image.png']
    },
    alternates: {
        canonical: 'https://vaga.tn'
    }
};

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VAGA",
    "description": "Solution complète de gestion clients, inventaire, finance, conçue par des Tunisiens, pour les entrepreneurs tunisiens.",
    "url": "https://vaga.tn",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": [
        {
            "@type": "Offer",
            "name": "Plan Basic",
            "price": "42",
            "priceCurrency": "TND",
            "billingIncrement": "P1M"
        },
        {
            "@type": "Offer",
            "name": "Plan Enterprise",
            "price": "sure devis",
            "priceCurrency": "TND",
            "billingIncrement": "P1M"
        }
    ],
    "provider": {
        "@type": "Organization",
        "name": "MAAK CORP",
        "url": "https://maak-corp.tn",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TN",
            "addressLocality": "Tunis"
        }
    },
    "featureList": [
        "Gestion clients et fournisseurs",
        "Facturation automatisée",
        "Gestion des traites",
        "Module RH intégré",
        "Tableaux de bord",
        "Données sécurisées en Tunisie"
    ]
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <div className="min-h-screen bg-white text-black overflow-x-hidden">
                <HeroSection />
                <NicheSection />
                <GuideSection />
                <FeaturesSection />
                <WhyTunisiaSection />
                <PricingSection />
                <GoogleAnalytics />
                <TawkScript />
            </div>
        </>
    );
}