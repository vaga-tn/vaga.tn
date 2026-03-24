import Link from "next/link"
import Image from "next/image"

export function Footer() {
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
              L'alternative de confiance : votre <strong>ERP</strong> et <strong>logiciel de gestion commerciale</strong> moderne et abordable, basé à Sousse, Tunisie.
            </p>
            <div>
              <p className="text-xs font-thin text-zinc-400">VAGA est un service fourni par MAAK CORP SUARL représenté par AYMEN KHEDHRIYA; société domiciliée à Av. Yasser Arafet, imm 16, 6ème étage, bureau 2, Sahloul 1, Sousse 4054, numéro de TVA: 1847208/C/A/M/000</p>
            </div>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              Ressources
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/changelog" className="transition-colors hover:text-zinc-900">Changelog</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Support</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Contact</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Documentation</Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              Légal
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Mentions Légales</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-zinc-900">Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase text-zinc-900">
              Contact
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
            © {new Date().getFullYear()} VAGA SUITE. L'ARCHITECTE MODERNE.
          </p>
          <div></div>
        </div>
      </div>
    </footer >
  )
}
