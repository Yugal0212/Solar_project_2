'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Home, Building2, Factory, Shield, Wrench, Battery, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const servicesData = [
  { 
    num: '01', 
    title: 'Residential', 
    desc: 'We design beautiful, high-efficiency rooftop systems for homes that combine functionality with aesthetic appeal, eliminating your energy bills.', 
    icon: <Home size={28} className="text-white mb-4" />,
    img: '/hero-rooftop-ai.png'
  },
  { 
    num: '02', 
    title: 'Commercial', 
    desc: 'Large-scale corporate installations designed to drastically reduce operational costs and maximize ROI through accelerated depreciation.', 
    icon: <Building2 size={28} className="text-white mb-4" />,
    img: '/hero-desktop-optimized.jpg'
  },
  { 
    num: '03', 
    title: 'Industrial', 
    desc: 'Megawatt-scale ground-mounted and industrial rooftop infrastructure engineered for maximum durability and yield.', 
    icon: <Factory size={28} className="text-white mb-4" />,
    img: '/premium_mission_solar.png'
  },
  { 
    num: '04', 
    title: 'Maintenance', 
    desc: 'Comprehensive Annual Maintenance Contracts (AMC) ensuring your infrastructure operates at peak 100% capacity year-round.', 
    icon: <Wrench size={28} className="text-white mb-4" />,
    img: '/hero-mobile-optimized.jpg'
  },
  { 
    num: '05', 
    title: 'Consultancy', 
    desc: 'Expert site surveying, shadow analysis, and 3D planning to design the perfect custom system for your specific site constraints.', 
    icon: <Shield size={28} className="text-white mb-4" />,
    img: '/hero-rooftop-ai.png' // Reusing images for demo purposes
  },
  { 
    num: '06', 
    title: 'Energy Storage', 
    desc: 'Advanced Lithium-ion battery integrations to provide robust backup power during grid outages and maximize self-consumption.', 
    icon: <Battery size={28} className="text-white mb-4" />,
    img: '/hero-desktop-optimized.jpg'
  }
]

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const fadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      const activeChild = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeChild) {
        setTimeout(() => {
          const container = scrollRef.current;
          if (container) {
            // Calculate horizontal center position
            const scrollLeft = activeChild.offsetLeft - container.offsetLeft - (container.offsetWidth - activeChild.offsetWidth) / 2;
            // Scroll ONLY the container horizontally, preventing the whole page from scrolling vertically
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
          }
        }, 50);
      }
    }
  }, [activeIndex]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(prev => Math.min(prev + 1, servicesData.length - 1));
  }
  
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(prev => Math.max(prev - 1, 0));
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
        
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
              <span className="text-[#22C55E]">What</span> <span className="text-slate-900">we</span>
              <br />
              <span className="text-[#22C55E]">Offer</span>
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
              Comprehensive Solar Solutions
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our services span from precision-engineered residential systems and commercial infrastructure to advanced maintenance protocols, bringing your transition to clean energy seamlessly to life.
            </p>
          </motion.div>
        </div>

        {/* Services Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-12 pt-4 hide-scrollbar snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesData.map((service, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 snap-center h-[450px] md:h-[500px] lg:h-[540px] rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer flex-none shadow-sm transition-[width,transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl
                  ${isActive ? 'w-[90vw] md:w-[65vw] max-w-[850px]' : 'w-[75vw] md:w-[35vw] max-w-[400px]'}
                `}
              >
                {/* INACTIVE STATE */}
                <div 
                   className={`absolute inset-0 bg-white p-4 md:p-6 flex flex-col justify-between transition-opacity duration-500 ease-in-out border border-slate-100
                   ${isActive ? 'opacity-0 z-0 pointer-events-none' : 'opacity-100 z-10'}`}
                >
                  <div className="w-full h-[55%] rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-slate-100 mb-6 shadow-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110"
                      style={{ backgroundImage: `url(${service.img})` }}
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2 mt-auto">
                    <h4 className="font-bold text-xl md:text-2xl text-slate-900 leading-tight">{service.title}</h4>
                    <span className="text-slate-400 font-semibold text-base md:text-lg">{service.num}</span>
                  </div>
                </div>

                {/* ACTIVE STATE */}
                <div 
                   className={`absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/90 p-6 md:p-10 lg:p-12 flex flex-col justify-between text-slate-900 transition-opacity duration-500 ease-in-out border border-green-200/50
                   ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                >
                  <motion.div 
                    className="flex flex-col h-full justify-between"
                    variants={staggerContainer}
                    initial="initial"
                    animate={isActive ? "whileInView" : "initial"}
                  >
                    <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-6 lg:gap-12">
                      <div className="flex-1 flex flex-col justify-center">
                        <motion.span variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-green-900/5 tracking-tighter block mb-2 md:mb-4 lg:mb-6">{service.num}</motion.span>
                        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-950">{service.title}</motion.h3>
                        <motion.p variants={fadeUp} className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
                          {service.desc}
                        </motion.p>
                        <motion.div variants={fadeUp}>
                          <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-green-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2 text-sm md:text-base w-max shadow-md">
                            More Details <ArrowRight size={18} />
                          </Link>
                        </motion.div>
                      </div>
                      
                      <motion.div variants={fadeUp} className="hidden md:block w-2/5 lg:w-[45%] h-[80%] self-center rounded-[24px] overflow-hidden relative shadow-lg border border-green-100">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: `url(${service.img})` }} />
                      </motion.div>
                    </div>
                    
                    <motion.div variants={fadeUp} className="mt-auto pt-4 md:pt-8">
                      <hr className="border-green-900/10 mb-4 md:mb-6" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                        <span className="text-slate-500 font-medium text-sm md:text-base">Tailored solutions for your business needs</span>
                        <div className="flex gap-2 md:gap-3 self-end md:self-auto shrink-0">
                          <button 
                            onClick={prev}
                            disabled={idx === 0}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-green-50 shadow-sm border border-green-100 text-green-700 disabled:opacity-50 disabled:hover:bg-white flex items-center justify-center transition-all hover:scale-105"
                          >
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                          </button>
                          <button 
                            onClick={next}
                            disabled={idx === servicesData.length - 1}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-green-50 shadow-sm border border-green-100 text-green-700 disabled:opacity-50 disabled:hover:bg-white flex items-center justify-center transition-all hover:scale-105"
                          >
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Spacer to ensure the last card can scroll fully into center view */}
          <div className="shrink-0 w-[5vw] md:w-[15vw] h-1" />
        </div>

        {/* View All Services Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Link 
            href="/services" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
