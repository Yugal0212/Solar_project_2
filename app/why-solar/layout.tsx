import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Solar? | LGPSM Solar',
  description: 'Discover why solar is the smartest investment for homes and businesses in Gujarat. Calculate your ROI, see real savings, and debunk solar myths.',
  alternates: { canonical: '/why-solar' },
  openGraph: {
    title: 'Why Go Solar? - LGPSM Solar Gujarat',
    description: 'Stop paying rent for your power. Calculate your savings and see real examples of solar ROI in Gujarat.',
    url: '/why-solar',
  },
}

export default function WhySolarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
