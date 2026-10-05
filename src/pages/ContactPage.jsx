import PageHeader from '../components/PageHeader'
import Contact from '../sections/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Travaillons"
        accent="ensemble."
        intro="Un poste, un stage, une mission ou une question ? Écrivez-moi, je réponds rapidement."
      />
      <Contact />
    </>
  )
}
