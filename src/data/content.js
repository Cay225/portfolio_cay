// Toutes les infos du portfolio sont ici. Modifie ce fichier
// pour changer textes, projets, expériences, liens, etc.

export const INFO = {
  name: 'Waounwa Chris Andy Yoan',
  title: 'Développeur Full-Stack',
  role: 'Développeur Full-Stack & fondateur de CayWeb Solutions',
  location: 'Abidjan, Côte d\'Ivoire',
  email: 'cayyoan7@gmail.com',
  phone: '+225 07 04 20 08 50',
  whatsapp: 'https://wa.me/2250704200850',
  github: 'https://github.com/Cay225',
  linkedin: null, // mets l'URL de ton profil LinkedIn ici
  photo: '/chris-portrait.jpg',
  availability: 'Ouvert à un poste en développement Full-Stack ou QA',
  intro:
    "Je conçois et développe des applications web, du besoin jusqu'à la mise en ligne, avec React, TypeScript et FastAPI. J'ai commencé par le test automatisé, et ça se voit : mon SaaS CayFlow est couvert par des tests pytest, Vitest et Playwright.",
}

export const STATS = [
  { value: '2025', label: 'Création de CayWeb Solutions' },
  { value: '6+', label: 'Projets livrés' },
  { value: 'Dev + QA', label: 'Double compétence' },
  { value: 'Licence', label: 'DASI, ESATIC' },
]

export const STACK = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Python', 'FastAPI', 'SQLAlchemy', 'Node.js',
  'PostgreSQL', 'MariaDB', 'Playwright', 'pytest', 'Vitest', 'Jenkins', 'Git', 'Figma',
]

export const EXPERTISE = [
  {
    id: 'front',
    title: 'Frontend',
    desc: 'Interfaces React rapides, accessibles et responsives, de la maquette Figma au composant en production.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query'],
  },
  {
    id: 'back',
    title: 'Backend & API',
    desc: 'API REST structurées par ressources métier, authentification, tâches de fond et logique applicative.',
    tools: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Node.js'],
  },
  {
    id: 'qa',
    title: 'Tests & qualité',
    desc: 'Tests automatisés à chaque niveau et pipelines CI/CD. Je pense aux cas limites avant de livrer.',
    tools: ['Playwright', 'pytest', 'Vitest', 'Jenkins', 'CI/CD'],
  },
  {
    id: 'data',
    title: 'Données',
    desc: 'Modélisation et persistance des données, du schéma relationnel à l\'isolation entre clients.',
    tools: ['PostgreSQL', 'MariaDB', 'MySQL', 'Prisma', 'Supabase'],
  },
  {
    id: 'design',
    title: 'Conception',
    desc: 'Analyse du besoin, modélisation UML et architecture applicative avant la première ligne de code.',
    tools: ['UML', 'Architecture', 'Conception fonctionnelle', 'Gestion de projet'],
  },
  {
    id: 'branding',
    title: 'Identité visuelle',
    desc: 'Logos, chartes graphiques et affiches pour donner une image claire et cohérente à une marque.',
    tools: ['Logo', 'Charte graphique', 'Affiches', 'Figma'],
  },
]

export const PROJECTS = [
  {
    id: 'cayflow',
    name: 'CayFlow',
    logo: '/projects/cayflow/logo-mark.png',
    category: 'Logiciel SaaS',
    context: 'Produit CayWeb Solutions',
    year: '2026',
    tagline: 'Paie, pointage, congés et facturation pour les PME, au même endroit.',
    description:
      "Logiciel en ligne vendu par abonnement aux PME d'Afrique de l'Ouest. Chaque entreprise cliente a son propre espace, sur son sous-domaine, pour gérer son personnel, la paie, le pointage, les congés, les documents RH et la facturation.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'SQLAlchemy', 'MariaDB', 'pytest', 'Vitest', 'Playwright'],
    role: 'Conception & développement full-stack',
    image: '/projects/cayflow/couverture.webp',
    accent: '#1FA97A',
    link: 'https://cayflow.caywebsolutions.com/',
    linkLabel: null,
    github: null,
    gallery: [
      { src: '/projects/cayflow/paie.webp', caption: 'Paie' },
      { src: '/projects/cayflow/mobile-pointage.webp', caption: 'Pointage sur téléphone', portrait: true },
      { src: '/projects/cayflow/facturation.webp', caption: 'Facturation' },
      { src: '/projects/cayflow/mobile-portail.webp', caption: 'Portail employé', portrait: true },
      { src: '/projects/cayflow/personnel.webp', caption: 'Personnel' },
    ],
    sections: [
      {
        title: 'Le contexte',
        text: "Dans beaucoup de PME, le pointage se fait sur un cahier, la paie sur Excel et les congés par message. Les erreurs de cotisation coûtent cher, et personne n'a une vue claire sur son équipe.",
      },
      {
        title: 'Le besoin',
        text: "Réunir dans un seul outil tout ce qu'une entreprise suit chaque mois, en appliquant les règles de son pays : CNPS, ITS, CMU et FDFP en Côte d'Ivoire, et une paie simple dans les autres pays de la zone franc CFA.",
      },
      {
        title: 'Architecture',
        text: "Une seule application sert toutes les entreprises. Chacune a sa propre base MariaDB et son propre utilisateur, sans aucun droit sur les bases des autres : même un bug dans une requête ne peut pas exposer les données d'un autre client. API FastAPI asynchrone avec SQLAlchemy et Alembic, frontend React en TypeScript, PDF générés côté serveur.",
      },
      {
        title: 'Des règles métier sérieuses',
        text: "Les taux appliqués sont enregistrés avec chaque bulletin, une paie validée est verrouillée et ne redevient jamais brouillon, la numérotation des factures ne comporte aucun trou, et l'heure de pointage vient du serveur, jamais du téléphone.",
      },
      {
        title: 'Le défi technique',
        text: "Le produit tournait au départ sur PostgreSQL, avec Redis et Celery pour les tâches de fond. L'hébergeur retenu bloque les connexions sortantes et ne propose qu'un PostgreSQL ancien. J'ai donc migré vers MariaDB, avec une base créée automatiquement pour chaque nouvelle entreprise, et remplacé Redis et Celery par une file de tâches en base lancée par tâche planifiée. Les suites de tests ont servi de filet pendant toute la migration.",
      },
    ],
    features: [
      'Paie calculée, contrôlée puis verrouillée',
      'Pointage sur téléphone ou borne, par QR code ou position',
      'Congés validés en ligne, jours fériés du pays',
      'Dossiers du personnel et import depuis un fichier',
      'Documents RH en PDF vérifiables par QR code',
      'Proformas, factures et règlements',
      'Portail employé sur téléphone',
      'Double authentification',
    ],
    result:
      'En ligne. Couvert par des tests backend (pytest), composants (Vitest) et de bout en bout (Playwright, sur ordinateur et téléphone).',
  },
  {
    id: 'proximeo',
    name: 'Proximéo',
    logo: '/projects/proximeo/logo.png',
    category: 'Plateforme web',
    context: 'Projet interne CayWeb Solutions',
    year: '2026',
    tagline: 'Le bon prestataire, près de chez vous.',
    description:
      "Plateforme qui met en relation les habitants avec des prestataires de confiance près de chez eux : recherche sur liste ou sur carte, profils validés, contact direct par WhatsApp ou messagerie intégrée.",
    stack: ['JavaScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Cartographie', 'PWA'],
    role: 'Conception & développement full-stack',
    image: '/projects/proximeo/couverture.webp',
    accent: '#D9561E',
    link: null,
    linkLabel: 'Projet interne, pas de démo publique',
    github: null,
    gallery: [
      { src: '/projects/proximeo/recherche.webp', caption: 'Recherche de prestataires' },
      { src: '/projects/proximeo/mobile-recherche.webp', caption: 'Version mobile', portrait: true },
      { src: '/projects/proximeo/fiche-prestataire.webp', caption: 'Fiche prestataire' },
      { src: '/projects/proximeo/mobile-carte.webp', caption: 'Recherche sur carte', portrait: true },
      { src: '/projects/proximeo/espace-prestataire.webp', caption: 'Espace prestataire' },
      { src: '/projects/proximeo/inscription.webp', caption: 'Création de compte' },
    ],
    sections: [
      {
        title: 'Le contexte',
        text: "À Abidjan, trouver un plombier, un électricien ou une coiffeuse à domicile passe encore beaucoup par le bouche-à-oreille. De leur côté, de nombreux prestataires qualifiés ont du mal à se rendre visibles.",
      },
      {
        title: 'Le besoin',
        text: "Créer un lieu unique où un client trouve rapidement un prestataire fiable dans sa zone, et où un prestataire présente son activité, avec un contrôle des profils pour instaurer la confiance.",
      },
      {
        title: 'Mon rôle',
        text: "Conception de l'architecture applicative, modélisation UML (classes, cas d'utilisation, séquences), développement de l'API FastAPI et de l'interface.",
      },
    ],
    features: [
      'Parcours client et parcours prestataire distincts',
      'Recherche par métier et commune, ou autour de moi',
      'Résultats en liste ou sur carte',
      'Fiches avec note, avis et disponibilité',
      'Contact direct par WhatsApp',
      "Inscription prestataire en étapes avec pièce d'identité",
      'Validation des profils par un administrateur',
      "Messagerie intégrée, pensée d'abord pour le mobile",
    ],
    result: null,
  },
  {
    id: 'oyo-studios',
    name: 'OYO STUDIOS',
    logo: '/projects/oyo-studios/logo.webp',
    category: 'Site vitrine et réservation',
    context: 'Client, studio photo et vidéo à Angré',
    year: '2026',
    tagline: 'Un studio photo, ses formules et ses réservations en ligne.',
    description:
      "Le site d'un studio photo et vidéo d'Abidjan : un portfolio qui met les images en valeur, des formules de séance claires et des réservations envoyées directement sur WhatsApp.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    role: 'Design, développement & mise en ligne',
    image: '/projects/oyo-studios/accueil.webp',
    accent: '#E2683C',
    link: 'https://oyo-studios.vercel.app/',
    linkLabel: null,
    github: null,
    gallery: [
      { src: '/projects/oyo-studios/portfolio.webp', caption: 'Portfolio' },
      { src: '/projects/oyo-studios/mobile.webp', caption: 'Version mobile', portrait: true },
    ],
    sections: [
      {
        title: 'Le contexte',
        text: "OYO STUDIOS est un studio photo et vidéo installé à Angré : portraits, mode, marques et tournages. Le studio loue aussi son matériel de tournage.",
      },
      {
        title: 'Le besoin',
        text: "Un site à la hauteur de ses images, qui présente les formules et permet de réserver une séance ou de louer du matériel sans échanges interminables.",
      },
    ],
    features: [
      'Accueil plein écran avec diaporama',
      'Réservation en quatre étapes',
      'Location du matériel, kit par kit',
      'Portfolio par catégorie',
      'Demandes envoyées déjà rédigées sur WhatsApp',
    ],
    result: null,
  },
  {
    id: 'artcom',
    name: 'ARTCOM',
    logo: '/projects/artcom/logo.svg',
    category: "Site d'agence",
    context: 'Client, agence de communication à Angré',
    year: '2026',
    tagline: "Le site d'une agence créative abidjanaise.",
    description:
      "Le site d'une agence de communication abidjanaise : une identité forte reprise de sa plaquette, ses services, sa méthode en cinq étapes et ses références.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    role: 'Design, développement & mise en ligne',
    image: '/projects/artcom/accueil.webp',
    accent: '#F5B335',
    link: 'https://artcom-agence.vercel.app/',
    linkLabel: null,
    github: null,
    gallery: [
      { src: '/projects/artcom/services.webp', caption: 'Services' },
      { src: '/projects/artcom/mobile.webp', caption: 'Version mobile', portrait: true },
      { src: '/projects/artcom/realisations.webp', caption: 'Réalisations' },
    ],
    sections: [
      {
        title: 'Le contexte',
        text: "ARTCOM est une agence créative d'Abidjan : stratégie, digital, communication hors ligne et branding.",
      },
      {
        title: 'Le besoin',
        text: "Un site qui reflète l'identité de l'agence, présente clairement ses quatre métiers et rassure les prospects avec ses références.",
      },
    ],
    features: [
      'Identité reconstruite en vectoriel depuis la plaquette',
      'Pages Agence, Services, Réalisations et Contact',
      'Méthode présentée en cinq étapes',
      'Mur de logos des clients',
      'Formulaire de contact et accès WhatsApp',
    ],
    result: null,
  },
  {
    id: 'sibotex',
    name: 'SIBOTEX',
    logo: '/projects/sibotex/logo.webp',
    category: 'Site vitrine et catalogue',
    context: 'Client, bonneterie et textile à Gagnoa',
    year: '2026',
    tagline: 'Un catalogue textile consultable sur téléphone.',
    description:
      "Le site d'une entreprise textile de Gagnoa : vêtements de travail, équipements de protection et tenues scolaires, avec un catalogue et des demandes de prix sur WhatsApp.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    role: 'Design, développement & mise en ligne',
    image: '/projects/sibotex/accueil.webp',
    accent: '#2F80C0',
    link: 'https://sibotex-ci.com/',
    linkLabel: null,
    github: null,
    gallery: [
      { src: '/projects/sibotex/catalogue.webp', caption: 'Catalogue' },
      { src: '/projects/sibotex/mobile.webp', caption: 'Version mobile', portrait: true },
    ],
    sections: [
      {
        title: 'Le contexte',
        text: "SIBOTEX fournit vêtements de travail, chaussures de sécurité, équipements de protection et tenues scolaires, et personnalise chaque pièce (broderie, flex, DTF, sérigraphie).",
      },
      {
        title: 'Le besoin',
        text: "L'entreprise présentait ses produits uniquement par catalogue PDF. Il lui fallait un site clair, consultable sur téléphone, d'où un client demande un prix en un geste.",
      },
    ],
    features: [
      'Catalogue filtrable par catégorie',
      'Rubriques marquage et rentrée scolaire',
      'Bouton « Demander un prix » sur chaque article',
      'Message WhatsApp préparé automatiquement',
      "Identité reprise des catalogues de l'entreprise",
    ],
    result: null,
  },
  {
    id: 'caywebsolutions',
    name: 'CayWeb Solutions',
    logo: '/projects/cayweb/symbole.svg',
    category: 'Site vitrine',
    context: 'Mon entreprise, Abidjan',
    year: '2026',
    tagline: 'Le numérique au service de votre ambition.',
    description:
      "Site officiel de CayWeb Solutions, l'entreprise de solutions digitales que j'ai créée à Abidjan. Il est pensé comme un outil commercial qui mène le visiteur de la découverte jusqu'à la prise de contact.",
    stack: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'PHP (formulaire)'],
    role: 'Identité, design, développement & déploiement',
    image: '/projects/cayweb/home.webp',
    accent: '#1E6FD9',
    link: 'https://caywebsolutions.com/',
    linkLabel: null,
    github: null,
    gallery: [
      { src: '/projects/cayweb/services.webp', caption: 'Page Services' },
      { src: '/projects/cayweb/apropos.webp', caption: 'Page À propos' },
    ],
    sections: [
      {
        title: "L'objectif",
        text: "Présenter CayWeb Solutions comme une entreprise, pas comme un portfolio personnel, et transformer les visiteurs en demandes de projet.",
      },
      {
        title: 'Approche',
        text: "Pages Accueil, Services, Réalisations, À propos et Contact, une fiche détaillée par projet, des pages pré-générées pour le référencement, et un formulaire de contact complet relayé par WhatsApp, téléphone et email.",
      },
    ],
    features: [
      'Identité visuelle et logo de l\'entreprise',
      'Cinq offres détaillées avec FAQ',
      'Fiches réalisations avec galerie',
      'Pages pré-générées et sitemap pour le SEO',
      'Aucun cookie déposé',
      'Animations respectueuses de la réduction de mouvement',
    ],
    result: null,
  },
]

export const OTHER_PROJECTS = [
  {
    name: 'Reflection Agency',
    description: 'Site vitrine pour une agence créative abidjanaise, avec brief de devis envoyé sur WhatsApp.',
    stack: ['React', 'Tailwind', 'React Router'],
    link: 'https://reflection-agency-m283.vercel.app/',
    github: null,
  },
  {
    name: 'WideViTech',
    description: 'Site vitrine pour un distributeur de matériel informatique professionnel.',
    stack: ['React', 'Tailwind CSS'],
    link: 'https://widevitechweb-site.vercel.app/',
    github: null,
  },
  {
    name: 'ElephantBet, tests E2E',
    description: "Automatisation des tests de bout en bout d'une application web.",
    stack: ['Playwright', 'TypeScript', 'CI/CD'],
    link: null,
    github: 'https://github.com/Cay225',
  },
]

export const EXPERIENCE = [
  {
    title: 'Fondateur & Dirigeant',
    org: 'CayWeb Solutions',
    period: '2025 à aujourd\'hui',
    tag: 'Entreprise',
    bullets: [
      'Création d\'une structure de solutions digitales à Abidjan : sites, applications web et identité visuelle',
      'Conception, développement et mise en ligne du SaaS CayFlow, et de la plateforme Proximéo',
      'Sites livrés pour OYO STUDIOS, ARTCOM, SIBOTEX, WideViTech et Reflection Agency',
      'Suivi des projets de bout en bout, du recueil du besoin à la mise en ligne, en direct avec les clients',
      'Branding : logos, chartes graphiques et affiches',
    ],
  },
  {
    title: 'Développeur (stage)',
    org: 'Halltech Africa',
    period: 'Juin à sept. 2026',
    tag: 'Stage',
    bullets: ["Développement d'une application de mise en relation des corps d'état"],
  },
  {
    title: 'Testeur Automaticien',
    org: 'Overnetflow',
    period: 'Sept. 2024 à juil. 2025',
    tag: 'Stage',
    bullets: [
      'Scripts de tests E2E avec Playwright (JavaScript, TypeScript)',
      'Mise en place et supervision des pipelines CI/CD sur Jenkins',
      'Optimisation des suites de tests pour réduire les régressions',
      "Validation des fonctionnalités critiques d'applications en production",
    ],
  },
  {
    title: 'Opérateur Technique',
    org: 'CAN 2024, Côte d\'Ivoire',
    period: '2024',
    tag: 'Mission',
    bullets: [
      "Contrôle qualité en temps réel d'une application de jeu interactive",
      'Gestion et calibration des équipements techniques sur site',
      'Assistance des utilisateurs pendant les matchs',
    ],
  },
]

export const EDUCATION = [
  {
    title: 'Licence DASI',
    org: 'ESATIC',
    period: '2025 à 2026',
    tag: 'Obtenue',
    bullets: ["Développement d'Applications et de Systèmes d'Information"],
  },
  {
    title: 'BTS Informatique & Développement d\'Applications',
    org: 'ESC Casting',
    period: '2023 à 2024',
    tag: null,
    bullets: [],
  },
  {
    title: 'Baccalauréat A1',
    org: 'GSIE',
    period: '2020 à 2021',
    tag: null,
    bullets: [],
  },
]

export const PROCESS = [
  { step: 'Comprendre', desc: "Analyser le besoin réel et les utilisateurs avant d'écrire du code." },
  { step: 'Concevoir', desc: 'Structure fonctionnelle, modélisation UML, choix techniques.' },
  { step: 'Développer', desc: 'Frontend, API et base de données, livrés par itérations.' },
  { step: 'Tester', desc: 'Tests automatisés pour vérifier ce qui compte vraiment.' },
  { step: 'Déployer', desc: 'Mise en ligne, puis suivi et améliorations.' },
]
