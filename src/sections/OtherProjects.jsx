import { OTHER_PROJECTS } from '../data/content'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

export default function OtherProjects() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Autres réalisations</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Sites clients & projets QA</h2>
        </Reveal>

        <Reveal className="mt-10">
          {OTHER_PROJECTS.map((p) => {
            const href = p.link || p.github
            return (
              <a
                key={p.name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group grid items-center gap-3 border-t border-line py-7 last:border-b md:grid-cols-12 md:gap-6"
              >
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent md:col-span-4 md:text-2xl">
                  {p.name}
                </h3>
                <p className="text-[15px] text-muted md:col-span-5">{p.description}</p>
                <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 2).map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
