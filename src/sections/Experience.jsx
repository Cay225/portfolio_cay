import { EXPERIENCE } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-pad px-5 sm:px-8 bg-dark-2">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14 reveal">
          <div className="section-num mb-3">04. Expérience</div>
          <h2 className="font-syne font-black text-light mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Mon <span className="text-blue">parcours</span>
          </h2>
          <p className="text-text-m text-base max-w-md mx-auto leading-relaxed">
            Des expériences variées qui m'ont forgé une vision complète du développement et de la qualité.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 sm:pl-12">
          {/* Ligne verticale */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue to-transparent rounded-full" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.title}
                className={`relative glass rounded-2xl p-6 sm:p-8
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(79,142,247,.1)]
                  reveal reveal-d${i + 1}`}>

                {/* Dot timeline */}
                <div className="absolute -left-[33px] sm:-left-[45px] top-8 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: exp.color, background: '#0F1629' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0"
                      style={{ background: exp.color + '20', border: `1px solid ${exp.color}40` }}>
                      <i className={exp.icon} style={{ color: exp.color }} />
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-light text-lg leading-tight">{exp.title}</h3>
                      <p className="text-sm font-medium" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[.65rem] text-text-m border border-white/10 px-2.5 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[.65rem] px-2.5 py-1 rounded-full"
                      style={{ color: exp.color, borderColor: exp.color + '30', background: exp.color + '10', border: '1px solid' }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 list-none p-0">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-m text-sm leading-relaxed">
                      <span className="text-blue mt-1 shrink-0 text-[.5rem]">▶</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
