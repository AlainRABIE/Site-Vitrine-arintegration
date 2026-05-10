import { Reveal } from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Appel découverte (15 min)',
    text: "On échange par téléphone à l'horaire qui vous arrange. Vous nous présentez votre projet, vos besoins, votre budget. Sans engagement.",
  },
  {
    n: '02',
    title: 'Proposition personnalisée (24h)',
    text: 'Vous recevez un devis détaillé et une maquette de votre futur site / app dans les 24h. Tout est expliqué clairement, sans jargon technique.',
  },
  {
    n: '03',
    title: 'Développement (1-8 semaines)',
    text: "On code votre projet avec un accès en temps réel à l'avancement. Vous validez chaque étape par email, sans réunion inutile.",
  },
  {
    n: '04',
    title: 'Livraison et prise en main (1h)',
    text: 'Mise en ligne. On fait le point ensemble, on vous transmet les accès, on assure le support pendant 3 mois minimum. Évolutions sous 48h ouvrées.',
  },
]

export default function Process() {
  return (
    <section className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            Méthode
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Un processus simple, transparent, sans surprise.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line dark:bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="h-full bg-white p-7 dark:bg-[#0A0A0A] md:p-8">
                <div className="text-[12px] font-mono font-medium text-dim dark:text-white/40">ÉTAPE {step.n}</div>
                <h3 className="mt-4 text-[19px] font-semibold tracking-tight text-ink dark:text-white">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted dark:text-white/65">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
