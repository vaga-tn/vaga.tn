import React from "react";

const bottleneckSteps = [
  "Attendre l'expédition d'une clé USB",
  "Vous avez besoin d'un ordinateur avec Windows",
  "Vous devez acheter différentes clés USB pour différentes fonctionnalités",
  "ne fonctionne que sur les ordinateurs",
];

const saasSteps = [
  "Vous n'avez pas besoin d'installer de logiciel",
  "Vous pouvez l'utiliser sur votre téléphone, tablette ou ordinateur",
  "Vous pouvez accéder à vos imprimantes à proximité de votre bureau",
  "Collaboration avec votre équipe instantanée",
  "Mise à jour automatique & support",
];

export default function WhyTunisiaSection() {
  return (
    <section className="py-20 theSharedSectionClasses space-y-12">

      <div className="space-y-4">
        <header>
          <span>AVANTAGES</span>
          <h2 className="text-4xl font-thin antialiased uppercase">Pourquoi VAGA?</h2>
        </header>

        <p className="text-base text-gray-600">
          VAGA est une solution complète pour les entreprises tunisiennes. Elle est conçue pour répondre aux besoins de vos entreprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  border border-black overflow-hidden">
        {/* Left: Bottleneck */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-black">Utiliser une solution traditionnelle</h3>
          <ol className="space-y-3">
            {bottleneckSteps.map((step, idx) => (
              <li key={idx} className="flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-3 rounded-full bg-gray-200 text-gray-700 font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        {/* Right: Our Solution */}
        <div className="p-6 bg-white border-l border-black">
          <h3 className="text-xl font-semibold mb-4 text-black">Ou utiliser <span className="text-red-500">VAGA</span></h3>
          <ol className="space-y-3">
            {saasSteps.map((step, idx) => (
              <li key={idx} className="flex items-center">
                <span className="inline-flex items-center justify-center w-7 h-7 mr-3 rounded-full bg-red-100 text-red-600 font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}