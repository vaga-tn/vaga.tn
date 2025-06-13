'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';

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

const saasPlans: PricingPlan[] = [
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

const selfHostedPlans: PricingPlan[] = [
  {
    name: "Self-Hosted",
    description: "Installation sur vos serveurs",
    price: 3900,
    period: "paiement unique",
    features: [
      "Installation complète sur vos serveurs",
      "Pas de limites d'utilisation",
      "Contrôle total de vos données",
      "Maintenance mensuelle en option",
      "Pas de mises à jour incluses",
      "Support technique initial"
    ],
    buttonText: "Nous Contacter",
    buttonStyle: "secondary"
  }
];

const resellerPlans: PricingPlan[] = [
  {
    name: "Reseller",
    description: "Devenez revendeur VAGA",
    price: 12900,
    period: "licence complète",
    features: [
      "Code source complet",
      "Formation complète sur l'hébergement",
      "Documentation technique détaillée",
      "Utilisez comme votre propre logiciel",
      "Vendez sous votre marque",
      "Support technique étendu"
    ],
    buttonText: "Nous Contacter",
    buttonStyle: "primary"
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'saas' | 'selfhosted' | 'reseller'>('saas');

  const getCurrentPlans = () => {
    switch (selectedCategory) {
      case 'saas':
        return saasPlans;
      case 'selfhosted':
        return selfHostedPlans;
      case 'reseller':
        return resellerPlans;
      default:
        return saasPlans;
    }
  };

  const formatPrice = (price: number) => {
    if (selectedCategory === 'saas' && isAnnual && price > 0) {
      return Math.round(price * 0.8);
    }
    return price;
  };

  return (
    <section id="pricing" className="py-20 relative bg-gradient-to-b from-white to-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Tarifs Transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pas de frais cachés, pas de surprise. Choisissez la solution qui correspond le mieux à vos besoins.
          </p>

          <div className='flex flex-col gap-4 items-center'>
            {/* Category Selection */}
            <div className="mt-8 inline-flex items-center bg-black/10 rounded-full p-1 backdrop-blur-sm">
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'saas' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                  }`}
                onClick={() => setSelectedCategory('saas')}
              >
                SaaS
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'selfhosted' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                  }`}
                onClick={() => setSelectedCategory('selfhosted')}
              >
                Self-Hosted
              </button>
              <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'reseller' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                  }`}
                onClick={() => setSelectedCategory('reseller')}
              >
                Reseller
              </button>
            </div>

            {/* Monthly/Annual Toggle - Only show for SaaS */}
            {selectedCategory === 'saas' && (
              <div className="mt-4 inline-flex items-center bg-gray-100 rounded-full p-1">
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${!isAnnual ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  onClick={() => setIsAnnual(false)}
                >
                  Mensuel
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${isAnnual ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                    }`}
                  onClick={() => setIsAnnual(true)}
                >
                  Annuel (-20%)
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={`grid gap-8 mx-auto ${getCurrentPlans().length === 1 ? 'md:grid-cols-1 max-w-md' : getCurrentPlans().length === 2 ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3'}`}>
          {getCurrentPlans().map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/95 backdrop-blur-lg border border-black/10 p-8 rounded-3xl hover:bg-white hover:border-black/30 hover:scale-105 transition-all duration-300 shadow-sm ${plan.featured ? 'bg-white border-black/30 scale-105' : ''
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                    {selectedCategory === 'reseller' ? 'RECOMMANDÉ' : 'POPULAIRE'}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-2 text-black">
                  {plan.price === 0 ? '0 TND' : `${formatPrice(plan.price).toLocaleString()} TND`}
                </div>
                <div className="text-gray-600">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <PopupButton id="St89g9gz"
                className={`w-full py-3 rounded-lg transition-all font-semibold ${plan.buttonStyle === 'primary'
                  ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
                  : 'border border-black/30 text-black hover:bg-black/10 backdrop-blur-sm'
                  }`}>
                {plan.buttonText}
              </PopupButton>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {selectedCategory === 'saas' && (
            <>
              <p className="text-gray-600 mb-4">
                Tous les prix sont en TND et hors taxes • Garantie satisfait ou remboursé 30 jours
              </p>
              <p className="text-sm text-gray-500">
                Paiement sécurisé par carte bancaire tunisienne ou virement
              </p>
            </>
          )}
          {selectedCategory === 'selfhosted' && (
            <>
              <p className="text-gray-600 mb-4">
                Installation et configuration incluses • Maintenance mensuelle optionnelle
              </p>
              <p className="text-sm text-gray-500">
                Contactez-nous pour un devis personnalisé et planifier l'installation
              </p>
            </>
          )}
          {selectedCategory === 'reseller' && (
            <>
              <p className="text-gray-600 mb-4">
                Formation et support inclus • Licence perpétuelle
              </p>
              <p className="text-sm text-gray-500">
                Devenez partenaire officiel VAGA et développez votre activité
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}