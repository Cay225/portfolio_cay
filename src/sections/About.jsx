import { INFO } from '../data/content'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="self-start md:sticky md:top-28 md:col-span-5">
          <figure className="mx-auto max-w-sm overflow-hidden rounded-[28px] border border-line-strong bg-surface p-2">
            <img src={INFO.photo} alt={INFO.name} className="aspect-[4/5] w-full rounded-[22px] object-cover" />
            <figcaption className="px-3 pb-2 pt-3 font-mono text-[11.5px] text-faint">{INFO.location}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted md:col-span-7">
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-fg md:text-3xl">
            Développeur full-stack en début de carrière,{' '}
            <span className="italic-accent">avec un vrai goût pour le travail bien fini.</span>
          </p>
          <p>
            J'ai commencé par le frontend avec React et Tailwind CSS, puis un stage en automatisation de tests chez
            Overnetflow m'a appris la rigueur : Playwright, CI/CD, cas limites.
          </p>
          <p>
            Ma Licence DASI à l'ESATIC m'a ensuite amené vers le backend et la conception : Python, FastAPI, UML.
          </p>
          <p>
            En 2025, j'ai lancé CayWeb Solutions. J'y réalise des sites et des applications web, mais aussi de
            l'identité visuelle : logos, chartes graphiques, affiches.
          </p>
          <p>Aujourd'hui, je cherche à progresser au sein d'une équipe tout en continuant à livrer mes propres projets.</p>
        </Reveal>
      </div>
    </section>
  )
}
