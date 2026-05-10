import { Reveal } from './Reveal'

const AVANT = [
  "Site qui n'est pas mobile (60% de vos patients sont sur smartphone)",
  'Pas de prise de RDV en ligne (vous saturez votre secrétaire)',
  'Hébergement étranger (non conforme RGPD pour données santé)',
  'Aucun contrôle sur les modifications (cher et long à chaque changement)',
  'Pas de référencement local (vos patients ne vous trouvent pas sur Google)',
]

const APRES = [
  'Site responsive parfait sur mobile, tablette, ordinateur',
  'Module de prise de RDV intégré (Calendly ou Doctolib)',
  'Hébergement OVH France, conforme RGPD et HDS',
  'Modifications prises en charge sous 48h par votre développeur dédié, sans agence intermédiaire',
  'Optimisé « [Spécialité] [Ville] » sur Google Maps et recherche locale',
]

export default function AvantApres() {
  return (
    <section className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Vos patients méritent mieux qu'un site daté de 2015.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-bordered h-full p-7 md:p-9">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/60">
                Avant
              </div>
              <ul className="space-y-4">
                {AVANT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink dark:text-white/85">
                    <span aria-hidden className="mt-0.5 text-[18px] leading-none text-red-500">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-ink-soft p-7 text-white md:p-9">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                Après
              </div>
              <ul className="space-y-4">
                {APRES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-0.5 text-[16px] leading-none text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
