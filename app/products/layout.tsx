import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Products | LGPSM Solar',
  description: 'Browse our full range of BIS-certified solar panels, hybrid inverters, and lithium battery storage systems. Every product engineered for Gujarat\'s climate.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Solar Products - LGPSM Solar Gujarat',
    description: 'High-efficiency panels, smart inverters, and lithium storage. Certified, warrantied, and matched to your needs.',
    url: '/products',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
