'use client'

import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import WhatsAppFAB from './WhatsAppFAB'

export default function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFAB />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontFamily: 'Inter', fontSize: '14px' },
          success: { iconTheme: { primary: '#059669', secondary: '#fff' } },
        }}
      />
    </div>
  )
}
