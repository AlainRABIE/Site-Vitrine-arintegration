import { Users, TrendingDown, Shield } from 'lucide-react'
import { Reveal } from './Reveal'
import { AnimatedStat } from './AnimatedStat'

const CARDS = [
  {
    icon: Users,
    value: 87,
    suffix: '%',
    label: 'des patients cherchent leur médecin en ligne avant de prendre RDV',
    source: 'Source : Étude Doctolib 2024',
    text: "Si vous n'apparaissez pas, ou si votre site fait peur, ils prennent un autre praticien.",
  },
  {
    icon: TrendingDown,
    value: 53,
    suffix: '%',
    label: 'quittent un site qui charge en plus de 3 secondes',
    source: 'Source : Google Web Vitals',
    text: "Un site lent = patients perdus avant même d'avoir vu votre nom.",
  },
  {
    icon: Shield,
    value: 20,
    suffix: 'M€',
    label: "Amende CNIL maximum pour non-conformité RGPD données santé",
    source: 'Source : Article 83 RGPD',
    text: 'Vos données patients hébergées hors UE peuvent vous coûter votre carrière.',
  },
]

export default function Pourquoi() {
  return (
    <section className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Sans site moderne, vous perdez 3 patients par semaine.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <Reveal key={card.source} delay={i * 0.1}>
                <article className="card-bordered h-full p-7 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="text-[40px] font-bold leading-none tracking-tight text-ink dark:text-white md:text-[44px]">
                    <AnimatedStat value={card.value} suffix={card.suffix} />
                  </div>
                  <p className="mt-3 text-[15px] font-medium leading-snug text-ink dark:text-white/90">
                    {card.label}
                  </p>
                  <p className="mt-2 text-[12px] font-medium uppercase tracking-wide text-dim dark:text-white/40">
                    {card.source}
                  </p>
                  <p className="mt-5 text-[14px] leading-relaxed text-muted dark:text-white/65">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
