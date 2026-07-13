# VAGA — Page Copy (Draft v1)

French-language copy for phase-1 pages, following the layout sections locked in [site-structure.md](./site-structure.md). Placeholder brackets `[...]` mark things that need a real answer from the business (not invented). Everything else is ready for review/edit, then handoff to theming/coding.

Voice: direct, confident, no corporate fluff. Tutoiement avoided (B2B, "vous"). Short sentences. Concrete numbers over adjectives.

---

## 1. Homepage (`/`)

**Meta title**: VAGA — Logiciel de gestion commerciale et ERP pour PME tunisiennes
**Meta description**: Devis, facturation, stock, trésorerie et conformité TEIF dans un seul logiciel. Hébergé en Tunisie, sans abonnement caché. Cloud ou sur site.

### Hero
**H1**: L'ERP qui gère votre entreprise, du devis à l'encaissement.
**Subhead**: Devis, commandes, bons de livraison, factures, stock multi-entrepôt et trésorerie — dans un seul logiciel pensé pour les PME tunisiennes. Conforme à la facturation électronique TEIF dès le départ.
**CTA primaire**: Demander une démo
**CTA secondaire**: Voir les tarifs
*(visuel: mockup produit, asset existant `public/apps`)*

### Trust bar
Hébergé en Tunisie · Données chiffrées · Conforme TTN El Fatoora · Fonctionne sans internet (VAGA Box)

### Problème → solution
**H2**: Excel, papier et trois logiciels qui ne se parlent pas ? Il y a plus simple.
La plupart des PME jonglent entre un cahier de stock, un tableau Excel pour la trésorerie, et un logiciel de facturation à part — sans compter la mise en conformité TEIF ajoutée à la dernière minute. VAGA réunit tout ça : un devis se transforme en commande, puis en bon de livraison, puis en facture, sans ressaisie. Le stock se met à jour tout seul. La trésorerie suit chaque encaissement en temps réel.

### Grille de fonctionnalités
**H2**: Un module pour chaque partie de votre activité
- **Facturation & documents** — Devis, commandes, BL, factures, avoirs — achat et vente. [→ /fonctionnalites/facturation-devis]
- **Gestion de stock** — Multi-entrepôt, mouvements automatiques, seuils d'alerte. [→ /fonctionnalites/gestion-stock]
- **Trésorerie & caisses** — Encaissements, décaissements, soldes en temps réel. [→ /fonctionnalites/tresorerie]
- **Clients & crédit** — Relevés de compte, limites de crédit appliquées automatiquement. [→ /fonctionnalites/clients-credit]
- **Facturation électronique TEIF** — Conforme TTN El Fatoora, export XML natif. [→ /fonctionnalites/facturation-electronique-teif]
- **Retenue à la source & TEJ** — Certificats et déclarations générés automatiquement. [→ /fonctionnalites/retenue-source-tej]

### Sécurité & souveraineté (deep-dive)
**H2**: Vos données ne quittent pas la Tunisie — et même nous ne les lisons pas.
Les données sensibles de vos clients (noms, coordonnées, adresses, identifiants fiscaux) sont chiffrées côté client avant même d'atteindre nos serveurs. Hébergement 100 % tunisien, chiffrement au repos et en transit, isolation stricte des données entre entreprises.
**Lien**: En savoir plus sur la sécurité →

### Tarifs (teaser)
**H2**: Un prix. Pas d'abonnement caché.
- **VAGA Cloud** (recommandé) — 1 700 TND (paiement unique) + 250 TND/mois hébergement & maintenance
- **VAGA Box** (sur site) — 3 000 TND, paiement unique, aucun frais récurrent, fonctionne sans internet

Pas de frais par utilisateur, pas de palier caché. [→ Voir tous les tarifs]

### FAQ
- **VAGA est-il conforme à la facturation électronique TEIF ?** Oui, la génération de vos factures au format TEIF est incluse dans tous les plans, sans module payant à part.
- **Où sont hébergées mes données ?** En Tunisie, sur des serveurs dédiés — vos données ne transitent jamais à l'étranger.
- **Combien coûte VAGA ?** À partir de 1 700 TND en Cloud ou 3 000 TND en version sur site (Box), sans abonnement par utilisateur. Détails sur la page tarifs.
- **VAGA fonctionne-t-il sans connexion internet ?** Oui, avec VAGA Box : le logiciel tourne sur un boîtier installé chez vous, indépendant des coupures ADSL.
- **VAGA convient-il à mon secteur d'activité ?** VAGA est pensé pour les PME avec des opérations physiques : distribution, négoce, industrie légère, services avec flotte de véhicules.

### CTA final
**H2**: Prêt à voir VAGA en action ?
**CTA**: Demander une démo

---

## 2. Tarifs (`/tarifs`)

**Meta title**: Tarifs VAGA — ERP sans abonnement caché, à partir de 1 700 TND
**Meta description**: VAGA Cloud ou VAGA Box : un paiement unique, pas de frais par utilisateur. Comparez les deux formules et choisissez celle qui correspond à votre activité.

### Hero
**H1**: Un ERP plus abordable. Sans abonnement caché.
**Subhead**: Pas de frais par utilisateur, pas de palier surprise. Un paiement, toute l'équipe a accès à tout le logiciel.

### Cartes de tarifs
**VAGA Box** — Sur site
- **3 000 TND** — paiement unique
- Licence : 3 000 TND
- Hébergé chez vous
- Fonctionne sans internet
- 100 % de vos données restent chez vous

**VAGA Cloud** — Recommandé
- **1 700 TND** — paiement unique
- Licence : 1 700 TND
- Serveur & maintenance : 250 TND/mois
- Accessible de partout
- Mises à jour et sauvegardes automatiques
- Zéro maintenance serveur de votre côté

**CTA**: Demander une démo

### Comment souhaitez-vous déployer VAGA ?
**H2**: Deux architectures pensées pour la réalité tunisienne
Choisissez celle qui correspond à votre infrastructure — ou combinez les deux.

**VAGA Cloud** — Zéro serveur. Zéro maintenance. 100 % en ligne.
Votre ERP hébergé sur nos serveurs sécurisés. Accédez à VAGA depuis n'importe quel navigateur, où que vous soyez — sans vous soucier des mises à jour, des sauvegardes ou de la maintenance serveur.
- Accès instantané depuis n'importe quel appareil
- Mises à jour et sauvegardes automatiques
- Hébergement sécurisé, zéro maintenance serveur
- Idéal pour les équipes multi-sites et mobiles

**VAGA Box** — Votre ERP sur site. Fonctionne même si l'ADSL tombe.
Un mini-PC discret installé dans vos locaux. Votre ERP tourne en local — coupure ADSL, panne Ooredoo ou Topnet, rien n'arrête votre activité. Idéal pour les entrepôts et les zones à connexion instable.
- 100 % opérationnel même sans internet
- Données stockées sur vos propres locaux
- Indépendance totale du réseau
- Mini-PC silencieux livré et configuré sur place

**Encadré — Pourquoi ça compte en Tunisie**: Les coupures ADSL restent fréquentes à Sousse, Sfax et dans les zones industrielles. Avec VAGA Box, votre équipe continue à travailler — bons de livraison, stock, facturation — sans interruption.

### Ce qui est inclus
Les deux formules donnent accès à l'intégralité des modules — facturation, stock, trésorerie, crédit client, TEIF, retenue à la source. Pas de module verrouillé derrière un palier supérieur, pas de licence par module.

La formule Cloud inclut le support par e-mail sans frais supplémentaire. Un forfait support plus large (téléphone, chat, accès distant VPN pour VAGA Box, visioconférence) est disponible en option pour les entreprises qui en ont besoin. [→ voir les forfaits support]

### FAQ
- **Puis-je passer de VAGA Box à VAGA Cloud plus tard ?** Oui, la migration entre les deux formules est possible et gratuite.
- **Que couvre la maintenance à 250 TND/mois ?** L'hébergement, les sauvegardes et les mises à jour. Le support par e-mail est inclus sans surcoût ; un forfait support étendu (téléphone, chat, VPN, visio) est disponible en option.
- **Puis-je essayer VAGA avant de payer ?** Oui, réservez une démo pour voir le logiciel avec vos propres cas d'usage.

**CTA final**: Demander une démo

---

## 3. Sécurité & souveraineté des données (`/securite-donnees`)

**Meta title**: Sécurité et souveraineté des données — VAGA
**Meta description**: Hébergement 100 % tunisien, chiffrement des données côté client, règles métier appliquées au niveau de la base de données. La sécurité de VAGA expliquée simplement.

### Hero
**H1**: Vos données restent en Tunisie. Et personne ne les lit sans y être autorisé.
**Subhead**: La souveraineté des données n'est pas une case à cocher chez VAGA — c'est une contrainte de conception, du chiffrement jusqu'à l'hébergement.

### Souveraineté des données
**H2**: Hébergement 100 % tunisien
Vos données ne transitent jamais à l'étranger. VAGA est hébergé sur des serveurs tunisiens, un point important pour toute entreprise soumise à des exigences réglementaires ou simplement soucieuse de garder le contrôle de ses données sensibles (clients, finances, personnel).

### Chiffrement côté client
**H2**: Même nos administrateurs ne voient pas vos données en clair
Les informations sensibles de vos clients — noms, e-mails, adresses, identifiants fiscaux — sont chiffrées directement sur votre appareil, avant d'être envoyées à nos serveurs. Résultat : en cas d'incident technique ou d'accès non autorisé côté hébergeur, ces données restent illisibles. Nos équipes elles-mêmes n'ont accès qu'à des données chiffrées et à des métadonnées non sensibles.

### Règles métier appliquées par la base de données
**H2**: Vos limites de crédit ne peuvent pas être contournées par un bug
Chez VAGA, les règles critiques — comme le blocage d'une facture qui dépasserait la limite de crédit d'un client — sont appliquées directement au niveau de la base de données, pas seulement dans l'interface. Concrètement : même une erreur de développement ou une mise à jour ratée ne peut pas laisser passer une facture qui viole vos règles de crédit.

### Isolation multi-entreprise
**H2**: Vos données sont cloisonnées, même sur une plateforme partagée
Chaque entreprise sur VAGA est isolée au niveau base de données (Row Level Security) : aucune requête, même mal écrite, ne peut faire fuiter les données d'une entreprise vers une autre.

### Comparaison
**H2**: Un niveau de détail que peu d'éditeurs communiquent
La plupart des logiciels de gestion commerciale en Tunisie ne détaillent pas leur politique de chiffrement ni l'endroit où vos données sont réellement hébergées. Chez VAGA, c'est documenté ici, en clair.

**CTA final**: Demander une démo

---

## 4. Fonctionnalités — hub (`/fonctionnalites`)

**Meta title**: Fonctionnalités VAGA — Facturation, stock, trésorerie, conformité TEIF
**Meta description**: Découvrez tous les modules de VAGA : devis et facturation, gestion de stock multi-entrepôt, trésorerie, crédit client, facturation électronique TEIF et retenue à la source.

### Hero
**H1**: Tout ce dont votre entreprise a besoin, dans un seul logiciel.
**Subhead**: Chaque module de VAGA est pensé pour les PME tunisiennes — de la première ligne d'un devis jusqu'à la déclaration fiscale.

### Grille (liens vers chaque page module)
- Facturation & documents commerciaux
- Gestion de stock multi-entrepôt
- Trésorerie & caisses
- Clients & gestion du crédit
- Facturation électronique TEIF
- Retenue à la source & TEJ
- *(à venir)* Gestion de flotte de véhicules
- *(à venir)* Équipe & permissions
- *(à venir)* Statistiques & tableaux de bord

**CTA final**: Demander une démo

---

## 5. Facturation & documents (`/fonctionnalites/facturation-devis`)

**Meta title**: Devis, factures, bons de livraison — VAGA
**Meta description**: Du devis à la facture, sans ressaisie. Devis, commandes, bons de livraison, factures et avoirs, achat et vente, tout tracé de bout en bout.

### Hero
**H1**: Du devis à la facture, sans jamais ressaisir une ligne.
**Subhead**: Devis, commandes, bons de livraison, factures et avoirs — vente et achat — reliés entre eux avec une traçabilité complète.

### Fonctionnement
- **Cycle de vente complet** : Devis → Commande → Bon de Livraison → Facture → Avoir. Chaque document se transforme en le suivant en un clic, sans ressaisie, avec un horodatage de chaque transformation.
- **Cycle d'achat symétrique** : Commande Fournisseur → Bon de Réception → Facture Fournisseur → Avoir Fournisseur.
- **Documents complémentaires** : Bon de Sortie, Bon de Retour, Proforma.
- **Calculs automatiques** : sous-total HT, TVA, Timbre Fiscal, total TTC, montant payé, solde dû — recalculés à chaque ligne.
- **États de facture** : brouillon, envoyée — pour garder le contrôle avant l'envoi définitif.
- **Avoirs tracés** : chaque avoir est lié à la facture d'origine, avec le motif enregistré.
- **Personnalisation** : votre logo et des champs personnalisés sur vos documents.

### Pourquoi VAGA
Contrairement à un tableur ou à un logiciel de facturation isolé, VAGA garde la chaîne complète : vous pouvez remonter d'une facture jusqu'au devis d'origine en un clic, avec chaque étape horodatée.

### Modules liés
Gestion de stock · Trésorerie · Clients & crédit

### FAQ
- **Puis-je personnaliser mes documents (logo, mentions) ?** Oui, vous pouvez ajouter votre logo et des champs personnalisés sur vos documents.
- **Les documents sont-ils exportables en PDF ?** Oui, génération PDF prête à imprimer pour tous les documents.
- **Le Timbre Fiscal est-il calculé automatiquement ?** Oui, sur chaque facture.

**CTA**: Demander une démo

---

## 6. Gestion de stock (`/fonctionnalites/gestion-stock`)

**Meta title**: Gestion de stock multi-entrepôt — VAGA
**Meta description**: Suivez votre stock en temps réel sur plusieurs entrepôts, avec mouvements automatiques générés à chaque bon de livraison ou de réception.

### Hero
**H1**: Un stock à jour, sans inventaire manuel permanent.
**Subhead**: Multi-entrepôt, seuils d'alerte, mouvements automatiques — votre stock se met à jour tout seul à chaque vente ou réception.

### Fonctionnement
- **Produits** : catégories, familles/marques, code SKU ou code-barres, distinction service/produit.
- **Entrepôts & emplacements** : plusieurs entrepôts, chacun avec ses propres emplacements/casiers.
- **Mouvements de stock automatiques** : valider un bon de livraison ou un bon de réception génère automatiquement les mouvements de stock correspondants — entrée ou sortie.
- **Seuils & alertes** : quantité minimale par produit, règles de stock négatif configurables.
- **Tarification multi-niveaux** : jusqu'à 3 tarifs de vente par produit selon le segment client.

### Pourquoi VAGA
Le stock n'est pas un module à part qu'il faut synchroniser manuellement : il se met à jour automatiquement dès qu'un document est validé. Pas de double saisie, pas de décalage entre le stock réel et le stock affiché.

### Modules liés
Facturation & documents · Trésorerie · Gestion de flotte

### FAQ
- **VAGA gère-t-il plusieurs entrepôts ?** Oui, nativement, avec emplacements internes par entrepôt.
- **Que se passe-t-il si le stock devient négatif ?** Les règles de stock négatif sont configurables par produit.
- **Puis-je suivre des produits ET des services dans le même catalogue ?** Oui, chaque article est typé produit ou service.

**CTA**: Demander une démo

---

## 7. Trésorerie & caisses (`/fonctionnalites/tresorerie`)

**Meta title**: Gestion de trésorerie et caisses — VAGA
**Meta description**: Suivez vos caisses, vos encaissements et votre trésorerie en temps réel — espèces, chèque, virement, carte.

### Hero
**H1**: Votre trésorerie, à jour à chaque encaissement.
**Subhead**: Caisses, paiements et soldes suivis en temps réel, tous moyens de paiement confondus.

### Fonctionnement
- **Caisses** : plusieurs caisses possibles, avec suivi automatique du solde à chaque mouvement.
- **Paiements** : espèces, chèque, virement, carte — chaque paiement enregistré avec son motif.
- **Grand livre** : historique complet des mouvements, par caisse ou consolidé.

### Pourquoi VAGA
Le solde de chaque caisse se met à jour automatiquement à chaque paiement enregistré — plus besoin de recalculer un solde en fin de journée sur un cahier ou un tableur.

### Modules liés
Clients & crédit · Facturation & documents

### FAQ
- **Puis-je gérer plusieurs caisses (plusieurs points de vente) ?** Oui, chaque caisse a son propre solde et son propre historique.
- **Les chèques et virements sont-ils suivis différemment des espèces ?** Oui, chaque moyen de paiement est enregistré avec son propre motif et suivi.

**CTA**: Demander une démo

---

## 8. Clients & gestion du crédit (`/fonctionnalites/clients-credit`)

**Meta title**: Gestion clients et crédit client — VAGA
**Meta description**: Relevé de compte client en temps réel et limite de crédit appliquée automatiquement — impossible de dépasser le plafond fixé, même par erreur.

### Hero
**H1**: Une limite de crédit qu'on ne peut pas dépasser par erreur.
**Subhead**: Relevé de compte client en temps réel, et une limite de crédit appliquée au niveau du logiciel — pas seulement une alerte qu'on peut ignorer.

### Fonctionnement
- **Fiches clients & fournisseurs** : contacts, adresses, coordonnées bancaires (RIB), identifiants fiscaux, CIN.
- **Tarification par client** : jusqu'à 3 tarifs de vente configurables selon le client.
- **Relevé de compte en temps réel** : Débit / Crédit / Solde à jour à chaque facture ou paiement.
- **Limite de crédit maximum** : configurable par client, et **appliquée directement au niveau de la base de données** — une facture qui dépasserait le plafond est bloquée, pas seulement signalée.

### Pourquoi VAGA
La plupart des outils affichent juste une alerte visuelle si un client dépasse sa limite de crédit — que n'importe qui peut ignorer en cliquant "continuer". Chez VAGA, la règle est appliquée par la base de données elle-même : impossible de la contourner, même par une erreur d'interface.

### Modules liés
Facturation & documents · Trésorerie · Sécurité & souveraineté des données

### FAQ
- **La limite de crédit bloque-t-elle vraiment la facturation ?** Oui, au niveau base de données — pas seulement un avertissement dans l'interface.
- **Puis-je avoir des tarifs différents selon le client ?** Oui, jusqu'à 3 niveaux de prix par produit.

**CTA**: Demander une démo

---

## 9. Facturation électronique TEIF (`/fonctionnalites/facturation-electronique-teif`)

**Meta title**: Facturation électronique TEIF / TTN El Fatoora — VAGA
**Meta description**: Générez vos factures au format TEIF conforme à la loi de finances 2026, prêtes à transmettre sur le portail TTN El Fatoora — inclus dans tous les plans VAGA.

### Hero
**H1**: La facturation électronique TEIF, sans module à part.
**Subhead**: Vos factures générées au format TEIF, conforme à l'obligation TTN El Fatoora — inclus nativement dans VAGA, pas une option payante en plus.

### Fonctionnement
- **Génération XML au format TEIF**, conforme aux exigences de la loi de finances 2026.
- **Couvre les documents concernés** : factures de vente et avoirs.
- **Export PDF** en parallèle, pour vos archives et vos clients qui préfèrent le papier.
- **Transmission au portail TTN El Fatoora** : aujourd'hui, vous (ou votre comptable) importez le fichier XML généré par VAGA sur le portail TTN. La transmission automatique directe est à l'étude pour une prochaine évolution.

### Pourquoi VAGA
Chez la plupart des concurrents, la conformité TEIF est vendue comme un module ou un pack séparé. Chez VAGA, c'est une fonctionnalité standard du logiciel, incluse dans les deux formules (Cloud et Box) sans surcoût.

### Modules liés
Retenue à la source & TEJ · Facturation & documents

### FAQ
- **VAGA transmet-il directement à TTN El Fatoora ?** Pas encore de manière automatique : VAGA génère le fichier XML conforme au format TEIF, que vous importez vous-même sur le portail TTN El Fatoora.
- **Ai-je encore besoin d'un certificat électronique ANCE ?** Oui, c'est une exigence réglementaire indépendante du logiciel utilisé.
- **Les devis et bons de livraison sont-ils concernés par l'obligation TEIF ?** Non, seules les factures de vente et les avoirs sont soumis à l'obligation actuellement.

**CTA**: Demander une démo

---

## 10. Retenue à la source & TEJ (`/fonctionnalites/retenue-source-tej`)

**Meta title**: Retenue à la source et déclaration TEJ — VAGA
**Meta description**: Générez vos certificats de retenue à la source et vos déclarations TEJ au format XML, pour vos ventes comme vos achats.

### Hero
**H1**: Vos certificats de retenue à la source, générés automatiquement.
**Subhead**: Consultez, générez et exportez vos certificats de RS et vos déclarations TEJ — vente et achat — sans ressaisie manuelle.

### Fonctionnement
- **Certificats de retenue à la source** : consultation et génération, vente et achat.
- **Export PDF** du certificat.
- **Export XML compatible TEJ** pour la déclaration auprès de l'administration fiscale.

### Pourquoi VAGA
La retenue à la source est calculée à partir des mêmes documents que votre facturation — pas besoin de ressaisir vos opérations dans un outil séparé pour préparer votre déclaration TEJ.

### Modules liés
Facturation électronique TEIF · Facturation & documents

### FAQ
- **La déclaration TEJ est-elle générée automatiquement ?** Export XML compatible TEJ disponible directement depuis VAGA.
- **Puis-je générer un certificat pour un fournisseur ?** Oui, côté vente comme côté achat.

**CTA**: Demander une démo

---

## 11. Demande de démo (`/demo`)

**Meta title**: Demander une démo — VAGA
**Meta description**: Réservez 15 minutes pour découvrir VAGA avec vos propres cas d'usage. Sans engagement.

### Hero
**H1**: Réservez votre démo.
**Subhead**: 15 minutes pour voir VAGA avec vos propres documents, votre stock et votre trésorerie — sans engagement.

### Booking
*(emplacement réservé pour l'intégration Cal.com — à câbler ultérieurement)*

### Réassurance
- 15 minutes, pas plus
- Sans engagement
- Réponse sous 24h

---

## 12. À propos (`/a-propos`)

**Meta title**: À propos de VAGA
**Meta description**: VAGA est conçu à Sousse, pour les PME tunisiennes qui veulent garder le contrôle de leurs données et de leur gestion.

### Hero
**H1**: Conçu en Tunisie, pour les entreprises tunisiennes.
**Subhead**: VAGA est né à Sousse, avec une idée simple : les PME tunisiennes méritent un logiciel de gestion aussi sérieux que ceux des grands groupes, sans dépendre d'un intégrateur étranger ni d'un hébergement à l'étranger.

### Pourquoi VAGA existe
Les grands ERP généralistes comme Odoo demandent un intégrateur et des mois de paramétrage pour s'adapter aux spécificités tunisiennes (TVA, Timbre Fiscal, Retenue à la Source, TEIF). Les outils locaux, à l'inverse, se limitent souvent à la facturation, sans couvrir le stock, la trésorerie ou la gestion de flotte. VAGA comble cet écart : un logiciel complet, pensé dès le départ pour la réalité fiscale et opérationnelle tunisienne.

### Implantation
Basés à Sousse, VAGA construit son produit au plus près des PME qu'il sert — c'est aussi pour ça que l'hébergement et le support restent en Tunisie.

**CTA final**: Demander une démo

---

## 13. Pages légales (`/mentions-legales`, `/confidentialite`) — structure seulement

Legal copy is not fabricated here — it needs real company/registration details and ideally a legal review before publishing. Structure to fill in:

**Mentions légales** — raison sociale, forme juridique, matricule fiscal, siège social, capital (si applicable), directeur de publication, hébergeur (nom + adresse), contact.

**Politique de confidentialité** — données collectées (formulaire de démo : nom, e-mail, téléphone, entreprise), finalité, durée de conservation, droits d'accès/rectification/suppression, contact pour exercer ces droits, mention du chiffrement côté client pour les données clients de VAGA elle-même (cohérent avec `/securite-donnees`).

---

## Resolved this round

- Box↔Cloud migration: free, supported both ways. Updated in §2.
- Cloud maintenance fee: hosting + backups + updates, email support included free; a paid support package (phone/chat/VPN remote access for Box/video call) is offered as an upsell. Updated in §2 — note the upsell mention is generic ("→ voir les forfaits support") since there's no dedicated support-tiers page yet; flag if you want one added to the sitemap.
- TEIF transmission: not automatic yet — VAGA generates the compliant XML, client/accountant uploads it to TTN manually. Reworded §9 and the homepage FAQ to stop implying automatic submission.
- Document customization: logo + custom fields confirmed. Updated §5.
- `/a-propos` disclosure: Sousse + mission story only, no named individuals. Updated §12.

## Deferred (intentionally, not blocking)

- Legal pages (`/mentions-legales`, `/confidentialite`): staying as a structure-only placeholder (§13) until the end of the project, when real company registration details, hosting provider name/address, and matricule fiscal are ready.
