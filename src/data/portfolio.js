export const INFO = {
  name:     'Chris Andy',
  fullname: 'Waounwa Chris Andy Yoan',
  role:     'Développeur Front-End',
  roles:    ['Développeur Front-End', 'QA Automaticien', 'Créateur d\'interfaces', 'React Developer'],
  location: 'Abidjan, Côte d\'Ivoire',
  email:    'cayyoan7@gmail.com',
  phone:    '+225 07 04 20 08 50',
  github:   'https://github.com/Chrisandy225',
  linkedin: '#',
  photo:    '/chris.jpg',
  bio:      'Développeur Front-End junior passionné par la création d\'interfaces web modernes et ergonomiques. Doté d\'une double compétence en développement et en automatisation de tests, j\'apporte une approche structurée et orientée qualité à chaque projet.',
}

export const STATS = [
  { value: 2,    suffix: '+', label: 'Ans d\'expérience' },
  { value: 4,    suffix: '+', label: 'Projets réalisés'  },
  { value: 100,  suffix: '%', label: 'Passion & rigueur' },
  { value: 2,    suffix: '',  label: 'Casquettes tech'   },
]

export const SKILLS = [
  {
    category: 'Frontend',
    icon: 'fas fa-code',
    items: [
      { name: 'React',       level: 80 },
      { name: 'JavaScript',  level: 78 },
      { name: 'Tailwind CSS',level: 85 },
      { name: 'HTML / CSS',  level: 90 },
    ],
  },
  {
    category: 'QA & Tests',
    icon: 'fas fa-vial',
    items: [
      { name: 'Playwright',  level: 75 },
      { name: 'TypeScript',  level: 65 },
      { name: 'Jenkins CI/CD',level: 60 },
      { name: 'Test Automatisé', level: 72 },
    ],
  },
  {
    category: 'Outils',
    icon: 'fas fa-tools',
    items: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Vite',         level: 75 },
      { name: 'VS Code',      level: 90 },
      { name: 'Figma',        level: 55 },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Reflection Agency',
    type: 'Site vitrine',
    tags: ['React', 'Tailwind', 'React Router'],
    desc: 'Site vitrine complet pour une agence créative abidjanaise. Design moderne avec système de devis WhatsApp, pages multiples, loader animé et responsive mobile.',
    link: 'https://reflection-agency-m283.vercel.app/',
    github: null,
    color: '#FF6420',
    icon: 'fas fa-paint-brush',
    featured: true,
  },
  {
    id: 2,
    title: 'WideViTech',
    type: 'Site vitrine & E-commerce',
    tags: ['React', 'Tailwind', 'B2B'],
    desc: 'Site vitrine et e-commerce pour une entreprise spécialisée dans la vente de matériel informatique robuste aux professionnels.',
    link: 'https://widevitechweb-site.vercel.app/#',
    github: null,
    color: '#4F8EF7',
    icon: 'fas fa-laptop',
    featured: true,
  },
  {
    id: 3,
    title: 'ElephantBet — Tests E2E',
    type: 'Automatisation QA',
    tags: ['Playwright', 'TypeScript', 'CI/CD'],
    desc: 'Projet de fin d\'études BTS — Automatisation complète des tests end-to-end de l\'application ElephantBet avec Playwright et TypeScript.',
    link: 'https://github.com/Chrisandy225',
    github: 'https://github.com/Chrisandy225',
    color: '#10B981',
    icon: 'fas fa-vial',
    featured: false,
  },
  {
    id: 4,
    title: 'CAN 2024 — Côte d\'Ivoire',
    type: 'Opérateur Technique',
    tags: ['Technique', 'Événementiel', 'QA live'],
    desc: 'Opérateur technique lors de la Coupe d\'Afrique des Nations 2024. Gestion et contrôle qualité d\'une application de jeu interactive en temps réel, accompagnement des utilisateurs.',
    link: null,
    github: null,
    color: '#F59E0B',
    icon: 'fas fa-trophy',
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    title:    'Testeur Automaticien',
    company:  'Overnetflow',
    period:   'Sept. 2024 — Juil. 2025',
    type:     'Stage',
    bullets: [
      'Conception de cas de test automatisés pour valider les fonctionnalités web',
      'Développement de scripts E2E avec Playwright (JavaScript / TypeScript)',
      'Mise en place et surveillance des pipelines CI/CD sur Jenkins',
      'Réparation et optimisation de tests existants',
    ],
    color: '#4F8EF7',
    icon:  'fas fa-vial',
  },
  {
    title:    'Opérateur Technique',
    company:  'CAN 2024 — Côte d\'Ivoire',
    period:   '2024',
    type:     'Mission',
    bullets: [
      'Gestion d\'une application de jeu interactive lors des matchs',
      'Contrôle qualité en temps réel de l\'application',
      'Calibration des équipements techniques',
      'Accompagnement et assistance des utilisateurs sur site',
    ],
    color: '#F59E0B',
    icon:  'fas fa-trophy',
  },
]

export const EDUCATION = [
  {
    title:   'Licence DASI',
    school:  'ESATIC',
    period:  'Depuis Sept. 2025',
    desc:    'Développement d\'Applications et Systèmes d\'Information',
    color:   '#4F8EF7',
  },
  {
    title:   'BTS en IDA',
    school:  'École Supérieure de Commerce Casting',
    period:  '2023 — 2024',
    desc:    'Informatique et Développement d\'Applications',
    color:   '#8B5CF6',
  },
  {
    title:   'Baccalauréat A1',
    school:  'GSIE',
    period:  '2020 — 2021',
    desc:    'Groupe Scolaire International des Enseignants',
    color:   '#10B981',
  },
]
