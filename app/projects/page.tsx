import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Solar Projects & Case Studies in Gujarat | LGPSM Solar',
  description: 'Residential, commercial, and industrial solar projects delivered across Gujarat.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsIndexPage() {
  return (
    <PagePlaceholder
      eyebrow="Projects"
      title="Our Solar Projects"
      note="Overview of project categories and case studies — content coming soon."
    />
  )
}
