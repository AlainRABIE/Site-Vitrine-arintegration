import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — AR Intégration',
  description: "Politique de confidentialité du site immobilier.arintegration.fr. Conforme RGPD et loi Informatique et Libertés.",
  alternates: { canonical: '/politique-confidentialite/' },
  robots: { index: true, follow: true },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-10 dark:border-white/10">
      <h2 className="text-[20px] font-semibold tracking-tight text-ink dark:text-white md:text-[22px]">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted dark:text-white/70">{children}</div>
    </section>
  )
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <Link href="/" className="inline-block text-[13.5px] font-medium text-muted transition-colors hover:text-ink dark:text-white/65 dark:hover:text-white">
            ← Retour à l'accueil
          </Link>

          <h1
            className="heading-display mt-8 text-balance text-ink dark:text-white"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.6rem)' }}
          >
            Politique de confidentialité
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted dark:text-white/70">
            En vigueur au 10 mai 2026. Conforme au Règlement Général sur la Protection des Données
            (RGPD — UE 2016/679) et à la loi Informatique et Libertés modifiée.
          </p>

          <div className="mt-10">
            <Section title="Mention spéciale professions immobilières">
              <p>
                <strong className="text-ink dark:text-white">Aucune donnée prospect immobilier n'est collectée via ce site de présentation.</strong>{' '}
                Les formulaires de contact collectent uniquement nom, email professionnel, téléphone
                et message, à des fins exclusives de prise de contact commercial avec AR Intégration.
              </p>
              <p>
                Les sites livrés à nos clients agences peuvent intégrer des modules d'estimation
                gratuite, des formulaires acheteur/vendeur ou des espaces vendeur sécurisés. Dans
                ce cas, le traitement des données prospects est encadré par un contrat distinct,
                avec consentement explicite et durées de conservation conformes au RGPD.
              </p>
            </Section>

            <Section title="Responsable de traitement">
              <p>
                AR Intégration — Alain Rabie, auto-entrepreneur. SIRET 102 520 624 00010,
                Villeurbanne, Lyon, France. Contact : <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">contact@arintegration.fr</a>.
              </p>
            </Section>

            <Section title="Données collectées et finalités">
              <p>
                <strong className="text-ink dark:text-white">Formulaire de contact :</strong> nom, email, téléphone,
                type d'activité, nombre de négociateurs, offre intéressée, créneau préféré, message libre.
                Finalité : répondre à votre demande de prise de contact et préparer un devis. Base
                légale : intérêt légitime du responsable de traitement et mesures précontractuelles.
              </p>
              <p>
                <strong className="text-ink dark:text-white">Logs techniques :</strong> adresse IP, user-agent,
                horodatage. Finalité : sécurité du service et journalisation. Base légale : intérêt
                légitime à protéger l'infrastructure.
              </p>
            </Section>

            <Section title="Durées de conservation">
              <p>
                <strong className="text-ink dark:text-white">Demandes de contact non abouties :</strong> 12 mois maximum après le dernier échange, puis suppression automatique.
              </p>
              <p>
                <strong className="text-ink dark:text-white">Clients :</strong> 3 ans après la fin du contrat (durée légale de conservation comptable et commerciale).
              </p>
              <p>
                <strong className="text-ink dark:text-white">Logs techniques :</strong> 6 mois maximum.
              </p>
            </Section>

            <Section title="Destinataires">
              <p>
                Vos données ne sont jamais vendues, louées ni cédées à des tiers. Elles sont
                accessibles uniquement à Alain Rabie (responsable de traitement) et aux sous-traitants
                techniques strictement nécessaires (Vercel pour l'hébergement, Formspree pour le
                routage des formulaires).
              </p>
              <p>
                <strong className="text-ink dark:text-white">Aucun transfert hors Union Européenne</strong> n'est
                effectué pour les données collectées via ce site, sauf consentement explicite et
                préalable.
              </p>
            </Section>

            <Section title="Vos droits">
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
                accès, rectification, effacement, limitation, portabilité, opposition, et droit de
                retirer votre consentement à tout moment.
              </p>
              <p>
                Pour exercer ces droits, écrivez à{' '}
                <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  contact@arintegration.fr
                </a>. Une réponse vous est apportée sous 30 jours maximum.
              </p>
              <p>
                En cas de désaccord, vous pouvez introduire une réclamation auprès de la{' '}
                <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  CNIL
                </a>{' '}
                (Commission Nationale Informatique et Libertés, 3 place de Fontenoy, 75007 Paris).
              </p>
            </Section>

            <Section title="Cookies et traceurs">
              <p>
                Ce site utilise uniquement des cookies techniques strictement nécessaires (session,
                préférences). Aucun cookie de mesure d'audience, de réseau social ou publicitaire
                n'est déposé sans votre consentement explicite.
              </p>
              <p>
                Aucun service américain (Google Analytics, Facebook Pixel, Meta, X, TikTok) n'est
                intégré.
              </p>
            </Section>

            <Section title="Sécurité">
              <p>
                Les données sont stockées chiffrées (TLS 1.3 en transit, AES-256 au repos chez nos
                sous-traitants). Les accès sont limités au strict nécessaire et tracés. En cas de
                violation de données, vous serez informé sous 72h conformément à l'article 34 du
                RGPD.
              </p>
            </Section>

            <Section title="Contact DPO">
              <p>
                AR Intégration n'est pas tenu de désigner un Délégué à la Protection des Données.
                Pour toute question relative à la protection de vos données personnelles, contactez
                directement Alain Rabie :{' '}
                <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  contact@arintegration.fr
                </a>.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
