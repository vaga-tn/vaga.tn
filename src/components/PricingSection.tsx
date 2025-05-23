'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  featured?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Essai",
    description: "Découvrez VAGA gratuitement",
    price: 0,
    period: "3 jours gratuits",
    features: [
      "Max 5 clients / fournisseurs",
      "1 compte personnel max",
      "Max 10 traites",
      "KPI sur 30 jours"
    ],
    buttonText: "Commencer l'Essai",
    buttonStyle: "secondary"
  },
  {
    name: "Basic",
    description: "Pour les petites entreprises",
    price: 69,
    period: "par mois",
    features: [
      "Max 30 clients / fournisseurs",
      "3 comptes personnels max",
      "Max 150 traites",
      "KPI sur 365 jours",
      "Module RH inclus",
      "Facturation automatisée"
    ],
    buttonText: "Choisir Basic",
    buttonStyle: "primary",
    featured: true
  },
  {
    name: "Enterprise",
    description: "Pour les grandes entreprises",
    price: 139,
    period: "par mois",
    features: [
      "Clients / fournisseurs illimités",
      "Personnel illimité",
      "Traites illimitées",
      "Déploiement cloud privé",
      "Support dédié",
      "Formation personnalisée"
    ],
    buttonText: "Nous Contacter",
    buttonStyle: "secondary"
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handlePlanSelection = (plan: PricingPlan) => {
    console.log(`Selected plan: ${plan.name}`);
    // Add your plan selection logic here
  };

  return (
    <section id="pricing" className="py-20 relative bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tarifs Transparents
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pas de frais cachés, pas de surprise. Choisissez le plan qui correspond à la taille de votre entreprise.
          </p>
          <div className="mt-8 inline-flex items-center bg-white/10 rounded-full p-1 backdrop-blur-sm">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${!isAnnual ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensuel
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${isAnnual ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                }`}
              onClick={() => setIsAnnual(true)}
            >
              Annuel (-20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 ${plan.featured ? 'bg-white/10 border-white/30 scale-105' : ''
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-2 text-white">
                  {plan.price === 0 ? '0 TND' : `${isAnnual ? Math.round(plan.price * 0.8) : plan.price} TND`}
                </div>
                <div className="text-gray-400">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelection(plan)}
                className={`w-full py-3 rounded-lg transition-all font-semibold ${plan.buttonStyle === 'primary'
                    ? 'bg-white text-black hover:bg-gray-200 shadow-lg'
                    : 'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Tous les prix sont en TND et hors taxes • Garantie satisfait ou remboursé 30 jours
          </p>
          <p className="text-sm text-gray-500">
            Paiement sécurisé par carte bancaire tunisienne ou virement
          </p>
        </div>
      </div>
    </section>
  );
}