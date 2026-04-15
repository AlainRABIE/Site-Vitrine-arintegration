import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const BASE = 'https://arintegration.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...projects.map(p => ({
      url: `${BASE}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/mentions-legales/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
