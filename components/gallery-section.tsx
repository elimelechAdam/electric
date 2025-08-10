"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/images/project-1-1.jpg',
    alt: 'תיקון חשמל מקצועי',
    title: 'תיקון חשמל מקצועי',
    description: 'תיקון מערכות חשמל מתקדמות'
  },
  {
    src: '/images/images/project-1-2.jpg',
    alt: 'התקנת תאורה',
    title: 'התקנת תאורה',
    description: 'התקנת מערכות תאורה מודרניות'
  },
  {
    src: '/images/images/project-1-3.jpg',
    alt: 'תחזוקת חשמל',
    title: 'תחזוקת חשמל',
    description: 'תחזוקה שוטפת של מערכות חשמל'
  },
  {
    src: '/images/images/project-1-4.jpg',
    alt: 'התקנת מתקנים',
    title: 'התקנת מתקנים',
    description: 'התקנת מתקני חשמל חדשים'
  },
  {
    src: '/images/images/project-1-5.jpg',
    alt: 'בדיקת חשמל',
    title: 'בדיקת חשמל',
    description: 'בדיקות בטיחות מקיפות'
  },
  {
    src: '/images/images/project-1-6.jpg',
    alt: 'שירות חירום',
    title: 'שירות חירום',
    description: 'שירותי חירום 24/7'
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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            גלריית עבודות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            צפו בפרויקטים האחרונים שלנו ובדוגמאות לעבודות החשמל המקצועיות שביצענו
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <div className="w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            מעוניינים לראות עוד עבודות או לקבל הצעת מחיר?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2aba7f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#229a6a] transition-colors"
          >
            צרו קשר עכשיו
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
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
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {galleryImages[selectedImage].description}
                </p>
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
