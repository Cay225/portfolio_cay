import { INFO } from '../data/content'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="self-start md:sticky md:top-28 md:col-span-5">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[28px] border border-line-strong bg-surface p-2">
            <img src={INFO.photo} alt={`Portrait de ${INFO.fullname}`} className="aspect-[4/5] w-full rounded-[22px] object-cover" />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted md:col-span-7">
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-fg md:text-3xl">
            Je me situe entre deux mondes : construire une interface soignée, concevoir l'API qui l'alimente,{' '}
            <span className="italic-accent">et vérifier que l'ensemble tient la route.</span>
          </p>
          <p>
            J'ai commencé par le frontend, en construisant avec React et Tailwind CSS des sites vitrines et des
            applications de gestion. Cette base m'a appris à traduire un besoin en interface claire et utilisable.
          </p>
          <p>
            En parallèle, j'ai acquis une vraie expérience en automatisation de tests chez Overnetflow : scripts E2E
            avec Playwright, pipelines CI/CD sur Jenkins, validation de fonctionnalités critiques en production. Cette
            rigueur a changé ma façon d'écrire du code — je pense aux cas limites avant de livrer.
          </p>
          <p>
            Ma Licence DASI à l'ESATIC m'a ensuite poussé vers le backend et la conception : Python, FastAPI,
            modélisation UML, architecture applicative. Proximéo, mon projet de mémoire, en est le reflet — une
            plateforme pensée de la base de données jusqu'à l'interface.
          </p>
          <p>
            Basé à {INFO.location.split(',')[0]}, je cherche aujourd'hui une équipe où livrer des produits utiles, bien
            construits et bien testés.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
