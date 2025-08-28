import { Users, FileText, DollarSign, Building, BarChart3, Shield, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Gestion Clients & Fournisseurs",
    description: "Centralisez toutes les informations de vos contacts professionnels. Historique, coordonnées, interactions - tout à portée de main."
  },
  {
    icon: FileText,
    title: "Facturation Automatisée",
    description: "Créez, envoyez et suivez vos factures en quelques clics. Génération automatique conforme aux normes tunisiennes."
  },
  {
    icon: DollarSign,
    title: "Gestion des Traites",
    description: "Gérez vos lettres de change et traites en toute simplicité. Suivi des échéances et génération automatique des documents."
  },
  {
    icon: MessageCircle,
    title: "Notifications SMS pour les clients",
    description: "Envoyez des notifications SMS à vos clients pour les informer de leurs factures / Kembyella"
  },
  {
    icon: Building,
    title: "Module RH Intégré",
    description: "Gérez vos employés, congés, salaires et documents RH. Tout centralisé pour une gestion d'entreprise optimale."
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord",
    description: "Visualisez vos performances en temps réel. KPIs, graphiques et rapports personnalisés pour piloter votre entreprise."
  },
  {
    icon: Shield,
    title: "Données Sécurisées",
    description: "Vos données restent en Tunisie, hébergées localement. Chiffrement SSL, sauvegardes automatiques et conformité RGPD."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 theSharedSectionClasses space-y-12">

      <div className="space-y-4">
        <header>
          <span>VAGA COMMUNITY</span>
          <h2 className="text-4xl font-thin antialiased uppercase"> Une Solution Complète</h2>
        </header>

        <p className="text-base text-gray-600">
          Fini les multiples outils et abonnements. VAGA centralise tout ce dont votre entreprise a besoin
          pour gérer vos clients, vos factures et vos ressources humaines.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => {
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
  );
}