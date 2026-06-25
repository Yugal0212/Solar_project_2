'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, Phone, Download } from 'lucide-react'
import { navLinks } from '../data/seed'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isDarkText = isScrolled

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 80
      setIsScrolled((current) => current === shouldBeScrolled ? current : shouldBeScrolled)
    }
    // Check immediately and also after a tiny delay to allow Next.js scroll restoration
    handleScroll()
    const timer = setTimeout(handleScroll, 100)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-700 ease-out flex items-center ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md h-[76px]'
            : 'bg-transparent h-[96px]'
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDarkText ? 'bg-emerald-600' : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Zap size={18} className="text-white" fill="currentColor" />
            </div>
            <div>
              <span className={`font-heading font-black text-2xl tracking-tight transition-colors duration-300 ${
                isDarkText ? 'text-[#0B1F3A]' : 'text-white'
              }`}>
                LGPSM
              </span>
              <span className={`block text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 -mt-0.5 ${
                isDarkText ? 'text-[#16A34A]' : 'text-white/80'
              }`}>
                Solar Energy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-base font-bold tracking-[0.2px] rounded-full transition-all duration-300 ${
                  pathname === link.path
                    ? isDarkText
                      ? 'text-[#16A34A] bg-green-50'
                      : 'text-[#22C55E] [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]'
                    : isDarkText
                      ? 'text-[#0B1F3A] hover:text-[#16A34A] hover:bg-slate-50'
                      : 'text-[rgba(255,255,255,0.95)] hover:text-[#22C55E] [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]'
                }`}
              >
                {link.label}
                {pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                      isDarkText ? 'bg-[#16A34A]' : 'bg-[#22C55E] shadow-[0_0_5px_rgba(34,197,94,0.5)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+919999900000" 
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                isDarkText 
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:scale-105' 
                  : 'bg-white text-emerald-600 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110'
              }`}
              title="Call Us"
            >
              <Phone size={18} strokeWidth={2.5} />
            </a>
            <a
              href="/catalog.pdf"
              download="LGPSM-Catalog.pdf"
              className="flex items-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(22,163,74,0.4)] hover:shadow-[0_6px_24px_rgba(22,163,74,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Download Catalog <Download size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDarkText ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[999] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                      <Zap size={16} className="text-white" fill="currentColor" />
                    </div>
                    <span className="font-heading font-extrabold text-xl text-slate-900">LGPSM</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="space-y-1 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                        pathname === link.path
                          ? 'bg-emerald-50 text-emerald-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <a
                    href="tel:+919999900000"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:border-emerald-400 hover:text-emerald-700 transition-colors"
                  >
                    <Phone size={16} /> +91-9999900000
                  </a>
                  <a
                    href="/catalog.pdf"
                    download="LGPSM-Catalog.pdf"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
                  >
                    Download Catalog <Download size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
