import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
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
  metadataBase: new URL("https://vaga.tn"),
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
    // suppressHydrationWarning is key here to ignore extension-injected attributes
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Move GTM here for better performance and hydration stability */}
        <GoogleTagManager gtmId="GTM-KNPPVR4L" />
      </head>
      <body>
        {children}

        {/* Schema.org JSON-LD */}

      </body>
    </html>
  );
}
