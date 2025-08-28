import React from 'react'

function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto  overflow-hidden">

      {/* Header Section */}
      <div className="bg-black text-white px-8 py-12 mt-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Politique de Confidentialité
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
      <div className=" py-12 space-y-8">

        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
          <p className="text-gray-800 leading-relaxed mb-4">
            Cette politique de confidentialité décrit nos politiques et procédures sur la collecte, l'utilisation et la divulgation de vos informations lorsque vous utilisez VAGA ERP et vous informe sur vos droits à la vie privée et comment la loi vous protège.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Nous utilisons vos données personnelles pour fournir et améliorer notre service CRM. En utilisant VAGA ERP, vous acceptez la collecte et l'utilisation d'informations conformément à la présente Politique de confidentialité.
          </p>
        </div>

        {/* Section: Interprétation et Définitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Interprétation et Définitions
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interprétation</h3>
            <p className="text-gray-700 leading-relaxed">
              Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes auront la même signification, qu'elles apparaissent au singulier ou au pluriel.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Définitions</h3>
            <p className="text-gray-700 mb-4">Aux fins de la présente politique de confidentialité :</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li><strong className="text-gray-900">Compte</strong> désigne un compte unique créé pour vous permettre d'accéder à VAGA ERP ou à des parties de notre Service.</li>
                <li><strong className="text-gray-900">Société</strong> (appelée soit "la Société", "Nous", "Notre" ou "Nos" dans le présent document) fait référence à MAAK CORP SUARL (1847208/C/A/M/000
                  ).</li>
                <li><strong className="text-gray-900">Cookies</strong> sont de petits fichiers qui sont placés sur votre ordinateur, appareil mobile ou tout autre appareil par un site Web, contenant les détails de votre historique de navigation sur ce site Web parmi ses nombreuses utilisations.</li>
                <li><strong className="text-gray-900">Pays</strong> fait référence à la Tunisie.</li>
                <li><strong className="text-gray-900">Appareil</strong> désigne tout appareil pouvant accéder au Service, tel qu'un ordinateur, un téléphone portable ou une tablette numérique.</li>
                <li><strong className="text-gray-900">Données Personnelles</strong> désigne toute information relative à une personne identifiée ou une personne identifiable.</li>
                <li><strong className="text-gray-900">Service</strong> fait référence à VAGA ERP, la plateforme de gestion client accessible via https://vaga.tn.</li>
                <li><strong className="text-gray-900">Prestataire de Services</strong> désigne toute personne physique ou morale qui traite les données pour le compte de la Société.</li>
                <li><strong className="text-gray-900">Données d'Utilisation</strong> font référence aux données collectées automatiquement, soit générées par l'utilisation du Service, soit à partir de l'infrastructure du Service elle-même.</li>
                <li><strong className="text-gray-900">Site Web</strong> désigne VAGA ERP, accessible depuis https://vaga.tn.</li>
                <li><strong className="text-gray-900">Vous</strong> désigne la personne accédant ou utilisant le Service, ou la société ou toute autre entité juridique au nom de laquelle cette personne accède ou utilise le Service.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Collecte et Utilisation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Collecte et Utilisation de Vos Données Personnelles
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Types de Données Collectées</h3>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Données Personnelles</h4>
              <p className="text-gray-700 mb-4">
                Lors de l'utilisation de VAGA ERP, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier. Les informations personnellement identifiables peuvent inclure, mais sans s'y limiter :
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-3">Informations de Compte</h5>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Adresse e-mail</li>
                    <li>• Prénom et nom</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Informations d'entreprise</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-3">Informations Professionnelles</h5>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Données clients et fournisseurs</li>
                    <li>• Informations de facturation</li>
                    <li>• Données de traites</li>
                    <li>• Informations RH et employés</li>
                    <li>• Documents commerciaux</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-3">Données Financières</h5>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li>• Informations bancaires (IBAN, RIB)</li>
                    <li>• Données de facturation</li>
                    <li>• Historique des paiements</li>
                    <li>• Numéros de TVA</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Données d'Utilisation</h4>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Les données d'utilisation sont collectées automatiquement lors de l'utilisation de VAGA ERP.
                </p>
                <p className="text-gray-700 mb-3">
                  Les données d'utilisation peuvent inclure des informations telles que l'adresse de protocole Internet de votre appareil (adresse IP), le type de navigateur, la version du navigateur, les pages de notre service que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages, les identifiants uniques de l'appareil et d'autres données de diagnostic.
                </p>
                <p className="text-gray-700">
                  Lorsque vous accédez au service via un appareil mobile, nous pouvons collecter automatiquement certaines informations, y compris le type d'appareil mobile que vous utilisez, l'identifiant unique de votre appareil mobile, l'adresse IP de votre appareil mobile, votre système d'exploitation mobile, le type de navigateur Internet mobile que vous utilisez, les identifiants uniques de l'appareil et d'autres données de diagnostic.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies de Suivi et Cookies</h3>
            <p className="text-gray-700 mb-4">
              Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur VAGA ERP et stocker certaines informations. Les technologies de suivi utilisées sont des balises, des étiquettes et des scripts pour collecter et suivre les informations et pour améliorer et analyser notre service.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-4">Types de Cookies Utilisés :</h4>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Cookies Nécessaires/Essentiels</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Type :</strong> Cookies de session</li>
                  <li><strong>Gérés par :</strong> Nous</li>
                  <li><strong>Objectif :</strong> Ces cookies sont essentiels pour vous fournir les services disponibles via VAGA ERP et pour vous permettre d'utiliser certaines de ses fonctionnalités, notamment l'authentification et la sécurité des sessions.</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Cookies de Fonctionnalité</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Type :</strong> Cookies persistants</li>
                  <li><strong>Gérés par :</strong> Nous</li>
                  <li><strong>Objectif :</strong> Ces cookies nous permettent de nous souvenir des choix que vous faites lorsque vous utilisez VAGA ERP, tels que vos préférences d'interface et paramètres personnalisés.</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Cookies d'Analyse</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Type :</strong> Cookies persistants</li>
                  <li><strong>Gérés par :</strong> Nous</li>
                  <li><strong>Objectif :</strong> Ces cookies nous aident à comprendre comment vous utilisez VAGA ERP afin d'améliorer les performances et l'expérience utilisateur.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Utilisation des Données */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Utilisation de Vos Données Personnelles
          </h2>

          <p className="text-gray-700 mb-4">MAAK CORP SUARL peut utiliser les données personnelles aux fins suivantes :</p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li><strong className="text-gray-900">Fournir et maintenir VAGA ERP</strong>, y compris pour surveiller l'utilisation de notre Service CRM.</li>
              <li><strong className="text-gray-900">Gérer votre Compte :</strong> pour gérer votre inscription en tant qu'utilisateur de VAGA ERP et gérer vos données clients, fournisseurs, factures et ressources humaines.</li>
              <li><strong className="text-gray-900">Exécution des contrats :</strong> traitement de vos factures, gestion des traites, et toute autre fonction commerciale liée à votre utilisation de VAGA ERP.</li>
              <li><strong className="text-gray-900">Communication :</strong> vous contacter par e-mail, appels téléphoniques, SMS concernant les mises à jour, notifications de facturation, rappels d'échéances, et autres communications liées au service.</li>
              <li><strong className="text-gray-900">Support client :</strong> vous fournir un support technique et répondre à vos demandes concernant VAGA ERP.</li>
              <li><strong className="text-gray-900">Amélioration du service :</strong> analyser l'utilisation pour améliorer les fonctionnalités CRM, développer de nouvelles fonctionnalités, et optimiser l'expérience utilisateur.</li>
              <li><strong className="text-gray-900">Conformité légale :</strong> respecter nos obligations légales en Tunisie, notamment en matière de comptabilité et de fiscalité.</li>
            </ul>
          </div>
        </section>

        {/* Section: Partage des Informations */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Partage de Vos Informations Personnelles
          </h2>

          <p className="text-gray-700 mb-4">Nous pouvons partager vos informations personnelles dans les situations suivantes :</p>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <ul className="space-y-3">
              <li><strong className="text-red-900">Avec des Prestataires de Services :</strong> Nous pouvons partager vos informations avec des fournisseurs de services pour l'hébergement, la maintenance, l'analyse et le support technique de VAGA ERP.</li>
              <li><strong className="text-red-900">Pour des Transferts d'Entreprise :</strong> Dans le cadre de toute fusion, vente d'actifs, financement ou acquisition de tout ou partie de nos activités.</li>
              <li><strong className="text-red-900">Conformité Légale :</strong> Lorsque requis par la loi tunisienne ou en réponse à des demandes légales des autorités compétentes.</li>
              <li><strong className="text-red-900">Protection des Droits :</strong> Pour protéger et défendre nos droits ou notre propriété, prévenir les actes répréhensibles, ou protéger la sécurité des utilisateurs.</li>
              <li><strong className="text-red-900">Avec votre Consentement :</strong> Pour toute autre fin avec votre consentement explicite.</li>
            </ul>
          </div>
        </section>

        {/* Section: Hébergement et Sécurité */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Hébergement et Sécurité des Données
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hébergement Local</h3>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800">
                  Conformément à notre engagement envers la souveraineté des données, toutes les données de VAGA ERP sont hébergées en Tunisie sur des serveurs sécurisés. Vos données ne quittent pas le territoire tunisien, garantissant le respect de la réglementation locale.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mesures de Sécurité</h3>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles :</p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Chiffrement SSL/TLS pour toutes les transmissions de données</li>
                  <li>• Authentification sécurisée et gestion des accès</li>
                  <li>• Sauvegardes automatiques et régulières</li>
                  <li>• Surveillance continue de la sécurité</li>
                  <li>• Conformité aux standards de sécurité internationaux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Conservation des Données */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Conservation de Vos Données Personnelles
          </h2>

          <p className="text-gray-700 mb-4">
            MAAK CORP SUARL ne conservera vos données personnelles que le temps nécessaire aux fins énoncées dans cette politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour :
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <ul className="space-y-2">
              <li>• Nous conformer à nos obligations légales tunisiennes</li>
              <li>• Maintenir les fonctionnalités de VAGA ERP</li>
              <li>• Résoudre les litiges</li>
              <li>• Appliquer nos accords juridiques</li>
            </ul>
            <p className="text-yellow-800 mt-4 text-sm">
              Les données de facturation et comptables peuvent être conservées plus longtemps conformément aux obligations légales tunisiennes en matière de comptabilité.
            </p>
          </div>
        </section>

        {/* Section: Droits de Protection */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Vos Droits de Protection des Données
          </h2>

          <p className="text-gray-700 mb-6">Vous disposez de certains droits concernant vos données personnelles :</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Droit d'Accès</h3>
                <p className="text-gray-700 text-sm">
                  Vous avez le droit de demander des copies de vos données personnelles stockées dans VAGA ERP.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Droit de Rectification</h3>
                <p className="text-gray-700 text-sm">
                  Vous avez le droit de demander que nous corrigions toute information que vous jugez incorrecte ou incomplète.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Droit à l'Effacement</h3>
                <p className="text-gray-700 text-sm">
                  Vous avez le droit de demander que nous supprimions vos données personnelles, sous certaines conditions.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Droit à la Portabilité</h3>
                <p className="text-gray-700 text-sm">
                  Vous avez le droit de demander le transfert des données que nous avons collectées vers une autre organisation, ou directement à vous, sous certaines conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Exercice de Vos Droits</h3>
            <p className="text-indigo-800">
              Pour exercer ces droits, veuillez nous contacter à <strong>vaga@maak-corp.tn</strong>. Nous répondrons à votre demande dans un délai de 30 jours.
            </p>
          </div>
        </section>

        {/* Section: Suppression Complète */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Suppression Complète de Vos Données
          </h2>

          <p className="text-gray-700 mb-4">
            Vous avez le droit de supprimer complètement toutes les données que nous avons collectées sur vous. Pour demander la suppression complète de vos données, veuillez envoyer un e-mail à vaga@maak-corp.tn avec l'objet "Suppression de données".
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold text-orange-800 mb-2">Important :</p>
                <p className="text-orange-700">
                  La suppression de vos données entraînera la fermeture définitive de votre compte VAGA ERP et la perte de toutes vos données clients, factures, et autres informations commerciales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Remaining Sections - Simplified for brevity */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Liens vers d'Autres Sites Web
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-3">
              VAGA ERP peut contenir des liens vers d'autres sites Web qui ne sont pas exploités par nous. Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous conseillons fortement de consulter la politique de confidentialité de chaque site que vous visitez.
            </p>
            <p className="text-gray-700">
              Nous n'avons aucun contrôle sur et n'assumons aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques des sites ou services tiers.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
            Modifications de Cette Politique de Confidentialité
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-blue-800 mb-4">Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en :</p>
            <ul className="text-blue-800 space-y-1">
              <li>• Publiant la nouvelle politique de confidentialité sur cette page</li>
              <li>• Vous informant par e-mail</li>
              <li>• Affichant un avis visible sur VAGA ERP</li>
            </ul>
            <p className="text-blue-800 mt-4">
              Nous mettrons à jour la date de "dernière mise à jour" en haut de cette politique de confidentialité. Il vous est conseillé de consulter régulièrement cette politique pour tout changement.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
        <p className="text-center text-gray-600 text-sm">
          Cette politique de confidentialité est effective à partir du 14 juin 2025 et s'applique à tous les utilisateurs de VAGA ERP.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage