import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Solar Installation Locations Across Gujarat | LGPSM Solar',
  description: 'Cities and districts we serve for solar installation across Gujarat.',
  alternates: { canonical: '/locations' },
}

export default function LocationsIndexPage() {
  return (
    <PagePlaceholder
      eyebrow="Locations"
      title="Where We Install Solar"
      note="Index of all served cities — content coming soon."
    />
  )
}
