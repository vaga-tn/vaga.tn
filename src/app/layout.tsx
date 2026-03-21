import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAGA | ERP & Logiciel de Gestion Commerciale Moderne à Sousse",
  description: "VAGA est l'alternative fiable, moderne et moins chère pour les PME à Sousse, Tunisie. Logiciel ERP, gestion commerciale, de facturation et gestion d'entreprise.",
  keywords: "ERP, logiciel gestion commercial, logiciel gestion entreprise, logiciel facturation, Sousse, Tunisie, abordable, pas cher, PME, moderne, alternative de confiance",
  openGraph: {
    title: "VAGA | ERP & Logiciel de Gestion Commerciale Moderne",
    description: "L'alternative de confiance, moderne et pas chère pour la gestion d'entreprise à Sousse. Facturation, stock et clients.",
    url: "https://vaga.tn",
    siteName: "VAGA",
    locale: "fr_TN",
    type: "website",
  },
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon_dark.png",
      href: "/favicon_dark.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon_light.png",
      href: "/favicon_light.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "VAGA",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "3500.00",
                "priceCurrency": "TND"
              },
              "description": "Logiciel de gestion commerciale, facturation et ERP moderne à prix abordable pour les entreprises en Tunisie.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "MAAK CORP",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Sousse",
                  "postalCode": "4054",
                  "addressCountry": "TN",
                  "streetAddress": "Av. Yasser Arafet, imm 16, 6ème étage, bureau 2, Sahloul 1"
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
}
