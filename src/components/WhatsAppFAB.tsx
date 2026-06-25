'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company } from '../data/seed'

export default function WhatsAppFAB() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello LGPSM Solar, I am interested in solar installation.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-shadow"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, translateY: -4 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <MessageCircle size={28} />

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDuration: '3s' }} />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl"
          >
            Chat with us
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  )
}
