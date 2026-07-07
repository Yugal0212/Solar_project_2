import { useEffect, RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { EASINGS } from './useAnimations'

export function useMagnetic(ref: RefObject<HTMLElement | null>, strength: number = 0.5) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    // Skip if reduced motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = element.getBoundingClientRect()
      
      const x = (clientX - (left + width / 2)) * strength
      const y = (clientY - (top + height / 2)) * strength

      gsap.to(element, {
        x,
        y,
        duration: 1,
        ease: EASINGS.PREMIUM_SPRING
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: EASINGS.PREMIUM_SPRING
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, strength])
}
