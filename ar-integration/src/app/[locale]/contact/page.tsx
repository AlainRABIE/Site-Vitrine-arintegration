import { Suspense } from 'react'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact.section' })
  return {
    title: t('h2'),
    description: t('subtitle').replace(/<[^>]+>/g, ''),
    alternates: { canonical: `/${locale}/contact/` },
    robots: { index: true, follow: true },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'contact.section' })

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:px-8 md:py-20 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                {t('kicker')}
              </span>
              <h1
                className="heading-display mt-6 text-balance text-ink dark:text-white"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.6rem)' }}
              >
                {t('h2')}
              </h1>
              <p
                className="mt-6 text-[16.5px] leading-relaxed text-muted dark:text-white/70"
                dangerouslySetInnerHTML={{ __html: t('subtitle') }}
              />

              <div className="mt-10 space-y-5 border-t border-line pt-8 dark:border-white/10">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">{t('phoneLabel')}</div>
                  <a href="tel:+33667755850" className="mt-1 block text-[18px] font-semibold tracking-tight text-ink hover:underline underline-offset-4 dark:text-white">
                    06 67 75 58 50
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">{t('emailLabel')}</div>
                  <a href="mailto:contact@arintegration.fr" className="mt-1 block text-[18px] font-semibold tracking-tight text-ink hover:underline underline-offset-4 dark:text-white">
                    contact@arintegration.fr
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">{t('addressLabel')}</div>
                  <div className="mt-1 text-[15px] text-ink dark:text-white/85">
                    {t('addressValue')}
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
