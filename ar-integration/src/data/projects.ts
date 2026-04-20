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
    slug: 'luxe-co',
    cat: 'E-Commerce',
    name: 'Luxe & Co',
    wip: false,
    tagline: 'Une maison parisienne sublimée en ligne, où chaque pièce devient désir.',
    device: 'browser',
    href: 'https://vitrine-site-ecommerce.vercel.app',
    screens: [
      {
        feature: 'Catalogue',
        title: 'Chaque pièce mise en valeur',
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
        description: 'Chiffre d\'affaires, stocks, nouvelles commandes — tout en un seul écran. Un back-office pensé pour piloter son activité sans technicité.',
        screenType: 'admin',
      },
    ],
  },
  {
    slug: 'galiya',
    cat: 'Application Mobile',
    name: 'Galiya',
    wip: true,
    tagline: 'rends soin de ta peau avec AR Integration',
    device: 'phone',
    screens: [
      {
        feature: 'Accueil',
        title: 'Ton Score Éclat en un coup d\'œil',
        description: 'Dès l\'ouverture, Galiya affiche ton Score Éclat sur 100, ta routine du jour et ton profil de peau. Scanner, Assistant IA et lecture de code-barres accessibles en un tap.',
        screenType: 'home-galiya',
      },
      {
        feature: 'Produits recommandés',
        title: 'Les bons produits, rien que pour ta peau',
        description: 'Plus de 300 produits analysés et filtrés selon ton profil de peau. Sérums, crèmes hydratantes, nettoyants — chaque recommandation est justifiée et adaptée à tes besoins.',
        screenType: 'products',
      },
      {
        feature: 'Analyse & suivi',
        title: 'Suis l\'évolution de ta peau',
        description: 'Galiya détecte acné, pores dilatés et sécheresse, puis génère un rapport détaillé : scores d\'hydratation, clarté, texture et éclat. Des recommandations concrètes pour progresser.',
        screenType: 'tracking',
      },
      {
        feature: 'Routine du Jour',
        title: 'Une routine adaptée, matin et soir',
        description: 'Galiya construit automatiquement ta routine AM/PM selon ton profil de peau. Chaque étape est minutée, ordonnée et expliquée pour maximiser les résultats.',
        screenType: 'routine',
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
    href: 'https://arintegration.fr',
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
