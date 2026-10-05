import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { INFO } from '../data/content'

const LINKS = [
  { to: '/projets', label: 'Projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex h-14 max-w-content items-center justify-between rounded-full border pl-5 pr-2 transition-all duration-300 ${
          scrolled || open
            ? 'border-line bg-bg/75 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-[17px] font-semibold tracking-tight">
          <span className="font-serif text-2xl italic leading-none text-fg">c</span>
          <span>{INFO.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[14px] transition-colors ${
                    isActive ? 'bg-white/[0.07] text-fg' : 'text-muted hover:text-fg'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden rounded-full bg-fg px-5 py-2.5 text-[14px] font-medium text-bg transition-colors hover:bg-accent md:inline-flex">
          Travaillons ensemble
        </Link>

        <button
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
        >
          <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-300 ${open ? 'translate-y-[3.25px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-5 bg-fg transition-transform duration-300 ${open ? '-translate-y-[3.25px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-x-3 top-[4.75rem] rounded-3xl border border-line bg-bg/95 p-3 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <ul>
          {[{ to: '/', label: 'Accueil' }, ...LINKS].map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl tracking-tight ${
                    isActive ? 'bg-white/[0.05] text-fg' : 'text-muted'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary mt-3 w-full">
          Travaillons ensemble
        </Link>
      </div>
    </header>
  )
}
