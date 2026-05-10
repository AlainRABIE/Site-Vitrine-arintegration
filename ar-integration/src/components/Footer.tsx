import Link from 'next/link'

const COL_SECTEURS = [
  { label: 'Sites pour médecins', href: 'https://medecins.arintegration.fr', external: true },
  { label: "Sites pour avocats", href: 'https://avocats.arintegration.fr', external: true },
  { label: 'Sites pour agences immo', href: 'https://immobilier.arintegration.fr', external: true },
  { label: 'Autre secteur', href: '/#contact' },
]

const COL_SERVICES = [
  { label: 'Sites vitrine', href: '/#tarifs' },
  { label: 'E-commerce', href: '/#tarifs' },
  { label: 'Applications mobiles', href: '/#tarifs' },
  { label: 'Sur-mesure / SaaS', href: '/#contact?offre=sur-mesure' },
]

const COL_RESSOURCES = [
  { label: 'Méthode', href: '/#process' },
  { label: 'À propos', href: '/#apropos' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

const COL_LEGAL = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'CGV', href: '/mentions-legales#cgv' },
  { label: 'Contact RGPD', href: 'mailto:contact@arintegration.fr' },
]

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-wider text-white/45">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <li>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-[14px] text-white/70 transition-colors hover:text-white"
        >
          {children}
        </a>
      </li>
    )
  }
  return (
    <li>
      <Link href={href} className="text-[14px] text-white/70 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-[18px] font-bold tracking-tight">
              AR Intégration
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/70">
              Agence web et mobile à Lyon. Sites internet, applications iOS/Android, e-commerce sur-mesure.
            </p>
            <div className="mt-6 space-y-1.5 text-[13px] text-white/55">
              <div>SIRET&nbsp;: 102 520 624 00010</div>
              <div>Villeurbanne, Lyon — Auvergne-Rhône-Alpes</div>
              <a href="tel:+33667755850" className="block transition-colors hover:text-white">
                06 67 75 58 50
              </a>
              <a href="mailto:contact@arintegration.fr" className="block transition-colors hover:text-white">
                contact@arintegration.fr
              </a>
            </div>
          </div>

          <Column title="Secteurs">
            {COL_SECTEURS.map((item) => (
              <FooterLink key={item.label} href={item.href} external={item.external}>
                {item.label}
              </FooterLink>
            ))}
          </Column>

          <Column title="Services">
            {COL_SERVICES.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </Column>

          <Column title="Ressources">
            {COL_RESSOURCES.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </Column>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            {COL_LEGAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12.5px] text-white/55 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-[12.5px] text-white/45">
            © 2026 AR Intégration · Conçu et codé à Lyon · Hébergement France
          </div>
        </div>
      </div>
    </footer>
  )
}
