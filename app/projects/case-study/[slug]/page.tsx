import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudyBySlug } from '@/src/data/projects'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const item = getCaseStudyBySlug((await params).slug)
  if (!item) return {}
  return {
    title: `${item.title} | LGPSM Solar`,
    alternates: { canonical: `/projects/case-study/${item.slug}` },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const item = getCaseStudyBySlug((await params).slug)
  if (!item) notFound()
  return (
    <PagePlaceholder
      eyebrow="Case Study"
      title={item.title}
      note={`${item.category} · ${item.location}`}
    />
  )
}
