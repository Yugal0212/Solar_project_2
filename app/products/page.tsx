'use client'

import { useState, ElementType } from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import {
  Sun, Zap, Battery, Plug, LayoutGrid, Download, Thermometer, Wind, CloudRain, ShieldCheck, CheckCircle2
} from 'lucide-react'
import SectionHeader from '../../src/components/SectionHeader'
import InnerPageHero from '../../src/components/InnerPageHero'
import ProductCard from '../../src/components/ProductCard'
import { products, categoryMeta, productPageAssets } from '../../src/data/seed'

const staggerParent: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const iconMap = { Sun, Zap, Battery, Plug, LayoutGrid }

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  FallbackIcon?: ElementType
}

function ImageWithFallback({ src, alt, className = '', FallbackIcon = Sun }: ImageWithFallbackProps) {
  const [broken, setBroken] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-100 to-amber-100 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <FallbackIcon size={56} className="text-emerald-400/50" />
      </div>
      {!broken && (
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          sizes="160px"
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  )
}

export default function ProductsPage() {
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Products', icon: LayoutGrid },
    ...Object.entries(categoryMeta).map(([id, meta]) => ({
      id,
      label: meta.label,
      icon: iconMap[meta.icon as keyof typeof iconMap] || LayoutGrid,
    })),
  ]

  const allProducts = Object.entries(products).flatMap(([categoryKey, items]) =>
    items.map((p) => ({ ...p, categoryKey }))
  )

  const filteredProducts = filter === 'all'
    ? allProducts
    : allProducts.filter((p) => p.categoryKey === filter)

  const durability = [
    { icon: <Thermometer size={26} className="text-emerald-600" />, title: 'Heat-Rated to 50°C', text: 'Components are de-rated and tested for Gujarat summers, not just lab conditions.' },
    { icon: <Wind size={26} className="text-emerald-600" />, title: 'Wind-Rated Mounting', text: 'Mounting rails rated up to 150 km/h, engineered for coastal and open-field sites.' },
    { icon: <CloudRain size={26} className="text-emerald-600" />, title: 'Monsoon-Sealed', text: "IP65-rated inverters and junction boxes built to handle Gujarat's monsoon months." },
    { icon: <ShieldCheck size={26} className="text-emerald-600" />, title: 'Surge Protected', text: 'Built-in lightning and surge protection on every inverter we install.' },
  ]

  const catalogUpdated = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })

  return (
    <main>
      {/* H1 - Page Hero */}
      <InnerPageHero
        label="PRODUCTS"
        title="Solar Products Built for Extreme Climates"
        highlightWords={['Extreme', 'Climates']}
        subtitle="Uncompromising Tier-1 Hardware"
        description="High-efficiency panels, smart inverters, and lithium storage—every component certified, warrantied, and perfectly matched to your exact energy profile."
        imagePath="/images/products/panel-1.jpg"
        breadcrumbs={[{ label: 'Resources', path: '/resources' }, { label: 'Products' }]}
      />

      {/* H2 - Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((f) => {
              const Icon = f.icon
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === f.id
                      ? 'bg-brand-gradient text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon size={16} /> {f.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* H3 - Product Grid */}
      <section className="py-24 px-4 bg-[#F8FAFC] relative">
        <div className="absolute top-40 left-0 w-[800px] h-[800px] bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-40 right-0 w-[800px] h-[800px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 pb-32">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-slate-500 py-16">No products in this category yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-[10vh]">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex h-full">
                  <ProductCard product={product} layout="vertical" />
                </div>
              ))}
            </div>
          )}

          {/* Trust Elements Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-12 border-t border-slate-200/60"
          >
            {[
              'BIS Certified',
              '25 Year Warranty',
              'MNRE Approved',
              'Premium Components',
              'Installation Support'
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                <CheckCircle2 size={18} className="text-emerald-500" />
                {trust}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* H4 - Built for Gujarat's Climate */}
      <section className="section-pad bg-emerald-50/40 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            eyebrow="DURABILITY"
            title="Engineered for Extreme Climates"
            subtitle="Built to Outlast The Elements"
            description="Every component in our hardware stack is meticulously selected and de-rated for local heat, dust, and heavy monsoon conditions—not just generic spec-sheet numbers."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerParent}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {durability.map((d, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  {d.icon}
                </div>
                <h4 className="font-heading font-bold text-slate-900 mb-2">{d.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* H5 - Catalog Download Banner */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary-900 rounded-3xl p-8 sm:p-12 grid md:grid-cols-[160px_1fr] gap-8 items-center">
            <ImageWithFallback
              src={productPageAssets.catalogCoverImage}
              alt={productPageAssets.catalogCoverAlt}
              FallbackIcon={Download}
              className="hidden md:block w-40 h-52 rounded-xl shadow-lg rotate-[-3deg] mx-auto"
            />
            <div className="text-center md:text-left">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                Want Detailed Specs for Every Product?
              </h2>
              <p className="text-white/80 mt-4 max-w-xl mx-auto md:mx-0">
                Download our complete product catalog with full technical
                datasheets, compatibility charts, and installation requirements for every item.
              </p>
              <a
                href="/catalog.pdf"
                download="LGPSM-Product-Catalog.pdf"
                className="inline-flex items-center gap-2 mt-8 bg-amber-gradient text-white rounded-full px-8 py-4 font-semibold hover:brightness-110 transition-all"
              >
                <Download size={18} /> Download Full Product Catalog (PDF)
              </a>
              <p className="text-white/50 text-sm mt-4">PDF &middot; Updated {catalogUpdated}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
