import PricingSection from '@/components/PricingSection'
import React from 'react'

function TermsOfServicePage() {
  return (
    <div className="max-w-7xl mx-auto bg-white  overflow-hidden mt-32">

      {/* Header Section */}
      <div className="bg-black text-white px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Conditions d'Utilisation
          </h1>
          <div className="text-lg text-gray-300 mb-2">VAGA ERP</div>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Dernière mise à jour : 14 juin 2025
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-12 space-y-10">

        {/* Introduction */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <p className="text-red-800 font-semibold text-lg mb-2">
            ACCORD JURIDIQUE CONTRAIGNANT
          </p>
          <p className="text-red-700">
            IL S'AGIT D'UN ACCORD ENTRE VOUS OU L'ENTITÉ QUE VOUS REPRÉSENTEZ (ci-après «Vous» ou «Votre») ET MAAK CORP SUARL RÉGISSANT VOTRE UTILISATION DE VAGA ERP.
          </p>
        </div>

        {/* Table of Contents */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Sommaire
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li><a href="#parties" className="text-blue-600 hover:text-blue-800">1. Parties de cet accord</a></li>
                <li><a href="#acceptation" className="text-blue-600 hover:text-blue-800">2. Acceptation des conditions</a></li>
                <li><a href="#description" className="text-blue-600 hover:text-blue-800">3. Description du service</a></li>
                <li><a href="#abonnement" className="text-blue-600 hover:text-blue-800">4. Abonnement au service</a></li>
                <li><a href="#paiements" className="text-blue-600 hover:text-blue-800">5. Frais et paiements</a></li>
                <li><a href="#restrictions" className="text-blue-600 hover:text-blue-800">6. Restrictions d'utilisation</a></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li><a href="#propriete" className="text-blue-600 hover:text-blue-800">7. Propriété des données</a></li>
                <li><a href="#garanties" className="text-blue-600 hover:text-blue-800">8. Exclusion de garanties</a></li>
                <li><a href="#responsabilite" className="text-blue-600 hover:text-blue-800">9. Limitation de responsabilité</a></li>
                <li><a href="#arbitrage" className="text-blue-600 hover:text-blue-800">10. Arbitrage</a></li>
                <li><a href="#resiliation" className="text-blue-600 hover:text-blue-800">11. Suspension et résiliation</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1: Parties */}
        <section id="parties">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            1. Parties de cet accord
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700">
              Cet accord comprend les termes et conditions suivants (ci-après les «Conditions générales») et les conditions générales, le cas échéant, spécifiques à l'utilisation de services individuels (ci-après les «Conditions spécifiques au service»). Les Conditions Générales et les Conditions Spécifiques du Service sont collectivement appelées les «Conditions». En cas de conflit entre les conditions générales et les conditions spécifiques au service, les conditions spécifiques au service prévaudront.
            </p>
          </div>
        </section>

        {/* Section 2: Acceptation */}
        <section id="acceptation">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            2. Acceptation des conditions
          </h2>
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Vous devez être majeur pour conclure un accord contraignant afin d'accepter les Conditions. Si vous n'acceptez pas les conditions générales, n'utilisez aucun de nos services.
            </p>
            <p className="text-gray-700">
              Vous pouvez accepter les Conditions en cochant une case ou en cliquant sur un bouton indiquant votre acceptation des Conditions ou en utilisant effectivement les Services.
            </p>
          </div>
        </section>

        {/* Section 3: Description du service */}
        <section id="description">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            3. Description du service
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700">
              Nous fournissons VAGA ERP, une plateforme complète de gestion de relation client (CRM) incluant la gestion des clients et fournisseurs, la facturation automatisée, la gestion des traites et lettres de change, ainsi qu'un module de ressources humaines intégré.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Fonctionnalités Principales</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Gestion Clients & Fournisseurs</li>
                  <li>• Facturation Automatisée</li>
                  <li>• Gestion des Traites</li>
                  <li>• Module RH Intégré</li>
                  <li>• Tableaux de Bord</li>
                  <li>• Hébergement Local en Tunisie</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-3">Utilisation</h3>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• Usage personnel et professionnel</li>
                  <li>• Compatible avec tous navigateurs</li>
                  <li>• Accès via Internet requis</li>
                  <li>• Création et modification de contenu</li>
                  <li>• Partage sécurisé des données</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Abonnement */}
        <section id="abonnement">
          <PricingSection />
        </section>

        {/* Section 10: Paiements */}
        <section id="paiements">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            5. Frais et paiements
          </h2>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">Méthodes de Paiement Acceptées</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Cartes de crédit</li>
                  <li>• Virements bancaires</li>
                </ul>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Paiements mobile tunisiens</li>
                  <li>• Espèces (entreprises locales)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">Politique de Facturation</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Plan Essai :</strong> 3 jours gratuits, aucune information de paiement requise</li>
                <li><strong>Plans payants :</strong> Facturation annuelle</li>
                <li><strong>Renouvellement :</strong> Automatique sauf résiliation de votre part</li>
                <li><strong>Remboursement :</strong> Calculé selon la période non utilisée en cas de résiliation anticipée justifiée</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <p className="text-orange-800">
                <strong>Modification des prix :</strong> Toute augmentation des frais ne s'appliquera qu'à l'expiration de votre cycle de facturation en cours et vous serez notifié au moins 30 jours à l'avance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Restrictions */}
        <section id="restrictions">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            6. Restrictions d'utilisation
          </h2>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-red-800 mb-4 font-semibold">Vous ne devez pas :</p>
            <ul className="space-y-2 text-red-700">
              <li>1. Transférer les Services ou les rendre disponibles à un tiers sans autorisation</li>
              <li>2. Fournir tout service basé sur VAGA ERP sans autorisation écrite préalable</li>
              <li>3. Utiliser les Services d'une manière qui pourrait endommager nos serveurs</li>
              <li>4. Violer toute loi locale, nationale ou internationale applicable</li>
              <li>5. Créer une fausse identité pour induire toute personne en erreur</li>
              <li>6. Utiliser les Services pour des activités illégales ou frauduleuses</li>
              <li>7. Compromettre la sécurité des données d'autres utilisateurs</li>
              <li>8. Développer des produits concurrents basés sur nos fonctionnalités</li>
            </ul>
          </div>
        </section>

        {/* Section 13: Propriété des données */}
        <section id="propriete">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            7. Propriété des données
          </h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">Vos Données Vous Appartiennent</h3>
              <p className="text-green-800 mb-3">
                Nous respectons votre droit de propriété sur le contenu créé ou stocké par vous dans VAGA ERP. Vous êtes propriétaire de toutes vos données :
              </p>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• Informations clients et fournisseurs</li>
                <li>• Factures et documents commerciaux</li>
                <li>• Données RH et employés</li>
                <li>• Traites et documents financiers</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">Utilisation Limitée par VAGA</h3>
              <p className="text-blue-800">
                Vous accordez à VAGA ERP l'autorisation d'accéder, de copier, de distribuer, de stocker, de transmettre, de reformater, d'afficher et d'exécuter le contenu de votre compte utilisateur <strong>uniquement dans le but de vous fournir les Services</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: Garanties */}
        <section id="garanties">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            8. Exclusion de garanties
          </h2>

          <div className="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-lg">
            <p className="text-gray-800 mb-4 font-semibold uppercase text-sm">
              VOUS COMPRENEZ ET ACCEPTEZ EXPRESSÉMENT QUE L'UTILISATION DE VAGA ERP SE FAIT À VOS PROPRES RISQUES.
            </p>
            <p className="text-gray-700 mb-4">
              LES SERVICES SONT FOURNIS SUR UNE BASE "TELS QUELS" ET "TELS QUE DISPONIBLES".
            </p>
            <p className="text-gray-700">
              MAAK CORP SUARL DÉCLINE EXPRESSÉMENT TOUTE GARANTIE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE ET D'ADÉQUATION À UN USAGE PARTICULIER.
            </p>
          </div>
        </section>

        {/* Section 17: Responsabilité */}
        <section id="responsabilite">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            9. Limitation de responsabilité
          </h2>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <p className="text-orange-800 mb-4 font-semibold">
              LIMITATION DE RESPONSABILITÉ FINANCIÈRE
            </p>
            <p className="text-orange-700 mb-4">
              EN AUCUN CAS, LA RESPONSABILITÉ TOTALE DE MAAK CORP SUARL ENVERS VOUS EN CE QUI CONCERNE TOUT SERVICE, DIRECTE OU INDIRECTE, NE DÉPASSERA LES FRAIS PAYÉS PAR VOUS POUR CE SERVICE AU COURS DES 12 DERNIERS MOIS.
            </p>
            <p className="text-orange-700">
              Nous ne serons pas tenus responsables des pertes indirectes, accessoires, spéciales, punitives ou autres pertes ou dommages, y compris perte de profits commerciaux, interruption commerciale, perte d'informations commerciales.
            </p>
          </div>
        </section>

        {/* Section 19: Arbitrage */}
        <section id="arbitrage">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            10. Arbitrage
          </h2>

          <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
            <p className="text-purple-800 mb-4">
              Toute controverse ou réclamation découlant ou liée aux Conditions sera réglée par arbitrage exécutoire conformément aux règles d'arbitrage commercial du <strong>Tribunal de Tunis</strong>.
            </p>
            <div className="space-y-2 text-purple-700">
              <p>• La décision de l'arbitre est définitive et sans appel</p>
              <p>• L'arbitrage se déroulera à Tunis</p>
              <p>• Arbitrage sur une base individuelle uniquement</p>
            </div>
          </div>
        </section>

        {/* Section 20: Résiliation */}
        <section id="resiliation">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            11. Suspension et résiliation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-3">Suspension par VAGA ERP</h3>
              <p className="text-red-800 text-sm mb-3">Nous pouvons suspendre votre compte en cas de :</p>
              <ul className="space-y-1 text-xs text-red-700">
                <li>• Activité illégale présumée</li>
                <li>• Périodes prolongées d'inactivité</li>
                <li>• Demandes des autorités</li>
                <li>• Violation des Conditions</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">Résiliation par l'utilisateur</h3>
              <p className="text-green-800 text-sm mb-3">Vous pouvez résilier à tout moment :</p>
              <ul className="space-y-1 text-xs text-green-700">
                <li>• Contact : vaga@maak-corp.tn</li>
                <li>• Remboursement au prorata</li>
                <li>• Sauvegarde des données possible</li>
                <li>• Période de grâce de 30 jours</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsOfServicePage