'use client'

import React from 'react'
import ScrollFloat from './ScrollFloat'

interface SectionHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  description?: string
  subtext?: string // Legacy fallback for description
  centered?: boolean
  light?: boolean
  highlightWords?: string[]
}

import ShinyText from './ShinyText'

export default function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  description, 
  subtext, 
  centered = true, 
  light = false,
  highlightWords = []
}: SectionHeaderProps) {
  const finalDescription = description || subtext;

  const renderTitle = () => {
    if (typeof title !== 'string') return title;

    if (highlightWords.length === 0) {
      return title; // Just plain text if no highlights specified
    }

    const words = title.split(' ');
    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,!?;:]/g, '');
      const isHighlight = highlightWords.some(hw => hw.toLowerCase() === cleanWord.toLowerCase());
      
      return (
        <span key={i} className="inline-block mr-[0.3em]">
          {isHighlight ? (
            <ShinyText 
              text={word}
              speed={3.8}
              delay={0.9}
              color={light ? "#d2c8c8" : "#22c55e"} 
              shineColor={light ? "#0afd68" : "#0f172a"} 
              spread={15}
            />
          ) : (
            <span className={light ? 'text-white' : 'text-slate-900'}>{word}</span>
          )}
        </span>
      );
    });
  };

  return (
    <div className={`${centered ? 'text-center max-w-3xl mx-auto flex flex-col items-center' : 'max-w-3xl flex flex-col items-start'} mb-16`}>
      {eyebrow && (
        <ScrollFloat variant="fade" as="div" className="mb-4" duration={1.0}>
          <div className={`inline-flex items-center gap-3 ${centered ? 'justify-center' : 'justify-start'}`}>
            <div className={`w-4 h-[1px] ${light ? 'bg-emerald-500/50' : 'bg-emerald-500/30'}`} />
            <span className={`text-xs font-extrabold tracking-[0.2em] uppercase ${light ? 'text-emerald-400' : 'text-emerald-600'}`}>
              {eyebrow}
            </span>
            <div className={`w-4 h-[1px] ${light ? 'bg-emerald-500/50' : 'bg-emerald-500/30'}`} />
          </div>
        </ScrollFloat>
      )}

      <ScrollFloat 
        as="h2" 
        variant="fade" 
        className={`mb-4 font-extrabold font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight ${light && highlightWords.length === 0 ? 'text-white' : highlightWords.length === 0 ? 'text-slate-900' : ''}`}
        duration={0.8}
      >
        <span suppressHydrationWarning>
          {renderTitle()}
        </span>
      </ScrollFloat>

      {subtitle && (
        <ScrollFloat 
          as="h3" 
          variant="lines" 
          delay={0.15}
          duration={1.0}
          className={`${light ? 'text-white font-medium' : 'text-slate-800 font-semibold'} text-xl md:text-2xl lg:text-[28px] leading-tight mb-4`}
        >
          {subtitle}
        </ScrollFloat>
      )}

      {finalDescription && (
        <ScrollFloat 
          as="p" 
          variant="lines" 
          delay={0.3}
          duration={1.0}
          className={`${light ? 'text-white/70' : 'text-slate-500'} text-base md:text-lg lg:text-xl font-normal leading-relaxed`}
        >
          {finalDescription}
        </ScrollFloat>
      )}
    </div>
  )
}
