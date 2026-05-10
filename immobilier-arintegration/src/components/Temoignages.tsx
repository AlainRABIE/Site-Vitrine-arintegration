import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const PERKS = [
  '−30 % de réduction sur toutes les offres (tarif lancement)',
  'Témoignage croisé sur notre site (avec votre accord)',
]

export default function Temoignages() {
  return (
    <section className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Premières agences équipées.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-bordered mx-auto mt-14 max-w-3xl p-8 md:p-10">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line text-ink dark:border-white/15 dark:text-white">
                <Sparkles size={18} strokeWidth={1.7} />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">
                  Programme partenaires fondateurs
                </div>
                <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-ink dark:text-white md:text-[26px]">
                  Nous lançons notre offre immobilière en 2026.
                </h3>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-muted dark:text-white/70">
              Les <strong className="text-ink dark:text-white">10 premières agences équipées</strong> bénéficient de :
            </p>

            <ul className="mt-5 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink dark:text-white/90">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink dark:bg-white" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col items-start gap-4 border-t border-line pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13.5px] text-muted dark:text-white/65">
                Réservez votre place avant le <strong className="text-ink dark:text-white">31 mars 2026</strong>.
              </p>
              <Link href="/#contact" className="btn-primary !h-11 !px-5 text-[14px]">
                Devenir partenaire fondateur
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
