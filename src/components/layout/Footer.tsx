import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/vaga.svg" alt="VAGA" width={35} height={35} />
              <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm">
              L'architecte moderne de votre infrastructure d'entreprise en Tunisie. Expertise locale, technologie mondiale.
            </p>
            <div>
              <p className="text-xs text-zinc-400 font-thin">VAGA est un service fourni par MAAK CORP SUARL représenté par AYMEN KHEDHRIYA; société domiciliée à Av. Yasser Arafet, imm 16, 6ème étage, bureau 2, Sahloul 1, Sousse 4054, numéro de TVA: 1847208/C/A/M/000</p>
            </div>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm tracking-widest uppercase">
              Ressources
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/changelog" className="hover:text-zinc-900 transition-colors">Changelog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Support</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Documentation</Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm tracking-widest uppercase">
              Légal
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Mentions Légales</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400 font-medium">
            © {new Date().getFullYear()} VAGA SUITE. L'ARCHITECTE MODERNE.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            {/* Social flags or language links could go here */}
            <div className="h-4 w-4 bg-zinc-200 rounded-full" />
            <div className="h-4 w-4 bg-zinc-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer >
  )
}
