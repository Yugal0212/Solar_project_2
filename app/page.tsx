'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import {
  Sun, Zap, CheckCircle2, Award, ArrowRight,
  Factory,
  PhoneCall,
  TrendingDown, Shield, Activity
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import SectionHeader from '../src/components/SectionHeader'

import { partners } from '../src/data/seed'

const HomeProductShowcase = dynamic(() => import('../src/components/HomeProductShowcase'))
const SolarCalculator = dynamic(() => import('../src/components/SolarCalculator'))
const TestimonialCarousel = dynamic(() => import('../src/components/TestimonialCarousel'))
const ServicesShowcase = dynamic(() => import('../src/components/ServicesShowcase'))
const ProcessStepsGrid = dynamic(() => import('../src/components/ProcessStepsGrid'))

// Hooks
import { useHeroAnimation, useScrollReveal, useCardsAnimation, useStaggerReveal, useHeadingReveal, useBentoAnimation } from '../src/hooks/useAnimations'

export default function HomePage() {
  const router = useRouter()
  
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null)
  const missionRef = useRef<HTMLElement>(null)
  const missionHeadingRef = useRef<HTMLHeadingElement>(null)
  const whyChooseRef = useRef<HTMLElement>(null)
  const whyChooseHeadingRef = useRef<HTMLHeadingElement>(null)
  const whyChooseCardsRef = useRef<HTMLDivElement>(null)
  const deploymentRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const ctaHeadingRef = useRef<HTMLHeadingElement>(null)

  // Apply Premium GSAP Animations
  useHeroAnimation(heroRef)
  
  useHeadingReveal(aboutHeadingRef)
  useHeadingReveal(missionHeadingRef)
  useHeadingReveal(whyChooseHeadingRef)
  useHeadingReveal(ctaHeadingRef)
  
  useCardsAnimation(whyChooseCardsRef, '.group')
  useCardsAnimation(statsRef, '.stat-item')
  
  useStaggerReveal(aboutRef, '.reveal-item')
  useStaggerReveal(whyChooseRef, '.reveal-item')
  
  useBentoAnimation(missionRef, '.reveal-item')
  
  useScrollReveal(aboutRef, 'up')
  useScrollReveal(whyChooseRef, 'up')
  useScrollReveal(deploymentRef, 'up')
  useScrollReveal(ctaRef, 'up')

  // Process steps moved to ProcessStepsGrid component

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section 
        ref={heroRef} 
        className="relative min-h-[100vh] flex flex-col overflow-hidden bg-slate-900" 
        style={{ transform: 'translate3d(0,0,0)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heroBgMotion {
            0% { transform: scale(1) translateX(0) translateZ(0); }
            50% { transform: scale(1.03) translateX(18px) translateZ(0); }
            100% { transform: scale(1.06) translateX(0) translateZ(0); }
          }
          .hero-bg-anim {
            animation: heroBgMotion 30s ease-in-out infinite alternate;
            will-change: transform;
          }
        `}} />

        {/* Cinematic Parallax Background */}
        <div
          className="absolute inset-0 z-0 origin-center overflow-hidden bg-slate-900 will-change-transform contain-paint"
        >
          <div className="absolute inset-[-10%] hero-bg-anim">
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

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-6 lg:px-12 pt-32 pb-20 max-w-[88rem] mx-auto w-full">
          <div className="w-full flex flex-col justify-center max-w-[750px] text-left">
            {/* Premium Glass Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-8 will-change-transform w-max">
              <span className="text-xl leading-none">🌿</span>
              <span className="text-white text-sm font-bold tracking-wide">India&apos;s Trusted Solar Startup</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline text-white font-[800] leading-[1.1] tracking-[-0.03em] mb-6 w-fit" style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}>
              <span className="block hero-title-up">Power your <span className="text-emerald-400">Home</span></span>
              <span className="block hero-title-down mt-2">&amp; your <span className="text-emerald-400">Business</span></span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-slate-200 text-lg leading-relaxed mb-10 max-w-[560px] font-medium will-change-transform">
              Smart rooftop solar solutions designed for homes and businesses. Reduce electricity bills with reliable installations and expert guidance.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap items-center gap-4 will-change-transform">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="group flex items-center justify-center gap-3 bg-emerald-500 text-white font-[700] rounded-full px-8 h-[56px] shadow-[0_4px_14px_rgba(16,185,129,0.2)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.4)] transition-shadow duration-[180ms] text-[16px]"
              >
                Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-[180ms]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/products')}
                className="group flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-[700] rounded-full px-8 h-[56px] hover:bg-white/15 hover:border-white/40 shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-colors duration-[180ms] text-[16px]"
              >
                Explore Solutions
              </motion.button>
            </div>

            {/* Trust Row */}
            <div className="hero-trust flex flex-wrap items-center gap-x-6 gap-y-3 mt-14 text-[13px] md:text-[14px] text-white/90 font-medium max-w-[600px] will-change-transform">
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
            </div>
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
      <section ref={aboutRef} className="section-pad bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            eyebrow="Company Overview"
            title="Engineering Gujarat's Clean Energy Future"
            highlightWords={["Clean", "Energy", "Future"]}
            centered={true}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
            <div className="relative reveal-item">
              <div className="rounded-none border border-slate-300 overflow-hidden aspect-[4/3] bg-slate-900 flex items-center justify-center relative p-1 shadow-2xl">
                <div className="absolute inset-1 border border-slate-700 bg-gradient-to-br from-[#0B1F3A] to-[#162f55]" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'luminosity' }} />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="bg-[#22C55E]/10 p-4 rounded-full border border-[#22C55E]/30 mb-4">
                    <Sun size={48} className="text-[#22C55E]" />
                  </div>
                  <div className="text-white font-bold text-2xl tracking-tight uppercase">Gujarat&apos;s Solar Leader</div>
                  <div className="text-emerald-400 font-mono text-sm mt-2 tracking-widest">EST. 2022 // SYSTEM ONLINE</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-slate-600 leading-relaxed text-lg reveal-item">
                Since 2022, LGPSM Solar has been transforming Gujarat&apos;s energy landscape from our headquarters in Rajkot. We don&apos;t just sell panels—we engineer high-yield, precision solar infrastructure tailored for residential, commercial, and industrial power demands. Our mission is to permanently eliminate your electricity bills through state-of-the-art technology and flawless execution.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  'MNRE Certified Engineers',
                  'Free Site Survey & 3D Design',
                  'Gov. Subsidy Processing',
                  '25-Year Performance Guarantee',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4 hover:border-emerald-400 transition-colors reveal-item">
                    <CheckCircle2 size={18} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => router.push('/about')}
                className="mt-10 flex items-center gap-2 text-[#0B1F3A] font-bold uppercase tracking-wide hover:text-[#22C55E] group text-sm reveal-item"
              >
                View Full Specifications <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION (BENTO BOX DESIGN) ========== */}
      <section ref={missionRef} className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader 
            eyebrow="Our Core Mission"
            title="Leading the Solar Revolution."
            highlightWords={["Solar", "Revolution."]}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[500px] lg:h-[600px]">
            <div className="reveal-item md:col-span-2 md:row-span-1 bg-white rounded-[32px] p-8 lg:p-12 border border-slate-200 hover:border-emerald-200 transition-colors duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-4 lg:mb-6 relative z-10 leading-snug">
                Making clean energy a standard for everyone in Gujarat.
              </h3>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed relative z-10 max-w-xl">
                We accelerate the region&apos;s transition to sustainable energy through high-precision engineering and customer-centric solar deployments.
              </p>
            </div>

            <div className="reveal-item md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden shadow-lg relative group h-[400px] md:h-auto">
              <Image src="/premium_mission_solar.png" alt="Solar Engineers" width={1024} height={1024} sizes="(min-width: 768px) 33vw, 100vw" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.3)] mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <TrendingDown className="text-white scale-y-[-1]" size={28} />
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-2">15+</div>
                <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Cities Served</div>
              </div>
            </div>

            <div className="reveal-item md:col-span-1 md:row-span-1 bg-emerald-500 rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between shadow-[0_20px_40px_rgba(16,185,129,0.2)] relative overflow-hidden group">
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
            </div>

            <div className="reveal-item md:col-span-1 md:row-span-1 bg-slate-900 rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between shadow-[0_20px_40px_rgba(15,23,42,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] group-hover:bg-blue-500/30 transition-colors duration-700" />
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 relative z-10 border border-white/10">
                <Shield className="text-blue-400" size={24} />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-2xl mb-2">Reliable Service</h4>
                <p className="text-slate-400 text-sm leading-relaxed">25-year performance warranties and certified engineers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeProductShowcase />

      {/* ========== WHY CHOOSE US ========== */}
      <section ref={whyChooseRef} className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div className="max-w-xl">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-emerald-100">
                WHY CHOOSE LGPSM SOLAR
              </span>
              <h2 ref={whyChooseHeadingRef} className="font-heading font-black text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight tracking-tight sweep-text">
                Why Homeowners & Businesses Choose LGPSM Solar
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 reveal-item">
                We don&apos;t just install solar panels; we engineer reliable, high-yield energy infrastructure with uncompromising precision designed to eliminate your power bill for decades.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all duration-300 reveal-item"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">Book Free Consultation</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-slate-100 group">
              <Image
                src="/hero-rooftop-ai.png"
                alt="Premium Solar Installation"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <div ref={whyChooseCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: <Shield size={24} />, title: "Tier-1 Hardware", desc: "Only BIS-certified, high-efficiency panels and robust string inverters." },
              { icon: <Activity size={24} />, title: "Real-Time Tracking", desc: "Monitor your exact energy production and savings 24/7 via mobile." },
              { icon: <Factory size={24} />, title: "Zero Downtime", desc: "Our rapid 1-3 day deployment ensures minimal disruption to your site." },
              { icon: <Award size={24} />, title: "Lifetime Support", desc: "Comprehensive AMC contracts and dedicated local engineering teams." },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-emerald-100 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3 relative z-10">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-slate-100">
            {[
              { num: "5,000+", label: "Projects Completed" },
              { num: "120MW+", label: "Total Capacity" },
              { num: "98%", label: "Satisfaction Rate" },
              { num: "25-Year", label: "Performance Warranty" },
            ].map((stat, i) => (
              <div key={i} className="stat-item text-center">
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">{stat.num}</div>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="CALCULATE YOUR SAVINGS"
            title="See Exactly How Much Solar Saves You"
            highlightWords={["Solar", "Saves", "You"]}
            subtitle="Data-Driven Solar Feasibility"
            description="Enter your monthly bill and roof space to instantly calculate your projected solar generation, ROI timeline, and 25-year cumulative financial savings."
          />
          <SolarCalculator />
        </div>
      </section>

      <ServicesShowcase />

      <section ref={deploymentRef} className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Deployment Protocol"
            title="4-Phase Implementation"
            highlightWords={["4-Phase"]}
            description="A strict, engineer-led deployment process ensuring zero-downtime integration and maximum long-term yield."
          />

          <ProcessStepsGrid />
        </div>
      </section>

      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="CLIENT SUCCESS STORIES"
            title="What Our Clients Say"
            highlightWords={["Clients", "Say"]}
            subtitle="Join 1,000+ Energy Independent Families"
            description="Don't just take our word for it. Hear directly from the homeowners, business owners, and industrialists who have permanently eliminated their electricity bills with LGPSM Solar."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-slate-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Start Your Solar Journey
          </span>
          <h2 ref={ctaHeadingRef} className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-6 sweep-text-white">
            Ready to Cut Your Electricity Bill by 80%?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Get a free site survey and a customized solar engineering plan. No upfront commitment required. Contact us today and let&apos;s build your energy independence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-white rounded-full px-8 py-4 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              <PhoneCall size={18} /> Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 rounded-full px-8 py-4 font-bold uppercase tracking-widest transition-all"
            >
              View Our Services
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}
