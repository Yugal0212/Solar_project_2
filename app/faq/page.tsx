import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | LGPSM Solar',
  description: 'Common questions about solar installation, cost, subsidies, and maintenance in Gujarat.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return <PagePlaceholder eyebrow="FAQ" title="Frequently Asked Questions" breadcrumbs={[{ label: 'Resources', path: '/resources' }, { label: 'FAQ' }]} />
}
