import { Users, FileText, DollarSign, Building, BarChart3, Shield } from 'lucide-react';

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
    <section id="features" className="py-20 relative bg-gradient-to-b from-black to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Une Solution Complète
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fini les multiples outils et abonnements. VAGA centralise tout ce dont votre entreprise a besoin
            pour gérer vos clients, vos factures et vos ressources humaines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}