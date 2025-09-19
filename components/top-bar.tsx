"use client"

import { Mail, Facebook, Twitter, Linkedin, Instagram, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200
    }
  }
}

export function TopBar() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#1f684a] text-white py-3 "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-sm ">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail size={14} />
            </motion.div>
            <span className="text-white/90">דוגמה@gmail.com</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Phone size={14} />
            </motion.div>
            <span className="text-white/90">052-555-5555</span>
          </motion.div>
          
         
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="flex items-center space-x-2 self-end sm:self-auto"
        >
          <motion.a 
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 5,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            href="#" 
            className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Facebook size={14} />
          </motion.a>
          <motion.a 
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            href="#" 
            className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <Instagram size={14} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}
