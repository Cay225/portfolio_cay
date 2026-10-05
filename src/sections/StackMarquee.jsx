import { STACK } from '../data/content'

export default function StackMarquee() {
  const items = [...STACK, ...STACK]
  return (
    <div className="marquee-mask overflow-hidden py-10 md:py-14" aria-label="Technologies utilisées">
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <li key={i} aria-hidden={i >= STACK.length} className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-medium tracking-tight text-faint md:text-2xl">
            {t}
            <span className="font-serif text-accent/70">✦</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
