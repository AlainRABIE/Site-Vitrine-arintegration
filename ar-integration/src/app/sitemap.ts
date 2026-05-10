import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arintegration.fr'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/mentions-legales/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/politique-confidentialite/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
