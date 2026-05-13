import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

type Plan = {
  name: string
  originalPrice: string
  price: string
  features: string[]
  intent: string
  recommended?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Présence Essentielle',
    originalPrice: '990€',
    price: '690€',
    intent: 'essentielle',
    features: [
      'Site 4 pages (Accueil, Cabinet, Équipe, Contact)',
      'Mobile-first responsive',
      'Formulaire contact RGPD',
      'Référencement local Google Maps',
      'Hébergement France 1 an inclus',
      'Livré en 7 jours',
    ],
  },
  {
    name: 'Cabinet Connecté',
    originalPrice: '1500€',
    price: '1050€',
    intent: 'connecte',
    recommended: true,
    features: [
      "Tout de l'offre Essentielle",
      'Module RDV en ligne (Calendly intégré)',
      'Page équipe étendue avec photos pros',
      "Domaines d'intervention et honoraires détaillés",
      'Newsletter clients (optionnelle)',
      '3 mois de maintenance et support inclus',
      'Mises à jour sécurité automatiques',
    ],
  },
  {
    name: 'Cabinet Premium',
    originalPrice: '2500€',
    price: '1750€',
    intent: 'premium',
    features: [
      "Tout de l'offre Cabinet Connecté",
      'Espace client sécurisé (téléchargement documents)',
      'Synchronisation Google Calendar du cabinet',
      '3 articles SEO juridique rédigés',
      '6 mois de maintenance et support',
      '2 modifications par mois incluses',
    ],
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Des offres claires, sans surprise.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-8 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-ink bg-ink-soft px-4 py-2 text-[13px] font-semibold text-white dark:border-white/30">
            <Sparkles size={14} strokeWidth={2} className="flex-shrink-0" />
            <span>Tarifs de lancement <strong>−30 %</strong> · 10 premiers cabinets · jusqu'au 31 mai 2026</span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 md:p-8 ${
                  plan.recommended
                    ? 'border-ink bg-ink-soft text-white dark:border-white/20'
                    : 'card-bordered text-ink dark:text-white'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink ring-1 ring-ink dark:ring-white/30">
                    Recommandé
                  </span>
                )}
                <h3
                  className={`text-[15px] font-semibold uppercase tracking-wider ${
                    plan.recommended ? 'text-white/70' : 'text-muted dark:text-white/60'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-[44px] font-bold tracking-tight md:text-[52px]">
                    {plan.price}
                  </span>
                  <span
                    className={`text-[18px] font-medium line-through ${
                      plan.recommended ? 'text-white/40' : 'text-dim dark:text-white/35'
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                </div>
                <p
                  className={`mt-1 text-[13px] ${
                    plan.recommended ? 'text-white/55' : 'text-dim dark:text-white/45'
                  }`}
                >
                  Tarif lancement −30 % · TVA non applicable, art. 293 B du CGI
                </p>

                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] leading-relaxed">
                      <Check
                        size={16}
                        strokeWidth={2.2}
                        className={`mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-white' : 'text-ink dark:text-white'}`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?offre=${plan.intent}`}
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-[14px] font-medium transition-colors ${
                    plan.recommended
                      ? 'bg-white text-ink hover:bg-neutral-100'
                      : 'bg-ink text-white hover:bg-neutral-800 dark:bg-white dark:text-ink dark:hover:bg-neutral-200'
                  }`}
                >
                  Choisir cette offre
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-[14px] text-muted dark:text-white/60">
            💼 Besoin d'un site pour cabinet de groupe (5+ avocats) ou structure d'exercice (SCP, SELARL) ?{' '}
            <Link href="/contact?offre=groupe" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
              Devis personnalisé sous 24h
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
