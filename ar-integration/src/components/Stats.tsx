import { Reveal } from './Reveal'
import { AnimatedStat } from './AnimatedStat'

const STATS = [
  { value: 7, suffix: ' j', label: 'Délai moyen de livraison d\'un site vitrine' },
  { value: 98, suffix: '/100', label: 'Score Lighthouse moyen sur les sites livrés' },
  { value: 100, suffix: '%', label: 'Hébergement Union Européenne, conforme RGPD' },
  { value: 48, suffix: ' h', label: 'Délai max pour traiter une demande de modification' },
]

export default function Stats() {
  return (
    <section className="bg-ink-soft text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
            Engagements
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[30px] text-white md:text-[42px]">
            Des chiffres qui engagent, pas du marketing.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="h-full bg-ink-soft p-8">
                <div className="text-[44px] font-bold leading-none tracking-tight text-white md:text-[52px]">
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-white/65">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
