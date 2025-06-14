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
          <div className="text-lg text-gray-300 mb-2">VAGA CRM</div>
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
            IL S'AGIT D'UN ACCORD ENTRE VOUS OU L'ENTITÉ QUE VOUS REPRÉSENTEZ (ci-après «Vous» ou «Votre») ET MAAK CORP SUARL RÉGISSANT VOTRE UTILISATION DE VAGA CRM.
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
                <li><a href="#modifications" className="text-blue-600 hover:text-blue-800">5. Modification des conditions</a></li>
                <li><a href="#inscription" className="text-blue-600 hover:text-blue-800">6. Obligations d'inscription</a></li>
                <li><a href="#confidentialite" className="text-blue-600 hover:text-blue-800">7. Informations personnelles</a></li>
                <li><a href="#communications" className="text-blue-600 hover:text-blue-800">8. Communications</a></li>
                <li><a href="#plaintes" className="text-blue-600 hover:text-blue-800">9. Plaintes</a></li>
                <li><a href="#paiements" className="text-blue-600 hover:text-blue-800">10. Frais et paiements</a></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li><a href="#restrictions" className="text-blue-600 hover:text-blue-800">11. Restrictions d'utilisation</a></li>
                <li><a href="#inactifs" className="text-blue-600 hover:text-blue-800">12. Comptes inactifs</a></li>
                <li><a href="#propriete" className="text-blue-600 hover:text-blue-800">13. Propriété des données</a></li>
                <li><a href="#contenu" className="text-blue-600 hover:text-blue-800">14. Contenu utilisateur</a></li>
                <li><a href="#marque" className="text-blue-600 hover:text-blue-800">15. Marque déposée</a></li>
                <li><a href="#garanties" className="text-blue-600 hover:text-blue-800">16. Exclusion de garanties</a></li>
                <li><a href="#responsabilite" className="text-blue-600 hover:text-blue-800">17. Limitation de responsabilité</a></li>
                <li><a href="#indemnite" className="text-blue-600 hover:text-blue-800">18. Indemnité</a></li>
                <li><a href="#arbitrage" className="text-blue-600 hover:text-blue-800">19. Arbitrage</a></li>
                <li><a href="#resiliation" className="text-blue-600 hover:text-blue-800">20. Suspension et résiliation</a></li>
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
              Nous fournissons VAGA CRM, une plateforme complète de gestion de relation client (CRM) incluant la gestion des clients et fournisseurs, la facturation automatisée, la gestion des traites et lettres de change, ainsi qu'un module de ressources humaines intégré.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            4. Abonnement au service
          </h2>

          <p className="text-gray-700 mb-6">VAGA CRM propose trois plans d'abonnement adaptés à différents besoins :</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Plan Essai</h3>
                <div className="text-2xl font-bold text-green-600 my-2">Gratuit</div>
                <div className="text-sm text-gray-600">3 jours gratuits</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Max 5 clients / fournisseurs</li>
                <li>1 compte personnel max</li>
                <li>Max 10 traites</li>
                <li>KPI sur 30 jours</li>
              </ul>
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-6 relative">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Plan Basic</h3>
                <div className="text-2xl font-bold text-blue-600 my-2">50 TND</div>
                <div className="text-sm text-gray-600">Facturé annuellement</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Max 30 clients / fournisseurs</li>
                <li>3 comptes personnels max</li>
                <li>Max 150 traites</li>
                <li>Max 5 compte bancaires</li>
                <li>KPI sur 365 jours</li>
                <li>Module RH inclus</li>
                <li>Facturation automatisée</li>
                <li>Support par email</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Plan Enterprise</h3>
                <div className="text-2xl font-bold text-purple-600 my-2">120 TND</div>
                <div className="text-sm text-gray-600">Facturé annuellement</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Clients / fournisseurs illimités</li>
                <li>Personnel illimité</li>
                <li>Traites illimitées</li>
                <li>Comptes bancaires illimités</li>
                <li>Module IA avancé</li>
                <li>Déploiement cloud privé</li>
                <li>Support dédié</li>
                <li>Formation personnalisée</li>
                <li>Module CRM</li>
                <li>Devis et factures personnalisés</li>
                <li>Développement de fonctionnalités sur mesure</li>
                <li>Intégration avec vos outils existants</li>
                <li>Application mobile pour clients</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note :</strong> Nous nous réservons le droit de modifier les plans et tarifs avec un préavis de 30 jours.
            </p>
          </div>
        </section>

        {/* Section 10: Paiements */}
        <section id="paiements">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            10. Frais et paiements
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
            11. Restrictions d'utilisation
          </h2>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-red-800 mb-4 font-semibold">Vous ne devez pas :</p>
            <ul className="space-y-2 text-red-700">
              <li>1. Transférer les Services ou les rendre disponibles à un tiers sans autorisation</li>
              <li>2. Fournir tout service basé sur VAGA CRM sans autorisation écrite préalable</li>
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
            13. Propriété des données
          </h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-3">Vos Données Vous Appartiennent</h3>
              <p className="text-green-800 mb-3">
                Nous respectons votre droit de propriété sur le contenu créé ou stocké par vous dans VAGA CRM. Vous êtes propriétaire de toutes vos données :
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
                Vous accordez à VAGA CRM l'autorisation d'accéder, de copier, de distribuer, de stocker, de transmettre, de reformater, d'afficher et d'exécuter le contenu de votre compte utilisateur <strong>uniquement dans le but de vous fournir les Services</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: Garanties */}
        <section id="garanties">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            16. Exclusion de garanties
          </h2>

          <div className="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-lg">
            <p className="text-gray-800 mb-4 font-semibold uppercase text-sm">
              VOUS COMPRENEZ ET ACCEPTEZ EXPRESSÉMENT QUE L'UTILISATION DE VAGA CRM SE FAIT À VOS PROPRES RISQUES.
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
            17. Limitation de responsabilité
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
            19. Arbitrage
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
            20. Suspension et résiliation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-3">Suspension par VAGA CRM</h3>
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

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Contact
          </h2>

          <div className="bg-black text-white p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Si vous avez des questions ou des préoccupations concernant cet accord, veuillez nous contacter :
            </p>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">MAAK CORP SUARL</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span><strong>Email:</strong> vaga@maak-corp.tn</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span><strong>Téléphone:</strong> +216 95 593 387</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Adresse:</strong> Tunis, Tunisie</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Site web:</strong> https://vaga.tn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsOfServicePage