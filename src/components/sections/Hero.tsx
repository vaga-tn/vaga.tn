import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

export async function Hero() {
  const t = await getTranslations("hero")

  return (
    <section id="hero-section" className="relative w-full bg-gradient-to-r from-[#F1F1F4] to-[#EAE8EF]">
      <div className="flex flex-col items-start justify-center h-full gap-8 sectionWrapper">

        <h1 className="z-20 text-5xl font-normal text-left tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.1]">
          {t("title")}
          <br />
          {t("titleLine2Prefix")}<span className="paint-highlight">{t("titleHighlight")}</span>
        </h1>

        <p className="z-20 max-w-3xl text-lg font-thin text-left text-black">
          {t("subtitlePrefix")}<strong>{t("subtitleBold1")}</strong>{t("subtitleMid")}<strong>{t("subtitleBold2")}</strong>{t("subtitleSuffix")}
        </p>

        <div className="z-20 flex flex-wrap items-center">
          <Link href="/#contact" className="flex items-center px-4 py-2 border rounded-full cursor-pointer bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 h-9">
            {t("cta")}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      <Image src="/fennec_hero.webp" alt="VAGA" width={354} height={354} priority className="absolute bottom-0 right-0 z-10 object-contain opacity-50 lg:opacity-100" />
    </section>
  )
}
