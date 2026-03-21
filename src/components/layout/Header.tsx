import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex items-center p-4 gap-12">

        <div className="flex items-center gap-2">
          <Image src="/vaga.svg" alt="VAGA" width={35} height={35} />
          <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm font-normal text-zinc-600 transition-colors">
          <Link href="#solutions" className="hover:text-brand transition-colors">
            Solutions
          </Link>
          <Link href="#modules" className="hover:text-brand transition-colors">
            Applications
          </Link>
          <Link href="#tarification" className="hover:text-brand transition-colors">
            Tarification
          </Link>
          <Link href="#deploiement" className="hover:text-brand transition-colors">
            Déploiement
          </Link>
          <Link href="#contact" className="hover:text-brand transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-brand transition-colors">
            Blog
          </Link>
          <Link href="/changelog" className="hover:text-brand transition-colors">
            Changelog
          </Link>
        </nav>

      </div>
    </header>
  )
}
