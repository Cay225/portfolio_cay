import { Link } from 'react-router-dom'
import { INFO, STATS } from '../data/content'
import { ArrowRight } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div aria-hidden className="hero-bg absolute inset-0" />

      <div className="shell relative grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-4 text-[13px] text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {INFO.availability}
          </div>

          <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            {INFO.headline}{' '}
            <span className="italic-accent">{INFO.headlineAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg">{INFO.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projets" className="btn-primary group">
              Voir mes projets
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Me contacter
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-4">
          <figure className="relative mx-auto max-w-[340px] lg:ml-auto lg:mr-0">
            <div className="overflow-hidden rounded-[28px] border border-line-strong bg-surface p-2">
              <img
                src={INFO.photo}
                alt={`Portrait de ${INFO.fullname}`}
                className="aspect-[4/5] w-full rounded-[22px] object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-line bg-bg/85 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-sm font-medium">{INFO.fullname}</p>
                <p className="font-mono text-[11px] text-faint">{INFO.location}</p>
              </div>
              <span className="font-serif text-2xl italic text-accent">Cay</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Reveal delay={250} className="shell relative mt-20 md:mt-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 bg-bg p-5 md:p-8">
              <dt className="text-sm text-faint">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
