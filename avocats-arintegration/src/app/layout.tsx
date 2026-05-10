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
  metadataBase: new URL('https://avocats.arintegration.fr'),
  title: 'Site web pour avocat à Lyon | AR Intégration',
  description: 'Sites web professionnels pour avocats, juristes et cabinets de droit. Conformes RGPD, hébergés en France, livrés en 7 jours.',
  keywords: [
    'site avocat Lyon',
    'site cabinet d\'avocats',
    'site notaire',
    'site juriste',
    'site avocat libéral',
    'site cabinet juridique',
    'hébergement RGPD avocat',
    'secret professionnel avocat',
    'site avocat Villeurbanne',
    'AR Intégration',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-32x32.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'AR Intégration',
    title: 'Site web pour avocat à Lyon | AR Intégration',
    description: 'Sites professionnels pour avocats. Conformes RGPD, hébergés en France, livrés en 7 jours.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site web pour avocat à Lyon | AR Intégration',
    description: 'Sites professionnels pour avocats. Conformes RGPD, hébergés en France, livrés en 7 jours.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://avocats.arintegration.fr/#organization',
      name: 'AR Intégration - Sites web pour avocats',
      description: 'Création de sites web pour avocats, juristes et cabinets de droit. Conforme RGPD, hébergement France.',
      url: 'https://avocats.arintegration.fr',
      logo: 'https://arintegration.fr/Logo.png',
      telephone: '+33667755850',
      email: 'contact@arintegration.fr',
      priceRange: '690€ - 1750€',
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
      ],
      serviceType: "Création site internet pour cabinets d'avocats",
      sameAs: ['https://arintegration.fr'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres sites web pour avocats',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Présence Essentielle', description: 'Site 4 pages responsive, RGPD, SEO local Google Maps, hébergement France 1 an, livré en 7 jours.' }, priceCurrency: 'EUR', price: '690' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Connecté', description: "Module RDV (Calendly), page équipe étendue, domaines d'intervention et honoraires détaillés, 3 mois de maintenance." }, priceCurrency: 'EUR', price: '1050' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Premium', description: 'Espace client sécurisé, sync Google Calendar, 3 articles SEO juridique, 6 mois de maintenance.' }, priceCurrency: 'EUR', price: '1750' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://avocats.arintegration.fr/#website',
      url: 'https://avocats.arintegration.fr',
      name: 'AR Intégration — Avocats',
      inLanguage: 'fr-FR',
      publisher: { '@id': 'https://avocats.arintegration.fr/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Combien de temps pour livrer mon site ?', acceptedAnswer: { '@type': 'Answer', text: "7 jours ouvrés à compter de la validation du devis pour l'offre Essentielle. 10 jours pour Cabinet Connecté. Engagement contractuel." } },
        { '@type': 'Question', name: 'Mon site sera-t-il vraiment conforme RGPD ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Hébergement OVH France, mentions légales et politique de confidentialité rédigées par nos soins, aucun cookie tiers sans consentement explicite, droit à l'oubli automatisé." } },
        { '@type': 'Question', name: 'Puis-je modifier mon site moi-même ?', acceptedAnswer: { '@type': 'Answer', text: "Non, votre site est codé sur-mesure (sans CMS type WordPress) — c'est ce qui garantit sa rapidité, sa sécurité et sa conformité RGPD. Les modifications (horaires, équipe, honoraires, actualités) sont prises en charge par AR Intégration sous 48h ouvrées dans le cadre de votre contrat de maintenance." } },
        { '@type': 'Question', name: 'Mon site sera-t-il bien référencé sur Google ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Optimisation SEO local incluse (Google My Business, Schema.org LocalBusiness, balises meta). Pour un référencement national avancé, l'offre Cabinet Premium inclut 3 articles SEO juridique rédigés par nos soins." } },
        { '@type': 'Question', name: "Quelle est la différence avec un annuaire d'avocats ou un site fait sur Wix ?", acceptedAnswer: { '@type': 'Answer', text: "Les annuaires (Avocat.fr, Justifit) sont des plateformes de mise en relation où vous êtes locataire, sans contrôle réel sur la présentation, et qui prennent commission sur les nouveaux clients. Wix est limité, lent, et non conforme RGPD par défaut. Notre solution : votre site, votre nom de domaine, vos données en France, code sur-mesure, zéro commission." } },
        { '@type': 'Question', name: 'Que se passe-t-il après les 3 mois de maintenance ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous passez en formule maintenance à 200€/mois, qui inclut les légères modifications de contenu (équipe, honoraires, actualités), les mises à jour de sécurité et le support technique. Vous restez propriétaire à 100% du site et du code.' } },
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
