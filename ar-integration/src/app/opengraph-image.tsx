import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AR Integration — Création Web & Mobile'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          color: '#f5f5f3',
          padding: 80,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(245,245,243,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,243,.04) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
            display: 'flex',
          }}
        />

        {/* Top: logo + badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
          <div
            style={{
              fontSize: 32,
              letterSpacing: 6,
              fontWeight: 700,
              display: 'flex',
            }}
          >
            AR<span style={{ color: '#6b6b69' }}>.</span>INTEGRATION
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              border: '1px solid #2e2e2c',
              padding: '10px 20px',
              fontSize: 16,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#b0b0ae',
            }}
          >
            <div style={{ width: 8, height: 8, background: '#f5f5f3', borderRadius: '50%', display: 'flex' }} />
            Disponible
          </div>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -4,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Votre présence</span>
            <span style={{ color: '#6b6b69' }}>digitale,</span>
            <span>réinventée.</span>
          </div>
        </div>

        {/* Bottom: tagline */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
          <div style={{ fontSize: 22, color: '#b0b0ae', maxWidth: 720, display: 'flex' }}>
            Sites web & applications mobiles qui convertissent.
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#6b6b69',
              display: 'flex',
            }}
          >
            arintegration.fr
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
