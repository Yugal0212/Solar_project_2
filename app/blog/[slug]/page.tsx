import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { allPostSlugs, getPostBySlug } from '@/src/lib/blog'

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const post = getPostBySlug((await params).slug)
  if (!post) return {}
  return {
    title: `${post.title} | LGPSM Solar`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getPostBySlug((await params).slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  })

  return (
    <main className="section-pad">
      <article className="max-w-3xl mx-auto px-4 py-24 prose prose-slate">
        <h1 className="font-heading font-black text-4xl lg:text-5xl text-slate-900">{post.title}</h1>
        {/* TODO: author, date, hero, related posts styling */}
        <div className="mt-8">{content}</div>
      </article>
    </main>
  )
}
