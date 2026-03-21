import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-zinc-50 py-24 border-b border-zinc-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-8">
          Passez à la vitesse supérieure pour <span className="text-brand">votre entreprise</span>
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand/90 transition-colors"
          >
            Démarrer le projet
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-white border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors"
          >
            Demander une démo
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500 flex-wrap">
          <span className="flex items-center gap-2">✓ Hébergement Local Sécurisé</span>
          <span className="flex items-center gap-2">✓ Support Client Réactif</span>
          <span className="flex items-center gap-2">✓ Mise en place rapide</span>
        </div>
      </div>
    </div>
  )
}