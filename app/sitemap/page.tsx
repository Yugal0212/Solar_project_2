import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/src/data/services'
import { locations } from '@/src/data/locations'
import { projectCategories, caseStudies } from '@/src/data/projects'
import { resources } from '@/src/data/resources'
import { getAllPosts, blogCategories } from '@/src/lib/blog'

export const metadata: Metadata = {
  title: 'Sitemap | LGPSM Solar',
  description: 'A full list of pages on the LGPSM Solar website.',
  alternates: { canonical: '/sitemap' },
}

function Section({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-slate-900 mb-3">{title}</h2>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-emerald-700 hover:underline">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HtmlSitemapPage() {
  const posts = getAllPosts()
  return (
    <main className="section-pad">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900 mb-12">Sitemap</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Section
            title="Main"
            links={[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Products' },
              { href: '/why-solar', label: 'Why Solar' },
              { href: '/contact', label: 'Contact' },
              { href: '/faq', label: 'FAQ' },
              { href: '/testimonials', label: 'Testimonials' },
            ]}
          />
          <Section
            title="Services"
            links={[
              { href: '/services', label: 'All Services' },
              ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
            ]}
          />
          <Section
            title="Locations"
            links={[
              { href: '/locations', label: 'All Locations' },
              ...locations.map((l) => ({ href: `/locations/${l.slug}`, label: l.city })),
            ]}
          />
          <Section
            title="Projects"
            links={[
              { href: '/projects', label: 'All Projects' },
              ...projectCategories.map((c) => ({ href: `/projects/${c.slug}`, label: c.label })),
              ...caseStudies.map((p) => ({ href: `/projects/case-study/${p.slug}`, label: p.title })),
            ]}
          />
          <Section
            title="Blog"
            links={[
              { href: '/blog', label: 'Blog Home' },
              ...blogCategories.map((c) => ({ href: `/blog/category/${c.slug}`, label: c.label })),
              ...posts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
            ]}
          />
          <Section
            title="Tools & Resources"
            links={[
              { href: '/calculator', label: 'Calculators' },
              { href: '/calculator/savings', label: 'Savings Calculator' },
              { href: '/calculator/size', label: 'Size Calculator' },
              { href: '/resources', label: 'Resources' },
              ...resources.map((r) => ({ href: `/resources/${r.slug}`, label: r.title })),
            ]}
          />
          <Section
            title="Legal"
            links={[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms-and-conditions', label: 'Terms & Conditions' },
            ]}
          />
        </div>
      </div>
    </main>
  )
}
