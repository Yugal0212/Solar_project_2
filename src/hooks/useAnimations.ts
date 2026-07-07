import { RefObject } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import SplitType from 'split-type'

// Global easing presets for a premium feel
export const EASINGS = {
  PREMIUM_SPRING: 'back.out(1.2)',
  SMOOTH: 'power3.out',
  CINEMATIC: 'power4.inOut',
} as const

/**
 * Hook for SplitType text reveals with blur-to-sharp support
 */
export function useSplitText(
  ref: RefObject<HTMLElement | null>,
  options: { type?: 'chars' | 'words' | 'lines'; delay?: number; stagger?: number; blur?: boolean } = {}
) {
  const { type = 'words', delay = 0, stagger = 0.03, blur = false } = options

  useGSAP(() => {
    if (!ref.current) return

    const split = new SplitType(ref.current, { types: type })
    const elements = split[type === 'chars' ? 'chars' : type === 'words' ? 'words' : 'lines']

    if (!elements || elements.length === 0) return

    const initialVars: gsap.TweenVars = {
      y: '10px',
      opacity: 0,
    }
    
    if (blur) {
      initialVars.filter = 'blur(4px)'
    }

    const animateVars: gsap.TweenVars = {
      y: '0px',
      opacity: 1,
      duration: 0.8,
      ease: EASINGS.SMOOTH,
      stagger: stagger,
      delay: delay,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      }
    }
    
    if (blur) {
      animateVars.filter = 'blur(0px)'
    }

    gsap.fromTo(elements, initialVars, animateVars)

    return () => {
      split.revert()
    }
  }, { scope: ref })
}

/**
 * Premium Heading Reveal (Sweeping Green Light)
 */
export function useHeadingReveal(ref: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!ref.current) return

    const sweeps = gsap.utils.toArray('.sweep-text, .sweep-text-white', ref.current)
    if (sweeps.length === 0 && (ref.current.classList.contains('sweep-text') || ref.current.classList.contains('sweep-text-white'))) {
      sweeps.push(ref.current)
    }

    if (sweeps.length > 0) {
      gsap.fromTo(sweeps, 
        { backgroundPosition: '100% 0' },
        {
          backgroundPosition: '0% 0',
          duration: 1.2,
          ease: 'power2.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, { scope: ref })
}

/**
 * Premium Paragraph Reveal (Line by line)
 */
export function useParagraphReveal(ref: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!ref.current) return

    const split = new SplitType(ref.current, { types: 'lines' })
    if (!split.lines || split.lines.length === 0) return

    gsap.fromTo(split.lines,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: EASINGS.SMOOTH,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => split.revert()
  }, { scope: ref })
}

/**
 * Hook for Hero Section animations synchronized with Preloader
 */
export function useHeroAnimation(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!containerRef.current) return

    // Set initial states to prevent flashing before animation starts
    const headlineSplit = new SplitType('.hero-headline', { types: 'words', wordClass: 'split-word' })
    
    gsap.set(['.hero-badge', '.hero-desc', '.hero-buttons button', '.hero-trust div', headlineSplit.words], {
      opacity: 0,
      y: 35
    })

    const playAnimation = (immediate: boolean = false) => {
      const tl = gsap.timeline({
        // If immediate (soft navigation), delay by 0.3s to wait for PageTransition to finish fading in
        // If not immediate (initial load), delay by 0.1s to wait for preloader fade out
        delay: immediate ? 0.3 : 0.1 
      })
      
      const DURATION = 1.0 // Faster duration matching their component

      // Animate the headline words staggered (40ms like requested)
      tl.to(headlineSplit.words, { opacity: 1, y: 0, duration: DURATION, stagger: 0.1, ease: EASINGS.SMOOTH })
        // AT THE EXACT SAME TIME, fade up everything else solidly
        .to(['.hero-badge', '.hero-desc', '.hero-buttons button', '.hero-trust div'], { 
          opacity: 1, y: 0, duration: DURATION, ease: EASINGS.SMOOTH 
        }, "<")
    }

    const handleAppReady = (e: Event) => {
      const customEvent = e as CustomEvent
      playAnimation(customEvent.detail?.immediate)
    }

    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenPreloader')) {
      // If we've already seen the preloader (e.g. navigating back to home), play immediately
      playAnimation(true)
    } else {
      window.addEventListener('app-ready', handleAppReady)

      // Fallback just in case event was already dispatched or missed
      const fallbackTimeout = setTimeout(() => playAnimation(true), 1500)

      return () => {
        window.removeEventListener('app-ready', handleAppReady)
        clearTimeout(fallbackTimeout)
      }
    }
  }, { scope: containerRef })
}

/**
 * Hook for Staggered Card Reveals
 */
export function useCardsAnimation(containerRef: RefObject<HTMLElement | null>, selector: string = '.card-item') {
  useGSAP(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray(selector, containerRef.current)
    
    gsap.fromTo(cards, 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: EASINGS.SMOOTH,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: containerRef })
}

/**
 * Generic Fast Scroll Reveal
 */
export function useScrollReveal(ref: RefObject<HTMLElement | null>, direction: 'up' | 'left' | 'right' = 'up') {
  useGSAP(() => {
    if (!ref.current) return

    const y = direction === 'up' ? 20 : 0
    const x = direction === 'left' ? -20 : direction === 'right' ? 20 : 0

    gsap.fromTo(ref.current, 
      {
        y,
        x,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: EASINGS.SMOOTH,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: ref })
}

/**
 * Generic Stagger Reveal for child elements
 */
export function useStaggerReveal(containerRef: RefObject<HTMLElement | null>, selector: string = '.reveal-item') {
  useGSAP(() => {
    if (!containerRef.current) return

    const items = gsap.utils.toArray(selector, containerRef.current)
    
    gsap.fromTo(items, 
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: EASINGS.SMOOTH,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: containerRef })
}

/**
 * Custom Bento Box Reveal for Mission Section
 */
export function useBentoAnimation(containerRef: RefObject<HTMLElement | null>, selector: string = '.reveal-item') {
  useGSAP(() => {
    if (!containerRef.current) return

    const items = gsap.utils.toArray(selector, containerRef.current) as HTMLElement[]
    if (items.length < 4) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // First box (Main): slide from left
    tl.fromTo(items[0], { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: EASINGS.SMOOTH }, 0)
    // Second box (Image): fade & scale
    tl.fromTo(items[1], { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: EASINGS.SMOOTH }, 0.2)
    // Third box (Green): slide up
    tl.fromTo(items[2], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: EASINGS.SMOOTH }, 0.3)
    // Fourth box (Dark): slide from right
    tl.fromTo(items[3], { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: EASINGS.SMOOTH }, 0.4)

  }, { scope: containerRef })
}

/**
 * Hook for fast, subtle image reveal
 */
export function useImageReveal(containerRef: RefObject<HTMLElement | null>, imageSelector: string = 'img') {
  useGSAP(() => {
    if (!containerRef.current) return

    const image = containerRef.current.querySelector(imageSelector)
    if (!image) return

    gsap.fromTo(image,
      { scale: 1.03, opacity: 0.8 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: EASINGS.SMOOTH,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )

  }, { scope: containerRef })
}

/**
 * Hook for Navbar glassmorphism
 */
export function useNavbarAnimation(headerRef: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!headerRef.current) return

    const updateNavbar = () => {
      const scrollY = window.scrollY
      if (scrollY > 50) {
        headerRef.current?.classList.add('scrolled')
      } else {
        headerRef.current?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', updateNavbar)
    updateNavbar()

    return () => window.removeEventListener('scroll', updateNavbar)
  }, { scope: headerRef })
}

export function useCounter(ref: RefObject<HTMLElement | null>, targetValue: number, duration: number = 2) {
  useGSAP(() => {
    if (!ref.current) return

    const obj = { value: 0 }
    const element = ref.current

    gsap.to(obj, {
      value: targetValue,
      duration,
      ease: EASINGS.SMOOTH,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString()
      }
    })
  }, { scope: ref })
}
