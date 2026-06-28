// Server-only blog content layer. Reads MDX files from `content/blog/*.mdx`,
// parses frontmatter with gray-matter, and exposes typed helpers used by the
// blog routes and the sitemap. Body rendering (compileMDX) happens in the
// route component; this module only deals with metadata + listing.
//
// Files prefixed with `_` (e.g. `_example-post.mdx`) are treated as drafts
// and excluded from listings/static params.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Blog categories — single source of truth, also validated against frontmatter.
export const blogCategories = [
  { slug: 'solar-costs', label: 'Solar Costs' },
  { slug: 'government-subsidies', label: 'Government Subsidies' },
  { slug: 'maintenance', label: 'Maintenance' },
  { slug: 'residential-guides', label: 'Residential Guides' },
  { slug: 'commercial-guides', label: 'Commercial Guides' },
] as const

export type BlogCategorySlug = (typeof blogCategories)[number]['slug']

export type PostFrontmatter = {
  title: string
  description?: string
  date?: string
  category?: BlogCategorySlug
  draft?: boolean
}

export type PostMeta = PostFrontmatter & { slug: string }

export type Post = PostMeta & { content: string }

function readPostFile(fileName: string): Post | null {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)
  const fm = data as PostFrontmatter
  if (fm.draft) return null
  return { slug, content, ...fm }
}

function listMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith('_'))
}

export function getAllPosts(): PostMeta[] {
  return listMdxFiles()
    .map(readPostFile)
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export function getPostBySlug(slug: string): Post | null {
  const file = listMdxFiles().find((f) => f.replace(/\.mdx?$/, '') === slug)
  return file ? readPostFile(file) : null
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((c) => c.slug === slug)
}

export const allPostSlugs = (): string[] => getAllPosts().map((p) => p.slug)

export const allCategorySlugs = (): string[] => blogCategories.map((c) => c.slug)
