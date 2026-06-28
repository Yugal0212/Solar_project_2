'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, Phone, Download, ChevronDown } from 'lucide-react'
import { navLinks } from '../data/seed'
import type { NavLink } from '../data/seed'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const pathname = usePathname()

  const isDarkText = isScrolled

  // A top-level item is "active" if the current path matches it or any of its
  // children (so dropdown parents stay highlighted on their sub-pages).
  const isLinkActive = (link: NavLink): boolean => {
    if (link.path === '/') return pathname === '/'
    if (pathname === link.path || pathname.startsWith(`${link.path}/`)) return true
    return (link.children ?? []).some(
      (c) => pathname === c.path || pathname.startsWith(`${c.path}/`),
    )
  }

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
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <div
          className={`max-w-[88rem] mx-auto flex items-center justify-between rounded-2xl border px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
            isScrolled
              ? 'h-[66px] bg-white/40 backdrop-blur-2xl border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
              : 'h-[74px] bg-white/10 backdrop-blur-2xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]'
          }`}
        >
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
            {navLinks.map((link) => {
              const active = isLinkActive(link)
              const linkClasses = `relative flex items-center gap-1 px-4 py-2 text-lg font-bold tracking-[0.2px] rounded-full transition-all duration-300 ${
                active
                  ? isDarkText
                    ? 'text-[#16A34A] bg-green-50'
                    : 'text-[#22C55E] [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]'
                  : isDarkText
                    ? 'text-[#0B1F3A] hover:text-[#16A34A] hover:bg-slate-50'
                    : 'text-[rgba(255,255,255,0.95)] hover:text-[#22C55E] [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]'
              }`
              const indicator = active && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                    isDarkText ? 'bg-[#16A34A]' : 'bg-[#22C55E] shadow-[0_0_5px_rgba(34,197,94,0.5)]'
                  }`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )

              if (!link.children) {
                return (
                  <Link key={link.path} href={link.path} className={linkClasses}>
                    {link.label}
                    {indicator}
                  </Link>
                )
              }

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={link.path} className={linkClasses} aria-haspopup="true" aria-expanded={openDropdown === link.label}>
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                    {indicator}
                  </Link>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-3"
                      >
                        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-white/40 py-2 min-w-[250px] overflow-hidden">
                          {link.children.map((child) => {
                            const childActive = pathname === child.path || pathname.startsWith(`${child.path}/`)
                            return (
                              <Link
                                key={child.path}
                                href={child.path}
                                className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                                  childActive
                                    ? 'text-emerald-700 bg-white/60'
                                    : 'text-slate-700 hover:text-emerald-700 hover:bg-white/50'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
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
                  {navLinks.map((link) => {
                    if (!link.children) {
                      return (
                        <Link
                          key={link.path}
                          href={link.path}
                          className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                            isLinkActive(link)
                              ? 'bg-emerald-50 text-emerald-700 font-semibold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )
                    }

                    const expanded = expandedMobile === link.label
                    return (
                      <div key={link.path}>
                        <button
                          onClick={() => setExpandedMobile(expanded ? null : link.label)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                            isLinkActive(link) ? 'text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
                          }`}
                          aria-expanded={expanded}
                        >
                          {link.label}
                          <ChevronDown size={16} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-3"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  href={child.path}
                                  className={`block py-2.5 px-4 rounded-lg text-sm transition-colors ${
                                    pathname === child.path || pathname.startsWith(`${child.path}/`)
                                      ? 'text-emerald-700 font-semibold bg-emerald-50'
                                      : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
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
