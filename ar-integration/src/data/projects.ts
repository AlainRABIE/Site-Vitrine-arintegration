export type ProjectScreen = {
  feature: string
  title: string
  description: string
  screenType: string
}

export type ProjectData = {
  slug: string
  cat: string
  name: string
  wip: boolean
  tagline: string
  device: 'phone' | 'browser'
  screens: ProjectScreen[]
  href?: string
}

export const projects: ProjectData[] = [
  {
    slug: 'galiya',
    cat: 'Application Mobile',
    name: 'Galiya',
    wip: true,
    tagline: 'Suivi nutritionnel & sportif nouvelle génération.',
    device: 'phone',
    screens: [
      {
        feature: 'Dashboard',
        title: 'Vue d\'ensemble',
        description: 'Un tableau de bord clair pour visualiser en un coup d\'œil tes calories, macros et objectifs de la journée.',
        screenType: 'dashboard',
      },
      {
        feature: 'Suivi nutritionnel',
        title: 'Tes macros, en temps réel',
        description: 'Ajoute tes repas en quelques secondes. Galiya calcule automatiquement tes protéines, glucides et lipides.',
        screenType: 'nutrition',
      },
      {
        feature: 'Plans d\'entraînement',
        title: 'Entraîne-toi intelligemment',
        description: 'Des programmes adaptés à ton niveau et tes objectifs. Suis tes séances et progresse semaine après semaine.',
        screenType: 'workout',
      },
      {
        feature: 'Synchronisation santé',
        title: 'Connecté à ta santé',
        description: 'Synchronisation avec Apple Health et Google Fit. Fréquence cardiaque, pas et sommeil centralisés en un seul endroit.',
        screenType: 'health',
      },
    ],
  },
  {
    slug: 'loenora',
    cat: 'E-Commerce',
    name: 'Loenora',
    wip: true,
    tagline: 'La mode féminine haut de gamme, sublimée en ligne.',
    device: 'browser',
    screens: [
      {
        feature: 'Catalogue',
        title: 'Chaque robe mise en valeur',
        description: 'Un catalogue épuré où chaque pièce respire. Filtres par silhouette, matière et occasion. Photos haute définition, animations au scroll — l\'élégance avant tout.',
        screenType: 'catalogue',
      },
      {
        feature: 'Panier & paiement',
        title: 'De l\'envie à l\'achat, sans friction',
        description: 'Tunnel de commande en 3 étapes, paiement sécurisé via Stripe, récapitulatif visuel des pièces choisies. Conçu pour que rien ne brise l\'élan d\'achat.',
        screenType: 'cart',
      },
      {
        feature: 'Espace client',
        title: 'Une relation qui dure',
        description: 'Suivi de commandes en temps réel, historique d\'achats, tailles et préférences sauvegardées. L\'espace client pensé pour fidéliser une clientèle exigeante.',
        screenType: 'account',
      },
      {
        feature: 'Dashboard admin',
        title: 'Gérer sa boutique, simplement',
        description: 'Chiffre d\'affaires, stocks, nouvelles commandes — tout en un seul écran. Un back-office pensé pour qu\'une créatrice puisse piloter son activité sans technicité.',
        screenType: 'admin',
      },
    ],
  },
  {
    slug: 'ar-integration',
    cat: 'Site Vitrine',
    name: 'AR-Intégration',
    wip: false,
    tagline: 'Notre propre identité numérique.',
    device: 'browser',
    href: 'https://[MON_URL]',
    screens: [
      {
        feature: 'Design sur-mesure',
        title: 'Une identité visuelle forte',
        description: 'Chaque pixel a été pensé pour refléter notre exigence. Typographie, palette, animations — rien n\'est laissé au hasard.',
        screenType: 'design',
      },
      {
        feature: 'Animations fluides',
        title: 'L\'expérience avant tout',
        description: 'Transitions soignées, curseur personnalisé, effets de parallaxe. Une navigation qui donne envie d\'explorer.',
        screenType: 'animations',
      },
      {
        feature: 'Formulaire de contact',
        title: 'Un flux de contact sans friction',
        description: 'Formulaire intégré avec EmailJS, validation en temps réel et confirmation instantanée. Simple, direct, efficace.',
        screenType: 'contact',
      },
      {
        feature: 'Optimisé SEO',
        title: 'Visible et performant',
        description: 'Méta-données soignées, structure sémantique, score Lighthouse optimal. Conçu pour être trouvé et chargé rapidement.',
        screenType: 'seo',
      },
    ],
  },
]

export function getProject(slug: string): ProjectData | undefined {
  return projects.find(p => p.slug === slug)
}
