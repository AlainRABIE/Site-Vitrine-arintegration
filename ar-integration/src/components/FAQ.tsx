'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'

const QA = [
  {
    q: 'Combien coûte un site internet professionnel ?',
    a: 'Un site vitrine professionnel chez AR Intégration démarre à 990€ TTC (Présence Essentielle), 1500€ pour un site Connecté avec module RDV, 2500€ pour un site Premium avec espace client. Une boutique e-commerce démarre à 2990€, une application mobile à 4990€.',
  },
  {
    q: 'Combien de temps pour livrer mon site web ou mon app ?',
    a: '7 jours ouvrés pour un site vitrine Présence Essentielle. 10 jours pour Connecté, 15 jours pour Premium. 4 à 8 semaines pour une application mobile selon complexité. Engagement contractuel.',
  },
  {
    q: 'Mon site sera-t-il bien référencé sur Google ?',
    a: "Oui. Optimisation SEO local incluse (Google My Business, Schema.org, balises meta). Sites construits avec Next.js et export statique pour des scores Lighthouse 95+. Pour un référencement national avancé, des articles SEO sur-mesure peuvent être ajoutés.",
  },
  {
    q: 'Mes données seront-elles hébergées en France ?',
    a: 'Oui. Hébergement OVHcloud Roubaix ou Strasbourg sur option dédiée (ou Vercel Edge région Europe en standard). Conformité RGPD by design, aucun service tiers américain (Google Analytics, Facebook Pixel) sans votre consentement explicite.',
  },
  {
    q: 'Puis-je modifier mon site moi-même ?',
    a: "Non, les sites AR Intégration sont codés sur-mesure (sans CMS type WordPress) — c'est ce qui garantit leur rapidité, leur sécurité et leur conformité RGPD. Les modifications sont prises en charge par AR Intégration sous 48h ouvrées dans le cadre du contrat de maintenance (200€/mois après les 3 mois inclus).",
  },
  {
    q: 'Travaillez-vous avec des secteurs spécifiques ?',
    a: "Oui. Trois sous-marques sectorielles dédiées avec contraintes métier intégrées : medecins.arintegration.fr (RGPD santé, mention HDS), avocats.arintegration.fr (secret professionnel, RIN), immobilier.arintegration.fr (loi Hoguet, sync logiciel métier). Et tous les autres secteurs sur arintegration.fr.",
  },
  {
    q: "Quelle est la différence avec une agence classique ou Wix / Shopify ?",
    a: "Wix et Shopify sont des plateformes locataires : vous n'êtes pas propriétaire du code, le SEO est limité, et le RGPD non garanti. Une agence classique facture souvent 5-10x plus cher. AR Intégration : vous êtes propriétaire à 100%, code sur-mesure performant, et un humain joignable directement à Lyon.",
  },
  {
    q: 'Acceptez-vous le règlement par carte bancaire pro ?',
    a: 'Oui. CB, virement, ou prélèvement échelonné en 3 fois sans frais sur demande. Acompte de 30% à la commande, solde à la livraison.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            FAQ
          </span>
          <h2 className="heading-section text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Questions fréquentes.
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
