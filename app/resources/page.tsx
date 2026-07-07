import type { Metadata } from 'next'
import Link from 'next/link'
import { resources } from '@/src/data/resources'

export const metadata: Metadata = {
  title: 'Solar Resources & Guides | LGPSM Solar',
  description: 'Subsidy guides, buying guides, and downloadable brochures for going solar in Gujarat.',
  alternates: { canonical: '/resources' },
}

import InnerPageHero from '@/src/components/InnerPageHero'

export default function ResourcesIndexPage() {
  return (
    <main>
      <InnerPageHero
        label="RESOURCES"
        title="Solar Resources"
        highlightWords={['Solar', 'Resources']}
        subtitle="Your Guide to Green Energy"
        description="Access comprehensive guides, subsidy information, and downloadable brochures to help you transition to solar power in Gujarat."
        imagePath="/images/products/panel-1.jpg"
      />
      <div className="max-w-5xl mx-auto px-4 py-24">
        <ul className="mt-8 space-y-2">
          {resources.map((r) => (
            <li key={r.slug}>
              <Link href={`/resources/${r.slug}`} className="text-emerald-700 underline">{r.shortDesc}</Link>
            </li>
          ))}
          {/* TODO: Download Brochure -> static PDF in /public */}
          <li><a href="/brochure.pdf" className="text-emerald-700 underline">Download Brochure (PDF)</a></li>
        </ul>
      </div>
    </main>
  )
}
