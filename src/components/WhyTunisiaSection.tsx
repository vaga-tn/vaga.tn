import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Données Locales",
    description: "Vos données sensibles restent en Tunisie, conformément à la réglementation locale."
  },
  {
    title: "Support en Arabe/Français",
    description: "Une équipe qui comprend votre culture et parle votre langue."
  },
  {
    title: "Conformité Tunisienne",
    description: "Factures, traites et documents conformes aux normes fiscales tunisiennes."
  },
  {
    title: "Prix en Dinars",
    description: "Tarification transparente en TND, sans surprise de change."
  }
];

export default function WhyTunisiaSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pourquoi Choisir une Solution
              <span className="text-red-500"> Tunisienne</span> ?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🇹🇳</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Made in Tunisia</h3>
                <p className="text-gray-400">Avec fierté et expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}