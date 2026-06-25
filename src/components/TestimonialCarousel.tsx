'use client'

import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star } from 'lucide-react'
import { testimonials } from '../data/seed'

function getGradient(initials: string): string {
  const gradients: Record<string, string> = {
    'RM': 'bg-brand-gradient',
    'PS': 'bg-gradient-to-br from-accent-600 to-accent-400',
    'VP': 'bg-gradient-to-br from-primary-800 to-primary-600',
    'AD': 'bg-gradient-to-br from-accent-700 to-accent-500',
    'KJ': 'bg-brand-gradient',
    'MK': 'bg-gradient-to-br from-accent-800 to-accent-600',
  }
  return gradients[initials] || 'bg-brand-gradient'
}

const TestimonialCarousel = memo(function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      className="pb-10"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full ${getGradient(t.initials)} flex items-center justify-center text-white font-bold text-lg`}>
                {t.initials}
              </div>
              <div>
                <div className="font-heading font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.city}, Gujarat</div>
              </div>
            </div>
            <div className="text-xs text-slate-500 mb-3">{t.role}</div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-accent-500 text-accent-500" />
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-6">&quot;{t.quote}&quot;</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
})

export default TestimonialCarousel
