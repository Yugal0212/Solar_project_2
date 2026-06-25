'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface InnerPageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  imagePath: string;
}

export default function InnerPageHero({ label, title, subtitle, imagePath }: InnerPageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Generate current page name for breadcrumb
  const pathNames = (pathname || '').split('/').filter((x) => x)
  const currentPage = pathNames.length > 0 ? pathNames[pathNames.length - 1].replace('-', ' ') : 'Page'

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(bgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-[400px] lg:min-h-[480px] flex flex-col justify-end pt-32 pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Background Image Container with Parallax and Zoom */}
      <div 
        ref={bgRef}
        className="absolute top-[-10%] left-0 w-full h-[120%] z-0"
      >
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ willChange: 'transform' }}
        >
          <Image
            src={imagePath}
            alt=""
            aria-hidden="true"
            priority
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Dark Navy Overlay for Text Readability */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ backgroundColor: 'rgba(11,31,58,0.55)' }}
      />
      
      {/* Top Gradient for Navbar */}
      <div 
        className="absolute top-0 left-0 w-full h-32 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(11,31,58,0.6) 0%, transparent 100%)' }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-auto">
        <div className="max-w-[700px]">
          
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-2 text-[11px] lg:text-xs font-semibold tracking-wider uppercase text-white/70 mb-4"
          >
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-white/40" />
            <span className="text-emerald-400">{currentPage}</span>
          </motion.div>

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[2px] bg-emerald-500" />
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">
              {label}
            </span>
          </motion.div>

          {/* Large Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 drop-shadow-sm"
          >
            {title}
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-white/80 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-[600px]"
          >
            {subtitle}
          </motion.p>

        </div>
      </div>
    </section>
  )
}
