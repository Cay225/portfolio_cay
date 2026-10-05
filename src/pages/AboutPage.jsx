import PageHeader from '../components/PageHeader'
import About from '../sections/About'
import Expertise from '../sections/Expertise'
import Process from '../sections/Process'
import ContactCTA from '../sections/ContactCTA'

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="À propos" title="Développeur, testeur," accent="et un peu architecte." />
      <About />
      <Expertise />
      <Process />
      <ContactCTA />
    </>
  )
}
