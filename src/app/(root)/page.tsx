import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeatureSection';
import WhyTunisiaSection from '@/components/WhyTunisiaSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'VAGA - Premier CRM SaaS 100% Tunisien',
    description: 'Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens. CRM, facturation, RH et traites - tout en un.',
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
        title: 'VAGA - Premier CRM SaaS 100% Tunisien',
        description: 'Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
        url: 'https://vaga.tn',
        siteName: 'VAGA',
        locale: 'fr_TN',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'VAGA - CRM 100% Tunisien'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VAGA - Premier CRM SaaS 100% Tunisien',
        description: 'Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
        images: ['/twitter-image.jpg']
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
    "description": "Premier CRM SaaS 100% Tunisien pour la gestion client, facturation et RH",
    "url": "https://vaga.tn",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": [
        {
            "@type": "Offer",
            "name": "Plan Basic",
            "price": "69",
            "priceCurrency": "TND",
            "billingIncrement": "P1M"
        },
        {
            "@type": "Offer",
            "name": "Plan Enterprise",
            "price": "139",
            "priceCurrency": "TND",
            "billingIncrement": "P1M"
        }
    ],
    "provider": {
        "@type": "Organization",
        "name": "VAGA",
        "url": "https://vaga.tn",
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
            <div className="min-h-screen bg-black text-white overflow-x-hidden">
                <HeroSection />
                <FeaturesSection />
                <WhyTunisiaSection />
                <PricingSection />
                <CTASection />
            </div>
        </>
    );
}