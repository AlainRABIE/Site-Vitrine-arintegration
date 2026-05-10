# avocats.arintegration.fr

Landing page sectorielle dédiée aux avocats, juristes et cabinets de droit. Sous-domaine de
[arintegration.fr](https://arintegration.fr).

Style cal.com : minimaliste pro, fond blanc, bordures fines, typographie Inter, sections noires
contrastées pour les moments-clés (sécurité RGPD, CTA final).

## Stack

- Next.js 14 (App Router, **export statique**)
- TypeScript strict
- Tailwind CSS v3 + `darkMode: 'class'`
- Framer Motion (animations subtiles + compteurs animés sur stats)
- Lucide React
- next-themes (dark mode auto + toggle Sun/Moon)
- Formspree (formulaire contact, POST côté client)

## Setup

```bash
npm install
cp .env.example .env.local
# Remplir NEXT_PUBLIC_FORMSPREE_ID
npm run dev          # http://localhost:3000
```

## Variables d'environnement

| Clé | Rôle |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID du formulaire Formspree |
| `NEXT_PUBLIC_APP_URL` | URL canonique (par défaut `https://avocats.arintegration.fr`) |

## Build & déploiement

```bash
npm run build        # génère le dossier out/ (export statique)
```

Vercel : `output: 'export'`. Pour le sous-domaine `avocats.arintegration.fr`,
pointer le CNAME vers Vercel et ajouter le domaine dans Project Settings → Domains.

## Conformité

- Mention "compatible secret professionnel" (RIN art. 2) dans Securite et politique-confidentialite
- Hébergement Vercel région Europe pour le site vitrine
- Aucun service tiers américain (Google Analytics, Facebook Pixel) sans consentement
