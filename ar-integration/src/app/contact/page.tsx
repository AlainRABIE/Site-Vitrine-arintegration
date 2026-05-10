import { Suspense } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Demander un devis gratuit',
  description: "Demandez un devis gratuit pour votre projet web ou mobile. Réponse sous 24h ouvrées. Lyon, Villeurbanne, Auvergne-Rhône-Alpes.",
  alternates: { canonical: '/contact/' },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:px-8 md:py-20 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                Devis gratuit · Sans engagement
              </span>
              <h1
                className="heading-display mt-6 text-balance text-ink dark:text-white"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.6rem)' }}
              >
                Parlons de votre projet.
              </h1>
              <p className="mt-6 text-[16.5px] leading-relaxed text-muted dark:text-white/70">
                Quelques infos pour préparer notre échange. Vous serez recontacté par téléphone
                au créneau de votre choix, dans les <strong className="text-ink dark:text-white">24h ouvrées</strong>.
              </p>

              <div className="mt-10 space-y-5 border-t border-line pt-8 dark:border-white/10">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">Téléphone direct</div>
                  <a href="tel:+33667755850" className="mt-1 block text-[18px] font-semibold tracking-tight text-ink hover:underline underline-offset-4 dark:text-white">
                    06 67 75 58 50
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">Email</div>
                  <a href="mailto:contact@arintegration.fr" className="mt-1 block text-[18px] font-semibold tracking-tight text-ink hover:underline underline-offset-4 dark:text-white">
                    contact@arintegration.fr
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">Adresse</div>
                  <div className="mt-1 text-[15px] text-ink dark:text-white/85">
                    Villeurbanne, Lyon — Auvergne-Rhône-Alpes
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Suspense fallback={<div className="card-bordered h-[600px] animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
