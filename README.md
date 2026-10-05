# Portfolio — Chris Andy Yoan (Cay)

Développeur Full-Stack · Abidjan. React + Vite + Tailwind CSS, déployé sur Vercel.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Modifier le contenu

Tout le texte est dans **`src/data/content.js`** :

| Bloc | Rôle |
| --- | --- |
| `INFO` | nom, titre, accroche, email, WhatsApp, GitHub, LinkedIn, photo |
| `STATS` | les 4 chiffres sous le hero |
| `STACK` | technologies du bandeau défilant |
| `EXPERTISE` | cartes « Expertise » |
| `PROJECTS` | projets principaux → une page `/projets/<id>` chacun |
| `OTHER_PROJECTS` | liste « Autres réalisations » |
| `EXPERIENCE`, `EDUCATION` | page Parcours |
| `PROCESS` | étapes « Méthode » |

**Ajouter un projet :** copier un objet de `PROJECTS`, changer `id`, mettre la capture
dans `public/projects/` (format `.webp`, 16:9 de préférence) et renseigner `image`.

**Changer la photo :** remplacer `public/chris-portrait.jpg` (format portrait 4:5, ~800×1000).

## Structure

```
src/
  data/content.js     ← tout le contenu
  pages/              ← Home, Projects, ProjectDetail, AboutPage, JourneyPage, ContactPage
  sections/           ← blocs de page (Hero, SelectedWork, Expertise, Journey…)
  components/         ← Navbar, Footer, ProjectCard, BrowserFrame, Reveal, Icons…
```
