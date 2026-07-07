'use client'

import React, { useEffect, useRef, ReactNode, ElementType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export type ScrollFloatVariant = 'words' | 'characters' | 'lines' | 'fade' | 'mask-reveal';

interface ScrollFloatProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: ScrollFloatVariant;
  sweepWords?: string[];
  highlightWords?: string[];
  duration?: number;
  stagger?: number;
  delay?: number;
  scrollStart?: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  as: Tag = 'h2',
  className = '',
  variant = 'words',
  sweepWords = [],
  highlightWords = [],
  duration = 1.0,
  stagger = 0.04,
  delay = 0,
  scrollStart = 'top 80%',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  // Parse text to wrap sweepWords and highlightWords in spans
  const renderContent = () => {
    if (typeof children === 'string' && (sweepWords.length > 0 || highlightWords.length > 0)) {
      const words = children.split(/(\s+)/);
      return words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isSweep = sweepWords.some(sw => sw.toLowerCase() === cleanWord.toLowerCase());
        const isHighlight = highlightWords.some(hw => hw.toLowerCase() === cleanWord.toLowerCase());
        
        if (isSweep) {
          return (
            <span 
              key={i} 
              className="sweep-highlight relative inline-block"
              style={{
                backgroundImage: 'linear-gradient(to right, currentColor 0%, currentColor 40%, #10b981 50%, currentColor 60%, currentColor 100%)',
                backgroundSize: '300% 100%',
                backgroundPosition: '100% center',
                color: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              {word}
            </span>
          );
        }

        if (isHighlight) {
          return (
            <span key={i} className="text-emerald-500 inline-block">
              {word}
            </span>
          );
        }

        return <React.Fragment key={i}>{word}</React.Fragment>;
      });
    }
    return children;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accessibility check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(el, { opacity: 1, visibility: 'visible' });
        return;
      }

      // 1. Initial Setup based on variant
      let split: SplitType | null = null;
      let targets: HTMLElement | HTMLElement[] | NodeListOf<Element> = el as unknown as HTMLElement;

      if (variant === 'words') {
        split = new SplitType(el, { types: 'words' });
        targets = split.words || el;
        gsap.set(targets, { opacity: 0, y: 15, filter: 'blur(8px)' });
      } else if (variant === 'characters') {
        split = new SplitType(el, { types: 'words,chars' });
        targets = split.chars || el;
        gsap.set(targets, { opacity: 0, y: 10, filter: 'blur(4px)' });
      } else if (variant === 'lines') {
        split = new SplitType(el, { types: 'lines' });
        targets = split.lines || el;
        // Need to wrap lines in a div with overflow hidden for a clean reveal
        if (split.lines) {
          split.lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.style.overflow = 'hidden';
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          });
        }
        gsap.set(targets, { opacity: 0, yPercent: 100 });
      } else if (variant === 'mask-reveal') {
        gsap.set(el, { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 });
      } else if (variant === 'fade') {
        gsap.set(el, { opacity: 0, y: 10, filter: 'blur(8px)' });
      }

      gsap.set(el, { visibility: 'visible' });

      // 2. Main Reveal Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          toggleActions: 'play none none none', // Play once
        }
      });

      const ease = 'power4.out';

      if (variant === 'words') {
        tl.to(targets, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          ease,
          stagger,
          delay
        });
      } else if (variant === 'characters') {
        tl.to(targets, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          ease,
          stagger: stagger,
          delay
        });
      } else if (variant === 'lines') {
        tl.to(targets, {
          opacity: 1,
          yPercent: 0,
          duration,
          ease,
          stagger: stagger * 2,
          delay
        });
      } else if (variant === 'mask-reveal') {
        tl.to(el, {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: duration * 1.2,
          ease: 'power3.inOut',
          delay
        });
      } else if (variant === 'fade') {
        tl.to(el, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          ease,
          delay
        });
      }

      // 3. Highlight Sweep Animation (happens after initial reveal)
      if (sweepWords.length > 0) {
        const sweepElements = el.querySelectorAll('.sweep-highlight');
        if (sweepElements.length > 0) {
          tl.to(sweepElements, {
            backgroundPosition: '0% center',
            duration: 1.4,
            ease: 'power2.inOut',
            stagger: 0.2
          }, `-=${duration * 0.5}`); // Overlap slightly with reveal
        }
      }

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [children, variant, sweepWords, duration, stagger, delay, scrollStart]);

  return (
    <Tag 
      ref={containerRef} 
      className={`invisible will-change-[opacity,transform,filter] ${className}`}
    >
      {renderContent()}
    </Tag>
  );
};

export default ScrollFloat;
