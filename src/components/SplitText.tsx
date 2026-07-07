'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: 'chars' | 'words' | 'lines'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  textAlign?: React.CSSProperties['textAlign']
  onAnimationComplete?: () => void
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 40,
  duration = 1.0,
  ease = 'power4.out',
  splitType = 'words',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onAnimationComplete
}) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const animationCompletedRef = useRef(false)
  const onCompleteRef = useRef(onAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onAnimationComplete
  }, [onAnimationComplete])

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    }
  }, [])

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return
      if (animationCompletedRef.current) return

      const el = ref.current

      // Split the text using split-type
      const splitInstance = new SplitType(el, { types: splitType })

      const startPct = (1 - threshold) * 100
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin)
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px'
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`
      const start = `top ${startPct}%${sign}`

      // Select targets based on splitType
      let targets: Element[] = []
      if (splitType === 'chars' && splitInstance.chars?.length) targets = splitInstance.chars
      else if (splitType === 'words' && splitInstance.words?.length) targets = splitInstance.words
      else if (splitType === 'lines' && splitInstance.lines?.length) targets = splitInstance.lines
      else targets = splitInstance.chars || splitInstance.words || splitInstance.lines || []

      if (targets.length === 0) return

      // GSAP Animation
      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
            anticipatePin: 0.4
          },
          onComplete: () => {
            animationCompletedRef.current = true
            onCompleteRef.current?.()
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      )

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill()
        })
        splitInstance.revert()
      }
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded
      ],
      scope: ref
    }
  )

  const Tag = (tag || 'p') as React.ElementType

  return (
    <Tag 
      ref={ref} 
      style={{ textAlign, wordWrap: 'break-word', willChange: 'transform, opacity' }} 
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
    >
      {text}
    </Tag>
  )
}

export default SplitText
