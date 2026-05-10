import { CalendarClock, MapPin, Users, FileText, MessageSquare, Newspaper } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  {
    icon: CalendarClock,
    title: 'Module RDV en ligne',
    text: 'Intégration Calendly, Doctolib ou prise de contact directe selon votre flux patients.',
  },
  {
    icon: MapPin,
    title: 'Carte interactive et itinéraire',
    text: 'Vos patients trouvent le cabinet en un clic, depuis leur téléphone ou leur ordinateur.',
  },
  {
    icon: Users,
    title: 'Page équipe',
    text: 'Médecins, secrétaires, kinés associés, avec photos professionnelles et présentation.',
  },
  {
    icon: FileText,
    title: 'Page actes et tarifs',
    text: 'Transparence sur les honoraires conventionnés ou libres, conforme à la déontologie.',
  },
  {
    icon: MessageSquare,
    title: 'Formulaire contact sécurisé',
    text: 'Anti-spam, RGPD, notifications email instantanées — sans surcharger votre secrétariat.',
  },
  {
    icon: Newspaper,
    title: 'Espace actualités optionnel',
    text: 'Annoncez vos vacances, nouveautés, conseils santé saisonniers en quelques clics.',
  },
]

export default function Construit() {
  return (
    <section id="solutions" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Tout ce qu'un cabinet moderne doit avoir.
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
