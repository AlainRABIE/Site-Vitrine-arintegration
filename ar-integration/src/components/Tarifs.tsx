import { useTranslations } from 'next-intl'
import { Check, Sparkles } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { Reveal } from './Reveal'

type Plan = {
  key: string
  originalPrice: string
  price: string
  intent: string
  recommended?: boolean
}

const SITES_VITRINE: Plan[] = [
  { key: 'siteEssentielle', originalPrice: '990€', price: '690€', intent: 'site-essentielle' },
  { key: 'siteConnecte', originalPrice: '1500€', price: '1050€', intent: 'site-connecte', recommended: true },
  { key: 'sitePremium', originalPrice: '2500€', price: '1750€', intent: 'site-premium' },
]

const ECOMMERCE: Plan[] = [
  { key: 'ecomStarter', originalPrice: '2990€', price: '2090€', intent: 'ecom-starter' },
  { key: 'ecomPro', originalPrice: '4990€', price: '3490€', intent: 'ecom-pro', recommended: true },
]

const APPS: Plan[] = [
  { key: 'appMvp', originalPrice: '4990€', price: '3490€', intent: 'app-mvp' },
  { key: 'appPro', originalPrice: '9990€', price: '6990€', intent: 'app-pro', recommended: true },
]

function PlanCard({ plan }: { plan: Plan }) {
  const t = useTranslations('tarifs')
  const features = t.raw(`plans.${plan.key}.features`) as string[]
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
          {t('recommended')}
        </span>
      )}
      <h3
        className={`text-[15px] font-semibold uppercase tracking-wider ${
          plan.recommended ? 'text-white/70' : 'text-muted dark:text-white/60'
        }`}
      >
        {t(`plans.${plan.key}.name`)}
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
        {t('vatNotice')}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
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
        {t('choose')}
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
          <Reveal key={plan.key} delay={i * 0.08}>
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Tarifs() {
  const t = useTranslations('tarifs')
  return (
    <section id="tarifs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            {t('kicker')}
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="mx-auto mt-8 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-ink bg-ink-soft px-4 py-2 text-[13px] font-semibold text-white dark:border-white/30"
            dangerouslySetInnerHTML={{
              __html: `<span style="display:inline-flex;align-items:center;gap:10px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.88 5.76L20 10l-4.5 4.39 1.06 6.18L12 17.77 7.44 20.57 8.5 14.39 4 10l6.12-1.24z"/></svg>${t('launchBanner')}</span>`,
            }}
          />
        </Reveal>

        <div className="mt-12 space-y-16">
          <PlanGroup title={t('category.vitrine')} plans={SITES_VITRINE} />
          <PlanGroup title={t('category.ecom')} plans={ECOMMERCE} />
          <PlanGroup title={t('category.apps')} plans={APPS} />
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-[14px] text-muted dark:text-white/60">
            {t('customQuote')}{' '}
            <Link href="/#contact?offre=sur-mesure" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
              {t('customQuoteLink')}
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
