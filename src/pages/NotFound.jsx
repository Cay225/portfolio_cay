import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center pt-28">
      <p className="font-serif text-8xl italic text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em]">Page introuvable.</h1>
      <Link to="/" className="btn-primary mt-8">Retour à l'accueil</Link>
    </section>
  )
}
