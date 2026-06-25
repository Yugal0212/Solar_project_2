'use client'

import { memo } from 'react'
import Image from 'next/image'
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface StackedProductCardProps {
  product: {
    name: string
    image: string
    desc: string
    categoryKey: string
    specs?: Record<string, string | number>
  }
  index: number
  total: number
}

const StackedProductCard = memo(function StackedProductCard({ product, index, total }: StackedProductCardProps) {
  const router = useRouter()
  void total

  return (
    <div
      className="sticky w-full origin-top h-[80vh] min-h-[600px] flex flex-col lg:flex-row shadow-[0_-15px_50px_rgba(0,0,0,0.06)] rounded-[40px] overflow-hidden bg-white border border-slate-100 will-change-transform"
      style={{ 
        // This creates the exact stacked "deck of cards" effect
        top: `calc(150px + ${index * 30}px)`, 
        zIndex: index + 10 
      }}
    >
      {/* Content Left */}
      <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center bg-white relative z-10 order-2 lg:order-1">
        <div className="bg-emerald-50 w-max px-4 py-1.5 rounded-full text-emerald-700 font-bold text-xs tracking-widest uppercase mb-6 flex items-center gap-2 border border-emerald-100">
          <Zap size={14} /> {product.categoryKey === 'panels' ? 'Solar Panel' : product.categoryKey === 'inverters' ? 'Inverter' : 'Battery Storage'}
        </div>
        
        <h3 className="font-heading font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          {product.desc}
        </p>
        
        {/* Specs/Highlights */}
        <div className="flex flex-col gap-4 mb-12">
          {product.specs && Object.entries(product.specs).slice(0, 3).map(([key, value], idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
              <span className="text-slate-800 font-semibold">{key}: <span className="font-normal">{String(value)}</span></span>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <button 
            onClick={() => router.push('/contact')}
            className="bg-[#0B1F3A] hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2"
          >
            Get Free Quote <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Right */}
      <div className="w-full lg:w-[55%] relative overflow-hidden group order-1 lg:order-2 h-64 lg:h-auto bg-slate-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-amber-100/30 mix-blend-multiply z-10 pointer-events-none" />
        <Image
          src={product.image} 
          alt={product.name}
          width={1024}
          height={1024}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 will-change-transform"
        />
      </div>
    </div>
  )
})

export default StackedProductCard
