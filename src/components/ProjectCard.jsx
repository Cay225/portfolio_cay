import { Link } from 'react-router-dom'
import BrowserFrame from './BrowserFrame'
import { ArrowUpRight } from './Icons'

export default function ProjectCard({ project, large = false }) {
  return (
    <Link
      to={`/projets/${project.id}`}
      className="group card relative flex h-full flex-col overflow-hidden transition-colors duration-500 hover:border-line-strong"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(600px 300px at 50% 0%, ${project.accent}22, transparent 70%)` }}
      />

      <div className={`relative ${large ? 'px-5 pt-5 sm:px-10 sm:pt-10' : 'px-5 pt-5 sm:px-8 sm:pt-8'}`}>
        <BrowserFrame
          src={project.image}
          alt={`Capture d'écran de ${project.name}`}
          className="translate-y-2 transition-transform duration-700 ease-out group-hover:translate-y-0"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>

      <div className={`relative mt-auto flex items-end justify-between gap-6 border-t border-line ${large ? 'p-6 sm:p-10' : 'p-6 sm:p-8'}`}>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-faint">
            <span>{project.category}</span>
            <span className="text-line-strong">/</span>
            <span>{project.year}</span>
          </div>
          <h3 className={`mt-2 font-display font-semibold tracking-[-0.03em] ${large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            {project.name}
          </h3>
          <p className="mt-2 max-w-md text-[15px] text-muted">{project.tagline}</p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  )
}
