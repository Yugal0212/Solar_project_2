import type { Metadata } from 'next'
import Link from 'next/link'
import { resources } from '@/src/data/resources'

export const metadata: Metadata = {
  title: 'Solar Resources & Guides | LGPSM Solar',
  description: 'Subsidy guides, buying guides, and downloadable brochures for going solar in Gujarat.',
  alternates: { canonical: '/resources' },
}

export default function ResourcesIndexPage() {
  return (
    <main className="section-pad">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-3">Resources</p>
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900">Solar Resources</h1>
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
