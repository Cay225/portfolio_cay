import { useEffect, useRef } from 'react'
import { SKILLS } from '../data/portfolio'

function SkillBar({ name, level }) {
  const fillRef = useRef(null)
  const barRef  = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && fillRef.current) {
        fillRef.current.style.width = level + '%'
        io.disconnect()
      }
    }, { threshold: 0.5 })
    if (barRef.current) io.observe(barRef.current)
    return () => io.disconnect()
  }, [level])

  return (
    <div ref={barRef} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-text-s text-sm font-medium group-hover:text-light transition-colors duration-200">
          {name}
        </span>
        <span className="font-mono text-blue text-xs">{level}%</span>
      </div>
      <div className="skill-bar">
        <div ref={fillRef} className="skill-fill" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-num mb-3">02. Compétences</div>
          <h2 className="font-syne font-black text-light mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Mon <span className="text-blue">Stack</span> technique
          </h2>
          <p className="text-text-m text-base max-w-md mx-auto leading-relaxed">
            Développement front-end & automatisation de tests — deux compétences, un seul objectif : la qualité.
          </p>
        </div>

        {/* Grille compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((cat, i) => (
            <div key={cat.category}
              className={`glass rounded-2xl p-6 sm:p-8 reveal reveal-d${i + 1}
                transition-all duration-300 hover:-translate-y-1`}>

              {/* Header catégorie */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-blue/10 border border-blue/20
                  flex items-center justify-center text-blue text-sm">
                  <i className={cat.icon} />
                </div>
                <h3 className="font-syne font-bold text-light text-lg">{cat.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {cat.items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tags tech */}
        <div className="reveal mt-10 flex flex-wrap gap-2 justify-center">
          {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3',
            'Playwright', 'Git', 'GitHub', 'Jenkins', 'Vite', 'Figma'].map((tag) => (
            <span key={tag}
              className="font-mono text-xs text-blue border border-blue/20 bg-blue/5
                px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-blue/10 hover:border-blue/40">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
