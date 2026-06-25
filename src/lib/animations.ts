// Premium, lag-free animation configurations
// Using ultra-smooth cubic-bezier curves reminiscent of Apple's design language
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const DURATION = 1.0 // 1000ms entrance duration for smoother feel

const BASE = {
  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: DURATION, ease: PREMIUM_EASE },
}

export const fadeUp = {
  ...BASE,
  initial: { opacity: 0, y: 60 },
}

export const fadeLeft = {
  ...BASE,
  initial: { opacity: 0, x: -40 },
}

export const fadeRight = {
  ...BASE,
  initial: { opacity: 0, x: 40 },
}

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.2 },
}

export const staggerChild = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION, ease: PREMIUM_EASE },
}

export const scaleIn = {
  ...BASE,
  initial: { opacity: 0, scale: 0.95 },
}

export const staggerTextContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
}

export const textReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.2, ease: PREMIUM_EASE },
}
