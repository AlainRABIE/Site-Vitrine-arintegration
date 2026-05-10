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
  category: string
}

const SITES_VITRINE: Plan[] = [
  {
    name: 'Présence Essentielle',
    originalPrice: '990€',
    price: '690€',
    intent: 'site-essentielle',
    category: 'Site vitrine',
    features: [
      'Site 4 pages responsive',
      'Formulaire contact RGPD',
      'Référencement local Google Maps',
      'Hébergement France 1 an inclus',
      'Livré en 7 jours',
    ],
  },
  {
    name: 'Site Connecté',
    originalPrice: '1500€',
    price: '1050€',
    intent: 'site-connecte',
    category: 'Site vitrine',
    recommended: true,
    features: [
      "Tout de l'offre Essentielle",
      'Module RDV en ligne (Calendly)',
      'Page équipe étendue',
      'Newsletter clients',
      '3 mois de maintenance inclus',
    ],
  },
  {
    name: 'Site Premium',
    originalPrice: '2500€',
    price: '1750€',
    intent: 'site-premium',
    category: 'Site vitrine',
    features: [
      "Tout de l'offre Connecté",
      'Espace client sécurisé',
      'Synchronisation Google Calendar',
      '3 articles SEO rédigés',
      '6 mois de maintenance',
      '2 modifications par mois',
    ],
  },
]

const ECOMMERCE: Plan[] = [
  {
    name: 'E-commerce Starter',
    originalPrice: '2990€',
    price: '2090€',
    intent: 'ecom-starter',
    category: 'E-commerce',
    features: [
      'Boutique 30 produits',
      'Paiement Stripe sécurisé',
      'Back-office complet',
      'Mobile-first',
      'Hébergement France 1 an',
    ],
  },
  {
    name: 'E-commerce Pro',
    originalPrice: '4990€',
    price: '3490€',
    intent: 'ecom-pro',
    category: 'E-commerce',
    recommended: true,
    features: [
      "Tout de l'offre Starter",
      'Catalogue illimité',
      'Espace client + suivi commandes',
      'Multi-paiements (CB, Apple Pay)',
      'Newsletter automatisée',
      '3 mois de maintenance',
    ],
  },
]

const APPS: Plan[] = [
  {
    name: 'App MVP',
    originalPrice: '4990€',
    price: '3490€',
    intent: 'app-mvp',
    category: 'Application mobile',
    features: [
      'iOS + Android (cross-platform)',
      '5 écrans principaux',
      'Auth + back-office',
      'Publication App Store + Play Store',
      'Livré en 4 semaines',
    ],
  },
  {
    name: 'App Pro',
    originalPrice: '9990€',
    price: '6990€',
    intent: 'app-pro',
    category: 'Application mobile',
    recommended: true,
    features: [
      "Tout de l'offre MVP",
      'Notifications push',
      'Paiements intégrés',
      'API custom + intégrations',
      'Livré en 8 semaines',
      '6 mois de maintenance',
    ],
  },
]

function PlanCard({ plan }: { plan: Plan }) {
  return (
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
        <span className="text-[40px] font-bold tracking-tight md:text-[48px]">{plan.price}</span>
        <span
          className={`text-[16px] font-medium line-through ${
            plan.recommended ? 'text-white/40' : 'text-dim dark:text-white/35'
          }`}
        >
          {plan.originalPrice}
        </span>
      </div>
      <p
        className={`mt-1 text-[12.5px] ${
          plan.recommended ? 'text-white/55' : 'text-dim dark:text-white/45'
        }`}
      >
        Tarif lancement −30 % · TVA non applicable, art. 293 B du CGI
      </p>

      <ul className="mt-6 space-y-3">
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
        href={`/#contact?offre=${plan.intent}`}
        className={`mt-7 inline-flex h-11 w-full items-center justify-center rounded-full text-[13.5px] font-medium transition-colors ${
          plan.recommended
            ? 'bg-white text-ink hover:bg-neutral-100'
            : 'bg-ink text-white hover:bg-neutral-800 dark:bg-white dark:text-ink dark:hover:bg-neutral-200'
        }`}
      >
        Choisir cette offre
      </Link>
    </article>
  )
}

function PlanGroup({ title, plans }: { title: string; plans: Plan[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="text-[20px] font-semibold tracking-tight text-ink dark:text-white">{title}</h3>
      </Reveal>
      <div className={`mt-6 grid items-stretch gap-5 ${plans.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Tarifs() {
  return (
    <section id="tarifs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            Tarifs
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Des offres claires, sans surprise.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-8 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-ink bg-ink-soft px-4 py-2 text-[13px] font-semibold text-white dark:border-white/30">
            <Sparkles size={14} strokeWidth={2} className="flex-shrink-0" />
            <span>Tarifs de lancement <strong>−30 %</strong> · 10 premiers clients · jusqu'au 31 mars 2026</span>
          </div>
        </Reveal>

        <div className="mt-12 space-y-16">
          <PlanGroup title="Sites vitrine" plans={SITES_VITRINE} />
          <PlanGroup title="E-commerce" plans={ECOMMERCE} />
          <PlanGroup title="Applications mobiles" plans={APPS} />
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-[14px] text-muted dark:text-white/60">
            💼 Projet sur-mesure, SaaS, dashboard, intégration API ?{' '}
            <Link href="/#contact?offre=sur-mesure" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
              Devis personnalisé sous 48h
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
