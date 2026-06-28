import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Terms & Conditions | LGPSM Solar',
  description: 'The terms governing use of the LGPSM Solar website and services.',
  alternates: { canonical: '/terms-and-conditions' },
}

export default function TermsPage() {
  return <PagePlaceholder eyebrow="Legal" title="Terms & Conditions" />
}
