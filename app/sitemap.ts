import type { MetadataRoute } from 'next'

const routes = ['', '/about', '/services', '/products', '/why-solar', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://solar-project-lime-beta.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
