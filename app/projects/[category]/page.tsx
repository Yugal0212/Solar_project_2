import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projectCategories, getCategoryBySlug } from '@/src/data/projects'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export function generateStaticParams() {
  return projectCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const cat = getCategoryBySlug((await params).category)
  if (!cat) return {}
  return {
    title: cat.title,
    alternates: { canonical: `/projects/${cat.slug}` },
  }
}

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const cat = getCategoryBySlug((await params).category)
  if (!cat) notFound()
  return <PagePlaceholder eyebrow="Projects" title={cat.label} />
}
