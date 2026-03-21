import React from "react"
import { ArrowRight, BarChart3, Users, FileText, Database, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600">
              L'ERP NOUVELLE GÉNÉRATION
            </div>
            
            <h1 className="text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              ERP<br />
              Moderne<br />
              Entreprise<br />
              <span className="italic font-bold">Tunisienne</span>
            </h1>
            
            <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
              Dites adieu aux fichiers Excel éparpillés et aux logiciels obsolètes. Une suite intégrée, souveraine et connectée pour piloter votre croissance.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full">
                DÉMARRER GRATUITEMENT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full">
                VOIR LA DÉMO
              </Button>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none lg:mr-0 pl-4 sm:pl-0">
            {/* Soft decorative glow */}
            <div className="absolute -inset-4 z-0 rounded-3xl bg-zinc-100/50 blur-2xl" />
            
            <div className="relative z-10 w-full rounded-xl border border-border bg-white shadow-2xl xl:shadow-none hover:shadow-2xl transition-shadow duration-500 overflow-hidden ring-1 ring-zinc-100">
              
              {/* Fake Window Header */}
              <div className="flex items-center border-b border-border bg-zinc-50 px-4 py-3 gap-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-zinc-300" />
                  <div className="h-3 w-3 rounded-full bg-zinc-300" />
                  <div className="h-3 w-3 rounded-full bg-zinc-300" />
                </div>
                <div className="mx-auto flex h-6 w-1/3 items-center justify-center rounded-md bg-white border border-border text-[10px] text-zinc-400 font-medium">
                  vaga.tn / app
                </div>
              </div>

              {/* Fake Dashboard Layout */}
              <div className="flex h-[380px]">
                
                {/* Fake Sidebar */}
                <div className="w-16 border-r border-border bg-zinc-50/50 p-3 flex flex-col gap-4 items-center">
                  <div className="h-8 w-8 rounded-md bg-zinc-200 mt-2 mb-4" />
                  <BarChart3 className="h-5 w-5 text-zinc-400" />
                  <Users className="h-5 w-5 text-zinc-400" />
                  <FileText className="h-5 w-5 text-zinc-400" />
                  <Database className="h-5 w-5 text-brand mt-auto mb-4" />
                </div>

                {/* Fake Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-6 bg-white overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-4 w-32 rounded bg-zinc-200 mb-2" />
                      <div className="h-3 w-24 rounded bg-zinc-100" />
                    </div>
                    <div className="h-8 w-24 rounded-full bg-brand/10" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-lg border border-border bg-zinc-50/30 p-4">
                       <div className="h-3 w-16 rounded bg-zinc-200 mb-4" />
                       <div className="flex items-end gap-2">
                         <div className="h-8 w-24 rounded bg-zinc-800" />
                         <div className="h-4 w-12 rounded bg-brand/20" />
                       </div>
                    </div>
                    <div className="h-28 rounded-lg border border-border bg-zinc-50/30 p-4 flex flex-col justify-between">
                       <div className="h-3 w-20 rounded bg-zinc-200" />
                       <div className="flex gap-1 h-12 items-end">
                         <div className="w-4 bg-zinc-200 rounded-sm h-full" />
                         <div className="w-4 bg-zinc-200 rounded-sm h-3/4" />
                         <div className="w-4 bg-zinc-200 rounded-sm h-1/2" />
                         <div className="w-4 bg-brand rounded-sm h-5/6" />
                         <div className="w-4 bg-zinc-200 rounded-sm h-full" />
                       </div>
                    </div>
                  </div>

                  <div className="flex-1 rounded-lg border border-border p-4">
                    <div className="flex items-center gap-4 border-b border-border pb-3 mb-3">
                       <div className="h-6 w-6 rounded-full bg-zinc-200" />
                       <div className="h-3 w-40 rounded bg-zinc-100" />
                       <div className="h-3 w-16 rounded bg-brand/20 ml-auto" />
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="h-6 w-6 rounded-full bg-zinc-200" />
                       <div className="h-3 w-32 rounded bg-zinc-100" />
                       <div className="h-3 w-20 rounded bg-zinc-100 ml-auto" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
