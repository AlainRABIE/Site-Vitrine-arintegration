import { Stethoscope, Scale, Building2, Sparkles, ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'

type Sector = {
  icon: typeof Stethoscope
  name: string
  tagline: string
  href: string
  external?: boolean
}

const SECTORS: Sector[] = [
  {
    icon: Stethoscope,
    name: 'Médecins libéraux',
    tagline: 'Cabinets médicaux, dentaires, kinés, ostéos, sages-femmes. Conforme RGPD santé.',
    href: 'https://medecins.arintegration.fr',
    external: true,
  },
  {
    icon: Scale,
    name: 'Cabinets d\'avocats',
    tagline: 'Avocats, notaires, juristes. Compatible secret professionnel (RIN art. 2).',
    href: 'https://avocats.arintegration.fr',
    external: true,
  },
  {
    icon: Building2,
    name: 'Agences immobilières',
    tagline: 'Agences, mandataires, conseillers. Sync logiciel métier + conforme loi Hoguet.',
    href: 'https://immobilier.arintegration.fr',
    external: true,
  },
  {
    icon: Sparkles,
    name: 'Autre secteur ?',
    tagline: 'Restaurateurs, artisans, coachs, e-commerce, SaaS, indépendants. On adore les défis.',
    href: '/#contact',
  },
]

export default function Secteurs() {
  return (
    <section id="secteurs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            Solutions par secteur
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Spécialisés dans plusieurs métiers, attentifs à votre activité.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-relaxed text-muted dark:text-white/70">
            3 sous-marques sectorielles avec contraintes métier intégrées (RGPD santé, secret pro, loi Hoguet).
            Pour les autres secteurs, on construit la solution avec vous.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon
            const isExternal = sector.external
            const LinkComponent = isExternal ? 'a' : 'a'
            return (
              <Reveal key={sector.name} delay={(i % 4) * 0.08}>
                <LinkComponent
                  href={sector.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="card-bordered group flex h-full flex-col p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">
                    {sector.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted dark:text-white/65">
                    {sector.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform group-hover:translate-x-0.5 dark:text-white">
                    {isExternal ? 'Voir le site dédié' : 'Demander un devis'}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </div>
                </LinkComponent>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
