import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import VagaNavbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "VAGA - Premier CRM SaaS 100% Tunisien",
    description: "Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens. CRM, facturation, RH et traites - tout en un.",
    keywords: [
        'CRM Tunisie',
        'logiciel gestion client Tunisie',
        'facturation Tunisie',
        'SaaS Tunisien',
        'gestion entreprise Tunisie',
        'traites lettres de change',
        'RH Tunisie',
        'données locales Tunisie',
        'VAGA CRM'
    ],
    openGraph: {
        title: 'VAGA - Premier CRM SaaS 100% Tunisien',
        description: 'Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
        url: 'https://vaga.tn',
        siteName: 'VAGA',
        locale: 'fr_TN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VAGA - Premier CRM SaaS 100% Tunisien',
        description: 'Solution complète de gestion client conçue par des Tunisiens, pour les entrepreneurs tunisiens.',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-poppins antialiased bg-white text-black overflow-x-hidden">
                {/* Background Elements - Fixed positioning for consistent backdrop */}
                <div className="fixed inset-0 -z-10">
                    {/* Primary gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* Main content wrapper */}
                <div className="relative z-10 min-h-screen flex flex-col">
                    {/* Navigation will be inserted here */}
                    <VagaNavbar />

                    {/* Main content area */}
                    <main className="flex-1">
                        {children}
                    </main>

                    {/* Footer will be inserted here */}
                    <Footer></Footer>
                </div>

                {/* Static background shapes - no animation */}
                <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                    {/* Shape 1 - Top left */}
                    <div
                        className="absolute w-20 h-20 bg-black/5 rounded-full blur-xl"
                        style={{ left: '10%', top: '20%' }}
                    />

                    {/* Shape 2 - Top right */}
                    <div
                        className="absolute w-32 h-32 bg-black/10 rounded-full blur-2xl"
                        style={{ right: '15%', top: '10%' }}
                    />

                    {/* Shape 3 - Center right */}
                    <div
                        className="absolute w-16 h-16 bg-black/5 rounded-full blur-lg"
                        style={{ left: '70%', top: '60%' }}
                    />

                    {/* Shape 4 - Bottom left */}
                    <div
                        className="absolute w-24 h-24 bg-black/10 rounded-full blur-xl"
                        style={{ left: '20%', bottom: '20%' }}
                    />

                    {/* Shape 5 - Bottom center */}
                    <div
                        className="absolute w-28 h-28 bg-black/5 rounded-full blur-2xl"
                        style={{ left: '50%', bottom: '30%' }}
                    />
                </div>
            </body>
        </html>
    );
}