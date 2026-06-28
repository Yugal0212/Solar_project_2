import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/src/data/services'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const item = getServiceBySlug((await params).slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.shortDesc,
    alternates: { canonical: `/services/${item.slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const item = getServiceBySlug((await params).slug)
  if (!item) notFound()
  return <PagePlaceholder eyebrow="Service" title={item.name} note={item.shortDesc} />
}
