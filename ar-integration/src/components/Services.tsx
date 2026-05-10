import { Globe, Smartphone, ShoppingBag, Code2 } from 'lucide-react'
import { Reveal } from './Reveal'

const SERVICES = [
  {
    icon: Globe,
    title: 'Sites vitrine',
    text: 'Sites web professionnels responsive, conformes RGPD, hébergés en France. SEO local inclus, livrés en 7 jours.',
    starter: 'À partir de 990 €',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    text: 'Boutiques en ligne complètes : catalogue, panier, paiement Stripe, gestion stocks et back-office sans complexité.',
    starter: 'À partir de 2990 €',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    text: 'Apps iOS et Android sur-mesure, avec back-office, notifications push, authentification, paiement intégré.',
    starter: 'À partir de 4990 €',
  },
  {
    icon: Code2,
    title: 'Sur-mesure & SaaS',
    text: 'Projets complexes : SaaS, dashboards, intégrations API, automatisation. Devis personnalisé sous 48h.',
    starter: 'Sur devis',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            Services
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Tout ce dont vous avez besoin pour exister en ligne.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <article className="card-bordered flex h-full flex-col p-7 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">{service.title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted dark:text-white/65">{service.text}</p>
                  <div className="mt-5 text-[13px] font-medium text-ink dark:text-white">
                    {service.starter}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
