import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { ThemeProvider } from '@/components/ThemeProvider'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const baseUrl = 'https://arintegration.fr'
  const localePath = locale === routing.defaultLocale ? '' : `/${locale}`
  return {
    metadataBase: new URL(baseUrl),
    title: { default: t('title'), template: '%s | AR Intégration' },
    description: t('description'),
    keywords: [
      'agence web Lyon',
      'création site internet Lyon',
      'développeur web Villeurbanne',
      'application mobile sur-mesure',
      'agence Next.js Lyon',
      'site e-commerce Lyon',
      'AR Intégration',
    ],
    authors: [{ name: 'Alain Rabie', url: baseUrl }],
    creator: 'Alain Rabie',
    publisher: 'AR Intégration',
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
    icons: { icon: '/favicon-32x32.png' },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : locale === 'de' ? 'de_DE' : 'it_IT',
      url: `/${locale}`,
      siteName: 'AR Intégration',
      title: t('title'),
      description: t('ogDescription'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('ogDescription'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

const buildJsonLd = (locale: string) => ({
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site vitrine sur-mesure' }, priceCurrency: 'EUR', price: '690' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site e-commerce' }, priceCurrency: 'EUR', price: '2090' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application mobile iOS/Android' }, priceCurrency: 'EUR', price: '3490' },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://arintegration.fr/#website',
      url: 'https://arintegration.fr',
      name: 'AR Intégration',
      inLanguage: locale,
      publisher: { '@id': 'https://arintegration.fr/#organization' },
    },
  ],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as never)) {
    notFound()
  }
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
