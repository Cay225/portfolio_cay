import { useState } from 'react'
import { INFO } from '../data/content'
import Reveal from '../components/Reveal'
import CopyEmail from '../components/CopyEmail'
import { ArrowUpRight, Github, Linkedin, Whatsapp } from '../components/Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`)
    const subject = encodeURIComponent(form.subject || 'Contact depuis le portfolio')
    window.location.href = `mailto:${INFO.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const channels = [
    { label: 'WhatsApp', value: INFO.phone, href: INFO.whatsapp, Icon: Whatsapp },
    { label: 'GitHub', value: INFO.github.replace('https://', ''), href: INFO.github, Icon: Github },
    INFO.linkedin && { label: 'LinkedIn', value: 'Voir le profil', href: INFO.linkedin, Icon: Linkedin },
  ].filter(Boolean)

  return (
    <section className="pb-20 md:pb-28">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="space-y-4 lg:col-span-5">
          <div className="card p-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-faint">Email</p>
            <CopyEmail email={INFO.email} className="mt-4 w-full justify-start" />
          </div>
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="card group flex items-center gap-4 p-6 transition-colors hover:border-line-strong"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted group-hover:text-fg">
                <Icon />
              </span>
              <span className="flex-1">
                <span className="block font-mono text-[12px] uppercase tracking-[0.14em] text-faint">{label}</span>
                <span className="mt-0.5 block">{value}</span>
              </span>
              <ArrowUpRight className="text-faint transition-colors group-hover:text-fg" />
            </a>
          ))}
          <p className="px-1 pt-2 text-sm text-faint">{INFO.location} · GMT</p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
            <Field label="Nom" name="name" value={form.name} onChange={onChange} autoComplete="name" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" />
            <Field label="Sujet" name="subject" value={form.subject} onChange={onChange} full required={false} />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={onChange}
                placeholder="Parlez-moi de votre projet..."
                className="w-full resize-y rounded-2xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-faint">
                {sent ? 'Votre messagerie va s\'ouvrir pour finaliser l\'envoi.' : 'Réponse sous 24 à 48 h.'}
              </p>
              <button type="submit" className="btn-primary">Envoyer le message</button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, full, required = true, autoComplete }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={name} className="mb-2 block text-sm text-muted">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-line bg-bg px-4 py-3 text-fg transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  )
}
