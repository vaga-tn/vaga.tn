import { Server, Cloud } from "lucide-react"
import Image from "next/image"

export function Infrastructure() {
  return (
    <section id="deploiement" className="py-24">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-xl relative">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                Souveraineté des données :<br />
                Infrastructure de précision
              </h2>
              <p className="text-lg text-zinc-600">
                Vos données sont stratégiques. Nous vous offrons la liberté totale de déploiement pour répondre à vos exigences de sécurité.
              </p>
            </div>

            <div className="space-y-6">
              {/* On-Premise */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-white shadow-sm">
                    <Server className="h-5 w-5 text-zinc-900" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">ON-PREMISE</h3>
                </div>
                <p className="text-sm text-zinc-600 pl-13 ml-13 border-l-2 border-transparent">
                  Installation locale sur serveur dédié. Indépendance totale vis-à-vis d'Internet et contrôle physique absolu.
                </p>
              </div>

              {/* Cloud Sécurisé */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-white shadow-sm">
                    <Cloud className="h-5 w-5 text-zinc-900" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900">CLOUD SÉCURISÉ</h3>
                </div>
                <p className="text-sm text-zinc-600 pl-13 ml-13 border-l-2 border-transparent">
                  Hébergement haute disponibilité avec sauvegardes automatiques et accès sécurisé par VPN partout dans le monde.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image/Mockup */}
          <div className="text-center flex items-center justify-center">
            <Image src="/fennec_infra.webp" alt="Fennec VAGA" loading="eager" width={400} height={400} className="w-[400px] h-[400px] object-contain" />
          </div>

        </div>
      </div>
    </section>
  )
}
