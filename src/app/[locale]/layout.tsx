import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata.home" })

  return {
    metadataBase: new URL("https://vaga.tn"),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://vaga.tn/${locale}`,
      siteName: "VAGA",
      locale: locale === "fr" ? "fr_TN" : "en_US",
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
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={geistSans.variable} suppressHydrationWarning>
      <body>
        <GoogleTagManager gtmId="GTM-KNPPVR4L" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
