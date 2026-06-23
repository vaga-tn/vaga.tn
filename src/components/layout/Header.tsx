import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import LocaleSwitcher from "./LocaleSwitcher"

export async function Header() {
  const t = await getTranslations("header")

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur">
      <div className="container flex items-center justify-between p-4 mx-auto">

        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/vaga.svg" alt="VAGA" width={35} height={35} />
          <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
        </Link>

        <nav className="items-center hidden gap-5 text-sm font-normal transition-colors md:flex text-zinc-600">
          <Link href="/#tarification" className="transition-colors hover:text-brand">
            {t("pricing")}
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-brand">
            {t("contact")}
          </Link>
          <Link href="/blog" className="transition-colors hover:text-brand">
            {t("blog")}
          </Link>
          <Link href="/#bilan-carbone" className="transition-colors hover:text-brand">
            {t("carbonReport")}
          </Link>
          <Link href="/changelog" className="transition-colors hover:text-brand">
            {t("changelog")}
          </Link>
        </nav>

        <nav className="flex items-center gap-5 text-sm font-normal transition-colors md:hidden text-zinc-600">
          <Link href="/#tarification" className="transition-colors hover:text-brand">
            {t("pricing")}
          </Link>
          <Link href="/blog" className="transition-colors hover:text-brand">
            {t("blog")}
          </Link>
        </nav>

        <div>
          <LocaleSwitcher />
        </div>

      </div>
    </header>
  )
}
