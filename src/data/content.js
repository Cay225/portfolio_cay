// ─────────────────────────────────────────────────────────────
//  Toutes les infos du portfolio sont ici. Modifie ce fichier
//  pour changer textes, projets, expériences, liens, etc.
// ─────────────────────────────────────────────────────────────

export const INFO = {
  name: 'Chris Andy Yoan',
  fullname: 'Waounwa Chris Andy Yoan',
  shortName: 'Cay',
  title: 'Développeur Full-Stack',
  location: 'Abidjan, Côte d\'Ivoire',
  email: 'cayyoan7@gmail.com',
  phone: '+225 07 04 20 08 50',
  whatsapp: 'https://wa.me/2250704200850',
  github: 'https://github.com/Chrisandy225',
  linkedin: null, // ← mets l'URL de ton profil LinkedIn ici
  photo: '/chris-portrait.jpg',
  availability: 'Disponible pour un poste ou une mission',
  headline: 'Je conçois des applications web',
  headlineAccent: 'de l\'interface à l\'API.',
  intro:
    "Développeur full-stack basé à Abidjan. Je construis des interfaces React soignées, les API FastAPI ou Node.js qui les alimentent, et je les teste comme un QA — parce que j'ai commencé par là.",
}

export const STATS = [
  { value: '3', label: 'Expériences pro' },
  { value: '6+', label: 'Projets livrés' },
  { value: 'Dev + QA', label: 'Double compétence' },
  { value: 'Licence', label: 'DASI · ESATIC' },
]

export const STACK = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Python', 'FastAPI',
  'PostgreSQL', 'Prisma', 'Supabase', 'Playwright', 'Jenkins', 'Git', 'Figma', 'Vercel',
]

export const EXPERTISE = [
  {
    id: 'front',
    title: 'Frontend',
    desc: 'Interfaces React rapides, accessibles et responsives, du design Figma au composant en production.',
    tools: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query'],
  },
  {
    id: 'back',
    title: 'Backend & API',
    desc: 'API REST structurées par ressources métier, authentification et logique applicative.',
    tools: ['Python', 'FastAPI', 'Node.js', 'Express'],
  },
  {
    id: 'qa',
    title: 'Tests & qualité',
    desc: 'Tests E2E automatisés et pipelines CI/CD : je pense aux cas limites avant de livrer.',
    tools: ['Playwright', 'Tests E2E', 'Jenkins', 'CI/CD'],
  },
  {
    id: 'data',
    title: 'Données',
    desc: 'Modélisation et persistance des données, du schéma relationnel aux ORM.',
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
    category: 'Plateforme web',
    context: 'Projet de mémoire · Licence DASI',
    year: '2026',
    tagline: 'Trouver un artisan certifié près de chez soi, à Abidjan.',
    description:
      "Plateforme de mise en relation entre clients et corps d'état certifiés, avec géolocalisation et gestion des profils métiers.",
    stack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    role: 'Conception & développement full-stack',
    image: '/projects/proximeo.webp',
    accent: '#FF6B35',
    link: null,
    github: null,
    sections: [
      {
        title: 'Le problème',
        text: "Mettre en relation des clients avec des corps d'état (artisans et prestataires techniques certifiés) à Abidjan, en tenant compte de leur proximité géographique et de leur domaine de métier.",
      },
      {
        title: 'La solution',
        text: "Une plateforme web où les clients recherchent librement des prestataires par métier et localisation, tandis que les prestataires — vérifiés et certifiés — gèrent leur profil et leurs disponibilités.",
      },
      {
        title: 'Mon rôle',
        text: "Conception de l'architecture applicative, modélisation UML (diagrammes de classes, cas d'utilisation, séquence) et développement du frontend et de l'API.",
      },
      {
        title: 'Architecture',
        text: 'Frontend React consommant une API FastAPI, avec une base PostgreSQL pour la persistance des profils, métiers et données de géolocalisation.',
      },
    ],
    features: [
      'Géolocalisation des prestataires',
      'Profils prestataires vérifiés et certifiés',
      'Inscription client / prestataire',
      'Recherche et mise en relation',
      'API REST structurée par ressources métier',
    ],
    result:
      'Projet support du mémoire de fin de cycle, avec modélisation UML complète et suite de tests couvrant les principaux scénarios applicatifs.',
  },
  {
    id: 'cayflow',
    name: 'CayFlow Manager',
    category: 'Application SaaS',
    context: 'Projet personnel',
    year: '2026',
    tagline: 'Le cœur digital de votre entreprise.',
    description:
      "Application de gestion pensée comme un outil métier : espace entreprise, interface d'administration, formulaires structurés et données synchronisées.",
    stack: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'Zod'],
    role: 'Développement frontend & logique métier',
    image: '/projects/cayflow.webp',
    accent: '#1FA97A',
    link: null,
    github: null,
    sections: [
      {
        title: "L'objectif",
        text: "Offrir aux petites entreprises un outil de gestion centralisé, simple à prendre en main, accessible depuis le navigateur.",
      },
      {
        title: 'Approche',
        text: "Formulaires typés et validés avec React Hook Form + Zod, données serveur mises en cache et synchronisées avec TanStack Query, interface en Tailwind CSS.",
      },
    ],
    features: [
      'Création de compte entreprise et connexion',
      'Thème clair / sombre',
      'Formulaires validés côté client (Zod)',
      'Cache et synchronisation des données (TanStack Query)',
    ],
    result: null,
  },
  {
    id: 'caywebsolutions',
    name: 'CayWeb Solutions',
    category: 'Site vitrine',
    context: 'Agence digitale · Abidjan',
    year: '2026',
    tagline: 'Une présence digitale à la hauteur des PME d\'Abidjan.',
    description:
      "Site de CayWeb Solutions, agence qui conçoit, développe et maintient des solutions digitales pour entrepreneurs et PME — du site vitrine à l'application sur mesure.",
    stack: ['React', 'Tailwind CSS', 'Vite'],
    role: 'Design, développement & déploiement',
    image: '/projects/caywebsolutions.webp',
    accent: '#2F6BFF',
    link: null,
    github: null,
    sections: [
      {
        title: "L'objectif",
        text: "Présenter l'offre de l'agence de façon claire et crédible, et transformer les visiteurs en demandes de projet.",
      },
      {
        title: 'Approche',
        text: "Identité visuelle propre, pages Accueil / Services / À propos / Contact, appels à l'action visibles et responsive de bout en bout.",
      },
    ],
    features: ['Identité visuelle et logo', 'Site multi-pages responsive', "Parcours « Démarrer un projet »"],
    result: null,
  },
]

export const OTHER_PROJECTS = [
  {
    name: 'Reflection Agency',
    description: 'Site vitrine pour une agence créative abidjanaise, avec système de devis WhatsApp.',
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
    name: 'ElephantBet — Tests E2E',
    description: "Automatisation des tests end-to-end d'une application web. Projet de fin d'études BTS.",
    stack: ['Playwright', 'TypeScript', 'CI/CD'],
    link: null,
    github: 'https://github.com/Chrisandy225',
  },
]

export const EXPERIENCE = [
  {
    title: 'Développeur (stage)',
    org: 'Halltech Africa',
    period: 'Juin — Sept. 2026',
    tag: 'Stage',
    bullets: ["Développement d'une application de mise en relation des corps d'état"],
  },
  {
    title: 'Testeur Automaticien',
    org: 'Overnetflow',
    period: 'Sept. 2024 — Juil. 2025',
    tag: 'Stage',
    bullets: [
      'Scripts de tests E2E avec Playwright (JavaScript / TypeScript)',
      'Mise en place et supervision des pipelines CI/CD sur Jenkins',
      'Optimisation des suites de tests pour réduire les régressions',
      "Validation des fonctionnalités critiques d'applications en production",
    ],
  },
  {
    title: 'Opérateur Technique',
    org: 'CAN 2024 · Côte d\'Ivoire',
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
    period: '2025 — 2026',
    tag: 'Obtenue',
    bullets: ["Développement d'Applications et de Systèmes d'Information"],
  },
  {
    title: 'BTS Informatique & Développement d\'Applications',
    org: 'ESC Casting',
    period: '2023 — 2024',
    tag: null,
    bullets: [],
  },
  {
    title: 'Baccalauréat A1',
    org: 'GSIE',
    period: '2020 — 2021',
    tag: null,
    bullets: [],
  },
]

export const PROCESS = [
  { step: 'Comprendre', desc: "Analyser le besoin réel et les utilisateurs avant d'écrire du code." },
  { step: 'Concevoir', desc: 'Structure fonctionnelle, modélisation UML, choix techniques.' },
  { step: 'Développer', desc: 'Frontend, API et base de données, livrés par itérations.' },
  { step: 'Tester', desc: 'Tests automatisés E2E pour vérifier ce qui compte vraiment.' },
  { step: 'Déployer', desc: 'Mise en ligne sur Vercel / Railway, puis suivi et améliorations.' },
]
