import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, accent, intro }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 md:pb-16 md:pt-44">
      <div aria-hidden className="hero-bg absolute inset-0" />
      <Reveal className="shell relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl">
          {title} {accent && <span className="italic-accent">{accent}</span>}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
    </section>
  )
}
