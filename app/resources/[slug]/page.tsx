import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { resources, getResourceBySlug } from '@/src/data/resources'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const item = getResourceBySlug((await params).slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.shortDesc,
    alternates: { canonical: `/resources/${item.slug}` },
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const item = getResourceBySlug((await params).slug)
  if (!item) notFound()
  return <PagePlaceholder eyebrow="Resource" title={item.shortDesc} note={item.title} />
}
