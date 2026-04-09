import { useState, useEffect } from 'react'
import { INFO, STATS } from '../data/portfolio'

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(value / 40)
    const t = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(t) }
      else setCount(start)
    }, 40)
    return () => clearInterval(t)
  }, [value])
  return <>{count}{suffix}</>
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)
  const [visible,   setVisible]   = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  // Typing effect
  useEffect(() => {
    const role = INFO.roles[roleIdx]
    let timeout

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % INFO.roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8 pt-20 pb-16">

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Texte gauche ── */}
          <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Code tag */}
            <div className="code-tag mb-4 animate-fade-1">// Hello World 👋</div>

            {/* Nom */}
            <h1 className="font-syne font-black leading-tight mb-4 animate-fade-2"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}>
              Je suis{' '}
              <span className="text-blue glow-text">Chris Andy Yoan Waounwa</span>
            </h1>

            {/* Typing role */}
            <div className="font-mono text-text-s mb-6 animate-fade-3 h-8 flex items-center"
              style={{ fontSize: 'clamp(.95rem, 2.5vw, 1.2rem)' }}>
              <span className="text-blue mr-2">&gt;</span>
              <span className="typing-cursor">{displayed}</span>
            </div>

            {/* Bio */}
            <p className="text-text-m font-light text-sm sm:text-base leading-relaxed max-w-lg mb-8 animate-fade-4">
              {INFO.bio}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-text-m text-sm mb-10 animate-fade-4">
              <i className="fas fa-map-marker-alt text-blue text-xs" />
              {INFO.location}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-5">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-blue text-dark
                  px-7 py-3.5 rounded-xl font-sans font-semibold text-sm border-2 border-blue
                  shadow-[0_6px_24px_rgba(79,142,247,.4)]
                  transition-all duration-200 hover:bg-transparent hover:text-blue active:scale-95 cursor-none">
                Voir mes projets <i className="fas fa-arrow-right text-xs" />
              </button>
              <a href={INFO.github} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-blue/30 text-light
                  px-7 py-3.5 rounded-xl font-sans font-semibold text-sm no-underline
                  transition-all duration-200 hover:bg-blue/10 hover:border-blue active:scale-95">
                <i className="fab fa-github" /> GitHub
              </a>
              <a href={`mailto:${INFO.email}`}
                className="flex items-center justify-center gap-2 border border-white/10 text-text-m
                  px-7 py-3.5 rounded-xl font-sans font-semibold text-sm no-underline
                  transition-all duration-200 hover:bg-white/5 hover:text-light active:scale-95">
                <i className="fas fa-envelope" /> Contact
              </a>
            </div>
          </div>

          {/* ── Photo droite ── */}
          <div className={`shrink-0 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animate-glow" style={{ margin: '-8px' }} />

              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden
                border-2 border-blue/30 shadow-[0_0_60px_rgba(79,142,247,.2)] animate-float">
                <img src={INFO.photo} alt={INFO.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }} />
                {/* Overlay subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-2 -right-2 bg-dark-3 border border-blue/20
                rounded-2xl px-3 py-2 text-xs font-mono text-blue
                shadow-[0_4px_20px_rgba(79,142,247,.2)]">
                <i className="fas fa-code mr-1.5" />
                Front-End Dev
              </div>

              {/* Badge flottant 2 */}
              <div className="absolute -top-2 -left-2 bg-dark-3 border border-green-500/20
                rounded-2xl px-3 py-2 text-xs font-mono text-green-400
                shadow-[0_4px_20px_rgba(16,185,129,.15)]">
                <i className="fas fa-vial mr-1.5" />
                QA Auto
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map(({ value, suffix, label }, i) => (
            <div key={label}
              className={`glass rounded-2xl p-5 text-center transition-all duration-300
                hover:-translate-y-1 reveal reveal-d${i + 1}`}>
              <div className="font-syne font-black text-blue mb-1"
                style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                <Counter value={value} suffix={suffix} />
              </div>
              <div className="text-text-m text-xs sm:text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-m/50 z-10">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-5 h-8 border border-blue/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-blue rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
