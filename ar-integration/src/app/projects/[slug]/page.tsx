import { notFound } from 'next/navigation'
import { getProject } from '@/data/projects'
import ScrollPhonePage from '@/components/ScrollPhonePage'
import Cursor from '@/components/Cursor'

export async function generateStaticParams() {
  return [
    { slug: 'galiya' },
    { slug: 'loenora' },
    { slug: 'ar-integration' },
  ]
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
