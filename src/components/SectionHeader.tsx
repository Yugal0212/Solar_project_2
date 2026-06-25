'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtext?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ eyebrow, title, subtext, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      {...fadeUp}
      className={`${centered ? 'text-center max-w-3xl mx-auto' : ''} mb-12`}
    >
      <span className={`text-xs font-bold tracking-[0.12em] uppercase ${light ? 'gradient-text' : 'gradient-text'}`}>
        {eyebrow}
      </span>
      <h2 className={`font-heading font-bold mt-3 ${light ? 'text-white' : 'text-slate-900'} text-4xl leading-tight`}>
        {title}
      </h2>
      {subtext && (
        <p className={`${light ? 'text-white/70' : 'text-slate-500'} text-base mt-4`}>
          {subtext}
        </p>
      )}
    </motion.div>
  )
}
