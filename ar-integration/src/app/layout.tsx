import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})
const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://arintegration.fr'),
  title: 'AR Integration — Création Web & Mobile',
  description: 'AR Integration crée des sites web et applications mobiles qui transforment votre vision en expériences digitales qui convertissent.',
  keywords: ['création site web', 'application mobile', 'développement web', 'AR Integration'],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon-32x32.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'AR Integration',
    title: 'AR Integration — Création Web & Mobile',
    description: 'Sites web et applications mobiles qui transforment votre vision en expériences digitales qui convertissent.',
    images: [{ url: '/Site-vitrine.png', width: 1200, height: 630, alt: 'AR Integration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Integration — Création Web & Mobile',
    description: 'Sites web et applications mobiles qui convertissent.',
    images: ['/Site-vitrine.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebas.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
