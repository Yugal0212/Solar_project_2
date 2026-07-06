import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import AppShell from '../src/components/AppShell'
import Preloader from '../src/components/Preloader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  // metadataBase: new URL('https://solar-project-lime-beta.vercel.app'),
  title: {
    default: "LGPSM Solar - Harnessing Gujarat's Sunshine for a Cleaner Tomorrow",
    template: '%s | LGPSM Solar',
  },
  description:
    'LGPSM Solar engineers, installs, and maintains premium solar systems for homes, businesses, and industries across Gujarat.',
  keywords: ['LGPSM Solar', 'solar installation Gujarat', 'solar panels Rajkot', 'renewable energy India'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LGPSM Solar - Gujarat's Trusted Solar Partner",
    description: 'Premium solar installations across Gujarat with free site survey and subsidy assistance.',
    url: '/',
    siteName: 'LGPSM Solar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LGPSM Solar - Gujarat's Trusted Solar Partner",
    description: 'Premium solar installations across Gujarat with free site survey and subsidy assistance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F3A',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Preloader />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
