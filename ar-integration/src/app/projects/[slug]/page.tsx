import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/data/projects'
import ScrollPhonePage from '@/components/ScrollPhonePage'
import Cursor from '@/components/Cursor'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const title = `${project.name} — ${project.cat} | AR Integration`
  const description = project.tagline
  const url = `/projects/${project.slug}/`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'AR Integration',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <Cursor />
      <ScrollPhonePage project={project} />
    </>
  )
}
