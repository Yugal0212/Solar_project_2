// Source of truth for the Resources sub-pages (`/resources/[slug]`).
// The downloadable brochure is a static PDF in /public linked from the
// index page — it is not a route. Structure only.

export type Resource = {
  slug: string
  title: string
  shortDesc: string
}

export const resources: Resource[] = [
  {
    slug: 'government-subsidy-guide',
    title: 'Solar Subsidy Guide for Gujarat | LGPSM Solar',
    shortDesc: 'How to claim PM Surya Ghar and state solar subsidies in Gujarat.',
  },
  {
    slug: 'solar-buying-guide',
    title: 'Solar Buying Guide | LGPSM Solar',
    shortDesc: 'What to check before buying a solar system for your home or business.',
  },
]

export const getResourceBySlug = (slug: string): Resource | undefined =>
  resources.find((r) => r.slug === slug)

export const allResourceSlugs = (): string[] => resources.map((r) => r.slug)
