import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Services | LGPSM Solar',
  description: 'Complete solar engineering services for homes, businesses, and industries across Gujarat. From free site survey to lifetime O&M support.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Solar Services - LGPSM Solar Gujarat',
    description: 'Turnkey solar solutions. Commercial EPC, residential packages, subsidy processing, and lifetime maintenance.',
    url: '/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
