'use client';

import { useState } from 'react';
import {
  Building,
  Shield,
  Users,
  BarChart3,
  Zap,
  Globe,
  Lock,
  Headphones,
  Code,
  Database,
  Cloud,
  Check,
} from 'lucide-react';
import Link from 'next/link';

// Enterprise-specific features
const enterpriseFeatures = {
  infrastructure: [
    {
      icon: Cloud,
      title: "Infrastructure Privée",
      description: "Hébergement dédié sur votre propre infrastructure ou nos serveurs privés sécurisés."
    },
    {
      icon: Globe,
      title: "Domaine Personnalisé",
      description: "Utilisez votre propre nom de domaine pour une intégration parfaite à votre identité."
    },
    {
      icon: Database,
      title: "Contrôle Total des Données",
      description: "Vos données restent sous votre contrôle complet, conformité RGPD et normes tunisiennes."
    },
    {
      icon: Lock,
      title: "Sécurité Renforcée",
      description: "Chiffrement de bout en bout, authentification multi-facteurs, audits de sécurité réguliers."
    }
  ],
  modules: [
    {
      icon: Building,
      title: "Module ERP Complet",
      description: "Gestion intégrée des ressources de l'entreprise : finances, stocks, production, projets."
    },
    {
      icon: Users,
      title: "CRM Avancé",
      description: "Gestion relation client sophistiquée avec scoring, automatisation marketing, analytics."
    },
    {
      icon: BarChart3,
      title: "BI & Analytics",
      description: "Tableaux de bord personnalisés, rapports avancés, prédictions et analyses prédictives."
    },
    {
      icon: Zap,
      title: "Automatisation Avancée",
      description: "Workflows complexes, intégrations API, automatisation des processus métier."
    }
  ],
  support: [
    {
      icon: Headphones,
      title: "Support Dédié",
      description: "Équipe dédiée 24/7, temps de réponse garanti, support technique prioritaire."
    },
    {
      icon: Users,
      title: "Formation Personnalisée",
      description: "Formation sur mesure pour vos équipes, documentation adaptée, accompagnement."
    },
    {
      icon: Code,
      title: "Développement Sur Mesure",
      description: "Fonctionnalités développées spécifiquement pour vos besoins métier."
    },
    {
      icon: Shield,
      title: "SLA Garanti",
      description: "Contrat de niveau de service avec disponibilité 99.9% garantie."
    }
  ]
};

// Testimonials data
const testimonials = [
  {
    company: "Client A",
    logo: "TT",
    quote: "VAGA Enterprise nous a permis de centraliser toute notre gestion client sur une plateforme unique. L'infrastructure privée nous donne la tranquillité d'esprit nécessaire. VAGA Enterprise nous a permis de centraliser toute notre gestion client sur une plateforme unique. L'infrastructure privée nous donne la tranquillité d'esprit nécessaire.",
    author: "— Mohamed Ben Salem, Directeur IT",
    metrics: [
      { value: "40%", label: "réduction des coûts opérationnels" },
      { value: "60%", label: "amélioration de la productivité" }
    ]
  },
  {
    company: "Client B",
    logo: "BT",
    quote: "La conformité réglementaire et la sécurité des données étaient nos priorités. VAGA Enterprise répond parfaitement à nos exigences strictes.",
    author: "— Fatma Karray, Responsable Conformité",
    metrics: [
      { value: "99.9%", label: "disponibilité garantie" },
      { value: "100%", label: "conformité RGPD" }
    ]
  },
  {
    company: "Client C",
    logo: "GP",
    quote: "L'intégration avec nos systèmes existants et le développement de fonctionnalités sur mesure ont transformé notre façon de travailler.",
    author: "— Sami Trabelsi, Directeur Général",
    metrics: [
      { value: "50%", label: "accélération des processus" },
      { value: "30%", label: "réduction des erreurs" }
    ]
  },
  {
    company: "Client C",
    logo: "GP",
    quote: "L'intégration avec nos systèmes existants et le développement de fonctionnalités sur mesure ont transformé notre façon de travailler.",
    author: "— Sami Trabelsi, Directeur Général",
    metrics: [
      { value: "50%", label: "accélération des processus" },
      { value: "30%", label: "réduction des erreurs" }
    ]
  },
  {
    company: "Client C",
    logo: "GP",
    quote: "L'intégration avec nos systèmes existants et le développement de fonctionnalités sur mesure ont transformé notre façon de travailler.",
    author: "— Sami Trabelsi, Directeur Général",
    metrics: [
      { value: "50%", label: "accélération des processus" },
      { value: "30%", label: "réduction des erreurs" }
    ]
  },
  {
    company: "Client C",
    logo: "GP",
    quote: "L'intégration avec nos systèmes existants et le développement de fonctionnalités sur mesure ont transformé notre façon de travailler.",
    author: "— Sami Trabelsi, Directeur Général",
    metrics: [
      { value: "50%", label: "accélération des processus" },
      { value: "30%", label: "réduction des erreurs" }
    ]
  },
  {
    company: "Client D",
    logo: "GP",
    quote: "L'intégration avec nos systèmes existants et le développement de fonctionnalités sur mesure ont transformé notre façon de travailler.",
    author: "— Sami Trabelsi, Directeur Général",
    metrics: [
      { value: "50%", label: "accélération des processus" },
      { value: "30%", label: "réduction des erreurs" }
    ]
  }
];

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState('infrastructure');

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white overflow-hidden relative max-w-customWidth h-screen z-10 mx-auto px-4 lg:px-0 text-center border-r border-l border-black flex items-center justify-center">
        <div className="py-24 md:py-24 lg:py-0">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              VAGA ENTERPRISE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
            Votre Infrastructure<br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Sur Mesure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
            Solution enterprise complète avec hébergement privé, modules avancés et support dédié.
            Contrôle total de vos données, conformité maximale, performance garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              Demander un Devis
            </Link>
            <Link
              href="#features"
              className="border border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all"
            >
              Découvrir les Fonctionnalités
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section id="features" className="py-8 relative bg-white border-r border-l border-black max-w-customWidth mx-auto space-y-12">
        <div className="space-y-4  px-12">
          <header>
            <span>FONCTIONNALITÉS ENTERPRISE</span>
            <h2 className="text-4xl font-thin antialiased uppercase">Solutions Avancées</h2>
          </header>
          <p className="text-base text-gray-600">
            Découvrez les fonctionnalités exclusives de l'édition Enterprise, conçues pour les grandes entreprises
            et organisations avec des besoins spécifiques en termes de sécurité, performance et personnalisation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center border-t border-b border-black">
          {Object.keys(enterpriseFeatures).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all  ${activeTab === tab
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
            >
              {tab === 'infrastructure' && 'Infrastructure'}
              {tab === 'modules' && 'Modules Avancés'}
              {tab === 'support' && 'Support & Services'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-12">
          {enterpriseFeatures[activeTab as keyof typeof enterpriseFeatures].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-lg border border-black/10 p-8 hover:bg-white transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 relative border-r border-l border-black max-w-customWidth mx-auto space-y-12">

        <div className="space-y-4 px-4 lg:px-12">
          <header>
            <span>TÉMOIGNAGES CLIENTS</span>
            <h2 className="text-4xl font-thin antialiased uppercase">Ils Nous Font Confiance</h2>
          </header>
          <p className="text-base text-gray-600">
            Découvrez comment les plus grandes entreprises tunisiennes ont transformé leur gestion
            avec VAGA Enterprise.
          </p>
        </div>

        <div className="masonry-container w-full px-4 lg:px-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="masonry-item bg-black/10 border border-black/10 p-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Company Logo */}
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700 mb-4">
                {testimonial.logo}
              </div>

              {/* Quote */}
              <div className="mb-4">
                <div className="text-4xl text-black mb-2">"</div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-sm text-gray-600">{testimonial.author}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-8 px-12 relative bg-white border-r border-l border-black max-w-customWidth mx-auto space-y-12" >
        <div className="space-y-4">
          <header>
            <span>COMPARAISON</span>
            <h2 className="text-4xl font-thin antialiased uppercase">Community vs Enterprise</h2>
          </header>
          <p className="text-base text-gray-600">
            Découvrez les différences entre l'édition Community et l'édition Enterprise de VAGA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Community */}
          <div className="border border-gray-200 p-8">
            <h3 className="text-2xl font-bold mb-6 text-black">VAGA Community</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Hébergement partagé</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Modules de base</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Support par email</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Mises à jour automatiques</span>
              </li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border border-black p-8 bg-gray-50">
            <div className="mb-4">
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                RECOMMANDÉ
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-black">VAGA Enterprise</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Infrastructure privée dédiée</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Modules ERP/CRM complets</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Support dédié 24/7</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Développement sur mesure</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">SLA garanti 99.9%</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-semibold">Formation personnalisée</span>
              </li>
            </ul>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      <section id="contact" className="py-8 px-12 relative bg-white border-r border-l border-black max-w-customWidth mx-auto space-y-12" >
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-black">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contactez notre équipe enterprise pour un devis personnalisé et une démonstration
            adaptée à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cloud.vaga.tn"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              Demander un Devis
            </Link>
            <Link
              href="/contact"
              className="border border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}