'use client'

import { useState } from 'react'

const processSteps = [
  { num: '01', title: 'Strategic Planning & Auditing', desc: 'A dedicated engineering team conducts an exhaustive on-site audit. We analyze rooftop topography, structural integrity, and local irradiance to formulate a precision-engineered deployment plan.' },
  { num: '02', title: 'Architectural System Design', desc: 'Using advanced 3D CAD modeling and shadow simulation, we custom-design a maximum-yield solar architecture optimized down to the millimeter for your specific property.' },
  { num: '03', title: 'Execution & Integration', desc: 'Our certified MNRE technicians deploy Tier-1 components with zero-downtime integration protocols, ensuring flawless electrical routing and structural mounting in just 1-3 days.' },
  { num: '04', title: 'Commissioning & Telemetry', desc: 'Post-installation, we initiate multi-point stress testing, secure government net-metering approvals, and hand over a live telemetry app for real-time power tracking.' },
]

export default function ProcessStepsGrid() {
  const [activeProcessStep, setActiveProcessStep] = useState(0)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 relative z-10 border-t border-b border-slate-100 mt-16">
      {processSteps.map((step, i) => {
        const isActive = activeProcessStep === i;
        return (
          <div 
            key={i} 
            onMouseEnter={() => setActiveProcessStep(i)}
            className={`relative flex flex-col items-start p-8 lg:p-10 border-r border-slate-100 last:border-r-0 transition-all duration-500 cursor-default min-h-[280px] lg:min-h-[340px] overflow-hidden ${isActive ? 'bg-white shadow-[0_20px_40px_rgba(34,197,94,0.05)]' : 'bg-transparent hover:bg-slate-50/50'}`}
          >
            {/* Active Top Border */}
            <div className={`absolute top-0 left-0 w-full h-[3px] bg-[#22C55E] origin-left transition-transform duration-500 ease-out z-20 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
            
            {/* Subtle Background Glow */}
            <div className={`absolute -top-12 -right-12 w-48 h-48 bg-[#22C55E]/[0.03] rounded-full blur-2xl transition-transform duration-700 pointer-events-none z-0 ${isActive ? 'scale-150' : 'scale-100'}`} />

            {/* Outline Number */}
            <div 
              className={`text-[80px] lg:text-[100px] font-black leading-none mb-6 text-transparent transition-all duration-500 relative z-10 origin-left ${isActive ? '[-webkit-text-stroke:2px_#22C55E] scale-105' : '[-webkit-text-stroke:1px_#cbd5e1]'}`}
            >
              {step.num}
            </div>
            
            {/* Title */}
            <h4 className={`font-heading font-bold text-xl mb-2 transition-all duration-300 relative z-10 ${isActive ? 'text-slate-900 -translate-y-1' : 'text-slate-400'}`}>
              {step.title}
            </h4>
            
            {/* Expanding Description */}
            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out w-full relative z-10 ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className={`text-slate-500 text-sm leading-relaxed pt-2 transition-opacity duration-500 delay-75 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
