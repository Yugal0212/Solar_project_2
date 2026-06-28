import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Privacy Policy | LGPSM Solar',
  description: 'How LGPSM Solar collects, uses, and protects your information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return <PagePlaceholder eyebrow="Legal" title="Privacy Policy" />
}
