import { useState } from 'react'
import { Check, Copy } from './Icons'

export default function CopyEmail({ email, className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button type="button" onClick={copy} className={`btn-ghost ${className}`} aria-live="polite">
      {copied ? <Check className="text-emerald-400" /> : <Copy />}
      {copied ? 'Email copié' : email}
    </button>
  )
}
