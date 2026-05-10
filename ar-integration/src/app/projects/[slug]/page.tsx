import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { getProject, projects } from '@/data/projects'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const title = `${project.name} — ${project.cat}`
  const description = project.tagline
  const url = `/projects/${project.slug}/`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${title} | AR Intégration`,
      description,
      siteName: 'AR Intégration',
    },
    twitter: { card: 'summary_large_image', title: `${title} | AR Intégration`, description },
    robots: { index: false, follow: false },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://arintegration.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://arintegration.fr/#realisations' },
      { '@type': 'ListItem', position: 3, name: project.name, item: `https://arintegration.fr/projects/${project.slug}/` },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.tagline,
    creator: { '@type': 'Organization', name: 'AR Intégration', '@id': 'https://arintegration.fr/#organization' },
    genre: project.cat,
    url: `https://arintegration.fr/projects/${project.slug}/`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main>
        <article className="border-b border-line dark:border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
            <Link
              href="/#realisations"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-muted transition-colors hover:text-ink dark:text-white/65 dark:hover:text-white"
            >
              <ArrowLeft size={14} />
              Toutes les réalisations
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                {project.cat}
              </span>
              {project.wip && (
                <span className="rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                  En cours de réalisation
                </span>
              )}
              <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                {project.device === 'phone' ? 'Application mobile' : 'Site web'}
              </span>
            </div>

            <h1
              className="heading-display mt-6 text-balance text-ink dark:text-white"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
            >
              {project.name}
            </h1>

            <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-muted dark:text-white/70 md:text-[20px]">
              {project.tagline}
            </p>

            {project.href && (
              <div className="mt-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Voir le site en ligne
                  <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>
        </article>

        <section className="border-b border-line dark:border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                Fonctionnalités clés
              </span>
              <h2 className="heading-section text-[28px] text-ink dark:text-white md:text-[36px]">
                Ce qu'on a construit.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-px overflow-hidden rounded-2xl bg-line dark:bg-white/10">
              {project.screens.map((screen, i) => (
                <Reveal key={screen.feature} delay={i * 0.06}>
                  <div className="bg-white p-7 dark:bg-[#0A0A0A] md:p-10">
                    <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                      <div>
                        <div className="text-[12px] font-mono font-medium text-dim dark:text-white/40">
                          0{i + 1} · {screen.feature}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-semibold tracking-tight text-ink dark:text-white md:text-[22px]">
                          {screen.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted dark:text-white/65">
                          {screen.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line dark:border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8 md:py-24">
            <Reveal>
              <h2 className="heading-section mx-auto max-w-2xl text-[28px] text-ink dark:text-white md:text-[36px]">
                Un projet similaire en tête ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted dark:text-white/70">
                Échangeons 15 minutes par téléphone. Sans engagement, sans bullshit.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/#contact" className="btn-primary">
                  Demander un devis
                  <ArrowUpRight size={15} />
                </Link>
                <Link href="/#realisations" className="btn-outline">
                  Voir d'autres projets
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
