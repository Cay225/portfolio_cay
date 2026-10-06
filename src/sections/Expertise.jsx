import { EXPERTISE } from '../data/content'
import Reveal from '../components/Reveal'

const SPAN = {
  front: 'md:col-span-3 lg:col-span-2',
  back: 'md:col-span-3 lg:col-span-2',
  qa: 'md:col-span-3 lg:col-span-2',
  data: 'md:col-span-3 lg:col-span-2',
  branding: 'md:col-span-3 lg:col-span-2',
  design: 'md:col-span-3 lg:col-span-2',
}

export default function Expertise() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Expertise</span>
          <h2 className="h-section mt-5 max-w-3xl">
            Une vision complète, <span className="italic-accent">du besoin à la prod.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {EXPERTISE.map((e, i) => (
            <Reveal
              key={e.id}
              delay={(i % 3) * 80}
              className={`card group relative overflow-hidden p-7 transition-colors duration-500 hover:border-line-strong md:p-8 ${SPAN[e.id]}`}
            >
              <span className="font-mono text-[12px] text-faint">0{i + 1}</span>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em]">{e.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{e.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {e.tools.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
