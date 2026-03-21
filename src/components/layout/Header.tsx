import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="flex h-6 w-6 items-center justify-center bg-zinc-900 rounded-sm">
            <div className="h-3 w-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">VAGA SUITE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#solutions" className="hover:text-zinc-900 transition-colors">
            Solutions
          </Link>
          <Link href="#tarification" className="hover:text-zinc-900 transition-colors">
            Tarification
          </Link>
          <Link href="#deploiement" className="hover:text-zinc-900 transition-colors">
            Déploiement
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">
            Connexion
          </Button>
        </div>
      </div>
    </header>
  )
}
