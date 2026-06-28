'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import { company } from '../data/seed'
import { services } from '../data/services'
import { locations } from '../data/locations'

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1F3A] text-white overflow-hidden border-t border-white/10">
      {/* Generated AI Green Abstract Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url(/images/ui/green-abstract.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Top Accent Line */}
      <div className="relative z-10 h-[3px] bg-gradient-to-r from-transparent via-[#22C55E] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <span className="font-heading font-extrabold text-3xl gradient-text">LGPSM</span>
            <p className="text-sm text-primary-200 mt-2">{company.tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering Gujarat&apos;s transition to clean, sustainable energy through expert solar engineering and premium installations.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-700 flex items-center justify-center hover:bg-brand-gradient hover:border-transparent transition-all group"
                >
                  <Icon size={16} className="text-primary-200 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent-400 mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-primary-100/75 hover:text-accent-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent-400 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-primary-100/75 hover:text-accent-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent-400 mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span className="text-primary-100/75">42, Solar Park, Kalawad Road, Rajkot, Gujarat 360001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-accent-500 flex-shrink-0" />
                <a href="tel:+919999900000" className="text-primary-100/75 hover:text-accent-400 transition-colors">
                  +91 99999 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-accent-500 flex-shrink-0" />
                <a href="mailto:info@lgpsm.com" className="text-primary-100/75 hover:text-accent-400 transition-colors">
                  info@lgpsm.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-accent-500 flex-shrink-0" />
                <span className="text-primary-100/75">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello LGPSM Solar, I am interested in solar installation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:brightness-110 transition-all"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Service Locations */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <h4 className="text-xs font-bold tracking-widest uppercase text-accent-400 mb-4">Solar Installation Locations</h4>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="text-sm text-primary-100/75 hover:text-accent-400 transition-colors"
              >
                {l.isStateLevel ? 'Gujarat (Statewide)' : `Solar in ${l.city}`}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-200/50">
            © 2025 LGPSM Solar Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-primary-200/50">
            <Link href="/privacy-policy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-accent-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/sitemap" className="hover:text-accent-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
