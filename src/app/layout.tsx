import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import VagaNavbar from "@/components/Navbar";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
            <body className="antialiased bg-white text-black overflow-x-hidden">
                <div className="relative z-10 min-h-screen flex flex-col">
                    <VagaNavbar />
                    <main className="flex-1">{children}</main>
                    <Footer></Footer>
                </div>
            </body>
        </html>
    );
}