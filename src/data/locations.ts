// Source of truth for the Location pages (`/locations/[slug]`).
// Each entry becomes a dedicated, SEO-targeted city page. `isStateLevel`
// marks the umbrella Gujarat page. DISCOM = local power distribution company,
// useful later for genuinely-local content. Structure only — no copy yet.

export type Location = {
  slug: string
  city: string // display name, e.g. "Rajkot"
  district: string
  discom: string // distribution company serving the area
  isStateLevel?: boolean
}

export const locations: Location[] = [
  { slug: 'morbi', city: 'Morbi', district: 'Morbi', discom: 'PGVCL' },
  { slug: 'rajkot', city: 'Rajkot', district: 'Rajkot', discom: 'PGVCL' },
  { slug: 'ahmedabad', city: 'Ahmedabad', district: 'Ahmedabad', discom: 'UGVCL / Torrent Power' },
  { slug: 'jamnagar', city: 'Jamnagar', district: 'Jamnagar', discom: 'PGVCL' },
  { slug: 'surendranagar', city: 'Surendranagar', district: 'Surendranagar', discom: 'PGVCL' },
  { slug: 'gandhidham', city: 'Gandhidham', district: 'Kutch', discom: 'PGVCL' },
  { slug: 'bhuj', city: 'Bhuj', district: 'Kutch', discom: 'PGVCL' },
  { slug: 'wankaner', city: 'Wankaner', district: 'Morbi', discom: 'PGVCL' },
  { slug: 'gujarat', city: 'Gujarat', district: 'Gujarat', discom: 'PGVCL / UGVCL / MGVCL / DGVCL', isStateLevel: true },
]

export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug)

export const allLocationSlugs = (): string[] => locations.map((l) => l.slug)
