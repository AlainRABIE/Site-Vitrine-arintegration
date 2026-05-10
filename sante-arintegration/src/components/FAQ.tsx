'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'

const QA = [
  {
    q: 'Combien de temps pour livrer mon site ?',
    a: "7 jours ouvrés à compter de la validation du devis pour l'offre Essentielle. 10 jours pour Cabinet Connecté. Engagement contractuel.",
  },
  {
    q: 'Mon site sera-t-il vraiment conforme RGPD ?',
    a: 'Oui. Hébergement OVH France, mentions légales et politique de confidentialité rédigées par nos soins, aucun cookie tiers sans consentement explicite, droit à l\'oubli automatisé.',
  },
  {
    q: 'Puis-je modifier mon site moi-même ?',
    a: "Non, votre site est codé sur-mesure (sans CMS type WordPress) — c'est ce qui garantit sa rapidité, sa sécurité et sa conformité RGPD. Les modifications (horaires, tarifs, équipe, actualités) sont prises en charge par AR Intégration sous 48h ouvrées dans le cadre de votre contrat de maintenance.",
  },
  {
    q: 'Et si je veux ajouter un module spécifique plus tard ?',
    a: 'Tous nos sites sont évolutifs. Ajout de fonctionnalités tarifé entre 200€ et 800€ selon complexité. Devis sous 24h.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: "Oui. Optimisation SEO local incluse (Google My Business, Schema.org LocalBusiness, balises meta). Pour un référencement national avancé, l'offre Cabinet Premium inclut 3 articles SEO rédigés par nos soins.",
  },
  {
    q: 'Quelle est la différence avec Doctolib ou un site fait sur Wix ?',
    a: 'Doctolib est une plateforme de RDV, pas un site web (vous y êtes locataire). Wix est limité, lent, et non conforme RGPD par défaut. Notre solution : votre site, votre nom de domaine, vos données en France, code sur-mesure.',
  },
  {
    q: 'Que se passe-t-il après les 3 mois de maintenance ?',
    a: 'Vous passez en formule maintenance à 200€/mois, qui inclut les légères modifications de contenu (horaires, tarifs, équipe, actualités), les mises à jour de sécurité et le support technique. Vous restez propriétaire à 100% du site et du code.',
  },
  {
    q: 'Acceptez-vous le règlement par carte bancaire pro ?',
    a: 'Oui. CB, virement, ou prélèvement échelonné en 3 fois sans frais sur demande.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="heading-section text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Questions fréquentes des praticiens.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-line border-y border-line dark:divide-white/10 dark:border-white/10">
            {QA.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-ink dark:text-white"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-semibold tracking-tight md:text-[17px]">
                      {item.q}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={1.7}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[15px] leading-relaxed text-muted dark:text-white/65">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
