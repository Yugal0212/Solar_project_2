import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, blogCategories } from '@/src/lib/blog'

export const metadata: Metadata = {
  title: 'Solar Blog & Guides | LGPSM Solar',
  description: 'Articles and guides on solar costs, subsidies, maintenance, and more in Gujarat.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  return (
    <main className="section-pad">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-3">Blog</p>
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900">Solar Blog &amp; Guides</h1>

        {/* TODO: replace with designed cards. Listing wired to MDX content. */}
        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <Link key={c.slug} href={`/blog/category/${c.slug}`} className="text-sm text-emerald-700 underline">
              {c.label}
            </Link>
          ))}
        </div>

        <ul className="mt-8 space-y-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-slate-800 hover:text-emerald-700 underline">
                {p.title}
              </Link>
            </li>
          ))}
          {posts.length === 0 && <li className="text-slate-500">No posts yet.</li>}
        </ul>
      </div>
    </main>
  )
}
