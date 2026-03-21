import { Server, Cloud } from "lucide-react"

export function Infrastructure() {
  return (
    <section id="deploiement" className="py-24 bg-zinc-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-xl">
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
          <div className="relative">
            {/* Soft decorative glow behind the server */}
            <div className="absolute inset-0 z-0 bg-brand/5 blur-3xl rounded-full" />

            <div className="relative z-10 mx-auto w-full max-w-md aspect-[4/5] rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* Minimalist Server Illustration */}
              <div className="w-2/3 h-3/4 flex flex-col gap-2 relative">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-full bg-zinc-800 rounded border border-zinc-700/50 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${i % 3 === 0 ? 'bg-brand' : 'bg-brand/40'} animate-pulse`} style={{ animationDelay: `${i * 150}ms` }} />
                      <div className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? 'bg-brand/80' : 'bg-brand/20'} animate-pulse`} style={{ animationDelay: `${i * 200}ms` }} />
                    </div>
                    <div className="w-8 h-1 bg-zinc-700 rounded-full" />
                  </div>
                ))}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
