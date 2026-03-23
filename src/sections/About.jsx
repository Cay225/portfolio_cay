import { INFO, EDUCATION } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-pad px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14 reveal">
          <div className="section-num mb-3">01. À propos</div>
          <h2 className="font-syne font-black text-light mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Qui suis-<span className="text-blue">je</span> ?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Bio */}
          <div className="reveal space-y-6">
            <div className="code-tag mb-2">// À propos de moi</div>

            <div className="space-y-4 text-text-s text-sm sm:text-base leading-relaxed">
              <p>
                Je m'appelle <span className="text-blue font-medium">Waounwa Chris Andy Yoan</span>,
                développeur Front-End junior basé à <span className="text-blue font-medium">Abidjan, Côte d'Ivoire</span>.
              </p>
              <p>
                Passionné par la création d'interfaces web modernes et ergonomiques,
                j'ai une double compétence rare : je sais <span className="text-light font-medium">créer</span> des
                interfaces et <span className="text-light font-medium">garantir leur qualité</span> via l'automatisation de tests.
              </p>
              <p>
                J'ai travaillé chez <span className="text-blue font-medium">Overnetflow</span> en tant que testeur automaticien,
                où j'ai développé des scripts Playwright et mis en place des pipelines CI/CD sur Jenkins.
                J'ai aussi été opérateur technique lors de la <span className="text-blue font-medium">CAN 2024</span> en Côte d'Ivoire.
              </p>
              <p>
                Actuellement en <span className="text-blue font-medium">Licence DASI à l'ESATIC</span>,
                je continue d'apprendre et de créer des projets ambitieux.
              </p>
            </div>

            {/* Infos contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { icon: 'fas fa-envelope', label: INFO.email,    href: `mailto:${INFO.email}` },
                { icon: 'fas fa-phone',    label: INFO.phone,    href: `tel:${INFO.phone}` },
                { icon: 'fas fa-map-marker-alt', label: 'Abidjan, CI', href: null },
                { icon: 'fab fa-github',   label: 'Chrisandy225', href: INFO.github },
              ].map(({ icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-text-m text-sm">
                  <div className="w-7 h-7 rounded-lg bg-blue/10 border border-blue/15
                    flex items-center justify-center text-blue text-xs shrink-0">
                    <i className={icon} />
                  </div>
                  {href
                    ? <a href={href} target="_blank" rel="noreferrer"
                        className="no-underline text-text-m hover:text-blue transition-colors">{label}</a>
                    : <span>{label}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div className="reveal reveal-d2">
            <div className="code-tag mb-6">// Formation</div>
            <div className="relative pl-6">
              {/* Ligne verticale */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue via-purple-500 to-green-500 rounded-full" />

              <div className="space-y-8">
                {EDUCATION.map((edu, i) => (
                  <div key={edu.title} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2"
                      style={{ borderColor: edu.color, background: '#0A0E1A' }} />

                    <div className="glass rounded-xl p-5 transition-all duration-200 hover:border-blue/25">
                      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                        <h3 className="font-syne font-bold text-light text-base">{edu.title}</h3>
                        <span className="font-mono text-[.65rem] text-text-m border border-white/10 px-2 py-0.5 rounded-full shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-1" style={{ color: edu.color }}>{edu.school}</p>
                      <p className="text-text-m text-xs">{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
