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
  metadataBase: new URL('https://immobilier.arintegration.fr'),
  title: 'Site web pour agence immobilière à Lyon | AR Intégration',
  description: 'Sites web professionnels pour agences immobilières, mandataires et conseillers. Conformes RGPD, hébergés en France, livrés en 7 jours.',
  keywords: [
    'site agence immobilière Lyon',
    'site mandataire immobilier',
    'site conseiller immobilier',
    'site agent immobilier',
    'site agence immobilière Villeurbanne',
    'hébergement RGPD immobilier',
    'site immobilier sur-mesure',
    'AR Intégration',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-32x32.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'AR Intégration',
    title: 'Site web pour agence immobilière à Lyon | AR Intégration',
    description: "Sites professionnels pour agences immobilières. Conformes RGPD, hébergés en France, livrés en 7 jours.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site web pour agence immobilière à Lyon | AR Intégration',
    description: "Sites professionnels pour agences immobilières. Conformes RGPD, hébergés en France, livrés en 7 jours.",
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://immobilier.arintegration.fr/#organization',
      name: "AR Intégration - Sites web pour agences immobilières",
      description: "Création de sites web pour agences immobilières, mandataires et conseillers. Conforme RGPD, hébergement France.",
      url: 'https://immobilier.arintegration.fr',
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
      serviceType: "Création site internet pour agences immobilières",
      sameAs: ['https://arintegration.fr'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres sites web pour agences immobilières',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Présence Essentielle', description: 'Site 4 pages responsive, formulaire estimation + contact RGPD, SEO local Google Maps, hébergement France 1 an, livré en 7 jours.' }, priceCurrency: 'EUR', price: '690' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agence Connectée', description: 'Module fiches biens (sync Hektor / ImmoFacile / Apimo), page équipe étendue, page services et honoraires détaillée, 3 mois de maintenance.' }, priceCurrency: 'EUR', price: '1050' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agence Premium', description: 'Espace vendeur sécurisé (suivi mandat), notifications nouveaux biens, 3 articles SEO immobilier, 6 mois de maintenance.' }, priceCurrency: 'EUR', price: '1750' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://immobilier.arintegration.fr/#website',
      url: 'https://immobilier.arintegration.fr',
      name: 'AR Intégration — Immobilier',
      inLanguage: 'fr-FR',
      publisher: { '@id': 'https://immobilier.arintegration.fr/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Combien de temps pour livrer mon site ?', acceptedAnswer: { '@type': 'Answer', text: "7 jours ouvrés à compter de la validation du devis pour l'offre Essentielle. 10 jours pour Agence Connectée. Engagement contractuel." } },
        { '@type': 'Question', name: 'Mon site sera-t-il vraiment conforme RGPD ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Hébergement OVH France, mentions légales et politique de confidentialité rédigées par nos soins, aucun cookie tiers sans consentement explicite, droit à l'oubli automatisé." } },
        { '@type': 'Question', name: 'Puis-je modifier mon site moi-même ?', acceptedAnswer: { '@type': 'Answer', text: "Non, votre site est codé sur-mesure (sans CMS type WordPress) — c'est ce qui garantit sa rapidité, sa sécurité et sa conformité RGPD. Les modifications (équipe, services, honoraires, actualités) sont prises en charge par AR Intégration sous 48h ouvrées dans le cadre de votre contrat de maintenance. Les fiches biens elles-mêmes se synchronisent automatiquement depuis votre logiciel métier." } },
        { '@type': 'Question', name: 'Mon site sera-t-il bien référencé sur Google ?', acceptedAnswer: { '@type': 'Answer', text: "Oui. Optimisation SEO local incluse (Google My Business, Schema.org RealEstateAgent, balises meta, Schema.org pour fiches biens). Pour un référencement national avancé, l'offre Agence Premium inclut 3 articles SEO immobilier rédigés par nos soins." } },
        { '@type': 'Question', name: "Quelle est la différence avec SeLoger, Bien'ici, ou un site fait sur Wix ?", acceptedAnswer: { '@type': 'Answer', text: "Les portails (SeLoger, Bien'ici, Logic-Immo) sont des plateformes de diffusion où vous payez à l'annonce et où les leads vous échappent au profit du portail. Wix est limité, lent, non conforme RGPD par défaut. Notre solution : votre site, vos leads, vos données en France, code sur-mesure, zéro commission sur les nouveaux mandats." } },
        { '@type': 'Question', name: 'Que se passe-t-il après les 3 mois de maintenance ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous passez en formule maintenance à 200€/mois, qui inclut les légères modifications de contenu (équipe, services, honoraires, actualités), les mises à jour de sécurité et le support technique. Vous restez propriétaire à 100% du site et du code.' } },
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
