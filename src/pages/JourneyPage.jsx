import PageHeader from '../components/PageHeader'
import Journey from '../sections/Journey'
import ContactCTA from '../sections/ContactCTA'

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parcours"
        title="Expérience"
        accent="& formation."
        intro="Du contrôle qualité en conditions réelles à la conception d'applications complètes."
      />
      <Journey />
      <ContactCTA />
    </>
  )
}
