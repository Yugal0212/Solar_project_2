import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Solar Size Calculator | LGPSM Solar',
  description: 'Find the right solar system size for your home or business.',
  alternates: { canonical: '/calculator/size' },
}

export default function SizeCalculatorPage() {
  return <PagePlaceholder eyebrow="Calculator" title="Solar Size Calculator" />
}
