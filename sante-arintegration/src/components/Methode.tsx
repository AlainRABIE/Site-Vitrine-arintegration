import { Reveal } from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Appel découverte (15 min)',
    text: "On échange par téléphone à l'horaire qui vous arrange (même tôt le matin ou tard le soir). Vous nous présentez votre cabinet, vos besoins, votre budget. Sans engagement.",
  },
  {
    n: '02',
    title: 'Proposition personnalisée (24h)',
    text: 'Vous recevez un devis détaillé et une maquette de votre futur site dans les 24h. Tout est expliqué clairement, sans jargon technique.',
  },
  {
    n: '03',
    title: 'Développement (5-7 jours)',
    text: "On code votre site avec un accès en temps réel à l'avancement. Vous validez chaque étape par email, sans réunion inutile.",
  },
  {
    n: '04',
    title: 'Livraison et prise en main (1h)',
    text: 'Site en ligne. On fait le point ensemble sur le module RDV (Calendly ou Doctolib) et la prise en main du quotidien. Toute évolution du contenu passe par AR Intégration, traitée sous 48h ouvrées. Support inclus pendant 3 mois minimum.',
  },
]

export default function Methode() {
  return (
    <section className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Un processus simple, conçu pour les médecins occupés.
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
