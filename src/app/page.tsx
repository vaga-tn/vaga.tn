import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Modules } from "@/components/sections/Modules"
import { Infrastructure } from "@/components/sections/Infrastructure"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-zinc-900 scroll-smooth">
      <Header />
      <Hero />
      <Modules />
      <Infrastructure />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
