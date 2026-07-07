'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
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
  const [isAppReady, setIsAppReady] = useState(false)
  const pathname = usePathname()

  const isDarkText = false // Force light text since navbar will be dark glass

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
      const shouldBeScrolled = window.scrollY > 50
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

  useEffect(() => {
    const handleAppReady = () => setIsAppReady(true)
    if (sessionStorage.getItem('hasSeenPreloader')) {
      setIsAppReady(true)
    } else {
      window.addEventListener('app-ready', handleAppReady)
    }
    
    // Fallback if event is missed
    const timer = setTimeout(() => setIsAppReady(true), 1500)
    
    return () => {
      window.removeEventListener('app-ready', handleAppReady)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed z-[999] transition-all ease-out ${
          isAppReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        } ${
          isScrolled 
            ? 'top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 max-w-[88rem] mx-auto h-[74px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full duration-[250ms]' 
            : 'top-0 left-0 right-0 h-[84px] bg-transparent border-b border-transparent duration-[800ms]'
        }`}
      >
        <div className="max-w-[88rem] h-full mx-auto flex items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2.5 group drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-transform duration-[250ms] origin-left ${isScrolled ? 'scale-95' : 'scale-100'}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-[250ms] ${
              isScrolled ? 'bg-emerald-600' : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Zap size={18} className="text-white" fill="currentColor" />
            </div>
            <div>
              <span className={`font-heading font-black tracking-tight transition-all duration-[250ms] ${isScrolled ? 'text-xl text-slate-900' : 'text-2xl text-white'}`}>
                LGPSM
              </span>
              <span className={`block text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-[250ms] -mt-0.5 ${
                isScrolled ? 'text-emerald-600' : 'text-white/80'
              }`}>
                Solar Energy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isLinkActive(link)
              const linkClasses = `relative flex items-center gap-1.5 py-2 text-[16px] font-[600] transition-colors duration-[250ms] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#22C55E] after:origin-left after:transition-transform after:duration-[250ms] hover:after:scale-x-100 ${
                active
                  ? (isScrolled ? 'text-emerald-600 after:scale-x-100' : 'text-white after:scale-x-100')
                  : (isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-[rgba(255,255,255,0.92)] hover:text-[#22C55E]')
              }`

              if (!link.children) {
                return (
                  <Link key={link.path} href={link.path} className={linkClasses}>
                    {link.label}
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
                  </Link>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-3"
                      >
                        <div className="bg-white/95 backdrop-blur-[24px] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/60 py-3 min-w-[240px] overflow-hidden">
                          {link.children.map((child) => {
                            const childActive = pathname === child.path || pathname.startsWith(`${child.path}/`)
                            return (
                              <Link
                                key={child.path}
                                href={child.path}
                                className={`block px-6 py-3 text-[15px] font-[600] transition-colors ${
                                  childActive
                                    ? 'text-emerald-600 bg-emerald-50/50'
                                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
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
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="tel:+919999900000" 
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                isDarkText 
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                  : 'bg-white text-emerald-600 shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
              }`}
              title="Call Us"
            >
              <Phone size={18} strokeWidth={2.5} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/catalog.pdf"
              download="LGPSM-Catalog.pdf"
              className="flex items-center gap-2 bg-[#22C55E] hover:bg-emerald-600 text-white text-base font-bold px-8 h-14 rounded-full shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-colors duration-300"
            >
              Download Catalog <Download size={18} />
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
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
