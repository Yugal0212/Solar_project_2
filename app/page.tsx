'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Sun, Zap, IndianRupee, CheckCircle2, Award, ArrowRight, Phone,
  Home as HomeIcon, Building2, Factory,
  Wrench, Battery, Smartphone, PhoneCall, Ruler, HardHat,
  TrendingDown, Shield, Activity, Mail
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import SectionHeader from '../src/components/SectionHeader'
import HomeProductShowcase from '../src/components/HomeProductShowcase'
import SolarCalculator from '../src/components/SolarCalculator'
import TestimonialCarousel from '../src/components/TestimonialCarousel'
import { partners } from '../src/data/seed'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerChild, PREMIUM_EASE, staggerTextContainer, textReveal } from '../src/lib/animations'

export default function HomePage() {
  const router = useRouter()
  // Removed heavy GSAP lazy-loading for better performance.
  // We now use Framer Motion directly on the SVG line below.

  const services = [
    { icon: <HomeIcon size={22} className="text-emerald-600" />, title: 'Residential Solar', desc: 'Custom rooftop solar systems for homes, apartments, and bungalows. Systems from 1kW to 10kW, designed around your actual consumption.', tag: '1kW - 10kW' },
    { icon: <Building2 size={22} className="text-emerald-600" />, title: 'Commercial Solar', desc: 'Large-scale installations for offices, showrooms, and retail stores. Reduce your business electricity cost by 60-75% with guaranteed ROI.', tag: '10kW - 500kW' },
    { icon: <Factory size={22} className="text-blue-600" />, title: 'Industrial Solar', desc: 'Megawatt-scale ground-mounted and rooftop systems for factories and warehouses. Leverage accelerated depreciation for maximum tax benefits.', tag: '500kW - 5MW' },
    { icon: <Wrench size={22} className="text-emerald-600" />, title: 'Solar Maintenance (AMC)', desc: 'Annual maintenance contracts covering cleaning, health checks, inverter diagnostics, and 24-hour emergency support. Keep your system at 100%.', tag: 'From Rs 3,000/year' },
    { icon: <Battery size={22} className="text-blue-600" />, title: 'Battery Storage', desc: 'Lithium-ion backup systems for uninterrupted power supply. Eliminate outage anxiety and maximise self-consumption with 5kWh - 20kWh storage.', tag: '5kWh - 20kWh' },
    { icon: <Smartphone size={22} className="text-emerald-600" />, title: 'Smart Monitoring App', desc: 'Real-time energy generation, consumption, and savings data on your phone. Instant fault alerts, monthly reports, and lifetime remote support.', tag: 'iOS & Android' },
  ]

  const processSteps = [
    { icon: <PhoneCall size={20} />, num: '01', title: 'Free Consultation', desc: 'Call us, WhatsApp us, or fill our form. Our expert calls you back within 2 hours to understand your requirements.' },
    { icon: <Ruler size={20} />, num: '02', title: 'Site Survey & Design', desc: 'Our engineer visits your site - free of charge. We assess your roof, shadow analysis, consumption, and design your custom system.' },
    { icon: <HardHat size={20} />, num: '03', title: 'Professional Installation', desc: 'Our certified team installs your complete solar system in 1-3 days with minimal disruption. All wiring, mounting, and testing included.' },
    { icon: <CheckCircle2 size={20} />, num: '04', title: 'Go Live & Monitor', desc: 'System goes live. You get our monitoring app, net metering paperwork is handled by us, and you start saving from day one.' },
  ]

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative min-h-[85vh] flex flex-col overflow-hidden bg-slate-900"
      >
        {/* Desktop / tablet: full-bleed background image with overlay text */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="hero-bg-img hidden md:block absolute inset-0 z-0 origin-center overflow-hidden bg-slate-900"
        >
          <div className="absolute inset-[-5%]">
            <Image
              src="/hero-desktop-optimized.png"
              alt=""
              aria-hidden="true"
              priority
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Mobile: full-bleed background image with the text overlaid on top */}
        <div className="md:hidden absolute inset-0 z-0 overflow-hidden bg-slate-900">
          <Image
            src="/hero-mobile-optimized.png"
            alt=""
            aria-hidden="true"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile readability scrim (dark at top behind navbar/headline and at the
            bottom behind the CTAs, lighter in the middle to show the subject) */}
        <div
          className="md:hidden absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,31,58,0.7) 0%, rgba(11,31,58,0.35) 35%, rgba(11,31,58,0.4) 65%, rgba(11,31,58,0.85) 100%)',
          }}
        />

        {/* Overlay gradients are only needed behind the desktop overlay text */}
        <div
          className="hidden md:block absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(90deg, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.6) 35%, rgba(11,31,58,0.2) 70%, transparent 100%)',
          }}
        />

        <div
          className="hidden md:block absolute top-0 left-0 right-0 h-40 z-[1] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(11,31,58,0.35) 0%, transparent 100%)' }}
        />

        <div className="relative z-10 flex-1 flex items-start px-6 lg:px-16 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 max-w-screen-2xl mx-auto w-full">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="whileInView"
              className="max-w-[800px] w-full text-left"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-full px-5 py-2 mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-sm font-semibold tracking-wide">India&apos;s Trusted Solar Energy Partner</span>
              </motion.div>

              <motion.h1
                variants={staggerTextContainer}
                className="text-white font-black leading-[1.05] tracking-tight mb-5 max-w-[800px] [text-shadow:_0_4px_25px_rgba(0,0,0,0.35)]"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
              >
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block">Powering</motion.span></div>{' '}
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block">Tomorrow</motion.span></div><br/>
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block">With</motion.span></div>{' '}
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block">Smart</motion.span></div>{' '}
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block text-[#22C55E]">Solar</motion.span></div><br/>
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block text-[#22C55E]">Energy</motion.span></div>{' '}
                <div className="overflow-hidden inline-block pb-2"><motion.span variants={textReveal} className="inline-block">Solutions</motion.span></div>
              </motion.h1>

              <motion.p
                variants={staggerTextContainer}
                className="text-[rgba(255,255,255,0.95)] text-[22px] leading-[1.6] mb-10 max-w-[650px] font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.25)] flex flex-wrap"
              >
                {['Helping', 'homeowners,', 'businesses,', 'and', 'industries', 'reduce', 'electricity', 'costs', 'and', 'embrace', 'a', 'cleaner,', 'more', 'sustainable', 'future', 'through', 'advanced', 'solar', 'technology.'].map((word, i) => (
                  <div key={i} className="overflow-hidden inline-block mr-1.5 pb-1">
                    <motion.span variants={textReveal} className="inline-block">{word}</motion.span>
                  </div>
                ))}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => router.push('/contact')}
                  className="flex items-center gap-2 bg-[#16A34A] hover:bg-green-700 text-white font-semibold rounded-full px-7 py-3.5 shadow-[0_8px_20px_rgba(22,163,74,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  Get a Quote <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => router.push('/products')}
                  className="bg-transparent backdrop-blur-[12px] border-2 border-[rgba(255,255,255,0.25)] text-white font-semibold rounded-full px-7 py-3.5 hover:bg-[rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  Explore Solutions
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6"
              >
                <a href="#calculator" onClick={(e) => { e.preventDefault(); router.push('/why-solar') }} className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 w-max transition-colors">
                  Calculate My Solar Savings <ArrowRight size={14} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 mt-10"
              >
                {['MNRE Approved', '25 Year Warranty', 'Expert Installation'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-full px-3 py-1.5 text-white/90 text-[11px] font-medium tracking-wide">
                    <CheckCircle2 size={12} className="text-[#22C55E]" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[400px] mt-12 lg:mt-0 bg-black/40 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-white/10 shadow-2xl"
            >
              {[
                { title: 'Residential Solar', desc: 'Rooftop systems for homes', icon: <HomeIcon size={24} className="text-[#22C55E] mb-3" /> },
                { title: 'Commercial Solar', desc: 'Large-scale business solutions', icon: <Building2 size={24} className="text-[#22C55E] mb-3" /> },
                { title: 'Government Subsidy', desc: 'Up to 40% PM Surya Ghar benefits', icon: <IndianRupee size={24} className="text-amber-400 mb-3" />, special: true },
                { title: 'Free Site Survey', desc: 'Expert consultation & 3D planning', icon: <Ruler size={24} className="text-[#22C55E] mb-3" /> },
              ].map((card, i) => (
                <div key={i} className={`bg-[rgba(11,31,58,0.65)] backdrop-blur-[20px] border ${card.special ? 'border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.15)]' : 'border-[rgba(255,255,255,0.15)]'} p-5 rounded-2xl flex flex-col items-center justify-center text-center h-[150px] hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden`}>
                  {card.special && <div className="absolute top-0 right-0 w-12 h-12 bg-amber-400/10 rounded-bl-full" />}
                  {card.icon}
                  <div className="text-[15px] font-bold text-white mb-2 leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[12px] text-white/75 font-medium leading-relaxed">
                    {card.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 cursor-pointer scroll-bounce-anim"
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

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="section-pad bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-3 block">Service Infrastructure</span>
              <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-[#0B1F3A] leading-tight">
                Comprehensive Engineering Solutions
              </h2>
            </div>
            <p className="text-slate-600 text-lg max-w-md border-l-2 border-[#22C55E] pl-6 py-2">
              End-to-end solar infrastructure deployment, from initial site telemetry to lifetime maintenance contracts.
            </p>
          </div>

          <motion.div
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...staggerChild}
                className="bg-white rounded-none border border-slate-200 p-8 hover:border-[#22C55E] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1F3A] to-[#22C55E] -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F3A] mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">SPEC_ID: 104{i}</span>
                  <span className="inline-block bg-slate-100 text-[#0B1F3A] border border-slate-200 text-[11px] px-3 py-1 font-bold uppercase tracking-wide">
                    {service.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <button
              onClick={() => router.push('/services')}
              className="inline-flex items-center gap-2 border border-[#0B1F3A] text-[#0B1F3A] rounded-none px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#0B1F3A] hover:text-white transition-all"
            >
              View Full Service Specs <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

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
