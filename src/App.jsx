import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import Cursor     from './components/Cursor'
import Particles  from './components/Particles'
import Navbar     from './components/Navbar'

import Hero       from './sections/Hero'
import About      from './sections/About'
import Skills     from './sections/Skills'
import Projects   from './sections/Projects'
import Experience from './sections/Experience'
import Contact    from './sections/Contact'

export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Effets globaux */}
      <Cursor />
      <Particles />
      <div className="scanline" />
      <div className="tech-grid fixed inset-0 z-0 pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Contenu */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 border-t border-blue/10 py-6 px-5 text-center">
        <p className="font-mono text-text-m text-xs">
          © 2025 Chris Andy · Tous droits réservés
        </p>
      </footer>
    </>
  )
}
