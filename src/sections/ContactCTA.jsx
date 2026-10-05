import { Link } from 'react-router-dom'
import { INFO } from '../data/content'
import Reveal from '../components/Reveal'
import CopyEmail from '../components/CopyEmail'
import { ArrowRight } from '../components/Icons'

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
          <div aria-hidden className="hero-bg absolute inset-0 opacity-80" />
          <div className="relative">
            <span className="eyebrow">Contact</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Un projet en tête ? <span className="italic-accent">Parlons-en.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted">
              Poste, stage, mission freelance ou simple échange : je réponds rapidement.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary group">
                Écrire un message <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <CopyEmail email={INFO.email} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
