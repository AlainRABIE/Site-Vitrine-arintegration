import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Secteurs from '@/components/Secteurs'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Tarifs from '@/components/Tarifs'
import Apropos from '@/components/Apropos'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Secteurs />
        <Services />
        <Process />
        <Stats />
        <Tarifs />
        <Apropos />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
