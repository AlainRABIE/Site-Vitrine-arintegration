import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://arintegration.fr'),
  title: {
    default: 'AR Intégration — Agence web et apps mobiles à Lyon',
    template: '%s | AR Intégration',
  },
  description: "Agence web et mobile à Lyon. Sites internet sur-mesure, applications iOS/Android, e-commerce. Conformes RGPD, hébergés en France, livrés rapidement.",
  keywords: [
    'agence web Lyon',
    'création site internet Lyon',
    'développeur web Villeurbanne',
    'application mobile sur-mesure',
    'agence Next.js Lyon',
    'site e-commerce Lyon',
    'développement web Auvergne-Rhône-Alpes',
    'agence digitale Lyon',
    'freelance développeur Lyon',
    'AR Intégration',
  ],
  authors: [{ name: 'Alain Rabie', url: 'https://arintegration.fr' }],
  creator: 'Alain Rabie',
  publisher: 'AR Intégration',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-32x32.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'AR Intégration',
    title: 'AR Intégration — Agence web et apps mobiles à Lyon',
    description: 'Sites internet sur-mesure, applications iOS/Android, e-commerce. Conformes RGPD, hébergés en France, livrés rapidement.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Intégration — Agence web et apps mobiles à Lyon',
    description: 'Sites internet sur-mesure, applications iOS/Android, e-commerce. Conformes RGPD, hébergés en France.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: {},
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://arintegration.fr/#organization',
      name: 'AR Intégration',
      legalName: 'AR Intégration',
      url: 'https://arintegration.fr',
      logo: 'https://arintegration.fr/Logo.png',
      image: 'https://arintegration.fr/og.png',
      description: 'Agence web et mobile à Lyon. Sites internet sur-mesure, applications iOS/Android, e-commerce. Conformes RGPD, hébergés en France.',
      email: 'contact@arintegration.fr',
      telephone: '+33667755850',
      priceRange: '690€ - 6990€',
      foundingDate: '2024',
      founder: { '@type': 'Person', name: 'Alain Rabie' },
      identifier: '10252062400010',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Villeurbanne',
        addressLocality: 'Lyon',
        postalCode: '69100',
        addressRegion: 'Auvergne-Rhône-Alpes',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Lyon' },
        { '@type': 'City', name: 'Villeurbanne' },
        { '@type': 'AdministrativeArea', name: 'Métropole de Lyon' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
        { '@type': 'Country', name: 'France' },
      ],
      sameAs: [
        'https://medecins.arintegration.fr',
        'https://avocats.arintegration.fr',
        'https://immobilier.arintegration.fr',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services AR Intégration',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site vitrine sur-mesure', description: 'Site web professionnel responsive, conforme RGPD, hébergé en France.' }, priceCurrency: 'EUR', price: '690', priceSpecification: { '@type': 'PriceSpecification', price: '690', priceCurrency: 'EUR', valueAddedTaxIncluded: false } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site e-commerce', description: 'Boutique en ligne complète avec paiement Stripe, gestion stocks et back-office.' }, priceCurrency: 'EUR', price: '2090' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application mobile iOS/Android', description: 'Application native ou cross-platform sur-mesure pour iPhone et Android.' }, priceCurrency: 'EUR', price: '3490' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://arintegration.fr/#website',
      url: 'https://arintegration.fr',
      name: 'AR Intégration',
      inLanguage: 'fr-FR',
      publisher: { '@id': 'https://arintegration.fr/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://arintegration.fr/?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Combien coûte un site internet professionnel ?', acceptedAnswer: { '@type': 'Answer', text: 'Tarifs de lancement (10 premiers clients, jusqu\'au 31 mars 2026) : site vitrine à partir de 690€ (Présence Essentielle), 1050€ Site Connecté avec module RDV, 1750€ Site Premium avec espace client. E-commerce à partir de 2090€, application mobile à partir de 3490€. Tarifs hors lancement : 990€ / 1500€ / 2500€ / 2990€ / 4990€.' } },
        { '@type': 'Question', name: 'Combien de temps pour livrer un site web ?', acceptedAnswer: { '@type': 'Answer', text: '7 jours ouvrés pour un site vitrine Présence Essentielle, 10 jours pour Connecté, 15 jours pour Premium. 4 à 8 semaines pour une application mobile selon complexité. Engagement contractuel.' } },
        { '@type': 'Question', name: 'Le site sera-t-il bien référencé sur Google ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Optimisation SEO local incluse (Google My Business, Schema.org, balises meta). Sites construits avec Next.js et export statique pour des scores Lighthouse 95+.' } },
        { '@type': 'Question', name: 'Mes données seront-elles hébergées en France ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Hébergement OVHcloud Roubaix ou Strasbourg sur option dédiée. Conformité RGPD by design, aucun service tiers américain sans consentement explicite.' } },
        { '@type': 'Question', name: 'Travaillez-vous avec des secteurs spécifiques ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Trois sous-marques sectorielles dédiées : medecins.arintegration.fr (médecins libéraux), avocats.arintegration.fr (cabinets juridiques), immobilier.arintegration.fr (agences immobilières). Et tous les autres secteurs sur arintegration.fr.' } },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
