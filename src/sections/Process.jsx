import { PROCESS } from '../data/content'
import Reveal from '../components/Reveal'

export default function Process() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Méthode</span>
          <h2 className="h-section mt-5 max-w-3xl">
            Comment je travaille, <span className="italic-accent">étape par étape.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 70} className="card p-6">
              <span className="font-serif text-4xl italic text-accent">{i + 1}</span>
              <h3 className="mt-6 font-display text-lg font-semibold">{p.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
