// Source of truth for Projects: category archives (`/projects/[category]`)
// and individual case studies (`/projects/case-study/[slug]`).
// Structure only — real case-study content is added later.

export type ProjectCategory = {
  slug: 'residential' | 'commercial' | 'industrial'
  label: string
  title: string
}

export const projectCategories: ProjectCategory[] = [
  { slug: 'residential', label: 'Residential Projects', title: 'Residential Solar Projects | LGPSM Solar' },
  { slug: 'commercial', label: 'Commercial Projects', title: 'Commercial Solar Projects | LGPSM Solar' },
  { slug: 'industrial', label: 'Industrial Projects', title: 'Industrial Solar Projects | LGPSM Solar' },
]

export type CaseStudy = {
  slug: string
  title: string
  category: ProjectCategory['slug']
  location: string
}

// Placeholder entries so the route + sitemap build cleanly. Replace with real
// case studies; add a `category` matching one of projectCategories above.
export const caseStudies: CaseStudy[] = [
  { slug: 'rajkot-5kw-rooftop', title: '5kW Residential Rooftop, Rajkot', category: 'residential', location: 'Rajkot' },
  { slug: 'ahmedabad-15kw-office', title: '15kW Office Installation, Ahmedabad', category: 'commercial', location: 'Ahmedabad' },
  { slug: 'surat-100kw-factory', title: '100kW Factory Rooftop, Surat', category: 'industrial', location: 'Surat' },
]

export const getCategoryBySlug = (slug: string): ProjectCategory | undefined =>
  projectCategories.find((c) => c.slug === slug)

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((p) => p.slug === slug)

export const allCategorySlugs = (): string[] => projectCategories.map((c) => c.slug)

export const allCaseStudySlugs = (): string[] => caseStudies.map((p) => p.slug)

export const getCaseStudiesByCategory = (category: string): CaseStudy[] =>
  caseStudies.filter((p) => p.category === category)
