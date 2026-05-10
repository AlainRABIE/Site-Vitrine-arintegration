import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { getProject, projects } from '@/data/projects'
import { Link } from '@/i18n/routing'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Reveal } from '@/components/Reveal'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const title = `${project.name} — ${project.cat}`
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/${locale}/projects/${project.slug}/` },
    robots: { index: false, follow: false },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Header />
      <main>
        <article className="border-b border-line dark:border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
            <Link
              href="/#realisations"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-muted transition-colors hover:text-ink dark:text-white/65 dark:hover:text-white"
            >
              <ArrowLeft size={14} />
              Retour
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
                {project.cat}
              </span>
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
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Voir le site en ligne
                  <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>
        </article>

        <section className="border-b border-line dark:border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
            <div className="space-y-px overflow-hidden rounded-2xl bg-line dark:bg-white/10">
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
            <Link href="/#contact" className="btn-primary">
              Demander un devis
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
