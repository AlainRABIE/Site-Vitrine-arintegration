'use client'
import Image from 'next/image'

const showcases = [
  {
    id: 'loenora',
    cat: 'E-Commerce',
    name: 'Loenora',
    wip: true,
    description:
      'Loenora est une boutique en ligne haut de gamme, pensée pour offrir une expérience d\'achat fluide et élégante. Design épuré, tunnel de vente optimisé, gestion des stocks et paiement sécurisé.',
    features: ['Catalogue produits', 'Panier & paiement sécurisé', 'Espace client', 'Dashboard admin'],
    type: 'ecommerce' as const,
  },
  {
    id: 'Galiya',
    cat: 'Application Mobile',
    name: 'Galiya',
    wip: true,
    description:
      'Galiya est une application mobile de suivi nutritionnel et sportif. Elle permet de planifier ses repas, suivre ses macros et atteindre ses objectifs de santé au quotidien.',
    features: ['Suivi nutritionnel', 'Plans d\'entraînement', 'Tableau de bord', 'Synchronisation santé'],
    type: 'mobile' as const,
  },
  {
    id: 'ar-integration',
    cat: 'Site Vitrine',
    name: 'AR-Intégration',
    wip: false,
    href: 'https://[MON_URL]',
    description:
      'Notre propre site vitrine — conçu pour présenter nos services de création web et mobile avec une identité visuelle forte, des animations soignées et une expérience utilisateur premium.',
    features: ['Design sur-mesure', 'Animations fluides', 'Formulaire de contact', 'Optimisé SEO'],
    type: 'vitrine' as const,
  },
]

function PhoneMockup() {
  return (
    <div style={{
      width: 180, height: 340,
      border: '2px solid #2e2e2c',
      borderRadius: 32,
      background: '#111110',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
        width: 48, height: 6, borderRadius: 4, background: '#2e2e2c',
      }} />
      {/* Screen content */}
      <div style={{ padding: '36px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ height: 6, background: '#2e2e2c', borderRadius: 4, width: '60%' }} />
        <div style={{ height: 60, background: '#1e1e1c', borderRadius: 8, marginTop: 8 }} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ height: 50, background: '#1e1e1c', borderRadius: 8, flex: 1 }} />
          <div style={{ height: 50, background: '#1e1e1c', borderRadius: 8, flex: 1 }} />
        </div>
        {[1, 0.8, 0.9].map((w, i) => (
          <div key={i} style={{ height: 4, background: '#2e2e2c', borderRadius: 4, width: `${w * 100}%` }} />
        ))}
        <div style={{ height: 36, background: '#1e1e1c', borderRadius: 8, marginTop: 4 }} />
        {[0.7, 0.85].map((w, i) => (
          <div key={i} style={{ height: 4, background: '#2e2e2c', borderRadius: 4, width: `${w * 100}%` }} />
        ))}
      </div>
      {/* Home bar */}
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        width: 56, height: 4, borderRadius: 4, background: '#2e2e2c',
      }} />
    </div>
  )
}

function BrowserMockup({ type }: { type: 'ecommerce' | 'vitrine' }) {
  return (
    <div style={{
      width: 320, height: 220,
      border: '1px solid #2e2e2c',
      borderRadius: 8,
      background: '#111110',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Browser bar */}
      <div style={{
        height: 32, background: '#1a1a18', borderBottom: '1px solid #2e2e2c',
        display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px',
      }}>
        {[1, 2, 3].map(d => (
          <div key={d} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2e2e2c' }} />
        ))}
        <div style={{
          flex: 1, height: 16, background: '#0a0a0a', borderRadius: 4,
          marginLeft: 8,
        }} />
      </div>
      {/* Content */}
      <div style={{ padding: 16 }}>
        {type === 'ecommerce' ? (
          <>
            <div style={{ height: 4, background: '#2e2e2c', borderRadius: 4, width: '40%', marginBottom: 12 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} style={{ background: '#1e1e1c', borderRadius: 4, height: 60 }} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ height: 6, background: '#2e2e2c', borderRadius: 4, width: '55%', marginBottom: 8 }} />
            <div style={{ height: 4, background: '#2e2e2c', borderRadius: 4, width: '70%', marginBottom: 16 }} />
            <div style={{ height: 48, background: '#1e1e1c', borderRadius: 4, marginBottom: 8 }} />
            {[1, 0.8, 0.9].map((w, i) => (
              <div key={i} style={{ height: 3, background: '#2e2e2c', borderRadius: 4, width: `${w * 100}%`, marginBottom: 6 }} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default function ProjectShowcase() {
  return (
    <>
      {showcases.map((project, i) => (
        <section
          key={project.id}
          id={project.id}
          style={{
            padding: '120px 48px',
            background: i % 2 === 0 ? '#0a0a0a' : '#0f0f0d',
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
          }}
        >
          {/* Header */}
          <div>
            <div style={{
              fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 3,
              textTransform: 'uppercase', color: '#6b6b69',
              display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
            }}>
              <span style={{ display: 'block', width: 32, height: 1, background: '#2e2e2c' }} />
              {project.cat}
              {project.wip && (
                <span style={{
                  fontFamily: 'var(--font-dm-mono)', fontSize: 9, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#f5a623',
                  border: '1px solid #f5a623', padding: '3px 8px',
                  background: 'rgba(245,166,35,0.08)',
                }}>
                  En cours
                </span>
              )}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(56px,7vw,96px)',
              lineHeight: 1,
              marginBottom: 0,
            }}>
              {project.name}
            </h2>
          </div>

          {/* Content */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 64,
            flexWrap: 'wrap',
          }}>
            {/* Left: text */}
            <div style={{ flex: '1 1 320px', maxWidth: 480 }}>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 16,
                color: '#9b9b98',
                lineHeight: 1.8,
                marginBottom: 40,
              }}>
                {project.description}
              </p>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
                {project.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 16, height: 1, background: '#6b6b69', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 12, color: '#6b6b69', letterSpacing: 1 }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {project.wip ? (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  fontFamily: 'var(--font-dm-mono)', fontSize: 11,
                  letterSpacing: 2, textTransform: 'uppercase',
                  color: '#f5a623',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5a623', animation: 'pulse 2s infinite' }} />
                  Disponible prochainement
                </div>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    fontFamily: 'var(--font-dm-mono)', fontSize: 11,
                    letterSpacing: 2, textTransform: 'uppercase',
                    color: '#fff', textDecoration: 'none',
                    border: '1px solid #2e2e2c', padding: '14px 28px',
                    transition: 'border-color .2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e2e2c')}
                >
                  Voir le site
                  <span style={{ fontSize: 14 }}>↗</span>
                </a>
              )}
            </div>

            {/* Right: visual mockup */}
            <div style={{
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
            }}>
              {project.type === 'mobile'
                ? (
                  <Image
                    src="/App-Mobile.png"
                    alt="Aperçu application mobile Galiya"
                    width={180}
                    height={340}
                    style={{ borderRadius: 32, objectFit: 'cover' }}
                  />
                )
                : <BrowserMockup type={project.type as 'ecommerce' | 'vitrine'} />
              }
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </>
  )
}
