import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/content'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { ArrowRight } from '../components/Icons'

export default function SelectedWork() {
  const [first, ...rest] = PROJECTS
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Projets sélectionnés</span>
            <h2 className="h-section mt-5 max-w-2xl">
              Des produits pensés, <span className="italic-accent">construits et testés.</span>
            </h2>
          </div>
          <Link to="/projets" className="link-u inline-flex w-fit items-center gap-2 text-muted hover:text-fg">
            Tous les projets <ArrowRight />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <ProjectCard project={first} large />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
