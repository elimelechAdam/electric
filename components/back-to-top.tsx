"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          whileHover={{ 
            scale: 1.05,
            x: -5,
            transition: { type: 'spring', stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-0 z-50 w-12 h-32 bg-[#2aba7f] hover:bg-[#1f684a] text-white rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
          aria-label="Go back to top"
        >
          <ChevronUp size={18} className="group-hover:animate-bounce" />
          <div className="writing-mode-vertical text-center">
            <span className="text-xs font-bold tracking-wider leading-none block">תעלה</span>
            <span className="text-xs font-bold tracking-wider leading-none block">למעלה</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

