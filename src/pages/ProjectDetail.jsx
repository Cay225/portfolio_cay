import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/content'
import BrowserFrame from '../components/BrowserFrame'
import Reveal from '../components/Reveal'
import { ArrowLeft, ArrowRight, ArrowUpRight } from '../components/Icons'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const index = PROJECTS.findIndex((p) => p.id === id)
  if (index === -1) return <NotFound />

  const p = PROJECTS[index]
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  const meta = [
    { label: 'Rôle', value: p.role },
    { label: 'Contexte', value: p.context },
    { label: 'Année', value: p.year },
  ]

  return (
    <article>
      <section className="relative overflow-hidden pb-14 pt-32 md:pt-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `radial-gradient(700px 420px at 75% 10%, ${p.accent}26, transparent 70%)` }}
        />
        <div className="shell relative">
          <Link to="/projets" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft /> Tous les projets
          </Link>

          <Reveal className="mt-10">
            <span className="eyebrow">{p.category}</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl md:text-8xl">
              {p.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{p.description}</p>
          </Reveal>

          <Reveal delay={100} className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-bg p-5 md:p-6">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">{m.label}</p>
                <p className="mt-2 text-[15px]">{m.value}</p>
              </div>
            ))}
            <div className="bg-bg p-5 md:p-6">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">Liens</p>
              <div className="mt-2 flex flex-wrap gap-4 text-[15px]">
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-1">Site en ligne <ArrowUpRight width={14} height={14} /></a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-1">Code <ArrowUpRight width={14} height={14} /></a>}
                {!p.link && !p.github && <span className="text-faint">Démo sur demande</span>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell">
        <Reveal>
          <BrowserFrame src={p.image} alt={`Capture d'écran — ${p.name}`} eager />
        </Reveal>
      </section>

      <section className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="self-start md:sticky md:top-28 md:col-span-4">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">Stack</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
        </Reveal>

        <div className="space-y-14 md:col-span-8">
          {p.sections.map((s) => (
            <Reveal key={s.title}>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}

          {p.features?.length > 0 && (
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">Fonctionnalités clés</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="card flex items-start gap-3 rounded-2xl p-4 text-[15px]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {p.result && (
            <Reveal className="card p-7 md:p-8">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">Résultat</p>
              <p className="mt-3 font-display text-xl leading-snug tracking-[-0.01em] md:text-2xl">{p.result}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-line">
        <Link to={`/projets/${next.id}`} className="shell group flex items-center justify-between gap-6 py-14 md:py-20">
          <div>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-faint">Projet suivant</p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-accent md:text-6xl">
              {next.name}
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all group-hover:border-fg group-hover:bg-fg group-hover:text-bg md:h-20 md:w-20">
            <ArrowRight />
          </span>
        </Link>
      </section>
    </article>
  )
}
