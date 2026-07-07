import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
  
  // Basic sensible defaults for ScrollTrigger
  ScrollTrigger.defaults({
    markers: false
  })
}

export { gsap, ScrollTrigger, useGSAP }
