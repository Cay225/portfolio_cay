import Hero from '../sections/Hero'
import StackMarquee from '../sections/StackMarquee'
import SelectedWork from '../sections/SelectedWork'
import Expertise from '../sections/Expertise'
import Journey from '../sections/Journey'
import ContactCTA from '../sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <SelectedWork />
      <Expertise />
      <Journey compact />
      <ContactCTA />
    </>
  )
}
