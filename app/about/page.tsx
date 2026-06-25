'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, animate, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Zap, Target, Building2, Users, FileText, CheckCircle2,
  CalendarDays, Download, Gauge, Leaf
} from 'lucide-react'
import SectionHeader from '../../src/components/SectionHeader'
import InnerPageHero from '../../src/components/InnerPageHero'
import BlueprintGrid from '../../src/components/BlueprintGrid'
import { company, team, certifications, milestones } from '../../src/data/seed'

import { fadeLeft, fadeRight, staggerContainer, staggerChild } from '../../src/lib/animations'

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ value, suffix = '', decimals = 0 }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [isInView, value, prefersReducedMotion])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function AboutPage() {
  const values = [
    { icon: <Shield size={28} className="text-emerald-600" />, title: 'Integrity Above All', desc: "We never oversell capacity and we never hide costs. Every proposal shows exactly what you're getting, what it costs, and what you'll save - down to the rupee." },
    { icon: <Zap size={28} className="text-emerald-600" />, title: 'Engineering Excellence', desc: "We are engineers first. We source only Tier-1 solar technology and install it to strict protocols designed for Gujarat's heat, dust, and monsoon load." },
    { icon: <Target size={28} className="text-emerald-600" />, title: 'Long-Term Partnership', desc: "Solar is a 25-year investment. We monitor your system, handle maintenance, and stay on as your dedicated energy partner long after the panels go up." },
  ]

  const differentiators = [
    { icon: <Building2 className="text-emerald-600" />, title: 'HQ in Rajkot', text: "Based at Solar Park, Kalawad Road. We aren't a faceless national brand; we're local engineers who know Gujarat's grid structure and DISCOM policies inside out." },
    { icon: <FileText className="text-emerald-600" />, title: 'PM Surya Ghar Specialists', text: 'We handle 100% of the government subsidy paperwork. From application to final meter testing, we make sure you receive your full eligible subsidy.' },
    { icon: <Users className="text-emerald-600" />, title: 'In-House Engineering', text: 'We never outsource installations to third-party contractors. Every LGPSM system is designed and installed by our own certified engineering teams.' },
  ]

  const stats = [
    { icon: <Gauge size={26} />, value: company.installs, decimals: 0, suffix: '+', label: 'Rooftop Installations' },
    { icon: <Users size={26} />, value: company.customers, decimals: 0, suffix: '+', label: 'Customers Served' },
    { icon: <Zap size={26} />, value: company.mw, decimals: 1, suffix: ' MW', label: 'Cumulative Capacity Deployed' },
    { icon: <Leaf size={26} />, value: company.co2, decimals: 0, suffix: '+', label: 'Tonnes CO₂ Offset / Year' },
  ]

  return (
    <main className="bg-slate-50">
      {/* G1 - Page Hero */}
      <InnerPageHero
        label="ABOUT US"
        title={<>Pioneering the <span className="text-emerald-400">Solar Revolution</span> in Gujarat</>}
        subtitle="LGPSM Solar is an engineering-driven solar startup founded right here in Rajkot. We design every system from first principles and handle the paperwork end to end, so homes and businesses across Western India can switch to honest, transparent solar power."
        imagePath="/founders.png"
      />

      {/* G2 - Our Detailed Story */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeLeft} className="relative">
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video shadow-md border border-emerald-100">
                <Image src="/about-solar.png" alt="Commercial Solar Installation" width={1024} height={1024} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl"></div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 relative z-10">The LGPSM Standard</h3>
                <div className="space-y-6 relative z-10">
                  {differentiators.map((diff, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center">
                        {diff.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{diff.title}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{diff.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeRight}>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600">Our Foundation</span>
              <h2 className="font-heading font-bold text-4xl text-slate-900 mt-3 leading-tight">
                Started With a Mission, Built on Deep Engineering Trust
              </h2>

              <p className="text-slate-600 mt-6 leading-relaxed text-lg">
                LGPSM Solar began when our Founder & CEO, Arjun Patel, returned to Gujarat after 10 years leading large-scale solar deployments across Europe. Despite Gujarat having over 300 sunny days a year, local solar adoption was bottlenecked by two issues: opaque pricing and inconsistent installation quality.
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed text-lg">
                Partnering with Nisha Shah - an IIT Bombay energy systems engineer - they set up headquarters at Solar Park on Kalawad Road in Rajkot. The goal was never to build a sales agency; it was to build an authentic, engineering-first renewable energy firm.
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed text-lg">
                We stripped away aggressive sales tactics and focused on technical truth: free, honest site surveys; only BIS and MNRE-certified Tier-1 components; and every piece of DISCOM paperwork handled on the client&apos;s behalf. That same discipline now drives our growth across Rajkot, Ahmedabad, Surat, and Morbi.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* G3 - Our Journey */}
      <section className="section-pad bg-emerald-50/30 border-y border-emerald-100">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader
            eyebrow="OUR JOURNEY"
            title="Four Years, Built One Rooftop at a Time"
            subtext="Every line below is a real milestone, on real roofs, somewhere in Gujarat."
          />

          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-emerald-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12"
                >
                  <span className="absolute left-3 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white shadow-sm" />
                  <div className="font-mono text-emerald-600 font-bold text-sm tracking-wide">{m.year}</div>
                  <h4 className="font-heading font-bold text-slate-900 text-lg mt-1">{m.title}</h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-xl">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G4 - By the Numbers */}
      <section className="relative py-20 overflow-hidden bg-emerald-900">
        <BlueprintGrid light opacity={0.15} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-emerald-300 font-bold tracking-[0.2em] uppercase text-sm">By the Numbers</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mt-3">
              What Four Years on Gujarat&apos;s Rooftops Looks Like
            </h2>
          </div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={staggerChild} className="text-center">
                <div className="flex justify-center mb-3 text-emerald-300">{s.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold text-white">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </div>
                <p className="text-emerald-200/80 text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* G5 - Meet the Core Team */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="OUR LEADERSHIP"
            title="The Engineering Minds Powering Our Growth"
            subtext="Meet the core founders and directors leading LGPSM Solar's mission in Gujarat."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl group border border-slate-200"
          >
            <Image src="/about-team.png" alt="LGPSM Engineering Team" width={1024} height={1024} sizes="(min-width: 768px) 66vw, 100vw" className="object-cover w-full aspect-[21/9] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <span className="text-white font-heading font-bold text-2xl drop-shadow-md">Our Core Technical Team</span>
              <p className="text-emerald-50 mt-1 opacity-90 font-medium">In-house engineers, certified and ready to deploy.</p>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 text-center hover:-translate-y-1.5 hover:shadow-md hover:border-emerald-300 transition-all"
              >
                <div className="w-[80px] h-[80px] mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-2xl border-4 border-white shadow-sm">
                  {member.initials}
                </div>
                <h4 className="font-heading font-bold text-slate-900 mt-4 text-lg">{member.name}</h4>
                <span className="inline-block mt-1 text-xs font-semibold rounded-full px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {member.role}
                </span>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* G6 - Our Values */}
      <section className="section-pad bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Operating Principles</span>
            <h2 className="font-heading font-extrabold text-4xl text-slate-900 mb-4">Values That Dictate Our Work</h2>
          </div>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white border border-emerald-100 rounded-2xl p-8 hover:border-emerald-300 transition-colors group"
              >
                <div className="w-14 h-14 bg-emerald-50 shadow-sm rounded-xl flex items-center justify-center border border-emerald-100 mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* G7 - Certifications */}
      <section className="section-pad bg-white border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="CREDENTIALS"
            title="Certified, Approved, and Trusted"
            subtext="LGPSM Solar operates with full regulatory compliance across all major solar and electrical bodies in India."
          />
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm flex items-start gap-4 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 mb-1">{cert.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* G8 - About CTA */}
      <section className="py-24 relative overflow-hidden bg-emerald-900">
        <BlueprintGrid light opacity={0.12} />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight">
            Ready to Partner With Local Experts?
          </h2>
          <p className="text-emerald-100 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Let our Rajkot-based engineers visit your site, free of charge, and show you
            exactly what solar can do for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/contact"
              className="flex justify-center items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/30"
            >
              <CalendarDays size={18} /> Book Free Site Survey
            </Link>
            <a
              href="/catalog.pdf"
              download="LGPSM-Company-Profile.pdf"
              className="flex justify-center items-center gap-3 bg-transparent border-2 border-emerald-400 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-emerald-800 transition-colors"
            >
              <Download size={18} /> Download Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
