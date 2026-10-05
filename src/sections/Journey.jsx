import { EXPERIENCE, EDUCATION } from '../data/content'
import Reveal from '../components/Reveal'

function Row({ item }) {
  return (
    <div className="grid gap-2 border-t border-line py-7 md:grid-cols-12 md:gap-6">
      <p className="font-mono text-[12.5px] text-faint md:col-span-3 md:pt-1.5">{item.period}</p>
      <div className="md:col-span-9">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">{item.title}</h3>
          {item.tag && <span className="chip py-0.5">{item.tag}</span>}
        </div>
        <p className="mt-1 text-muted">{item.org}</p>
        {item.bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-[15px] text-muted">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Journey({ compact = false }) {
  return (
    <section className={compact ? 'border-t border-line py-20 md:py-28' : 'pb-20 md:pb-28'}>
      <div className="shell">
        {compact && (
          <Reveal>
            <span className="eyebrow">Parcours</span>
            <h2 className="h-section mt-5 max-w-3xl">
              Du test automatisé <span className="italic-accent">au full-stack.</span>
            </h2>
          </Reveal>
        )}

        <Reveal className={compact ? 'mt-14' : ''}>
          <h3 className="mb-2 font-mono text-[12px] uppercase tracking-[0.14em] text-faint">Expérience</h3>
          {EXPERIENCE.map((e) => (
            <Row key={e.title + e.org} item={e} />
          ))}
        </Reveal>

        {!compact && (
          <Reveal className="mt-16">
            <h3 className="mb-2 font-mono text-[12px] uppercase tracking-[0.14em] text-faint">Formation</h3>
            {EDUCATION.map((e) => (
              <Row key={e.title} item={e} />
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}
