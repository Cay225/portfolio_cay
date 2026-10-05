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
  photoAbout: '/chris-graduation.jpg',
  availability: 'Disponible pour un poste ou une mission',
  intro:
    "Je développe des applications web complètes avec React, FastAPI et PostgreSQL. J'ai commencé par le test automatisé : je construis des produits fiables, pensés pour être utilisés tous les jours.",
}

export const STATS = [
  { value: '2025', label: 'Création de CayWeb Solutions' },
  { value: '6+', label: 'Projets livrés' },
  { value: 'Dev + QA', label: 'Double compétence' },
  { value: 'Licence', label: 'DASI, ESATIC' },
]

export const STACK = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL',
  'Redis', 'Celery', 'Prisma', 'Supabase', 'Playwright', 'Jenkins', 'Git', 'Figma',
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
    tools: ['Python', 'FastAPI', 'SQLAlchemy', 'Node.js', 'Redis', 'Celery'],
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
    tools: ['PostgreSQL', 'Prisma', 'Supabase', 'MySQL', 'MongoDB'],
  },
  {
    id: 'design',
    title: 'Conception',
    desc: 'Analyse du besoin, modélisation UML et architecture applicative avant la première ligne de code.',
    tools: ['UML', 'Architecture', 'Conception fonctionnelle', 'Gestion de projet'],
  },
]

export const PROJECTS = [
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
      'Inscription prestataire en étapes avec pièce d\'identité',
      'Validation des profils par un administrateur',
      'Messagerie intégrée, pensée d\'abord pour le mobile',
    ],
    result: null,
  },
  {
    id: 'cayflow',
    name: 'CayFlow Manager',
    logo: '/projects/cayflow/logo-mark.png',
    category: 'Application SaaS',
    context: 'Produit CayWeb Solutions',
    year: '2026',
    tagline: 'RH, paie, présence et facturation pour les PME, en un seul outil.',
    description:
      "Logiciel en ligne vendu par abonnement aux entreprises. Chaque entreprise cliente dispose de son propre espace isolé, sur son sous-domaine, pour gérer employés, contrats, paie, congés, présence et factures.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Playwright'],
    role: 'Conception & développement full-stack',
    image: '/projects/cayflow/couverture.webp',
    accent: '#1FA97A',
    link: null,
    linkLabel: 'Produit en cours de commercialisation',
    github: null,
    gallery: [],
    sections: [
      {
        title: 'Le contexte',
        text: "Dans beaucoup de PME ivoiriennes, la gestion du personnel et la facturation se font encore sur des fichiers Excel dispersés, avec des calculs de paie faits à la main.",
      },
      {
        title: 'Le besoin',
        text: "Réunir dans un seul outil en ligne tout ce qu'une PME suit au quotidien, en respectant les règles ivoiriennes : types de contrats, cotisations CNPS et impôt sur les salaires.",
      },
      {
        title: 'Architecture',
        text: "Application multi-entreprises : chaque client accède à son espace par son sous-domaine, et l'isolation des données est garantie au niveau de la base par la Row-Level Security de PostgreSQL. API FastAPI asynchrone, tâches de fond avec Celery et Redis, frontend React en TypeScript.",
      },
      {
        title: 'Des règles métier sérieuses',
        text: "Les taux de paie appliqués sont enregistrés avec chaque bulletin, une paie validée ne redevient jamais brouillon, et la numérotation des factures ne comporte aucun trou. L'heure de pointage vient du serveur, jamais du navigateur.",
      },
    ],
    features: [
      'Fiches employés complètes et import de fichiers',
      'Contrats ivoiriens (CDI, CDD, stage, freelance) et export PDF',
      'Bulletins de paie avec calcul automatique CNPS et ITS',
      'Congés, soldes et calendrier des jours fériés',
      'Pointage et suivi de présence',
      'Facturation clients et proformas',
      'Portail employé séparé',
      'Double authentification et codes de secours',
    ],
    result:
      'Les 15 phases du produit sont livrées, couvertes par des tests backend (pytest), composants (Vitest) et de bout en bout (Playwright).',
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
    description: "Automatisation des tests de bout en bout d'une application web. Projet de fin d'études BTS.",
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
      'Création d\'une entreprise de solutions digitales pour les PME de Côte d\'Ivoire',
      'Conception et développement du SaaS CayFlow Manager et de la plateforme Proximéo',
      'Réalisation de sites pour des clients (Reflection Agency, WideViTech)',
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
