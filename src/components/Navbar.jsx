import { useState, useEffect } from 'react'
import { INFO } from '../data/portfolio'

const LINKS = [
  { id: 'hero',       label: 'Accueil'      },
  { id: 'about',      label: 'À propos'     },
  { id: 'skills',     label: 'Compétences'  },
  { id: 'projects',   label: 'Projets'      },
  { id: 'experience', label: 'Expérience'   },
  { id: 'contact',    label: 'Contact'      },
]

export default function Navbar() {
  const [active,  setActive]  = useState('hero')
  const [scrolled,setScrolled]= useState(false)
  const [open,    setOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean)
      const current  = sections.find(s => {
        const rect = s.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-blue/10' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => scrollTo('hero')}
            className="font-mono text-blue font-bold text-lg tracking-tight bg-transparent border-none cursor-none">
            &lt;Chris /&gt;
          </button>

          {/* Nav desktop */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}
                  className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium bg-transparent border-none cursor-none
                    transition-all duration-200
                    ${active === id ? 'text-blue bg-blue/10' : 'text-text-m hover:text-light hover:bg-white/5'}`}>
                  {active === id && (
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue" />
                  )}
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a href={INFO.github} target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-2 border border-blue/30 text-blue
              px-4 py-2 rounded-full font-mono text-sm no-underline
              transition-all duration-200 hover:bg-blue/10 hover:border-blue">
            <i className="fab fa-github" /> GitHub
          </a>

          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)}
            className="flex md:hidden flex-col justify-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-none p-2">
            <span className={`block w-5 h-0.5 bg-light rounded-full origin-center transition-all duration-250 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-light rounded-full transition-all duration-250 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-light rounded-full origin-center transition-all duration-250 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={`fixed inset-0 z-[99] bg-dark flex flex-col md:hidden
        transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-blue/10">
          <span className="font-mono text-blue font-bold text-lg">&lt;Chris /&gt;</span>
          <button onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-full border border-blue/20 flex items-center justify-center bg-transparent text-text-m
              transition-all duration-200 hover:bg-blue/10 hover:text-blue hover:border-blue cursor-none">
            <i className="fas fa-times" />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-10 gap-2 flex-1">
          {LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`text-left font-syne font-bold text-3xl py-4 border-b border-blue/8 bg-transparent
                transition-colors duration-200 cursor-none
                ${active === id ? 'text-blue' : 'text-light/70 hover:text-blue'}`}>
              {label}
            </button>
          ))}
        </nav>

        <div className="px-6 py-8">
          <a href={INFO.github} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-blue/30 text-blue
              no-underline py-4 rounded-2xl font-mono font-bold text-base
              transition-all duration-200 hover:bg-blue/10">
            <i className="fab fa-github text-xl" /> Voir mon GitHub
          </a>
        </div>
      </div>

      {/* Dots latéraux desktop */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {LINKS.map(({ id }) => (
          <button key={id} onClick={() => scrollTo(id)}
            className={`nav-dot ${active === id ? 'active' : ''} bg-transparent border-none cursor-none`}
            title={id} />
        ))}
      </div>
    </>
  )
}
