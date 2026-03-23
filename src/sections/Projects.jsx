import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  const featured = PROJECTS.filter(p => p.featured)
  const others   = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="section-pad px-5 sm:px-8 bg-dark-2">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-num mb-3">03. Projets</div>
          <h2 className="font-syne font-black text-light mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Ce que j'ai <span className="text-blue">réalisé</span>
          </h2>
          <p className="text-text-m text-base max-w-md mx-auto leading-relaxed">
            Des projets concrets, en ligne, qui tournent en production.
          </p>
        </div>

        {/* Projets featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <div key={p.id}
              className={`glass rounded-2xl overflow-hidden group
                transition-all duration-300 hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(79,142,247,.15)]
                reveal reveal-d${i + 1}`}>

              {/* Bande colorée */}
              <div className="h-1.5" style={{ background: p.color }} />

              <div className="p-6 sm:p-8">
                {/* Icône + type */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: p.color + '20', border: `1px solid ${p.color}40` }}>
                    <i className={p.icon} style={{ color: p.color }} />
                  </div>
                  <span className="font-mono text-xs px-2 py-1 rounded-full border"
                    style={{ color: p.color, borderColor: p.color + '40', background: p.color + '10' }}>
                    {p.type}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-light text-xl mb-3 group-hover:text-blue transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-text-m text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[.68rem] text-text-m border border-white/8 bg-white/3 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex gap-3">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium no-underline
                        px-4 py-2.5 rounded-xl border transition-all duration-200"
                      style={{ color: p.color, borderColor: p.color + '40', background: p.color + '10' }}>
                      <i className="fas fa-external-link-alt text-xs" /> Voir le site
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium no-underline text-text-m
                        px-4 py-2.5 rounded-xl border border-white/10 bg-white/3
                        transition-all duration-200 hover:text-light hover:border-white/20">
                      <i className="fab fa-github text-xs" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Autres projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((p, i) => (
            <div key={p.id}
              className={`glass rounded-2xl p-5 sm:p-6 group
                transition-all duration-300 hover:-translate-y-1
                reveal reveal-d${i + 3}`}>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: p.color + '20', border: `1px solid ${p.color}40` }}>
                  <i className={p.icon} style={{ color: p.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-syne font-bold text-light text-base group-hover:text-blue transition-colors">
                      {p.title}
                    </h3>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="text-text-m hover:text-blue transition-colors no-underline text-sm">
                        <i className="fas fa-external-link-alt" />
                      </a>
                    )}
                  </div>
                  <p className="text-text-m text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[.62rem] text-text-m border border-white/8 bg-white/3 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
