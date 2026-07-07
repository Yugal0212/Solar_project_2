import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solar Calculators | LGPSM Solar',
  description: 'Estimate your solar savings and the right system size for your needs.',
  alternates: { canonical: '/calculator' },
}

import InnerPageHero from '@/src/components/InnerPageHero'

export default function CalculatorHubPage() {
  return (
    <main>
      <InnerPageHero
        label="CALCULATORS"
        title="Solar Calculators"
        highlightWords={['Solar', 'Calculators']}
        subtitle="Estimate Your Savings"
        description="Calculate your potential energy savings and determine the exact solar system size required for your property."
        imagePath="/images/products/panel-1.jpg"
        breadcrumbs={[{ label: 'Resources', path: '/resources' }, { label: 'Solar Calculators' }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-24">
        <ul className="mt-8 space-y-2">
          <li><Link href="/calculator/savings" className="text-emerald-700 underline">Solar Savings Calculator</Link></li>
          <li><Link href="/calculator/size" className="text-emerald-700 underline">Solar Size Calculator</Link></li>
        </ul>
      </div>
    </main>
  )
}
