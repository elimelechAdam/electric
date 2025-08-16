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
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            transition: { type: 'spring', stiffness: 400 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#2aba7f] hover:bg-[#1f684a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 group"
          aria-label="חזור למעלה"
        >
          <ChevronUp size={20} className="group-hover:animate-bounce" />
          <span className="text-xs font-medium leading-none">תחזור</span>
          <span className="text-xs font-medium leading-none">למעלה</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

