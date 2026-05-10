import { Flag, Lock, Building2, ScrollText } from 'lucide-react'
import { Reveal } from './Reveal'

const ITEMS = [
  {
    icon: Flag,
    title: 'Hébergement France',
    text: 'OVHcloud Roubaix ou Strasbourg, 100% souverain.',
  },
  {
    icon: Lock,
    title: 'Conforme RGPD by design',
    text: "Consentement explicite, droit à l'oubli automatisé.",
  },
  {
    icon: Building2,
    title: 'Conforme loi Hoguet',
    text: 'Mandats, mentions obligatoires, carte T affichées correctement.',
  },
  {
    icon: ScrollText,
    title: 'Mentions légales rédigées',
    text: 'Politique de confidentialité incluse, conforme CNIL.',
  },
]

export default function Securite() {
  return (
    <section id="securite" className="bg-ink-soft text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-white md:text-[48px]">
            Vos données prospects hébergées en France, comme l'exige le RGPD.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/25">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15">
                    <Icon size={20} strokeWidth={1.7} className="text-white" />
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/65">{item.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-[13.5px] leading-relaxed text-white/55">
            AR Intégration s'engage par contrat à ne jamais sortir vos données de l'Union Européenne.
            Aucun service américain (Google Analytics, Facebook Pixel) n'est intégré sans votre
            consentement explicite et préalable.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
