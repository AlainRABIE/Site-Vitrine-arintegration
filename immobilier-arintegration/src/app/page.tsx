import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AvantApres from '@/components/AvantApres'
import Pourquoi from '@/components/Pourquoi'
import Construit from '@/components/Construit'
import Securite from '@/components/Securite'
import Tarifs from '@/components/Tarifs'
import Methode from '@/components/Methode'
import Temoignages from '@/components/Temoignages'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AvantApres />
        <Pourquoi />
        <Construit />
        <Securite />
        <Tarifs />
        <Methode />
        <Temoignages />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
