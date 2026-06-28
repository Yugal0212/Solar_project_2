// Source of truth for the Services sub-pages (`/services/[slug]`).
// Add an entry here and the route, metadata, and sitemap entry all follow.
// Content (body copy, images) is filled in later — this is structure only.

export type Service = {
  slug: string
  name: string // H1 / nav label
  title: string // <title> for SEO
  shortDesc: string // meta description / card blurb
}

export const services: Service[] = [
  {
    slug: 'residential-solar-installation',
    name: 'Residential Solar Installation',
    title: 'Residential Solar Installation in Gujarat | LGPSM Solar',
    shortDesc: 'Custom rooftop solar systems for homes across Gujarat.',
  },
  {
    slug: 'commercial-solar-installation',
    name: 'Commercial Solar Installation',
    title: 'Commercial Solar Installation in Gujarat | LGPSM Solar',
    shortDesc: 'Solar for offices, showrooms, and retail with guaranteed ROI.',
  },
  {
    slug: 'industrial-solar-installation',
    name: 'Industrial Solar Installation',
    title: 'Industrial Solar Installation in Gujarat | LGPSM Solar',
    shortDesc: 'Megawatt-scale rooftop and ground-mount systems for factories.',
  },
  {
    slug: 'solar-maintenance',
    name: 'Solar Maintenance (AMC)',
    title: 'Solar Panel Maintenance & AMC in Gujarat | LGPSM Solar',
    shortDesc: 'Annual maintenance, cleaning, diagnostics, and emergency support.',
  },
  {
    slug: 'solar-consultancy',
    name: 'Solar Consultancy',
    title: 'Solar Consultancy & Advisory in Gujarat | LGPSM Solar',
    shortDesc: 'Independent solar feasibility, design, and advisory services.',
  },
  {
    slug: 'solar-epc-solutions',
    name: 'Solar EPC Solutions',
    title: 'Solar EPC Solutions in Gujarat | LGPSM Solar',
    shortDesc: 'End-to-end engineering, procurement, and construction for solar projects.',
  },
]

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)

export const allServiceSlugs = (): string[] => services.map((s) => s.slug)
