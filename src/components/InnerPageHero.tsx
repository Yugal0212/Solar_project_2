'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronRight, SunMedium, ShieldCheck, Users, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP, gsap } from '../lib/gsap'
import ScrollFloat from './ScrollFloat'

interface InnerPageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  imagePath: string;
  sweepWords?: string[];
  highlightWords?: string[];
  breadcrumbs?: { label: string; path?: string }[];
}

export default function InnerPageHero({ 
  label, 
  title, 
  subtitle,
  description,
  imagePath, 
  sweepWords = [],
  highlightWords = [],
  breadcrumbs
}: InnerPageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const pathNames = (pathname || '').split('/').filter((x) => x)

  useGSAP(() => {
    // Parallax background
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
  }, { scope: heroRef })

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-[600px] lg:min-h-[700px] flex flex-col justify-center items-center pt-32 pb-12 overflow-hidden"
    >
      <div 
        ref={bgRef}
        className="absolute top-[-10%] left-0 w-full h-[120%] z-0 will-change-transform"
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
      </div>

      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ backgroundColor: 'rgba(5, 12, 22, 0.85)' }} 
      />
      
      <div 
        className="absolute top-0 left-0 w-full h-40 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(5, 12, 22, 0.9) 0%, transparent 100%)' }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-full h-40 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5, 12, 22, 0.6) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-auto flex flex-col items-center justify-center text-center">
        <div className="max-w-[780px] w-full flex flex-col items-center">
          
          <ScrollFloat variant="fade" as="div" className="mb-6" duration={1.2}>
            <div className="flex items-center justify-center gap-2 text-[11px] lg:text-xs font-semibold tracking-wider uppercase text-white/60 mb-5">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              
              {breadcrumbs ? (
                breadcrumbs.map((bc, idx) => {
                  const isLast = idx === breadcrumbs.length - 1
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <ChevronRight size={12} className="text-white/30" />
                      {isLast || !bc.path ? (
                        <span className="text-emerald-400">{bc.label}</span>
                      ) : (
                        <Link href={bc.path} className="hover:text-emerald-400 transition-colors">
                          {bc.label}
                        </Link>
                      )}
                    </div>
                  )
                })
              ) : (
                pathNames.map((segment, idx) => {
                  const path = `/${pathNames.slice(0, idx + 1).join('/')}`
                  const isLast = idx === pathNames.length - 1
                  return (
                    <div key={path} className="flex items-center gap-2">
                      <ChevronRight size={12} className="text-white/30" />
                      {isLast ? (
                        <span className="text-emerald-400">{segment.replace(/-/g, ' ')}</span>
                      ) : (
                        <Link href={path} className="hover:text-emerald-400 transition-colors">
                          {segment.replace(/-/g, ' ')}
                        </Link>
                      )}
                    </div>
                  )
                })
              )}
            </div>

            <div className="inline-flex items-center justify-center gap-3">
              <div className="w-6 h-[1px] bg-emerald-500/50" />
              <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
                {label}
              </span>
              <div className="w-6 h-[1px] bg-emerald-500/50" />
            </div>
          </ScrollFloat>

          <ScrollFloat 
            as="h1" 
            variant={typeof title === 'string' ? 'characters' : 'fade'} 
            className="text-white font-bold text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-tight mb-4"
            sweepWords={sweepWords}
            highlightWords={highlightWords}
            duration={1.0}
            stagger={0.02}
          >
            {title}
          </ScrollFloat>

          {subtitle && (
            <ScrollFloat 
              as="h2" 
              variant="lines" 
              delay={0.2}
              duration={1.2}
              className="text-white font-semibold text-xl md:text-2xl lg:text-[28px] leading-tight mb-6"
            >
              {subtitle}
            </ScrollFloat>
          )}

          {description && (
            <ScrollFloat 
              as="p" 
              variant="lines" 
              delay={0.4}
              duration={1.2}
              className="text-white/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-[640px] mx-auto"
            >
              {description}
            </ScrollFloat>
          )}

        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/10">
        <ScrollFloat variant="fade" delay={0.6} duration={1.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <SunMedium className="text-emerald-500" size={32} strokeWidth={1.5} />
              <div className="text-left">
                <div className="text-white font-bold text-xl lg:text-2xl">50+</div>
                <div className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider font-semibold">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center lg:justify-start lg:pl-8 lg:border-l border-white/10">
              <ShieldCheck className="text-emerald-500" size={32} strokeWidth={1.5} />
              <div className="text-left">
                <div className="text-white font-bold text-xl lg:text-2xl">100%</div>
                <div className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider font-semibold">Quality Assured</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start lg:pl-8 lg:border-l border-white/10">
              <Users className="text-emerald-500" size={32} strokeWidth={1.5} />
              <div className="text-left">
                <div className="text-white font-bold text-xl lg:text-2xl">100+</div>
                <div className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider font-semibold">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start lg:pl-8 lg:border-l border-white/10">
              <HeadphonesIcon className="text-emerald-500" size={32} strokeWidth={1.5} />
              <div className="text-left">
                <div className="text-white font-bold text-xl lg:text-2xl">24/7</div>
                <div className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider font-semibold">Lifetime Support</div>
              </div>
            </div>
          </div>
        </ScrollFloat>
      </div>

    </section>
  )
}
