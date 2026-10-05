import { PROJECTS } from '../data/content'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import OtherProjects from '../sections/OtherProjects'
import ContactCTA from '../sections/ContactCTA'

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Ce que j'ai"
        accent="construit."
        intro="Applications, plateformes et sites — conçus, développés et testés de bout en bout."
      />
      <section className="pb-4">
        <div className="shell grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i === 0 ? 0 : (i % 2) * 100} className={i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={p} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>
      <OtherProjects />
      <ContactCTA />
    </>
  )
}
