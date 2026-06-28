import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locations, getLocationBySlug } from '@/src/data/locations'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const item = getLocationBySlug((await params).slug)
  if (!item) return {}
  const heading = item.isStateLevel
    ? 'Solar Installation in Gujarat'
    : `Solar Installation in ${item.city}`
  return {
    title: `${heading} | LGPSM Solar`,
    description: `Solar panel installation services in ${item.city}, Gujarat.`,
    alternates: { canonical: `/locations/${item.slug}` },
  }
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const item = getLocationBySlug((await params).slug)
  if (!item) notFound()
  const heading = item.isStateLevel
    ? 'Solar Installation in Gujarat'
    : `Solar Installation in ${item.city}`
  return (
    <PagePlaceholder
      eyebrow="Location"
      title={heading}
      note={`${item.district} district · DISCOM: ${item.discom}`}
    />
  )
}
