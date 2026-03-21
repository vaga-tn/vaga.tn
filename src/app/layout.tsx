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
  title: "VAGA - L'architecte moderne de votre infrastructure d'entreprise en Tunisie",
  description: "VAGA est un service fourni par MAAK CORP SUARL représenté par AYMEN KHEDHRIYA; société domiciliée à Av. Yasser Arafet, imm 16, 6ème étage, bureau 2, Sahloul 1, Sousse 4054, numéro de TVA: 1847208/C/A/M/000",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
