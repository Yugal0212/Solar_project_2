import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews | LGPSM Solar',
  description: 'What homeowners and businesses across Gujarat say about LGPSM Solar.',
  alternates: { canonical: '/testimonials' },
}

export default function TestimonialsPage() {
  return <PagePlaceholder eyebrow="Testimonials" title="What Our Customers Say" />
}
