import { INFO } from '../data/content'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="self-start md:sticky md:top-28 md:col-span-5">
          <figure className="mx-auto max-w-sm overflow-hidden rounded-[28px] border border-line-strong bg-surface p-2">
            <img src={INFO.photoAbout} alt={`${INFO.name} lors de la remise de diplômes de l'ESATIC`} className="aspect-[4/5] w-full rounded-[22px] object-cover" />
            <figcaption className="px-3 pb-2 pt-3 font-mono text-[11.5px] text-faint">
              Remise des diplômes, Licence DASI, ESATIC 2026
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted md:col-span-7">
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-fg md:text-3xl">
            Je construis l'interface, je conçois l'API qui l'alimente,{' '}
            <span className="italic-accent">et je vérifie que l'ensemble tient la route.</span>
          </p>
          <p>
            J'ai commencé par le frontend, en construisant avec React et Tailwind CSS des sites vitrines et des
            applications de gestion. Cette base m'a appris à traduire un besoin en interface claire et utilisable.
          </p>
          <p>
            En parallèle, j'ai acquis une vraie expérience en automatisation de tests chez Overnetflow : scripts E2E
            avec Playwright, pipelines CI/CD sur Jenkins, validation de fonctionnalités critiques en production. Cette
            rigueur a changé ma façon d'écrire du code. Je pense aux cas limites avant de livrer.
          </p>
          <p>
            Ma Licence DASI à l'ESATIC m'a ensuite poussé vers le backend et la conception : Python, FastAPI,
            modélisation UML, architecture applicative.
          </p>
          <p>
            En 2025, j'ai créé CayWeb Solutions, une entreprise de solutions digitales pour les PME de Côte d'Ivoire.
            C'est là que je développe CayFlow Manager, un logiciel de gestion RH et de paie, et Proximéo, une plateforme
            de mise en relation avec des prestataires de proximité.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
