"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedButton } from './animated-button'

const galleryImages = [
  {
    src: '/images/images/project-1-1.jpg',
    alt: 'חשמלאי עובד על תיבת חשמל חיצונית'
  },
  {
    src: '/images/images/project-1-2.jpg',
    alt: 'לוח חשמל עם מפסקי זרם'
  },
  {
    src: '/images/images/project-1-3.jpg',
    alt: 'התקנת רכיב חשמלי'
  },
  {
    src: '/images/images/project-1-4.jpg',
    alt: 'עבודת תחזוקה חשמלית'
  },
  {
    src: '/images/images/project-1-5.jpg',
    alt: 'בדיקת בטיחות חשמלית'
  },
  {
    src: '/images/images/project-1-6.jpg',
    alt: 'שירות חשמל חירום'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-sm font-medium text-[#4CAF50] uppercase tracking-wide mb-2">
                הגלריה שלנו
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#212121] leading-tight">
                הבחירה הנכונה
                בתיקונים שלך
              </h2>
            </div>
            <AnimatedButton
              className="px-6 py-3 rounded-md self-start"
              baseColor="white"
              hoverColor="#2aba7f"
              baseTextColor="#212121"
              hoverTextColor="white"
            >
              כל הגלריה
            </AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 group cursor-pointer"
            onClick={() => openModal(0)}
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {galleryImages.slice(1, 3).map((image, index) => (
              <motion.div
                key={index + 1}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => openModal(index + 1)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          {galleryImages.slice(3, 6).map((image, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(index + 3)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <div className="relative bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
