import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"

export async function Footer() {
  const t = await getTranslations("footer")

  return (
    <footer className="pt-16 pb-8 bg-white border-t border-border">
      <div className="container px-4 mx-auto lg:px-0">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-5">

          {/* Brand Column */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/vaga.svg" alt="VAGA" width={35} height={35} className="w-[35px] h-[35px] object-contain" />
              <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
            </div>
            <p className="max-w-sm text-sm text-zinc-500">
              {t("taglinePrefix")}<strong>{t("taglineErp")}</strong>{t("taglineMid")}<strong>{t("taglineSoftware")}</strong>{t("taglineSuffix")}
            </p>
            <div>
              <p className="text-xs font-thin text-zinc-400">{t("legalNote")}</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              {t("resources")}
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/changelog" className="transition-colors hover:text-zinc-900">{t("changelog")}</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("support")}</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("contactHeading")}</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("documentation")}</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              {t("legal")}
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("legalNotice")}</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("privacy")}</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">{t("terms")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              {t("contactHeading")}
            </h4>
            <ul className="text-sm text-zinc-500">
              <li>
                <p>vaga@maak-corp.tn</p>
              </li>
              <li>
                <p>+216 95 593 387</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-zinc-100 md:flex-row">
          <p className="text-xs font-medium text-zinc-400">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
