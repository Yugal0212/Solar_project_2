'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sun, Zap, Battery, Wrench } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    num: '01',
    title: 'Solar Panels',
    desc: 'High-efficiency Tier-1 modules engineered for maximum yield and decades of reliable power.',
    icon: <Sun size={24} className="text-white" />,
    img: '/hero-rooftop-ai.png',
    type: 'image',
    path: '/products?category=panels'
  },
  {
    num: '02',
    title: 'Inverters',
    desc: 'Smart hybrid inverters that intelligently manage grid, solar, and battery power to ensure your home never goes dark.',
    icon: <Zap size={24} className="text-white" />,
    img: '',
    type: 'solid',
    path: '/products?category=inverters'
  },
  {
    num: '03',
    title: 'Battery Storage',
    desc: 'Lithium-ion backup systems for uninterrupted power supply and maximum self-consumption.',
    icon: <Battery size={24} className="text-white" />,
    img: '/hero-desktop-optimized.jpg',
    type: 'image',
    path: '/products?category=batteries'
  },
  {
    num: '04',
    title: 'Accessories',
    desc: 'Premium mounting structures, AC/DC boxes, and cabling for a robust, safe, and long-lasting solar plant installation.',
    icon: <Wrench size={24} className="text-white" />,
    img: '',
    type: 'solid',
    path: '/products?category=accessories'
  }
]

export default function HomeProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play interval for the expanding cards
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 4500) // Change active card every 4.5 seconds

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <h2 className="font-heading font-black text-5xl lg:text-7xl leading-[1.1] tracking-tight">
              <span className="text-[#DC2626]">Our</span> <span className="text-slate-900">Core</span>
              <br />
              <span className="text-[#DC2626]">Products</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl pt-2 lg:pt-4"
          >
            <h3 className="font-heading font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
              Comprehensive Hardware Ecosystem
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We source and integrate only the most reliable tier-1 components, ensuring your solar infrastructure delivers maximum efficiency and longevity for your home or business.
            </p>
          </motion.div>
        </div>

        {/* Expanding Cards Carousel */}
        <div 
          className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-4 lg:gap-6 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {products.map((product, idx) => {
            const isActive = activeIndex === idx

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 group hover:-translate-y-2 hover:shadow-2xl`}
                style={{
                  flex: isActive ? '4 1 0%' : '1 1 0%',
                  minHeight: isActive ? '300px' : '100px',
                }}
              >
                {/* Background Container */}
                <div className="absolute inset-0 bg-slate-900">
                  {product.img && (
                    <Image 
                      src={product.img}
                      alt={product.title}
                      fill
                      className={`object-cover transition-transform duration-[1.5s] ${isActive ? 'scale-105' : 'scale-100 opacity-50 grayscale-[50%]'}`}
                    />
                  )}
                </div>

                {/* Overlays */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 
                    ${isActive ? 'bg-gradient-to-t from-[#022C22]/95 via-[#064E3B]/60 to-transparent' : 'bg-slate-900/60 group-hover:bg-slate-900/40'}
                  `} 
                />

                {/* The Notch (Top Right) */}
                <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-bl-[32px] flex items-center justify-center p-4 md:p-6 z-20 transition-all duration-700">
                  <span className={`text-3xl md:text-4xl font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-400 to-blue-600 bg-[length:200%_auto] animate-shimmer`}>
                    {product.num}
                  </span>
                  
                  {/* Left Curve */}
                  <div 
                    className="absolute top-0 -left-6 w-6 h-6" 
                    style={{ background: 'radial-gradient(circle at bottom left, transparent 24px, #f8fafc 24.5px)' }}
                  />
                  
                  {/* Bottom Curve */}
                  <div 
                    className="absolute -bottom-6 right-0 w-6 h-6" 
                    style={{ background: 'radial-gradient(circle at bottom left, transparent 24px, #f8fafc 24.5px)' }}
                  />
                </div>

                {/* Inactive State: Vertical Title */}
                <div 
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-4 lg:gap-8 transition-opacity duration-500
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'}
                  `}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                     {React.cloneElement(product.icon as React.ReactElement<{ className?: string; size?: number }>, { className: 'text-white', size: 24 })}
                  </div>
                  <h4 className="text-white font-bold text-lg lg:text-2xl lg:[writing-mode:vertical-lr] lg:rotate-180 whitespace-nowrap tracking-wider">
                    {product.title}
                  </h4>
                </div>

                {/* Active State: Full Details */}
                <div 
                  className={`absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col justify-end transition-all duration-700
                    ${isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-12 pointer-events-none'}
                  `}
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6 backdrop-blur-sm">
                    {React.cloneElement(product.icon as React.ReactElement<{ className?: string; size?: number }>, { className: 'text-green-400', size: 28 })}
                  </div>
                  <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{product.title}</h4>
                  <p className="text-green-50/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl line-clamp-3 md:line-clamp-none">
                    {product.desc}
                  </p>
                  
                  <Link 
                    href={product.path}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition-colors w-max z-20 shadow-xl shadow-green-900/30 group/btn"
                  >
                    More Details <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
