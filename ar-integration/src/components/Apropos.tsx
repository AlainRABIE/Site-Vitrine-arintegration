import { useTranslations } from 'next-intl'
import { MapPin, Code2, Heart } from 'lucide-react'
import { Reveal } from './Reveal'

const PILLARS = [
  { key: 'pillar1', icon: MapPin },
  { key: 'pillar2', icon: Code2 },
  { key: 'pillar3', icon: Heart },
] as const

export default function Apropos() {
  const t = useTranslations('apropos')
  return (
    <section id="apropos" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                {t('kicker')}
              </span>
              <h2 className="heading-section text-[32px] text-ink dark:text-white md:text-[42px]">
                {t('title')}
              </h2>
              <p
                className="mt-6 text-[16.5px] leading-relaxed text-muted dark:text-white/70"
                dangerouslySetInnerHTML={{ __html: t.raw('intro1') as string }}
              />
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted dark:text-white/70">
                {t('intro2')}
              </p>

              <div className="mt-8 space-y-2 rounded-2xl border border-line bg-white/50 p-5 text-[13.5px] text-muted dark:border-white/10 dark:bg-white/[0.03] dark:text-white/65">
                <div><strong className="text-ink dark:text-white">{t('infoSiret')}</strong> · 102 520 624 00010</div>
                <div><strong className="text-ink dark:text-white">{t('infoStatut')}</strong> · {t('infoStatutValue')}</div>
                <div><strong className="text-ink dark:text-white">{t('infoAdresse')}</strong> · {t('infoAdresseValue')}</div>
                <div><strong className="text-ink dark:text-white">{t('infoZone')}</strong> · {t('infoZoneValue')}</div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.key} delay={i * 0.1}>
                  <article className="card-bordered flex gap-5 p-7">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">{t(`${p.key}.title`)}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted dark:text-white/65">{t(`${p.key}.text`)}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
