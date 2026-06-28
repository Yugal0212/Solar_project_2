import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogCategories, getCategoryBySlug, getPostsByCategory } from '@/src/lib/blog'

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const cat = getCategoryBySlug((await params).category)
  if (!cat) return {}
  return {
    title: `${cat.label} Articles | LGPSM Solar`,
    alternates: { canonical: `/blog/category/${cat.slug}` },
  }
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const cat = getCategoryBySlug((await params).category)
  if (!cat) notFound()
  const posts = getPostsByCategory(cat.slug)

  return (
    <main className="section-pad">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-3">Category</p>
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900">{cat.label}</h1>
        <ul className="mt-8 space-y-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-slate-800 hover:text-emerald-700 underline">
                {p.title}
              </Link>
            </li>
          ))}
          {posts.length === 0 && <li className="text-slate-500">No posts in this category yet.</li>}
        </ul>
      </div>
    </main>
  )
}
