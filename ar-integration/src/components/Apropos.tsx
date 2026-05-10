import { MapPin, Code2, Heart } from 'lucide-react'
import { Reveal } from './Reveal'

const PILIERS = [
  {
    icon: MapPin,
    title: 'Lyon, en personne',
    text: 'Auto-entreprise basée à Villeurbanne (69100). Pas de hotline délocalisée, pas d\'agence offshore : vous parlez directement avec votre développeur.',
  },
  {
    icon: Code2,
    title: 'Code sur-mesure',
    text: 'Pas de WordPress / Wix / Shopify. Stack moderne (Next.js, TypeScript, Tailwind) pour des sites rapides, sécurisés, conformes RGPD by design.',
  },
  {
    icon: Heart,
    title: 'Engagement long terme',
    text: 'Pas de "site jetable" : maintenance 200€/mois, modifications sous 48h, pas de commission, 100% propriétaire de votre code et de vos données.',
  },
]

export default function Apropos() {
  return (
    <section id="apropos" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                À propos
              </span>
              <h2 className="heading-section text-[32px] text-ink dark:text-white md:text-[42px]">
                Une auto-entreprise qui code, à Lyon.
              </h2>
              <p className="mt-6 text-[16.5px] leading-relaxed text-muted dark:text-white/70">
                AR Intégration, c'est <strong className="text-ink dark:text-white">Alain Rabie</strong>,
                développeur web et mobile basé à Villeurbanne (Lyon).
              </p>
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted dark:text-white/70">
                Mon principe : pas de promesses creuses, pas de jargon, pas de coûts cachés. Un échange direct,
                un devis clair, un code propre, une livraison rapide. Et derrière, un humain joignable
                pour chaque évolution future.
              </p>

              <div className="mt-8 space-y-2 rounded-2xl border border-line bg-white/50 p-5 text-[13.5px] text-muted dark:border-white/10 dark:bg-white/[0.03] dark:text-white/65">
                <div><strong className="text-ink dark:text-white">SIRET</strong> · 102 520 624 00010</div>
                <div><strong className="text-ink dark:text-white">Statut</strong> · Auto-entrepreneur (TVA non applicable)</div>
                <div><strong className="text-ink dark:text-white">Adresse</strong> · Villeurbanne, Lyon (69100)</div>
                <div><strong className="text-ink dark:text-white">Zone</strong> · Lyon, métropole, Auvergne-Rhône-Alpes, France entière (visio)</div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {PILIERS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <article className="card-bordered flex gap-5 p-7">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">{p.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted dark:text-white/65">{p.text}</p>
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
