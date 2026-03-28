import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex items-center gap-12 p-4 mx-auto">

        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/vaga.svg" alt="VAGA" width={35} height={35} />
          <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
        </Link>

        <nav className="items-center hidden gap-5 text-sm font-normal transition-colors md:flex text-zinc-600">
          <Link href="/#tarification" className="transition-colors hover:text-brand">
            Tarification
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-brand">
            Contact
          </Link>
          <Link href="/blog" className="transition-colors hover:text-brand">
            Blog
          </Link>
          <Link href="/#bilan-carbone" className="transition-colors hover:text-brand">
            Bilan Carbone
          </Link>
        </nav>

        <nav className="flex items-center gap-5 text-sm font-normal transition-colors md:hidden text-zinc-600">
          <Link href="/#tarification" className="transition-colors hover:text-brand">
            Tarification
          </Link>
          <Link href="/blog" className="transition-colors hover:text-brand">
            Blog
          </Link>
        </nav>

      </div>
    </header>
  )
}
