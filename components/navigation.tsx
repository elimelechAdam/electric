"use client"

import { ChevronDown, Zap, Settings, Menu, X, Mail, Phone, Twitter, Facebook, Instagram, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AnimatedButton } from './animated-button'

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

const mobileMenuVariants: Variants = {
  closed: { x: '100%' },
  open: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
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

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50"
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
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#2aba7f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-800" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <AnimatedButton
                className="px-9 py-4 rounded-lg hidden md:block"
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
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
              <motion.div
               variants={mobileMenuVariants}
               initial="closed"
               animate="open"
               exit="closed"
               className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-[#1e1e1e] z-50 lg:hidden"
             >
               <div className="flex flex-col h-full">
                 <div className="flex items-center justify-between p-5 border-b !border-gray-300">
                   <div className="flex items-center space-x-3">
                     <Settings className="w-8 h-8 text-[#2aba7e]" />
                     <div className="leading-tight">
                       <div className="text-2xl font-extrabold text-white">MS</div>
                       <div className="text-xs font-semibold tracking-wider text-gray-300">Electrical Solutions</div>
                     </div>
                   </div>
                   <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={closeMobileMenu}
                     className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-[#2aba7e] transition-colors"
                   >
                     <X size={20} />
                   </motion.button>
                 </div>

                 <nav className="flex-1 p-6">
                   <div className="space-y-1">
                     {links.map((link, index) => (
                       <motion.a
                         key={link.href}
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: index * 0.1 }}
                         href={link.href}
                         onClick={closeMobileMenu}
                         className="flex items-center justify-between py-4 px-2 text-gray-200 hover:text-[#2aba7e] transition-colors border-b !border-gray-300"
                       >
                         <span className="font-medium">{link.label}</span>
                         {link && (
                           <ChevronLeft size={32} className="bg-[#2aba7e] p-2" />
                         )}
                       </motion.a>
                     ))}
                   </div>
                 <div className=" space-y-6 mt-4 ">
                   <div className="space-y-4">
                     <div className="flex items-center space-x-3 text-gray-200">
                       <div className="w-8 h-8 bg-[#2aba7e] rounded-full flex items-center justify-center shadow-lg">
                         <Mail size={14} className="text-white" />
                       </div>
                       <span className="text-sm">needhelp@ms-electrical.com</span>
                     </div>
                     <div className="flex items-center space-x-3 text-gray-200">
                       <div className="w-8 h-8 bg-[#2aba7e] rounded-full flex items-center justify-center shadow-lg">
                         <Phone size={14} className="text-white" />
                       </div>
                       <span className="text-sm">666 888 0000</span>
                     </div>
                   </div>

                   <div className="flex space-x-4">
                     <motion.a
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       href="#"
                       className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#2aba7e] hover:text-white transition-all duration-300 shadow-lg"
                     >
                       <Twitter size={16} />
                     </motion.a>
                     <motion.a
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       href="#"
                       className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#2aba7e] hover:text-white transition-all duration-300 shadow-lg"
                     >
                       <Facebook size={16} />
                     </motion.a>
                     <motion.a
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       href="#"
                       className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#2aba7e] hover:text-white transition-all duration-300 shadow-lg"
                     >
                       <Instagram size={16} />
                     </motion.a>
                   </div>
                 </div>
                 </nav>

               </div>
             </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
