"use client"

import { ChevronDown, Zap, Settings, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AnimatedButton } from './animated-button'
//

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      staggerChildren: 0.1
    }
  }
}

import type { Variants } from 'framer-motion'
const logoVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 800
    }
  }
}

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0}
  
}

const links = [
  { href: '#home', label: 'בית', hasDropdown: false },
  { href: '#about', label: 'אודות', hasDropdown: false },
  { href: '#features', label: 'יתרונות', hasDropdown: false },
  { href: '#services', label: 'שירותים', hasDropdown: false },
  { href: '#gallery', label: 'גלריה', hasDropdown: false },
  { href: '#contact', label: 'צור קשר', hasDropdown: false },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/80  backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.div 
            variants={logoVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 800 }
            }}
            className="flex items-center space-x-3"
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Settings className="w-9 h-9 text-[#2aba7f]" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-5 h-5 text-[#fedb5d] absolute -top-1 -right-1" />
              </motion.div>
            </motion.div>
            <div className="leading-tight">
              <div className="text-3xl font-extrabold text-gray-900">MS</div>
              <div className="text-xs font-semibold tracking-wider text-gray-600">Electrical Solutions</div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <motion.a
                key={l.href}
                variants={menuItemVariants}
                href={l.href}
                className="group relative inline-flex items-center gap-1 text-gray-900 hover:text-[#2aba7f] transition-colors font-semibold text-sm tracking-wider"
              >
                {l.label}
                {l.hasDropdown && <ChevronDown size={14} />}
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#2aba7f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
          
            <AnimatedButton
              className="px-9 py-4 rounded-lg"
              baseColor="#2aba7f"
              hoverColor="#fedb5d"
              baseTextColor="white"
              hoverTextColor="black"
            >
              קבל הצעת מחיר
            </AnimatedButton>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="תפריט"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-4 flex flex-col items-end gap-2" dir="rtl">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-right py-2 px-1 font-semibold text-gray-900 hover:text-[#2aba7f]"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="pt-2 flex w-full justify-end">
                  <AnimatedButton
                    className="w-full sm:w-auto px-6 py-3 rounded-lg"
                    baseColor="#2aba7f"
                    hoverColor="#fedb5d"
                    baseTextColor="white"
                    hoverTextColor="black"
                  >
                    קבל הצעת מחיר
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
