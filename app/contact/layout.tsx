import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | LGPSM Solar',
  description: 'Get in touch with LGPSM Solar for a free site survey and consultation. Call, WhatsApp, or fill our form. We respond within 2-4 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact LGPSM Solar - Book Free Solar Assessment',
    description: 'Book your free solar consultation in Gujarat. Our engineers respond within 2-4 hours.',
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
