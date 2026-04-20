import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

const Contact = dynamic(() => import('@/components/Contact'), { loading: () => <div style={{ minHeight: '600px', background: '#f5f5f3' }} /> })
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://arintegration.fr/#organization',
      name: 'AR Integration',
      url: 'https://arintegration.fr',
      logo: 'https://arintegration.fr/Logo.png',
      email: 'contact@arintegration.fr',
      areaServed: 'FR',
      description: 'Création de sites web et applications mobiles sur-mesure.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://arintegration.fr/#website',
      url: 'https://arintegration.fr',
      name: 'AR Integration',
      inLanguage: 'fr-FR',
      publisher: { '@id': 'https://arintegration.fr/#organization' },
    },
    {
      '@type': 'Service',
      serviceType: 'Création de sites web et applications mobiles',
      provider: { '@id': 'https://arintegration.fr/#organization' },
      areaServed: 'FR',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Stats />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
