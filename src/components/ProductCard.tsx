'use client'

import { memo, useState, type ElementType } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Sun, Zap, Battery, CheckCircle2, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: {
    id: string
    name: string
    category: string
    image?: string
    description: string
    price: number
    popular?: boolean
    tag?: string
    specs: Record<string, string | number | undefined>
  }
  layout?: 'horizontal' | 'vertical'
}

const categoryIcons: Record<string, ElementType> = {
  'Solar Panel': Sun,
  'Inverter': Zap,
  'Battery Storage': Battery,
}

const categoryGradients: Record<string, string> = {
  'Solar Panel': 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
  'Inverter': 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
  'Battery Storage': 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
}

const ProductCard = memo(function ProductCard({ product, layout = 'horizontal' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const Icon = categoryIcons[product.category] || Sun
  const isVertical = layout === 'vertical'

  // Format specifications into a 2-column list
  const specsList = Object.entries(product.specs).slice(0, 6)

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative w-full bg-white rounded-[24px] border border-slate-200 hover:border-emerald-400 hover:shadow-[0_30px_60px_rgba(16,185,129,0.12)] transition-colors duration-500 overflow-hidden flex flex-col ${isVertical ? 'h-full' : 'lg:flex-row'} cursor-pointer`}
    >
      {/* SHIMMER EFFECT ON HOVER */}
      <motion.div 
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered ? { x: '200%', opacity: 0.4 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 z-50 pointer-events-none mix-blend-overlay"
      />

      {/* ================= LEFT/TOP: IMAGE AREA ================= */}
      <div className={`w-full ${isVertical ? 'h-[250px] shrink-0 border-b' : 'lg:w-[55%] min-h-[350px] lg:min-h-full border-b lg:border-b-0 lg:border-r'} relative overflow-hidden bg-[#F8FAFC] border-slate-100 flex items-center justify-center p-8`}>
        
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50" />
        <motion.div 
          animate={isHovered ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-400/20 blur-[80px] rounded-full pointer-events-none" 
        />

        {product.image ? (
          <motion.div
            animate={isHovered ? { scale: 1.08, rotate: 1 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 w-full h-full object-contain mix-blend-multiply"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              sizes={isVertical ? '(min-width: 1024px) 33vw, 50vw' : '(min-width: 1024px) 50vw, 100vw'}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : (
          <motion.div 
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-2xl" 
            style={{ background: categoryGradients[product.category] }}
          >
             <Icon size={40} className="text-emerald-700 mix-blend-color-burn" />
          </motion.div>
        )}

        {/* Premium Pill Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-emerald-500/30 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <Icon size={12} /> {product.category}
          </span>
        </div>

        {/* Popular/Tag Badge */}
        {product.tag && (
          <motion.div 
            animate={isHovered ? { y: [0, -4, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute top-4 right-4 z-20"
          >
            <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
              {product.tag}
            </span>
          </motion.div>
        )}
      </div>

      {/* ================= RIGHT/BOTTOM: CONTENT AREA ================= */}
      <div className={`w-full ${isVertical ? 'flex-1 p-6 flex flex-col' : 'lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between'} bg-white relative z-10`}>
        
        <div>
          <h3 className={`font-heading font-extrabold text-slate-900 tracking-tight ${isVertical ? 'text-2xl mb-2' : 'text-3xl lg:text-4xl mb-3'} group-hover:text-emerald-700 transition-colors duration-300`}>
            {product.name}
          </h3>
          <p className={`text-slate-500 leading-relaxed ${isVertical ? 'text-sm line-clamp-2 mb-4' : 'text-base line-clamp-2 mb-6'}`}>
            {product.description}
          </p>
          
          {/* Feature Highlights */}
          {!isVertical && (
            <div className="space-y-3 mb-8">
              {['25 Year Performance Warranty', 'BIS Certified Components', 'High Efficiency Architecture'].map((feature, i) => (
                <motion.div 
                  key={i}
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <span className="text-sm font-semibold text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        
        {/* Premium Specification Panel */}
        <motion.div 
          animate={isHovered ? { backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' } : { backgroundColor: '#F8FAFC', borderColor: '#F1F5F9' }}
          className={`rounded-2xl border transition-colors duration-500 ${isVertical ? 'p-4 mb-6' : 'p-5 mb-8'}`}
        >
          <div className={`grid ${isVertical ? 'grid-cols-2 gap-y-3 gap-x-4' : 'grid-cols-2 gap-y-4 gap-x-6'}`}>
            {specsList.slice(0, isVertical ? 4 : 6).map(([key, value]) => (
              <div key={key}>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">{key}</span>
                <span className="text-[13px] font-semibold text-slate-800 line-clamp-1">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing & Call to Actions */}
        <div className={`flex ${isVertical ? 'flex-col gap-4 mt-auto' : 'flex-col xl:flex-row xl:items-end justify-between gap-6 pt-2'}`}>
          
          {/* Price Block */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Starting From</span>
            <div className="flex items-end gap-2">
              <span className={`font-black text-slate-900 leading-none ${isVertical ? 'text-2xl' : 'text-3xl'}`}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-1.5 py-0.5 rounded uppercase tracking-wider mb-0.5 whitespace-nowrap">
                EMI Available
              </span>
            </div>
          </div>
          
          {/* Buttons */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); router.push('/contact'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center gap-2 bg-emerald-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-[0_4px_14px_rgba(16,185,129,0.3)] ${isVertical ? 'w-full py-3 text-[11px]' : 'px-6 py-3 text-xs'}`}
          >
            Get Quote 
            <motion.div animate={isHovered ? { x: 4 } : { x: 0 }}>
              <ArrowRight size={14} />
            </motion.div>
          </motion.button>
          
        </div>
      </div>
    </motion.div>
  )
})

export default ProductCard
