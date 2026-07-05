import Image from "next/image"
import dynamic from "next/dynamic"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

const CarbonBadge = dynamic(() => import("@/components/sections/CarbonBadge"))

export async function Footer() {
  const t = await getTranslations("footer")

  return (
    <footer className="relative py-8 text-black bg-white border-t border-zinc-400">

      <div className="container px-4 mx-auto space-y-8 lg:px-0">

        <div className="flex flex-col gap-6 lg:flex-row w-fit">

          {/* Brand Column */}
          <div className="flex flex-col items-start max-w-2xl gap-8">
            <div className="flex items-center gap-2">
              <Image src="/vaga.svg" alt="VAGA" width={35} height={35} className="w-[35px] h-[35px] object-contain" />
              <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
            </div>
            <p className="text-base ">
              {t("taglinePrefix")}<strong>{t("taglineErp")}</strong>{t("taglineMid")}<strong>{t("taglineSoftware")}</strong>{t("taglineSuffix")}
            </p>
            <p className="text-sm">{t("legalNote")}</p>
            <CarbonBadge />
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase">
              {t("resources")}
            </h4>
            <ul className="space-y-3 text-sm ">
              <li>
                <Link href="/changelog" className="transition-colors hover:">{t("changelog")}</Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:">{t("contactHeading")}</Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:">{t("legalNotice")}</Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:">{t("privacy")}</Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:">{t("terms")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase">
              {t("contactHeading")}
            </h4>
            <ul className="text-sm ">
              <li>
                <p>vaga@maak-corp.tn</p>
              </li>
              <li>
                <p>+216 95 593 387</p>
              </li>
            </ul>
          </div>

        </div>

        <p className="text-xs text-center font-regular">&copy; {new Date().getFullYear()} {t("copyright")}</p>

      </div>

      <Image src="/fennec_sitting.webp" alt="VAGA" width={200} height={354} loading="lazy" className="absolute bottom-0 right-0 z-10 object-contain opacity-50 lg:opacity-100" />

    </footer>
  )
}
