'use client'

import { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import SectionHeader from './SectionHeader'
import { getProducts } from '@/src/lib/api'

type ShowcaseProduct = {
  id: string
  title: string
  description: string
  highlights: string[]
  image: string
  path: string
}

const fallbackProducts: ShowcaseProduct[] = [
  {
    id: 'panels',
    title: 'High-Efficiency Solar Panels',
    description: 'Tier-1 Mono PERC and TOPCon modules engineered to deliver maximum yield even in extreme summer temperatures and low-light conditions. Built for decades of reliable power generation.',
    highlights: [
      '25-Year Linear Performance Warranty',
      'Up to 22.5% Conversion Efficiency',
      'Anti-PID & Salt-Mist Resistant'
    ],
    image: '/images/products/panel-1.jpg',
    path: '/products?category=panels'
  },
  {
    id: 'inverters',
    title: 'Smart Hybrid Inverters',
    description: 'The intelligent brain of your solar plant. Our hybrid inverters automatically manage grid power, solar generation, and battery storage to ensure your home never goes dark.',
    highlights: [
      'Seamless 10ms UPS Backup Transition',
      'IP65 Rated for Outdoor Install',
      'Built-in Wi-Fi & App Monitoring'
    ],
    image: '/images/products/inv-1.jpg',
    path: '/products?category=inverters'
  },
  {
    id: 'batteries',
    title: 'Lithium Battery Storage',
    description: 'Store excess daytime solar energy to power your home through the night or during grid outages. Safe, deep-cycle, and completely maintenance-free.',
    highlights: [
      'LiFePO4 Chemistry for Max Safety',
      '10+ Years Design Life & Warranty',
      'Scalable from 5kWh to 100kWh'
    ],
    image: '/images/products/bat-1.jpg',
    path: '/products?category=batteries'
  },
  {
    id: 'monitoring',
    title: '24/7 Smart Monitoring',
    description: 'Take complete control of your energy ecosystem. Track real-time solar production, home consumption, and battery status directly from your smartphone, anywhere in the world.',
    highlights: [
      'Real-Time Production & Usage Data',
      'Automated Fault & Maintenance Alerts',
      'Detailed ROI & Financial Savings Reports'
    ],
    image: '/images/products/acc-2.jpg',
    path: '/products'
  }
]

function pickString(source: Record<string, unknown>, keys: string[], fallback = '') {
  for (const key of keys) {
    const value = source[key]
    if (typeof value === 'string' && value.trim()) {
      return value
    }
    if (typeof value === 'number') {
      return String(value)
    }
  }

  return fallback
}

function normalizeList(data: unknown): Record<string, unknown>[] {
  if (Array.isArray(data)) {
    return data.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
  }

  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>
    const possibleLists = [record.products, record.items, record.results, record.data]
    const list = possibleLists.find(Array.isArray)

    if (Array.isArray(list)) {
      return list.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
    }
  }

  return []
}

function normalizeHighlights(source: Record<string, unknown>) {
  const raw = source.highlights ?? source.features ?? source.specs

  if (Array.isArray(raw)) {
    return raw.map(String).filter(Boolean).slice(0, 3)
  }

  if (raw && typeof raw === 'object') {
    return Object.entries(raw)
      .slice(0, 3)
      .map(([key, value]) => `${key}: ${String(value)}`)
  }

  if (typeof raw === 'string') {
    return raw
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 3)
  }

  return ['Premium solar hardware', 'Installation-ready system', 'Expert support included']
}

function normalizeProducts(data: unknown): ShowcaseProduct[] {
  return normalizeList(data)
    .slice(0, 4)
    .map((product, index) => {
      const id = pickString(product, ['id', 'slug'], `product-${index + 1}`)
      const title = pickString(product, ['title', 'name', 'product_name'], fallbackProducts[index]?.title)
      const description = pickString(
        product,
        ['description', 'short_description', 'summary'],
        fallbackProducts[index]?.description
      )
      const image = pickString(
        product,
        ['image', 'image_url', 'photo', 'photo_url', 'thumbnail'],
        fallbackProducts[index]?.image
      )

      return {
        id,
        title,
        description,
        highlights: normalizeHighlights(product),
        image,
        path: `/products${id ? `?product=${encodeURIComponent(id)}` : ''}`,
      }
    })
}

const HomeProductShowcase = memo(function HomeProductShowcase() {
  const router = useRouter()
  const [products, setProducts] = useState<ShowcaseProduct[]>(fallbackProducts)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    getProducts()
      .then((data) => {
        if (!isMounted) {
          return
        }

        const normalized = normalizeProducts(data)
        if (normalized.length > 0) {
          setProducts(normalized)
        }
        setStatus('success')
      })
      .catch((err) => {
        if (!isMounted) {
          return
        }

        setError(err instanceof Error ? err.message : 'Unable to load products.')
        setStatus('error')
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="PREMIUM HARDWARE"
            title="Engineered For Complete Energy Independence"
            subtext="Discover our curated ecosystem of tier-1 solar technology, designed to work together seamlessly to eliminate your electricity bill and protect you from grid outages."
          />
          {status === 'loading' && (
            <p className="mt-5 text-sm font-medium text-slate-500">Loading latest products...</p>
          )}
          {status === 'error' && (
            <p className="mt-5 text-sm font-medium text-red-600">
              Showing saved products. Backend error: {error}
            </p>
          )}
        </div>

        {/* Stack Wrapper */}
        <div className="flex flex-col w-full gap-[15vh] pb-[10vh] relative z-10">
          {products.map((product, i) => (
              <div
                key={product.id}
                className="sticky w-full origin-top h-[80vh] min-h-[600px] flex flex-col lg:flex-row shadow-[0_-15px_50px_rgba(0,0,0,0.06)] rounded-[40px] overflow-hidden bg-white border border-slate-100 will-change-transform"
                style={{ 
                  top: `calc(100px + ${i * 30}px)`, 
                  zIndex: i + 10
                }}
              >
                {/* Content Left */}
                <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center bg-white relative z-10 order-2 lg:order-1">
                  <h3 className="font-heading font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-10">
                    {product.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-col gap-4 mb-12">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                        <span className="text-slate-800 font-semibold">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button 
                      onClick={() => router.push(product.path)}
                      className="bg-[#0B1F3A] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
                    >
                      View Details <ChevronRight size={18} />
                    </button>
                    <button 
                      onClick={() => router.push('/contact')}
                      className="bg-transparent border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full transition-colors"
                    >
                      Get Free Quote
                    </button>
                  </div>
                </div>

                {/* Image Right */}
                <div className="w-full lg:w-[55%] relative overflow-hidden group order-1 lg:order-2 h-64 lg:h-auto bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-amber-100/30 mix-blend-multiply z-10" />
                  <Image
                    src={product.image} 
                    alt={product.title}
                    width={1024}
                    height={1024}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 will-change-transform"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
})

export default HomeProductShowcase
