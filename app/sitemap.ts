import type { MetadataRoute } from 'next'
import { services } from '@/src/data/services'
import { locations } from '@/src/data/locations'
import { projectCategories, caseStudies } from '@/src/data/projects'
import { resources } from '@/src/data/resources'
import { getAllPosts, blogCategories } from '@/src/lib/blog'

// Required for `output: 'export'` so this metadata route is emitted statically.
export const dynamic = 'force-static'

const BASE_URL = 'https://parmayu.com'

// Static, hand-maintained routes. Dynamic routes are appended from the data layer below.
const staticRoutes = [
  '',
  '/about',
  '/services',
  '/products',
  '/why-solar',
  '/contact',
  '/locations',
  '/projects',
  '/blog',
  '/faq',
  '/testimonials',
  '/calculator',
  '/calculator/savings',
  '/calculator/size',
  '/resources',
  '/privacy-policy',
  '/terms-and-conditions',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...locations.map((l) => `/locations/${l.slug}`),
    ...projectCategories.map((c) => `/projects/${c.slug}`),
    ...caseStudies.map((p) => `/projects/case-study/${p.slug}`),
    ...blogCategories.map((c) => `/blog/category/${c.slug}`),
    ...getAllPosts().map((p) => `/blog/${p.slug}`),
    ...resources.map((r) => `/resources/${r.slug}`),
  ]

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
