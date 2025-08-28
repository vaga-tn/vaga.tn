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
    period: "5 jours gratuits",
    features: [
      "Accès complet à toutes les fonctionnalités",
      "Support par email",
      "Aucune limitation pendant l'essai",
      "Configuration d'entreprise incluse"
    ],
    buttonText: "Commencer l'Essai",
    buttonStyle: "secondary"
  },
  {
    name: "Standard",
    description: "Solution complète sans limites",
    price: 42,
    period: "par mois",
    features: [
      "Clients / fournisseurs illimités",
      "Personnel illimité",
      "Traites illimitées",
      "Comptes bancaires illimités",
      "KPI avancés",
      "Gestion personnel inclus",
      "Facturation automatisée",
      "Devis et factures personnalisés",
      "Support par email ou téléphone",
      "Mises à jour incluses",
      "Application mobile pour clients (+20 TND/mois)",
      "Notifications SMS pour les clients (+10 TND/mois)",
      "Intégration avec vos outils existants (sure devis)",
    ],
    buttonText: "Choisir Standard",
    buttonStyle: "primary",
    featured: true
  }
];

const enterprisePlans: PricingPlan[] = [
  {
    name: "Enterprise Edition",
    description: "Hébergement privé sous votre domaine",
    price: 0,
    period: "sur devis",
    features: [
      "Hébergement sur infrastructure privée",
      "Domaine personnalisé",
      "Aucune limite d'utilisation",
      "Contrôle total de vos données",
      "Module ERP complet",
      "Module CRM complet",
      "Module de gestion des ressources humaines",
      "Support dédié prioritaire",
      "Formation personnalisée",
      "Développement de fonctionnalités sur mesure",
      "Intégration avec vos outils existants",
      "Application mobile personnalisée",
      "SLA garanti 99.9%",
      "Sauvegarde et sécurité renforcée"
    ],
    buttonText: "Nous Contacter",
    buttonStyle: "primary",
    featured: true
  }
];

const resellerPlans: PricingPlan[] = [
  {
    name: "Reseller",
    description: "Devenez revendeur VAGA",
    price: 42900,
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
  const [selectedCategory, setSelectedCategory] = useState<'saas' | 'enterprise' | 'reseller'>('saas');

  const getCurrentPlans = () => {
    switch (selectedCategory) {
      case 'saas':
        return saasPlans;
      case 'enterprise':
        return enterprisePlans;
      case 'reseller':
        return resellerPlans;
      default:
        return saasPlans;
    }
  };

  return (
    <section id="pricing" className="py-20 theSharedSectionClasses space-y-12">

      <div className="space-y-4">
        <header>
          <span>TARIFS</span>
          <h2 className="text-4xl font-thin antialiased uppercase">Tarifs Transparents</h2>
        </header>

        <p className="text-base text-gray-600">
          Pas de frais cachés, pas de surprise. Choisissez la solution qui correspond le mieux à vos besoins.
        </p>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        {/* Category Selection */}
        <div className="inline-flex items-center bg-black/10 p-1">
          <button
            className={`px-6 py-2 font-medium transition-all ${selectedCategory === 'saas' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            onClick={() => setSelectedCategory('saas')}
          >
            SaaS
          </button>
          <button
            className={`px-6 py-2 font-medium transition-all ${selectedCategory === 'enterprise' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            onClick={() => setSelectedCategory('enterprise')}
          >
            Enterprise
          </button>
          <button
            className={`px-6 py-2 font-medium transition-all ${selectedCategory === 'reseller' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            onClick={() => setSelectedCategory('reseller')}
          >
            Reseller
          </button>
        </div>
      </div>

      <div className={`grid gap-8 mx-auto ${getCurrentPlans().length === 1 ? 'md:grid-cols-1 max-w-md' : getCurrentPlans().length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3'}`}>
        {getCurrentPlans().map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white  border border-black p-8 ${plan.featured ? 'bg-white border-black/30 scale-105' : ''
              }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold">
                  {selectedCategory === 'reseller' ? 'RECOMMANDÉ' : selectedCategory === 'enterprise' ? 'PREMIUM' : 'POPULAIRE'}
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="text-4xl font-bold mb-2 text-black">
                {plan.price === 0 && selectedCategory !== 'enterprise' ? '0 TND' :
                  selectedCategory === 'enterprise' ? 'Sur Devis' :
                    `${plan.price.toLocaleString()} TND`}
              </div>
              <small className="text-gray-600">{plan.period}</small>
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
        {selectedCategory === 'enterprise' && (
          <>
            <p className="text-gray-600 mb-4">
              Infrastructure dédiée • Sécurité renforcée • Support prioritaire
            </p>
            <p className="text-sm text-gray-500">
              Contactez-nous pour un devis personnalisé adapté à vos besoins
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
    </section>
  );
}