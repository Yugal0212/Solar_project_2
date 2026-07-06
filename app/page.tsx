'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Sun, Zap, CheckCircle2, Award, ArrowRight, Phone,
  Factory,
  PhoneCall, Ruler, HardHat,
  TrendingDown, Shield, Activity, Mail
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import SectionHeader from '../src/components/SectionHeader'
import HomeProductShowcase from '../src/components/HomeProductShowcase'
import SolarCalculator from '../src/components/SolarCalculator'
import TestimonialCarousel from '../src/components/TestimonialCarousel'
import ServicesShowcase from '../src/components/ServicesShowcase'
import { partners } from '../src/data/seed'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild } from '../src/lib/animations'

export default function HomePage() {
  const router = useRouter()
  
  const heroBgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            const scrolled = window.scrollY
            const yPos = scrolled * 0.2
            heroBgRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const processSteps = [
    { icon: <PhoneCall size={20} />, num: '01', title: 'Free Consultation', desc: 'Call us, WhatsApp us, or fill our form. Our expert calls you back within 2 hours to understand your requirements.' },
    { icon: <Ruler size={20} />, num: '02', title: 'Site Survey & Design', desc: 'Our engineer visits your site - free of charge. We assess your roof, shadow analysis, consumption, and design your custom system.' },
    { icon: <HardHat size={20} />, num: '03', title: 'Professional Installation', desc: 'Our certified team installs your complete solar system in 1-3 days with minimal disruption. All wiring, mounting, and testing included.' },
    { icon: <CheckCircle2 size={20} />, num: '04', title: 'Go Live & Monitor', desc: 'System goes live. You get our monitoring app, net metering paperwork is handled by us, and you start saving from day one.' },
  ]

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-slate-900">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes floatDust {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { transform: translateY(-120px) translateX(60px) scale(1.5); opacity: 0; }
          }
          .dust-particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: floatDust 15s infinite linear;
            will-change: transform, opacity;
            transform: translateZ(0);
          }
          @keyframes heroEnter {
            0% { opacity: 0; transform: scale(1.03) translateZ(0); }
            100% { opacity: 1; transform: scale(1) translateZ(0); }
          }
          @keyframes heroBgMotion {
            0% { transform: scale(1) translateX(0) translateZ(0); }
            50% { transform: scale(1.03) translateX(18px) translateZ(0); }
            100% { transform: scale(1.06) translateX(0) translateZ(0); }
          }
          .hero-bg-anim {
            animation: 
              heroEnter 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.1s backwards,
              heroBgMotion 30s ease-in-out 2.0s infinite alternate;
            will-change: transform, opacity;
          }
        `}} />

        {/* Cinematic Parallax Background */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 z-0 origin-center overflow-hidden bg-slate-900 will-change-transform contain-paint"
          style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-[-10%] hero-bg-anim" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
            <Image
              src="/hero_new2.webp"
              alt="Premium Solar Installation"
              priority
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Readability Scrims */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/70 to-transparent pointer-events-none md:w-[70%]" />
        
        {/* Tiny Floating Dust Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden hidden md:block">
          <div className="dust-particle w-1.5 h-1.5 left-[20%] top-[40%]" style={{ animationDelay: '0s' }} />
          <div className="dust-particle w-1 h-1 left-[35%] top-[60%]" style={{ animationDelay: '3s', animationDuration: '18s' }} />
          <div className="dust-particle w-2 h-2 left-[15%] top-[70%]" style={{ animationDelay: '7s', animationDuration: '22s' }} />
          <div className="dust-particle w-1.5 h-1.5 left-[45%] top-[30%]" style={{ animationDelay: '11s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-6 lg:px-12 pt-32 pb-20 max-w-[88rem] mx-auto w-full">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { delayChildren: 1.1, staggerChildren: 0.12 } }
            }}
            className="w-full flex flex-col justify-center max-w-[750px] text-left"
          >
            {/* Premium Glass Badge */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 will-change-transform w-max"
            >
              <span className="text-xl leading-none">🌿</span>
              <span className="text-white text-sm font-bold tracking-wide">India&apos;s Trusted Solar Startup</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-white font-[800] leading-[1.1] tracking-[-0.03em] mb-6 max-w-[700px]" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
              <span className="block overflow-hidden pb-1 lg:pb-2"><motion.span variants={{ initial: { y: "100%", opacity: 0 }, animate: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="block will-change-transform">Power Your Home &amp; Business</motion.span></span>
              <span className="block overflow-hidden pb-1 lg:pb-2"><motion.span variants={{ initial: { y: "100%", opacity: 0 }, animate: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="block will-change-transform">With Clean <span className="text-emerald-400">Solar Energy</span></motion.span></span>
            </h1>

            {/* Description */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-slate-200 text-lg leading-relaxed mb-10 max-w-[560px] font-medium will-change-transform"
            >
              Smart rooftop solar solutions designed for homes and businesses. Reduce electricity bills with reliable installations and expert guidance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              className="flex flex-wrap items-center gap-4 will-change-transform"
            >
              <button
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-3 bg-emerald-500 text-white font-[700] rounded-full px-8 h-[56px] shadow-[0_4px_14px_rgba(16,185,129,0.2)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.4),0_0_12px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-[180ms] text-[16px]"
              >
                Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-[180ms]" />
              </button>
              <button
                onClick={() => router.push('/products')}
                className="group flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-[700] rounded-full px-8 h-[56px] hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15),0_0_12px_rgba(255,255,255,0.1)] transition-all duration-[180ms] text-[16px]"
              >
                Explore Solutions
              </button>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-14 text-[13px] md:text-[14px] text-white/90 font-medium max-w-[600px] will-change-transform"
            >
              {[
                'Free Site Survey',
                'MNRE Subsidy Guidance',
                'Premium Components',
                'Professional Installation',
                'Customer Support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-default">
                  <CheckCircle2 size={16} className="text-emerald-400 group-hover:rotate-12 transition-transform duration-[180ms]" /> {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 cursor-pointer scroll-bounce-anim opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1.5">
            <div className="w-1 h-2 bg-white rounded-full scroll-dot-anim" />
          </div>
        </div>
      </section>

      {/* ========== PARTNERS TICKER ========== */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-6 font-medium">Trusted Certifications & Technology Partners</p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="mx-6 flex-shrink-0 px-6 h-12 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm font-semibold hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT TEASER ========== */}
      <section className="section-pad bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft} className="relative">
              <div className="rounded-none border border-slate-300 overflow-hidden aspect-[4/3] bg-slate-900 flex items-center justify-center relative p-1 shadow-2xl">
                <div className="absolute inset-1 border border-slate-700 bg-gradient-to-br from-[#0B1F3A] to-[#162f55]" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'luminosity' }} />

                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="eng-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#eng-grid)" />
                </svg>

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="bg-[#22C55E]/10 p-4 rounded-full border border-[#22C55E]/30 mb-4">
                    <Sun size={48} className="text-[#22C55E]" />
                  </div>
                  <div className="text-white font-bold text-2xl tracking-tight uppercase">Gujarat&apos;s Solar Leader</div>
                  <div className="text-emerald-400 font-mono text-sm mt-2 tracking-widest">EST. 2022 // SYSTEM ONLINE</div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-0 sm:-left-6 bg-[#0B1F3A] rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.2)] px-5 py-4 flex items-center gap-3 border-l-4 border-[#22C55E] max-w-[90%] sm:max-w-none">
                <CheckCircle2 size={20} className="text-[#22C55E] shrink-0" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">MNRE Certified</span>
              </div>
              <div className="absolute -top-4 right-0 sm:-right-4 bg-white rounded-none shadow-lg px-4 py-3 flex items-center gap-2 border border-slate-200">
                <Award size={18} className="text-[#0B1F3A] shrink-0" />
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Rajkot HQ</span>
              </div>
            </motion.div>

            <motion.div variants={fadeRight}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#22C55E]"></div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0B1F3A]">Company Overview</span>
              </div>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                Engineering Gujarat&apos;s Clean Energy Future
              </h2>
              <p className="text-slate-600 mt-6 leading-relaxed text-lg">
                Founded in 2022 in Rajkot, LGPSM Solar is an advanced renewable energy engineering firm.
                We design, deploy, and maintain high-efficiency solar infrastructure for residential, commercial, and industrial clients.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  'MNRE Certified Engineers',
                  'Free Site Survey & 3D Design',
                  'Gov. Subsidy Processing',
                  '25-Year Performance Guarantee',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4 hover:border-emerald-400 transition-colors">
                    <CheckCircle2 size={18} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push('/about')}
                className="mt-10 flex items-center gap-2 text-[#0B1F3A] font-bold uppercase tracking-wide hover:text-[#22C55E] group text-sm"
              >
                View Full Specifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== MISSION & VISION (BENTO BOX DESIGN) ========== */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span {...fadeUp} className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Our Core Mission
            </motion.span>
            <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="font-heading font-black text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
              Leading the Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Revolution.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[500px] lg:h-[600px]">

            <motion.div {...fadeUp} className="md:col-span-2 md:row-span-1 bg-white rounded-[32px] p-8 lg:p-12 border border-slate-200 hover:border-emerald-200 transition-colors duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-4 lg:mb-6 relative z-10 leading-snug">
                Making clean energy a standard for everyone in Gujarat.
              </h3>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed relative z-10 max-w-xl">
                We accelerate the region&apos;s transition to sustainable energy through high-precision engineering and customer-centric solar deployments.
              </p>
            </motion.div>

            <motion.div {...fadeLeft} className="md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden shadow-lg relative group h-[400px] md:h-auto">
              <Image src="/premium_mission_solar.png" alt="Solar Engineers" width={1024} height={1024} sizes="(min-width: 768px) 33vw, 100vw" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.3)] mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <TrendingDown className="text-white scale-y-[-1]" size={28} />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-2">15+</div>
                <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Cities Served</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="md:col-span-1 md:row-span-1 bg-emerald-500 rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between shadow-[0_20px_40px_rgba(16,185,129,0.2)] relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <Zap size={160} />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 relative z-10 border border-white/30">
                <Zap className="text-white" size={24} />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-2xl mb-2">Clean Energy</h4>
                <p className="text-emerald-50 text-sm leading-relaxed opacity-90">Reduce your carbon footprint drastically with renewable power.</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="md:col-span-1 md:row-span-1 bg-slate-900 rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between shadow-[0_20px_40px_rgba(15,23,42,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] group-hover:bg-blue-500/30 transition-colors duration-700" />
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 relative z-10 border border-white/10">
                <Shield className="text-blue-400" size={24} />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-2xl mb-2">Reliable Service</h4>
                <p className="text-slate-400 text-sm leading-relaxed">25-year performance warranties and certified engineers.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== PRODUCTS PREVIEW (PREMIUM STORYTELLING) ========== */}
      <HomeProductShowcase />

      {/* ========== WHY CHOOSE US (PREMIUM REDESIGN) ========== */}
      <section className="py-32 bg-white relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

            <motion.div {...fadeRight} className="max-w-xl">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-emerald-100">
                WHY CHOOSE LGPSM SOLAR
              </span>

              <h2 className="font-heading font-black text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
                Why Homeowners & Businesses Choose LGPSM Solar
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We don&apos;t just install solar panels; we engineer reliable, high-yield energy infrastructure with uncompromising precision designed to eliminate your power bill for decades.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {[
                  'Save Up To 80% On Bills',
                  'Government Subsidy Assistance',
                  'Premium Solar Components',
                  'Professional Installation',
                  'Smart Monitoring',
                  'Long-Term Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push('/contact')}
                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">Book Free Consultation</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div {...fadeLeft} className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-slate-100 group">
              <Image
                src="/hero-rooftop-ai.png"
                alt="Premium Solar Installation"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="why-choose-parallax w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            </motion.div>

          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {[
              { icon: <Shield size={24} />, title: "Tier-1 Hardware", desc: "Only BIS-certified, high-efficiency panels and robust string inverters." },
              { icon: <Activity size={24} />, title: "Real-Time Tracking", desc: "Monitor your exact energy production and savings 24/7 via mobile." },
              { icon: <Factory size={24} />, title: "Zero Downtime", desc: "Our rapid 1-3 day deployment ensures minimal disruption to your site." },
              { icon: <Award size={24} />, title: "Lifetime Support", desc: "Comprehensive AMC contracts and dedicated local engineering teams." },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-emerald-100 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3 relative z-10">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-slate-100"
          >
            {[
              { num: "5,000+", label: "Projects Completed" },
              { num: "120MW+", label: "Total Capacity" },
              { num: "98%", label: "Satisfaction Rate" },
              { num: "25-Year", label: "Performance Warranty" },
            ].map((stat, i) => (
              <motion.div variants={fadeUp} key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">{stat.num}</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ========== SOLAR ROI CALCULATOR ========== */}
      <section className="section-pad bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="CALCULATE YOUR SAVINGS"
            title="See Exactly How Much Solar Saves You"
            subtext="Enter your details below and see an instant estimate of your solar savings, payback period, and 25-year return on investment."
          />
          <SolarCalculator />
        </div>
      </section>

      {/* ========== SERVICES SHOWCASE ========== */}
      <ServicesShowcase />

      {/* ========== DEPLOYMENT PROTOCOL ========== */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-3 block">Deployment Protocol</span>
            <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-[#0B1F3A] mb-4">4-Phase Implementation</h2>
            <p className="text-slate-600 text-lg">A strict, engineer-led deployment process ensuring zero-downtime integration and maximum long-term yield.</p>
          </div>

          <div className="relative">
            <svg className="hidden lg:block absolute top-[44px] left-[12.5%] w-[75%] h-[2px] z-0" style={{ overflow: 'visible' }}>
              <line
                x1="0" y1="0" x2="100%" y2="0"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.line
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
                x1="0" y1="0" x2="100%" y2="0"
                stroke="#22C55E"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            >
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={staggerChild}
                  className="relative group"
                >
                  <div className="w-[88px] h-[88px] mx-auto bg-white border-4 border-slate-100 flex flex-col items-center justify-center mb-6 group-hover:border-[#22C55E] transition-colors duration-300 relative z-10 shadow-sm">
                    <span className="font-mono text-xl font-bold text-[#0B1F3A]">{step.num}</span>
                    <div className="w-4 h-1 bg-[#22C55E] mt-1" />
                  </div>

                  <div className="text-center px-2">
                    <h4 className="font-heading font-bold text-[#0B1F3A] text-lg uppercase tracking-wide mb-3">{step.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CLIENT TESTIMONIALS ========== */}
      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="CLIENT SUCCESS STORIES"
            title="What Our Clients Say"
            subtext="Don't just take our word for it. Hear from homeowners, business owners, and industrialists who have already achieved energy independence with LGPSM Solar."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ========== SCHEDULE MEETING CTA ========== */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-slate-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <motion.span variants={fadeUp} className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Start Your Solar Journey
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Cut Your Electricity Bill by 80%?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Get a free site survey and a customized solar engineering plan. No upfront commitment required. Contact us today and let&apos;s build your energy independence.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 hover:scale-[1.02]"
            >
              <PhoneCall size={18} /> Contact Us
            </button>
            <button
              onClick={() => router.push('/services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 rounded-full px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95 hover:scale-[1.02]"
            >
              View Our Services
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-300 border-t border-white/10 pt-8 mt-8 md:inline-flex px-4 md:px-12">
            <a href="tel:+919876543210" className="flex items-center justify-center gap-3 hover:text-emerald-400 transition-colors group">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                <Phone size={18} className="text-emerald-400" />
              </div>
              <span className="font-heading font-semibold text-lg tracking-wide">+91 98765 43210</span>
            </a>

            <div className="hidden sm:block w-px h-8 bg-white/10" />

            <a href="mailto:info@lgpsmsolar.com" className="flex items-center justify-center gap-3 hover:text-emerald-400 transition-colors group">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                <Mail size={18} className="text-emerald-400" />
              </div>
              <span className="font-heading font-semibold text-lg tracking-wide">info@lgpsmsolar.com</span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
