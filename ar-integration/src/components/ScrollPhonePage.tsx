'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import type { ProjectData } from '@/data/projects'

/* ─── Phone screens ─────────────────────────────────────── */

function ScreenDashboard() {
  return (
    <div style={{ padding: '28px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69', letterSpacing: 2 }}>BONJOUR, ALAIN</div>
      {/* Calorie ring */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
        <div style={{ position: 'relative', width: 72, height: 72 }}>
          <svg width="72" height="72" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="36" cy="36" r="28" fill="none" stroke="#1e1e1c" strokeWidth="6" />
            <circle cx="36" cy="36" r="28" fill="none" stroke="#f5a623" strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 28 * 0.72} ${2 * Math.PI * 28}`} strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 14, color: '#f5f5f3', lineHeight: 1 }}>1 840</span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 6, color: '#6b6b69' }}>kcal</span>
          </div>
        </div>
      </div>
      {/* Macros */}
      <div style={{ display: 'flex', gap: 6 }}>
        {[['P', '#7c6af5', '142g'], ['G', '#3db87a', '210g'], ['L', '#e85d5d', '58g']].map(([l, c, v]) => (
          <div key={l as string} style={{ flex: 1, background: '#1a1a18', borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 13, color: c as string }}>{v}</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{l === 'P' ? 'Protéines' : l === 'G' ? 'Glucides' : 'Lipides'}</div>
          </div>
        ))}
      </div>
      {/* Meals */}
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 1, marginTop: 4 }}>REPAS DU JOUR</div>
      {[['Petit-déjeuner', '410 kcal'], ['Déjeuner', '680 kcal'], ['Collation', '210 kcal']].map(([name, cal]) => (
        <div key={name as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a18', borderRadius: 6, padding: '7px 10px' }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#9b9b98' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#f5a623' }}>{cal}</span>
        </div>
      ))}
    </div>
  )
}

function ScreenNutrition() {
  return (
    <div style={{ padding: '28px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69', letterSpacing: 2 }}>SUIVI DU JOUR</div>
      {/* Calories bar */}
      <div style={{ background: '#1a1a18', borderRadius: 8, padding: '10px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>Calories</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#f5a623' }}>1840 / 2400</span>
        </div>
        <div style={{ height: 4, background: '#2e2e2c', borderRadius: 4 }}>
          <div style={{ height: '100%', width: '76%', background: 'linear-gradient(90deg, #f5a623, #ffcc70)', borderRadius: 4 }} />
        </div>
      </div>
      {/* Food log */}
      {[
        { name: 'Flocons d\'avoine', qty: '80g', kcal: 296, color: '#7c6af5' },
        { name: 'Œufs entiers', qty: '3 pcs', kcal: 210, color: '#3db87a' },
        { name: 'Blanc de poulet', qty: '150g', kcal: 165, color: '#f5a623' },
        { name: 'Riz basmati', qty: '100g', kcal: 350, color: '#e85d5d' },
        { name: 'Amandes', qty: '30g', kcal: 180, color: '#7c6af5' },
      ].map(item => (
        <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1a1a18', borderRadius: 6, padding: '7px 10px' }}>
          <div style={{ width: 3, height: 24, borderRadius: 2, background: item.color, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#f5f5f3' }}>{item.name}</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{item.qty}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#9b9b98' }}>{item.kcal} kcal</span>
        </div>
      ))}
    </div>
  )
}

function ScreenWorkout() {
  return (
    <div style={{ padding: '28px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69', letterSpacing: 2 }}>LUNDI — FORCE</div>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3db87a' }} />
      </div>
      {/* Progress */}
      <div style={{ background: '#1a1a18', borderRadius: 8, padding: '8px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>Exercices complétés</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#3db87a' }}>3 / 5</span>
        </div>
        <div style={{ height: 4, background: '#2e2e2c', borderRadius: 4 }}>
          <div style={{ height: '100%', width: '60%', background: '#3db87a', borderRadius: 4 }} />
        </div>
      </div>
      {/* Exercises */}
      {[
        { name: 'Développé couché', detail: '4×8 — 80 kg', done: true },
        { name: 'Tirage horizontal', detail: '4×10 — 65 kg', done: true },
        { name: 'Squat barre', detail: '4×6 — 100 kg', done: true },
        { name: 'Élévations latérales', detail: '3×15 — 12 kg', done: false },
        { name: 'Curl biceps', detail: '3×12 — 20 kg', done: false },
      ].map(ex => (
        <div key={ex.name} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1a1a18', borderRadius: 6, padding: '7px 10px', opacity: ex.done ? 1 : 0.5 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', border: `1px solid ${ex.done ? '#3db87a' : '#2e2e2c'}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {ex.done && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3db87a' }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: ex.done ? '#f5f5f3' : '#6b6b69', textDecoration: ex.done ? 'line-through' : 'none' }}>{ex.name}</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{ex.detail}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ScreenHealth() {
  const points = [45, 52, 48, 61, 55, 70, 65, 72, 68, 75, 71, 80]
  const max = Math.max(...points)
  const min = Math.min(...points)
  const normalize = (v: number) => ((v - min) / (max - min)) * 40

  return (
    <div style={{ padding: '28px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69', letterSpacing: 2 }}>SANTÉ</div>
      {/* Heart rate graph */}
      <div style={{ background: '#1a1a18', borderRadius: 8, padding: '10px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>Fréquence cardiaque</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 9, color: '#e85d5d' }}>72 bpm</span>
        </div>
        <svg width="100%" height="44" viewBox="0 0 220 44">
          <polyline
            points={points.map((v, i) => `${i * (220 / (points.length - 1))},${44 - normalize(v) - 2}`).join(' ')}
            fill="none" stroke="#e85d5d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <polyline
            points={[`0,44`, ...points.map((v, i) => `${i * (220 / (points.length - 1))},${44 - normalize(v) - 2}`), '220,44'].join(' ')}
            fill="rgba(232,93,93,0.08)" stroke="none"
          />
        </svg>
      </div>
      {/* Stats */}
      {[
        { label: 'Pas aujourd\'hui', value: '8 420', unit: 'pas', color: '#3db87a', pct: 84 },
        { label: 'Sommeil', value: '7h 20', unit: 'min', color: '#7c6af5', pct: 73 },
        { label: 'Calories brûlées', value: '2 180', unit: 'kcal', color: '#f5a623', pct: 91 },
      ].map(s => (
        <div key={s.label} style={{ background: '#1a1a18', borderRadius: 8, padding: '8px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{s.label}</span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: s.color }}>{s.value}</span>
          </div>
          <div style={{ height: 3, background: '#2e2e2c', borderRadius: 4 }}>
            <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 4 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Browser screens ───────────────────────────────────── */

function BrowserScreenCatalogue() {
  const robes = [
    { name: 'Robe Aurore', price: '195 €', tone: 14 },
    { name: 'Robe Céleste', price: '240 €', tone: 17 },
    { name: 'Robe Ivoire', price: '175 €', tone: 12 },
    { name: 'Robe Éclat', price: '280 €', tone: 19 },
    { name: 'Robe Luna', price: '210 €', tone: 15 },
    { name: 'Robe Velours', price: '320 €', tone: 11 },
  ]
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 9, color: '#f5f5f3', letterSpacing: 1 }}>LOENORA</div>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>18 pièces</div>
      </div>
      {/* Filtres */}
      <div style={{ display: 'flex', gap: 5 }}>
        {['Toutes', 'Soirée', 'Casual', 'Mariage'].map((c, i) => (
          <div key={c} style={{
            fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: i === 0 ? '#0a0a0a' : '#6b6b69',
            background: i === 0 ? '#f5f5f3' : 'transparent',
            border: `1px solid ${i === 0 ? '#f5f5f3' : '#2e2e2c'}`,
            padding: '2px 7px', borderRadius: 2,
          }}>{c}</div>
        ))}
      </div>
      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 5 }}>
        {robes.map((r, i) => (
          <div key={i} style={{ background: '#1a1a18', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: 56, background: `hsl(320,${15 + i * 3}%,${r.tone}%)`, position: 'relative' }}>
              {i === 0 && <div style={{ position: 'absolute', top: 4, left: 4, fontFamily: 'var(--font-dm-mono)', fontSize: 6, color: '#f5a623', background: 'rgba(0,0,0,0.6)', padding: '1px 4px' }}>NEW</div>}
            </div>
            <div style={{ padding: '5px 6px' }}>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 6, color: '#9b9b98', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#f5a623' }}>{r.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BrowserScreenCart() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2, marginBottom: 4 }}>MON PANIER — 2 PIÈCES</div>
      {[
        { name: 'Robe Aurore', detail: 'Taille S · Ivoire', price: '195 €', tone: 14 },
        { name: 'Robe Céleste', detail: 'Taille M · Bordeaux', price: '240 €', tone: 10 },
      ].map(item => (
        <div key={item.name} style={{ display: 'flex', gap: 8, background: '#1a1a18', borderRadius: 4, padding: 8 }}>
          <div style={{ width: 44, height: 52, background: `hsl(320,15%,${item.tone}%)`, borderRadius: 3, flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#f5f5f3', marginBottom: 2 }}>{item.name}</div>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{item.detail}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 9, color: '#f5a623' }}>{item.price}</div>
          </div>
        </div>
      ))}
      {/* Promo */}
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ flex: 1, height: 24, border: '1px solid #2e2e2c', borderRadius: 3, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
          <div style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: '60%' }} />
        </div>
        <div style={{ border: '1px solid #2e2e2c', borderRadius: 3, padding: '0 10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>OK</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1a1a18', paddingTop: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69' }}>Total</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: '#f5f5f3' }}>435 €</span>
        </div>
        <div style={{ background: '#f5f5f3', borderRadius: 3, padding: '8px', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#0a0a0a', letterSpacing: 2 }}>COMMANDER →</span>
        </div>
      </div>
    </div>
  )
}

function BrowserScreenAccount() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2e2e2c' }} />
        <div>
          <div style={{ height: 4, background: '#3e3e3c', borderRadius: 4, width: 60, marginBottom: 4 }} />
          <div style={{ height: 3, background: '#2e2e2c', borderRadius: 4, width: 90 }} />
        </div>
      </div>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2 }}>MES COMMANDES</div>
      {[['#3821', 'Expédiée', '#3db87a'], ['#3820', 'Livrée', '#6b6b69'], ['#3818', 'Livrée', '#6b6b69']].map(([id, status, color]) => (
        <div key={id as string} style={{ display: 'flex', justifyContent: 'space-between', background: '#1a1a18', borderRadius: 6, padding: '8px 10px' }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#9b9b98' }}>Commande {id}</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: color as string }}>{status}</span>
        </div>
      ))}
    </div>
  )
}

function BrowserScreenAdmin() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2 }}>DASHBOARD ADMIN</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6 }}>
        {[['12 480 €', 'CA ce mois', '#f5a623'], ['248', 'Commandes', '#3db87a'], ['1 340', 'Visiteurs', '#7c6af5'], ['18', 'Produits', '#9b9b98']].map(([v, l, c]) => (
          <div key={l as string} style={{ background: '#1a1a18', borderRadius: 6, padding: '8px 10px' }}>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 14, color: c as string }}>{v}</div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Mini chart */}
      <div style={{ background: '#1a1a18', borderRadius: 6, padding: '8px 10px' }}>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', marginBottom: 8 }}>VENTES — 7 JOURS</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
          {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h * 100}%`, background: i === 6 ? '#f5a623' : '#2e2e2c', borderRadius: '2px 2px 0 0' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BrowserScreenDesign() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 0, height: '100%', overflow: 'hidden' }}>
      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#f5a623', letterSpacing: 2 }}>AR</div>
        <div style={{ display: 'flex', gap: 10 }}>
          {[60, 50, 55, 48].map((w, i) => <div key={i} style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: w }} />)}
        </div>
      </div>
      {/* Hero divider */}
      <div style={{ height: 1, background: '#1a1a18', marginBottom: 20 }} />
      {/* Big title */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ height: 18, background: '#f5f5f3', borderRadius: 2, width: '80%', marginBottom: 4 }} />
        <div style={{ height: 18, background: '#f5f5f3', borderRadius: 2, width: '55%' }} />
      </div>
      <div style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: '65%', marginBottom: 6 }} />
      <div style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: '50%', marginBottom: 20 }} />
      {/* CTA */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #3e3e3c', padding: '6px 14px', width: 'fit-content', marginBottom: 20 }}>
        <div style={{ height: 3, background: '#f5f5f3', borderRadius: 2, width: 60 }} />
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 8, color: '#6b6b69' }}>→</div>
      </div>
      {/* Decorative lines */}
      <div style={{ display: 'flex', gap: 3, marginTop: 'auto' }}>
        {[1, 0.6, 0.8, 0.4, 0.7].map((o, i) => (
          <div key={i} style={{ flex: 1, height: 40, background: '#1a1a18', borderRadius: 2, opacity: o }} />
        ))}
      </div>
    </div>
  )
}

function BrowserScreenAnimations() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2 }}>SERVICES</div>
      {[
        { label: 'Création web', w: '90%', color: '#f5a623' },
        { label: 'Applications mobiles', w: '70%', color: '#7c6af5' },
        { label: 'Design UI/UX', w: '80%', color: '#3db87a' },
      ].map((s, i) => (
        <div key={i} style={{ background: '#1a1a18', borderRadius: 6, padding: '8px 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#9b9b98' }}>{s.label}</span>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(3)].map((_, j) => <div key={j} style={{ width: 4, height: 4, borderRadius: '50%', background: j === 0 ? s.color : '#2e2e2c' }} />)}
            </div>
          </div>
          <div style={{ height: 3, background: '#2e2e2c', borderRadius: 4 }}>
            <div style={{ height: '100%', width: s.w, background: s.color, borderRadius: 4 }} />
          </div>
        </div>
      ))}
      {/* Marquee strip */}
      <div style={{ borderTop: '1px solid #1a1a18', borderBottom: '1px solid #1a1a18', padding: '6px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 16, whiteSpace: 'nowrap' }}>
          {['WEB', 'MOBILE', 'DESIGN', 'SEO', 'UI/UX', 'WEB'].map((t, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#2e2e2c', letterSpacing: 2 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrowserScreenContact() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2, marginBottom: 4 }}>CONTACT</div>
      <div style={{ height: 10, background: '#f5f5f3', borderRadius: 2, width: '60%', marginBottom: 8 }} />
      {[['Nom', '85%'], ['Email', '70%'], ['Sujet', '90%']].map(([label, w]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>{label}</div>
          <div style={{ height: 22, border: '1px solid #2e2e2c', borderRadius: 3, padding: '0 8px', display: 'flex', alignItems: 'center' }}>
            <div style={{ height: 3, background: '#3e3e3c', borderRadius: 2, width: w }} />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>Message</div>
        <div style={{ height: 42, border: '1px solid #2e2e2c', borderRadius: 3, padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[1, 0.8, 0.6].map((w, i) => <div key={i} style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: `${w * 100}%` }} />)}
        </div>
      </div>
      <div style={{ background: '#f5f5f3', borderRadius: 3, padding: '8px', textAlign: 'center', marginTop: 4 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#0a0a0a', letterSpacing: 2 }}>ENVOYER →</span>
      </div>
    </div>
  )
}

function BrowserScreenSEO() {
  return (
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69', letterSpacing: 2 }}>LIGHTHOUSE SCORE</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
        {[
          { label: 'Performance', score: 98, color: '#3db87a' },
          { label: 'Accessibilité', score: 96, color: '#3db87a' },
          { label: 'SEO', score: 100, color: '#3db87a' },
          { label: 'Best Practices', score: 95, color: '#3db87a' },
        ].map(({ label, score, color }) => (
          <div key={label} style={{ background: '#1a1a18', borderRadius: 6, padding: '8px', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: 40, height: 40, margin: '0 auto 6px' }}>
              <svg width="40" height="40" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="20" cy="20" r="16" fill="none" stroke="#2e2e2c" strokeWidth="3" />
                <circle cx="20" cy="20" r="16" fill="none" stroke={color} strokeWidth="3"
                  strokeDasharray={`${2 * Math.PI * 16 * (score / 100)} ${2 * Math.PI * 16}`}
                  strokeLinecap="round" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 11, color }}>{score}</span>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 6, color: '#6b6b69' }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#1a1a18', borderRadius: 6, padding: '8px 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>Temps de chargement</span>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#3db87a' }}>0.8s</span>
        </div>
        <div style={{ height: 3, background: '#2e2e2c', borderRadius: 4 }}>
          <div style={{ height: '100%', width: '8%', background: '#3db87a', borderRadius: 4 }} />
        </div>
      </div>
    </div>
  )
}

/* ─── Screen renderer ───────────────────────────────────── */

function renderScreen(screenType: string, device: 'phone' | 'browser') {
  if (device === 'phone') {
    switch (screenType) {
      case 'dashboard': return <ScreenDashboard />
      case 'nutrition': return <ScreenNutrition />
      case 'workout': return <ScreenWorkout />
      case 'health': return <ScreenHealth />
    }
  } else {
    switch (screenType) {
      case 'catalogue': return <BrowserScreenCatalogue />
      case 'cart': return <BrowserScreenCart />
      case 'account': return <BrowserScreenAccount />
      case 'admin': return <BrowserScreenAdmin />
      case 'design': return <BrowserScreenDesign />
      case 'animations': return <BrowserScreenAnimations />
      case 'contact': return <BrowserScreenContact />
      case 'seo': return <BrowserScreenSEO />
    }
  }
  return null
}

/* ─── Phone mockup ──────────────────────────────────────── */

function PhoneDevice({ activeScreen, screens, device }: {
  activeScreen: number
  screens: ProjectData['screens']
  device: 'phone' | 'browser'
}) {
  if (device === 'phone') {
    return (
      <div style={{
        width: 220, height: 440,
        border: '2px solid #2e2e2c',
        borderRadius: 36,
        background: '#0d0d0b',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 80px rgba(245,166,35,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)',
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
          width: 52, height: 7, borderRadius: 4, background: '#1a1a18', zIndex: 10,
        }} />
        {/* Side button */}
        <div style={{ position: 'absolute', right: -2, top: 90, width: 3, height: 40, background: '#2e2e2c', borderRadius: '0 2px 2px 0' }} />
        {/* Volume buttons */}
        <div style={{ position: 'absolute', left: -2, top: 80, width: 3, height: 28, background: '#2e2e2c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -2, top: 116, width: 3, height: 28, background: '#2e2e2c', borderRadius: '2px 0 0 2px' }} />

        {/* Status bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 20px 4px', zIndex: 5 }}>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>9:41</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
              {[4, 6, 8, 10].map((h, i) => <div key={i} style={{ width: 2, height: h, background: i < 3 ? '#6b6b69' : '#2e2e2c', borderRadius: 1 }} />)}
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 7, color: '#6b6b69' }}>82%</div>
          </div>
        </div>

        {/* Screens */}
        <div style={{ position: 'absolute', inset: 0, top: 28, bottom: 24 }}>
          {screens.map((s, i) => (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              opacity: activeScreen === i ? 1 : 0,
              transform: `translateY(${activeScreen === i ? 0 : activeScreen > i ? -16 : 16}px)`,
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              overflow: 'hidden',
            }}>
              {renderScreen(s.screenType, 'phone')}
            </div>
          ))}
        </div>

        {/* Home bar */}
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          width: 60, height: 4, borderRadius: 4, background: '#2e2e2c',
        }} />

        {/* Bottom nav dots */}
        <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
          {screens.map((_, i) => (
            <div key={i} style={{
              width: activeScreen === i ? 16 : 5,
              height: 3, borderRadius: 2,
              background: activeScreen === i ? '#f5a623' : '#2e2e2c',
              transition: 'width 0.4s ease, background 0.3s ease',
            }} />
          ))}
        </div>
      </div>
    )
  }

  /* Browser device */
  return (
    <div style={{
      width: 380, height: 280,
      border: '1px solid #2e2e2c',
      borderRadius: 10,
      background: '#0d0d0b',
      overflow: 'hidden',
      boxShadow: '0 0 80px rgba(245,166,35,0.04)',
    }}>
      {/* Browser chrome */}
      <div style={{ height: 36, background: '#1a1a18', borderBottom: '1px solid #2e2e2c', display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', flexShrink: 0 }}>
        {[['#e85d5d', 8], ['#f5a623', 8], ['#3db87a', 8]].map(([c, s]) => (
          <div key={c as string} style={{ width: s as number, height: s as number, borderRadius: '50%', background: c as string, opacity: 0.7 }} />
        ))}
        <div style={{ flex: 1, height: 18, background: '#0a0a0a', borderRadius: 4, marginLeft: 8, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
          <div style={{ height: 3, background: '#2e2e2c', borderRadius: 2, width: '60%' }} />
        </div>
      </div>
      {/* Screen area */}
      <div style={{ position: 'relative', height: 'calc(100% - 36px)' }}>
        {screens.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            opacity: activeScreen === i ? 1 : 0,
            transform: `translateY(${activeScreen === i ? 0 : activeScreen > i ? -10 : 10}px)`,
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            overflow: 'hidden',
          }}>
            {renderScreen(s.screenType, 'browser')}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Main component ────────────────────────────────────── */

export default function ScrollPhonePage({ project }: { project: ProjectData }) {
  const [activeScreen, setActiveScreen] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveScreen(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* ── Back nav ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)',
      }}>
        <Link href="/#portfolio" style={{
          display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none',
          fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 2,
          textTransform: 'uppercase', color: '#6b6b69',
          transition: 'color .2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f5f5f3')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b6b69')}
        >
          <span style={{ fontSize: 14 }}>←</span>
          Portfolio
        </Link>
        {project.wip ? (
          <div style={{
            fontFamily: 'var(--font-dm-mono)', fontSize: 9, letterSpacing: 2,
            textTransform: 'uppercase', color: '#f5a623',
            border: '1px solid #f5a623', padding: '4px 12px',
            background: 'rgba(245,166,35,0.08)',
          }}>
            En cours
          </div>
        ) : project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', color: '#fff', textDecoration: 'none',
            border: '1px solid #2e2e2c', padding: '8px 20px',
            transition: 'border-color .2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e2e2c')}
          >
            Voir le site ↗
          </a>
        ) : null}
      </div>

      {/* ── Hero ── */}
      <div style={{ padding: '160px 48px 80px', borderBottom: '1px solid #1a1a18' }}>
        <div style={{
          fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 3,
          textTransform: 'uppercase', color: '#6b6b69',
          display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
        }}>
          <span style={{ display: 'block', width: 32, height: 1, background: '#2e2e2c' }} />
          {project.cat}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(72px,10vw,140px)',
          lineHeight: 0.9,
          marginBottom: 32,
        }}>
          {project.name}
        </h1>
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 18,
          color: '#6b6b69',
          maxWidth: 480,
          lineHeight: 1.7,
        }}>
          {project.tagline}
        </p>
      </div>

      {/* ── Scroll content ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        padding: '0 48px',
      }}>
        {/* Left: scrollable feature sections */}
        <div>
          {project.screens.map((screen, i) => (
            <div
              key={i}
              ref={el => { sectionRefs.current[i] = el }}
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingRight: 64,
                paddingTop: 40,
                paddingBottom: 40,
                borderBottom: i < project.screens.length - 1 ? '1px solid #1a1a18' : 'none',
              }}
            >
              {/* Feature label */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
              }}>
                <div style={{
                  width: 24, height: 24, border: '1px solid #2e2e2c',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-dm-mono)', fontSize: 9, color: '#6b6b69',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span style={{
                  fontFamily: 'var(--font-dm-mono)', fontSize: 10, letterSpacing: 2,
                  textTransform: 'uppercase', color: activeScreen === i ? '#f5a623' : '#6b6b69',
                  transition: 'color 0.3s',
                }}>
                  {screen.feature}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(40px,4vw,64px)',
                lineHeight: 1,
                marginBottom: 24,
                color: activeScreen === i ? '#f5f5f3' : '#3e3e3c',
                transition: 'color 0.5s',
              }}>
                {screen.title}
              </h2>

              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 16,
                color: activeScreen === i ? '#9b9b98' : '#3e3e3c',
                lineHeight: 1.8,
                maxWidth: 400,
                transition: 'color 0.5s',
              }}>
                {screen.description}
              </p>

              {/* Progress bar */}
              <div style={{ marginTop: 40, display: 'flex', gap: 6 }}>
                {project.screens.map((_, j) => (
                  <div key={j} style={{
                    height: 2,
                    flex: j === i ? 3 : 1,
                    background: j === activeScreen ? '#f5a623' : j < activeScreen ? '#2e2e2c' : '#1a1a18',
                    borderRadius: 2,
                    transition: 'flex 0.4s ease, background 0.3s',
                  }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: sticky device */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <PhoneDevice
            activeScreen={activeScreen}
            screens={project.screens}
            device={project.device}
          />
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div style={{
        padding: '120px 48px',
        borderTop: '1px solid #1a1a18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 32,
      }}>
        <div style={{
          fontFamily: 'var(--font-dm-mono)', fontSize: 11, letterSpacing: 3,
          textTransform: 'uppercase', color: '#6b6b69',
        }}>
          Vous avez un projet similaire ?
        </div>
        <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1 }}>
          Travaillons ensemble
        </h2>
        <Link href="/#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          fontFamily: 'var(--font-dm-mono)', fontSize: 11,
          letterSpacing: 2, textTransform: 'uppercase',
          color: '#fff', textDecoration: 'none',
          border: '1px solid #2e2e2c', padding: '16px 32px',
          transition: 'border-color .2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#2e2e2c')}
        >
          Démarrer un projet
          <span style={{ fontSize: 14 }}>→</span>
        </Link>
      </div>
    </div>
  )
}
