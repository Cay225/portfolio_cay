# 💻 Portfolio — Chris Andy
### Développeur Front-End & QA Automaticien

---

## 🚀 Lancer le projet en local

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 📁 Structure complète du projet

```
portfolio-chris/
│
├── public/
│   └── chris.jpg              ← Ta photo de profil
│
├── src/
│   ├── components/            ← Éléments visuels globaux
│   │   ├── Cursor.jsx             → Curseur custom bleu
│   │   ├── Particles.jsx          → Particules animées en fond
│   │   └── Navbar.jsx             → Navigation fixe + menu mobile
│   │
│   ├── sections/              ← Chaque section de la page
│   │   ├── Hero.jsx               → Accueil : photo, typing, stats
│   │   ├── About.jsx              → À propos : bio + formation
│   │   ├── Skills.jsx             → Compétences : barres animées
│   │   ├── Projects.jsx           → Projets : cartes avec liens
│   │   ├── Experience.jsx         → Expériences : timeline
│   │   └── Contact.jsx            → Contact : liens et réseaux
│   │
│   ├── data/
│   │   └── portfolio.js       ← ⭐ TOUTES TES INFOS ICI
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js → Animation au scroll
│   │
│   ├── App.jsx                ← Assemble toutes les sections
│   ├── index.css              ← Styles globaux, curseur, particules
│   └── main.jsx               ← Point d'entrée
│
├── vercel.json                ← Config déploiement Vercel
├── tailwind.config.js         ← Couleurs et animations
└── package.json               ← Dépendances
```

---

## ✏️ MODIFICATIONS — Tout se fait dans `src/data/portfolio.js`

---

### 1. 👤 Changer tes informations personnelles

Dans `src/data/portfolio.js`, modifie le bloc `INFO` :

```js
export const INFO = {
  name:     'Chris Andy',           // Prénom affiché
  fullname: 'Waounwa Chris Andy Yoan', // Nom complet
  role:     'Développeur Front-End',   // Rôle principal
  roles:    [                          // Rôles qui s'affichent en typing
    'Développeur Front-End',
    'QA Automaticien',
    'Créateur d\'interfaces',
    'React Developer',
  ],
  location: 'Abidjan, Côte d\'Ivoire',
  email:    'cayyoan7@gmail.com',       // ← Ton email
  phone:    '+225 07 04 20 08 50',      // ← Ton numéro
  github:   'https://github.com/Chrisandy225', // ← Ton GitHub
  linkedin: '#',                        // ← Ton LinkedIn (si tu en as un)
  photo:    '/chris.jpg',               // ← Nom du fichier photo dans /public/
  bio:      'Ton texte de présentation...', // ← Ta bio
}
```

---

### 2. 📊 Changer les statistiques (Hero)

Dans `src/data/portfolio.js`, modifie `STATS` :

```js
export const STATS = [
  { value: 2,   suffix: '+', label: 'Ans d\'expérience' }, // ← Change value
  { value: 4,   suffix: '+', label: 'Projets réalisés'  },
  { value: 100, suffix: '%', label: 'Passion & rigueur' },
  { value: 2,   suffix: '',  label: 'Casquettes tech'   },
]
```

> `value` = le chiffre final de l'animation
> `suffix` = ce qui s'affiche après le chiffre (+, %, rien)
> `label` = texte en dessous

---

### 3. 🛠️ Modifier les compétences et niveaux

Dans `src/data/portfolio.js`, modifie `SKILLS` :

```js
export const SKILLS = [
  {
    category: 'Frontend',        // ← Nom de la catégorie
    icon: 'fas fa-code',         // ← Icône FontAwesome
    items: [
      { name: 'React',       level: 80 }, // level = % de la barre (0 à 100)
      { name: 'JavaScript',  level: 78 },
      { name: 'Tailwind CSS',level: 85 },
      { name: 'HTML / CSS',  level: 90 },
    ],
  },
  // ... autres catégories
]
```

**Ajouter une compétence :**
```js
{ name: 'Vue.js', level: 60 }, // ← Ajoute cette ligne dans items
```

**Ajouter une catégorie entière :**
```js
{
  category: 'Design',
  icon: 'fas fa-palette',
  items: [
    { name: 'Figma',      level: 65 },
    { name: 'Photoshop',  level: 50 },
  ],
},
```

**Supprimer une compétence :** Supprime simplement la ligne.

**Supprimer une catégorie :** Supprime tout le bloc `{ category: ..., icon: ..., items: [...] }`.

---

### 4. 🗂️ Ajouter / Modifier un projet

Dans `src/data/portfolio.js`, modifie `PROJECTS` :

```js
export const PROJECTS = [
  {
    id: 1,                                    // ← ID unique (1, 2, 3...)
    title: 'Reflection Agency',               // ← Nom du projet
    type: 'Site vitrine',                     // ← Type affiché sur le badge
    tags: ['React', 'Tailwind', 'Router'],   // ← Technologies utilisées
    desc: 'Description du projet...',         // ← Texte de description
    link: 'https://ton-site.vercel.app',      // ← Lien du site (null si pas de lien)
    github: null,                             // ← Lien GitHub (null si privé)
    color: '#FF6420',                         // ← Couleur de la carte (hex)
    icon: 'fas fa-paint-brush',               // ← Icône FontAwesome
    featured: true,                           // ← true = grande carte, false = petite
  },
]
```

**Ajouter un projet :**
```js
{
  id: 5,
  title: 'Mon nouveau projet',
  type: 'Application Web',
  tags: ['React', 'Node.js'],
  desc: 'Description de ce projet...',
  link: 'https://monprojet.vercel.app',
  github: 'https://github.com/Chrisandy225/monprojet',
  color: '#8B5CF6',       // Violet
  icon: 'fas fa-rocket',
  featured: false,        // Petite carte
},
```

**Supprimer un projet :** Supprime tout le bloc `{ id: ..., ... }`.

**Changer la couleur :** Modifie `color` avec n'importe quel code hex.

> 💡 Idées de couleurs :
> - Orange : `#FF6420`
> - Bleu : `#4F8EF7`
> - Vert : `#10B981`
> - Violet : `#8B5CF6`
> - Rouge : `#EF4444`
> - Jaune : `#F59E0B`

---

### 5. 💼 Modifier les expériences professionnelles

Dans `src/data/portfolio.js`, modifie `EXPERIENCE` :

```js
export const EXPERIENCE = [
  {
    title:   'Testeur Automaticien',       // ← Poste
    company: 'Overnetflow',                // ← Entreprise
    period:  'Sept. 2024 — Juil. 2025',   // ← Période
    type:    'Stage',                      // ← Type (Stage, CDI, Mission...)
    bullets: [                             // ← Liste de tes missions
      'Mission 1...',
      'Mission 2...',
      'Mission 3...',
    ],
    color: '#4F8EF7',                      // ← Couleur de la carte
    icon:  'fas fa-vial',                  // ← Icône FontAwesome
  },
]
```

**Ajouter une expérience :**
```js
{
  title:   'Développeur Front-End',
  company: 'Nom de l\'entreprise',
  period:  'Jan. 2026 — Aujourd\'hui',
  type:    'CDI',
  bullets: [
    'Développement d\'interfaces React',
    'Intégration de designs Figma',
  ],
  color: '#10B981',
  icon:  'fas fa-code',
},
```

---

### 6. 🎓 Modifier la formation

Dans `src/data/portfolio.js`, modifie `EDUCATION` :

```js
export const EDUCATION = [
  {
    title:  'Licence DASI',                              // ← Diplôme
    school: 'ESATIC',                                   // ← École
    period: 'Depuis Sept. 2025',                        // ← Période
    desc:   'Développement d\'Applications...',         // ← Description
    color:  '#4F8EF7',                                  // ← Couleur du point
  },
]
```

---

### 7. 🖼️ Changer ta photo de profil

1. Mets ta nouvelle photo dans le dossier **`/public/`**
2. Renomme-la `chris.jpg`
3. C'est tout — le site se met à jour automatiquement ✅

> Si tu veux garder l'ancien nom, modifie `photo: '/chris.jpg'` dans `INFO` de `portfolio.js`

---

### 8. 🎨 Changer la couleur principale (bleu → autre)

Ouvre **`tailwind.config.js`** et change `#4F8EF7` :

```js
colors: {
  blue: '#4F8EF7',   // ← Change cette couleur partout
  // ...
},
```

> ⚠️ La couleur `blue` est utilisée partout dans le site.
> Changer cette valeur change tout d'un coup.

---

### 9. ✍️ Modifier les textes de chaque section

| Section | Fichier à ouvrir |
|---------|-----------------|
| Titre hero, bio, rôles | `src/data/portfolio.js` → `INFO` |
| Texte "À propos" | `src/sections/About.jsx` → cherche les balises `<p>` |
| Intro compétences | `src/sections/Skills.jsx` → cherche `<p className="text-text-m` |
| Intro projets | `src/sections/Projects.jsx` → cherche `<p className="text-text-m` |
| Intro expérience | `src/sections/Experience.jsx` → cherche `<p className="text-text-m` |
| Intro contact | `src/sections/Contact.jsx` → cherche `<p className="text-text-m` |

---

### 10. ➕ Ajouter une nouvelle section

**Étape 1** — Crée `src/sections/MaSection.jsx` :
```jsx
export default function MaSection() {
  return (
    <section id="ma-section" className="section-pad px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-num mb-3">06. Ma Section</div>
        <h2 className="font-syne font-black text-light">Titre</h2>
        {/* Ton contenu ici */}
      </div>
    </section>
  )
}
```

**Étape 2** — Importe dans `src/App.jsx` :
```jsx
import MaSection from './sections/MaSection'
// ...
<main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <MaSection />   {/* ← Ajoute ici */}
  <Contact />
</main>
```

**Étape 3** — Ajoute dans la navigation `src/components/Navbar.jsx` :
```jsx
const LINKS = [
  { id: 'hero',       label: 'Accueil'    },
  { id: 'about',      label: 'À propos'   },
  { id: 'skills',     label: 'Compétences'},
  { id: 'projects',   label: 'Projets'    },
  { id: 'experience', label: 'Expérience' },
  { id: 'ma-section', label: 'Ma Section' }, // ← Ajoute ici
  { id: 'contact',    label: 'Contact'    },
]
```

---

### 11. 🗑️ Supprimer une section

**Étape 1** — Dans `src/App.jsx`, supprime la ligne :
```jsx
// <Skills />  ← Commente ou supprime
```

**Étape 2** — Dans `src/components/Navbar.jsx`, supprime le lien :
```jsx
// { id: 'skills', label: 'Compétences' }, ← Supprime
```

---

### 12. 🔗 Modifier les liens de contact

Dans `src/sections/Contact.jsx`, modifie le tableau `LINKS` :

```jsx
const LINKS = [
  { icon: 'fab fa-github',   label: 'GitHub',    value: 'Chrisandy225',  href: 'https://github.com/Chrisandy225' },
  { icon: 'fas fa-envelope', label: 'Email',     value: 'ton@email.com', href: 'mailto:ton@email.com' },
  { icon: 'fas fa-phone',    label: 'Téléphone', value: '+225 ...',      href: 'tel:+225...' },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp',  value: 'Message',       href: 'https://wa.me/225...' },
]
```

> Pour ajouter LinkedIn, Instagram etc. :
```jsx
{ icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'ton-profil', href: 'https://linkedin.com/in/ton-profil', color: '#0077B5' },
```

---

## 🌐 Mettre en ligne après modification

```bash
git add .
git commit -m "ce que tu as changé"
git push
```
**Vercel met à jour automatiquement en 30-60 secondes.** ✅

---

## 🔍 Trouver une icône FontAwesome

Toutes les icônes disponibles sur : **https://fontawesome.com/icons**

Exemples :
```
fas fa-code        → </>
fas fa-paint-brush → 🖌️
fas fa-vial        → 🧪
fas fa-trophy      → 🏆
fas fa-rocket      → 🚀
fas fa-laptop      → 💻
fab fa-github      → GitHub
fab fa-react       → React
fab fa-whatsapp    → WhatsApp
```

---

## 📞 Pages du portfolio

| Section | Ancre |
|---------|-------|
| Accueil / Hero | `#hero` |
| À propos | `#about` |
| Compétences | `#skills` |
| Projets | `#projects` |
| Expérience | `#experience` |
| Contact | `#contact` |

---

*Portfolio de Waounwa Chris Andy Yoan — Abidjan · 2025*
#   P o r t f o l i o - P e r s o  
 