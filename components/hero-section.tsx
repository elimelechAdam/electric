"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatedButton } from './animated-button'

const sliderImages = [
  '/images/images/slider-1-2.jpg',
  '/images/images/slider-1-3.jpg'
]

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
}

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.5
    }
  }
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <section id="home" className="relative min-h-[70vh] md:h-[85vh] bg-[#171717] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#171717]" />

        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 30% 100%, 0 100%)'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image src={sliderImages[currentSlide]} alt="hero bg" fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/35" />

        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-16">
        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center min-h-[60vh] md:min-h-[85vh]"
        >
          <motion.div 
            variants={textVariants}
            className="space-y-6 md:space-y-10"
          >
            <div className="space-y-6">
              
              
              <motion.h1 
                variants={textVariants}
                className="text-4xl sm:text-5xl lg:text-[59px] font-bold text-white leading-[0.95] md:leading-[0.9]"
              >
                <span className="inline-block mb-2">
                כל הפתרונות במקום אחד
                  <motion.span 
                    variants={underlineVariants}
                    className="block h-1 bg-[#2aba7f] mt-4 origin-left"
                  />
                </span>
                <span className="inline-block">
                חשמל, תיקונים ותחזוקה
                  <motion.span 
                    variants={underlineVariants}
                    className="block h-1 bg-[#2aba7f] mt-4 origin-left"
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                variants={textVariants}
                className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
              >
                אני מציע פתרונות חשמל חכמים ושירותי Handyman לכל בית או משרד, עם מענה מהיר ועבודה מוקפדת עד הפרט האחרון              </motion.p>
            </div>
            
            <AnimatedButton
                className="px-7 py-3 md:px-9 md:py-4 rounded-lg"
                baseColor="#fedb5d"
                hoverColor="#2aba7f"
                baseTextColor="black"
                hoverTextColor="white"
              >
                למידע נוסף
              </AnimatedButton>
          </motion.div>

          <div className="hidden md:block" />
        </motion.div>

        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex space-x-3 md:space-x-4">
          <motion.button 
            whileHover={{ 
              scale: 1.1,
              rotate: -10,
              transition: { type: 'spring', stiffness: 300 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronRight size={22} className="md:w-7 md:h-7" />
          </motion.button>
          <motion.button 
            whileHover={{ 
              scale: 1.1,
              rotate: 10,
              transition: { type: 'spring', stiffness: 300 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <ChevronLeft size={22} className="md:w-7 md:h-7" />
          </motion.button>
        </div>

        <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {sliderImages.map((_, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.3 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 md:w-4 md:h-4 rounded-full cursor-pointer transition-colors ${
                index === currentSlide 
                  ? 'bg-white border-2 border-gray-600' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
