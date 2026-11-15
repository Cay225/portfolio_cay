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
            Je suis développeur Full-Stack{' '}
            <span className="italic-accent">et étudiant en Master 1 MBDS à l'ESATIC.</span>
          </p>
          <p>
            J'ai découvert le développement web par le frontend, avec React et Tailwind CSS. Puis, mon expérience chez
            Overnetflow m'a amené à travailler sur l'automatisation des tests avec Playwright et Jenkins. C'est là que
            j'ai appris à accorder autant d'importance à ce qui se passe derrière une fonctionnalité qu'à ce que
            l'utilisateur voit à l'écran.
          </p>
          <p>
            Avec le temps, je me suis davantage tourné vers le backend, les API et la conception d'applications,
            notamment avec Python et FastAPI.
          </p>
          <p>
            En parallèle, j'ai créé CayWeb Solutions en 2025. C'est à travers cette activité que je développe mes
            propres projets et accompagne des clients dans leurs besoins numériques, du site web à l'application, en
            passant par l'identité visuelle.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
