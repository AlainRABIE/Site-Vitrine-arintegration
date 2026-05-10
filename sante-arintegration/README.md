# medecins.arintegration.fr

Landing page sectorielle dédiée aux médecins libéraux, dentistes, kinés, ostéos, sages-femmes
et infirmiers libéraux. Sous-domaine de [arintegration.fr](https://arintegration.fr).

Style cal.com : minimaliste pro, fond blanc, bordures fines, typographie Inter, sections noires
contrastées pour les moments-clés (sécurité RGPD, CTA final).

## Stack

- Next.js 14 (App Router, **export statique** — pas de Server Action ni d'API route en runtime)
- TypeScript strict
- Tailwind CSS v3
- Framer Motion (animations subtiles au scroll)
- Lucide React (icônes)
- Formspree (formulaire contact, POST côté client)

## Setup

```bash
npm install
cp .env.example .env.local
# Remplir NEXT_PUBLIC_FORMSPREE_ID
npm run dev          # http://localhost:3002
```

## Variables d'environnement

| Clé | Rôle |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID du formulaire Formspree (ex: `xqkrdpzy`) — utilisé par `src/components/ContactForm.tsx` |
| `NEXT_PUBLIC_APP_URL` | URL canonique (par défaut `https://medecins.arintegration.fr`) |

## Build et déploiement

```bash
npm run build        # génère le dossier out/ (export statique)
```

Déploiement Vercel : le projet est en `output: 'export'` dans `next.config.js`. Vercel sert
directement les fichiers statiques, l'OG image (`/opengraph-image`) est pré-générée à la build.

Pour le sous-domaine `medecins.arintegration.fr` : pointer le CNAME vers le projet Vercel,
puis ajouter le domaine dans Project Settings → Domains.

## Structure

```
src/
├── app/
│   ├── layout.tsx                       # Inter, métadonnées, JSON-LD ProfessionalService
│   ├── page.tsx                         # 12 sections en ordre
│   ├── globals.css                      # design system noir/blanc
│   ├── opengraph-image.tsx              # OG 1200×630 fond noir
│   ├── sitemap.ts / robots.ts
│   ├── contact/page.tsx                 # formulaire Formspree (Suspense + useSearchParams)
│   ├── mentions-legales/page.tsx
│   └── politique-confidentialite/page.tsx
└── components/
    ├── Header.tsx       Hero.tsx        AvantApres.tsx     Pourquoi.tsx
    ├── Construit.tsx    Securite.tsx    Tarifs.tsx         Methode.tsx
    ├── Temoignages.tsx  FAQ.tsx         CTAFinal.tsx       Footer.tsx
    ├── ContactForm.tsx                  # formulaire client Formspree
    └── Reveal.tsx                       # wrapper fade-in whileInView
```

## Conformité

- Hébergement Vercel région Europe pour le site vitrine. Pas de données de santé sur ce site.
- Mention HDS dans `Securite.tsx` et la page `/politique-confidentialite` : prestation HDS
  certifiée disponible **sur devis** via partenariat OVHcloud, distincte de ce site.
- Aucun service tiers américain (Google Analytics, Facebook Pixel) n'est intégré.
