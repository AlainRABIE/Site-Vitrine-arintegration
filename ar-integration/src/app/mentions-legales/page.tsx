import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Mentions légales — AR Integration',
  description: 'Mentions légales du site AR Integration : éditeur, hébergeur, données personnelles.',
  alternates: { canonical: '/mentions-legales/' },
  robots: { index: true, follow: true },
}

export default function MentionsLegales() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main style={{
        maxWidth: 780, margin: '0 auto', padding: '160px 48px 120px',
        color: '#f5f5f3', fontFamily: 'var(--font-dm-sans)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-bebas)', fontSize: 'clamp(48px,7vw,96px)',
          lineHeight: .9, marginBottom: 64,
        }}>
          Mentions légales
        </h1>

        <Section title="Éditeur">
          <Row label="Société"      value="AR Intégration" />
          <Row label="Dirigeant"    value="Alain Rabie" />
          <Row label="Statut"       value="Entrepreneur individuel (auto-entrepreneur)" />
          <Row label="Siège"        value="59 rue Louis Becker, 69100 Villeurbanne" />
          <Row label="SIRET"        value="102 520 624 00010" />
          <Row label="Code APE"     value="6201Z — Programmation informatique" />
          <Row label="TVA"          value="Non applicable, art. 293 B du CGI" />
          <Row label="Email"        value="contact@arintegration.fr" link="mailto:contact@arintegration.fr" />
          <Row label="Directeur de la publication" value="Alain Rabie" />
        </Section>

        <Section title="Hébergement">
          <Row label="Hébergeur"  value="Auto-hébergement" />
          <Row label="Responsable" value="Alain Rabie" />
          <Row label="Adresse"    value="59 rue Louis Becker, 69100 Villeurbanne" />
          <Row label="Contact"    value="contact@arintegration.fr" link="mailto:contact@arintegration.fr" />
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble des contenus du site (textes, visuels, code, identité graphique) est la propriété exclusive
            d'AR Intégration. Toute reproduction ou exploitation sans autorisation écrite préalable est interdite.
          </p>
        </Section>

        <Section title="Données personnelles (RGPD)">
          <p>
            Les données collectées via le formulaire de contact (nom, email, message) servent uniquement à traiter
            votre demande. Elles ne sont ni cédées ni revendues. Durée de conservation : 3 ans.
          </p>
          <p>
            Sous-traitant email : <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>EmailJS</a>.
          </p>
          <p>
            Vous disposez d'un droit d'accès, rectification, suppression et opposition sur vos données. Pour l'exercer :{' '}
            <a href="mailto:contact@arintegration.fr" style={linkStyle}>contact@arintegration.fr</a>. Réclamations
            éventuelles auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={linkStyle}>CNIL</a>.
          </p>
        </Section>

        <Section title="Cookies">
          <p>Ce site n'utilise aucun cookie de suivi, analytique ou publicitaire.</p>
        </Section>

        <Section title="Droit applicable">
          <p>Droit français. Tribunaux français compétents en cas de litige.</p>
        </Section>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{
        fontFamily: 'var(--font-bebas)', fontSize: 24, letterSpacing: 1,
        marginBottom: 20, color: '#f5f5f3',
      }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, lineHeight: 1.7, color: '#b0b0ae', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </section>
  )
}

function Row({ label, value, link }: { label: string; value: string; link?: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, alignItems: 'baseline' }}>
      <span style={{
        fontFamily: 'var(--font-dm-mono)', fontSize: 10, letterSpacing: 2,
        textTransform: 'uppercase', color: '#6b6b69',
      }}>{label}</span>
      <span style={{ color: '#f5f5f3' }}>
        {link ? <a href={link} style={linkStyle}>{value}</a> : value}
      </span>
    </div>
  )
}

const linkStyle: React.CSSProperties = {
  color: '#f5f5f3', textDecoration: 'underline', textDecorationColor: '#6b6b69',
}
