'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import {
  Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2,
  Calculator, HardHat, FileText, Zap, Shield, Award, Map, ArrowRight,
  Linkedin, Instagram, Twitter, Youtube
} from 'lucide-react'
import SectionHeader from '../../src/components/SectionHeader'
import InnerPageHero from '../../src/components/InnerPageHero'
import { company, cities } from '../../src/data/seed'
import { fadeLeft, fadeRight } from '../../src/lib/animations'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    roofType: '',
    bill: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const roofTypes = [
    'Select Roof Type...',
    'Residential Flat Roof',
    'Residential Pitched Roof',
    'Commercial Flat Roof',
    'Industrial Tin Shed',
    'Ground Mount / Farm',
  ]

  const processSteps = [
    { icon: <Phone size={24} />, title: '1. Initial Consultation', desc: 'Discuss your power needs and roof space with our experts over a quick call.' },
    { icon: <HardHat size={24} />, title: '2. Free Site Survey', desc: 'Our engineers visit your property for structural & shadow analysis.' },
    { icon: <Calculator size={24} />, title: '3. Custom Engineering', desc: 'Receive a 3D system design and a precision ROI/savings report.' },
    { icon: <Zap size={24} />, title: '4. Rapid Deployment', desc: 'We install your system, handle all DISCOM paperwork, and activate.' },
  ]

  const reasons = [
    { icon: <Shield size={24} />, title: 'BIS Certified Components', desc: 'We use only Tier-1, government-approved solar panels and hybrid inverters.' },
    { icon: <Award size={24} />, title: 'In-House Engineers', desc: 'No sub-contractors. Our certified team handles your project from start to finish.' },
    { icon: <FileText size={24} />, title: 'Hassle-Free Subsidies', desc: 'We manage 100% of the MNRE subsidy paperwork and DISCOM net-metering approvals.' },
  ]

  return (
    <main>
      {/* Hero Section */}
      <InnerPageHero
        label="CONTACT"
        title="Let's Start Your Solar Journey"
        highlightWords={['Solar', 'Journey']}
        subtitle="Connect With Our Engineering Experts"
        description="Reach out via any channel below. Our technical team typically responds within 2-4 hours. Operations run Monday to Saturday, 9 AM to 6 PM."
        imagePath="/hero 2.png"
      />

      {/* Process Section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="YOUR JOURNEY"
            title="The Solar Consultation Process"
            subtitle="Zero Hassle. Complete Transparency."
            description="From your first call to flipping the switch, we make transitioning to clean energy an effortless and highly transparent engineering process."
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-slate-100" />
                )}
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center text-emerald-600 mb-6 relative z-10 border-4 border-white shadow-sm">
                  {step.icon}
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Image */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeLeft} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/contact/consultation.png" alt="Solar Consultation" width={1024} height={1024} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium">Expert consultants analyzing 3D roof profiles for maximum efficiency.</p>
              </div>
            </motion.div>
            <motion.div {...fadeRight}>
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Guarantee</span>
              <h3 className="font-heading font-bold text-4xl text-slate-900 mt-2 leading-tight">Why Choose Our Solar Team?</h3>
              <p className="text-slate-600 mt-4 text-lg">
                We are more than installers; we are energy consultants. We engineer systems designed to eliminate your power bill and provide reliable backup for decades.
              </p>
              <div className="mt-8 space-y-8">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-white shadow-sm border border-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{reason.title}</h4>
                      <p className="text-slate-600 mt-1">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Form & Options */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="TAKE ACTION"
            title="Book Your Free Solar Assessment"
            subtitle="Start Your Transition Today"
            description="Our engineering team is ready to analyze your energy profile and deliver a comprehensive rooftop feasibility study."
          />
          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            {/* Form */}
            <motion.div {...fadeLeft} className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Request an Engineering Visit</h3>
                      <p className="text-slate-500 mb-8">Fill out the details below. Our technical team will review your location and contact you within 4 hours.</p>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name *</label>
                          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Rahul Mehta" className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required />
                        </div>
                        <div>
                          <label className="text-sm font-bold text-slate-700 mb-2 block">Phone Number *</label>
                          <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required />
                        </div>
                        <div>
                          <label className="text-sm font-bold text-slate-700 mb-2 block">City / District *</label>
                          <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} placeholder="e.g. Rajkot" className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required />
                        </div>
                        <div>
                          <label className="text-sm font-bold text-slate-700 mb-2 block">Roof Type *</label>
                          <select value={formData.roofType} onChange={(e) => setFormData({ ...formData, roofType: e.target.value })} className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required>
                            {roofTypes.map((r, i) => <option key={i} value={r} disabled={i === 0}>{r}</option>)}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-sm font-bold text-slate-700 mb-2 block">Monthly Electricity Bill (Rs) *</label>
                          <input type="number" value={formData.bill} onChange={(e) => setFormData({ ...formData, bill: e.target.value })} placeholder="e.g. 4500" className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-sm font-bold text-slate-700 mb-2 block">Project Details (Optional)</label>
                          <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} placeholder="Tell us about your property or specific requirements..." className="w-full bg-slate-50 rounded-xl border border-slate-200 px-4 py-3.5 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none" />
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-4 text-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70">
                        {isSubmitting ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting...</>
                        ) : (
                          <>Book Free Assessment <ArrowRight size={20} /></>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                      <CheckCircle2 size={64} className="text-emerald-500 mx-auto" />
                      <h3 className="font-heading font-bold text-3xl text-slate-900 mt-6">Assessment Booked!</h3>
                      <p className="text-slate-600 mt-4 text-lg">
                        Thank you, {formData.name}. Our engineering team is reviewing your details and will call you at {formData.phone} shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Options */}
            <motion.div {...fadeRight} className="lg:col-span-2 flex flex-col gap-6">
              <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello LGPSM, I want to book a solar consultation.')}`} target="_blank" rel="noopener noreferrer" className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#25D366] hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-[#25D366]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp Chat</h4>
                    <p className="text-slate-500 text-sm mt-1">Instant response (Under 1 hour)</p>
                  </div>
                </div>
              </a>
              <a href="tel:+919999900000" className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Support</h4>
                    <p className="text-slate-500 text-sm mt-1">+91 99999 00000 (9 AM - 6 PM)</p>
                  </div>
                </div>
              </a>
              <a href="mailto:info@lgpsm.com" className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-500 text-sm mt-1">info@lgpsm.com</p>
                  </div>
                </div>
              </a>

              {/* Service Coverage Card */}
              <div className="bg-slate-900 rounded-2xl p-8 mt-auto text-white shadow-xl">
                <Map size={32} className="text-emerald-400 mb-4" />
                <h4 className="font-bold text-xl">Gujarat Service Coverage</h4>
                <p className="text-slate-400 mt-2 text-sm">We provide end-to-end solar installations across 6 major cities and 33 districts in Gujarat.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cities.map((city, i) => (
                    <span key={i} className="bg-white/10 text-xs px-3 py-1 rounded-full">{city.name}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office & Map */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeLeft}>
              <SectionHeader 
                eyebrow="HEADQUARTERS" 
                title="Visit Our Office" 
                subtitle="Gujarat's Premier Solar Hub"
                centered={false} 
              />
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mt-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">LGPSM Solar Headquarters</h4>
                      <p className="text-slate-600 mt-1">42, Solar Park, Kalawad Road<br />Rajkot, Gujarat 360001</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Operating Hours</h4>
                      <p className="text-slate-600 mt-1">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed (24/7 Emergency WhatsApp Support)</p>
                    </div>
                  </li>
                </ul>
                <div className="flex gap-4 mt-8 pt-8 border-t border-slate-100">
                  {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-slate-500 transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeRight} className="h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative">
              <iframe
                src="https://maps.google.com/maps?q=Rajkot,Gujarat&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                title="LGPSM Solar Headquarters Map"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Ready to Eliminate Your Power Bill?</h2>
          <p className="text-emerald-100 mt-6 text-xl">Join thousands of households and businesses in Gujarat running on pure solar energy.</p>
          <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello, I am ready to start my solar journey.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-1 mt-10">
            Start Your Journey <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
