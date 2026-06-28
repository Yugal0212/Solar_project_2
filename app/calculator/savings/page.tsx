import type { Metadata } from 'next'
import PagePlaceholder from '@/src/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Solar Savings Calculator | LGPSM Solar',
  description: 'Estimate how much you can save on electricity bills with solar.',
  alternates: { canonical: '/calculator/savings' },
}

export default function SavingsCalculatorPage() {
  // TODO: mount the existing SolarCalculator component here.
  return <PagePlaceholder eyebrow="Calculator" title="Solar Savings Calculator" />
}
