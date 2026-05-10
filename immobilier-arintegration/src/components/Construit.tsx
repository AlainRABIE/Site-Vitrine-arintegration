import { Home, MapPin, Users, FileText, MessageSquare, Newspaper } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  {
    icon: Home,
    title: 'Module fiches biens',
    text: 'Synchronisé avec votre logiciel métier (Hektor, ImmoFacile, Apimo) — mises à jour automatiques.',
  },
  {
    icon: MapPin,
    title: 'Carte interactive du secteur',
    text: 'Vos prospects situent vos biens et votre agence en un clic, depuis leur téléphone.',
  },
  {
    icon: Users,
    title: 'Page équipe',
    text: 'Négociateurs, conseillers, secrétariat — avec photos professionnelles et présentation.',
  },
  {
    icon: FileText,
    title: 'Services et honoraires',
    text: "Transparence loi Hoguet : vos services, vos honoraires, votre carte T affichés clairement.",
  },
  {
    icon: MessageSquare,
    title: 'Estimation gratuite + contact',
    text: 'Formulaire estimation et contact sécurisé — anti-spam, RGPD, notifications email instantanées.',
  },
  {
    icon: Newspaper,
    title: 'Conseils acheteurs / vendeurs',
    text: 'Espace actualités optionnel : guides du primo-accédant, tendances marché, fiscalité.',
  },
]

export default function Construit() {
  return (
    <section id="solutions" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Tout ce qu'une agence moderne doit avoir.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(i % 3) * 0.08}>
                <article className="card-bordered h-full p-7 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted dark:text-white/65">{feature.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
