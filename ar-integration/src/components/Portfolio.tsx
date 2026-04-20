'use client'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { slug: 'luxe-co',        cat: 'E-Commerce',         name: 'Luxe & Co',      span: true,  wip: false, image: '/luxe-co.png' },
  { slug: 'galiya',         cat: 'Application Mobile', name: 'Galiya',         span: false, wip: true,  image: '/image.png' },
  { slug: 'ar-integration', cat: 'Site Vitrine',       name: 'AR-Intégration', span: false, wip: false, image: '/Site-vitrine.png' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '120px 48px', background: '#0a0a0a' }}>
      <div style={{
        fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 3,
        textTransform: 'uppercase', color: '#6b6b69', marginBottom: 64,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <span style={{ display: 'block', width: 32, height: 1, background: '#2e2e2c' }} />
        Portfolio
      </div>
      <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(48px,6vw,80px)', marginBottom: 64, lineHeight: 1 }}>
        Nos réalisations
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
        {projects.map((p, i) => (
          <Link
            key={i}
            href={`/projects/${p.slug}`}
            style={{
              display: 'block', textDecoration: 'none', color: 'inherit',
              position: 'relative', background: '#1a1a18', overflow: 'hidden',
              gridRow: p.span ? 'span 2' : 'auto',
              minHeight: p.span ? 'auto' : 240,
              aspectRatio: p.span ? 'auto' : '16/10',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const info = e.currentTarget.querySelector('.info') as HTMLElement
              if (info) info.style.transform = 'translateY(0)'
            }}
            onMouseLeave={e => {
              const info = e.currentTarget.querySelector('.info') as HTMLElement
              if (info) info.style.transform = 'translateY(8px)'
            }}
          >
            {/* Badge "En cours" */}
            {p.wip && (
              <div style={{
                position: 'absolute', top: 16, right: 16, zIndex: 10,
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
                color: '#f5a623', border: '1px solid #f5a623',
                padding: '4px 10px', background: 'rgba(245,166,35,0.08)',
              }}>
                En cours
              </div>
            )}

            {/* Mock UI / Image */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.cat} réalisé par AR Integration`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div style={{
                  border: '1px solid #2e2e2c', padding: 20, width: '55%',
                  fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: '#6b6b69',
                }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                    {[1, 2, 3].map(d => <div key={d} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2e2e2c' }} />)}
                  </div>
                  {[1, .8, .9, .7].map((w, j) => <div key={j} style={{ height: 1, background: '#2e2e2c', width: `${w * 100}%`, marginBottom: 8 }} />)}
                </div>
              )}
            </div>

            {/* Info overlay */}
            <div className="info" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32,
              background: 'linear-gradient(to top, rgba(10,10,10,.9), transparent)',
              transform: 'translateY(8px)', transition: 'transform .3s',
            }}>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#6b6b69', marginBottom: 8 }}>{p.cat}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 28, letterSpacing: 1 }}>{p.name}</div>
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 11, color: '#6b6b69' }}>↗ Découvrir</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
