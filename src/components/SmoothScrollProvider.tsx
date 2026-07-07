'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const lenis = new Lenis({
      lerp: 0.15,
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
