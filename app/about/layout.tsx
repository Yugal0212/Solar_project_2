import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | LGPSM Solar',
  description: 'Learn about LGPSM Solar - Gujarat\'s trusted solar engineering firm founded in Rajkot. Meet our team, see our milestones, and discover why we\'re different.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About LGPSM Solar - Gujarat\'s Premier Solar Engineers',
    description: 'Engineering-driven solar startup from Rajkot. Honest pricing, certified components, end-to-end project management.',
    url: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
