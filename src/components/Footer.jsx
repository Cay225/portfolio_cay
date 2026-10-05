import { Link } from 'react-router-dom'
import { INFO } from '../data/content'
import { Github, Linkedin, Whatsapp } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            {INFO.name}
          </Link>
          <p className="mt-1 text-sm text-faint">
            {INFO.title} · {INFO.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/40 hover:text-fg">
            <Github />
          </a>
          {INFO.linkedin && (
            <a href={INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/40 hover:text-fg">
              <Linkedin />
            </a>
          )}
          <a href={INFO.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/40 hover:text-fg">
            <Whatsapp />
          </a>
        </div>
      </div>
      <div className="shell flex flex-col gap-1 border-t border-line py-6 font-mono text-[11.5px] text-faint sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {INFO.fullname}</span>
        <span>Conçu & développé par {INFO.shortName}</span>
      </div>
    </footer>
  )
}
