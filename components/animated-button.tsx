"use client"

import { motion } from 'framer-motion'
import { ReactNode, useId } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  baseColor?: string
  hoverColor?: string
  baseTextColor?: string
  hoverTextColor?: string
  disabled?: boolean
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
  baseColor = "#2aba7f",
  hoverColor = "#fedb5d", 
  baseTextColor = "white",
  hoverTextColor = "black",
  disabled = false
}: AnimatedButtonProps) {
  const uniqueId = useId()
  const buttonClass = `animated-btn-${uniqueId.replace(/:/g, '')}`
  
  return (
    <motion.button
      
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} group relative z-10 px-7 py-4 rounded-lg font-semibold overflow-hidden text-sm tracking-wide hover:cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      style={{
        backgroundColor: baseColor,
        color: baseTextColor
      }}
    >
      <span 
        className="relative z-40 transition-colors duration-500"
      >
        {children}
      </span>
      
      <style>{`
        .${buttonClass} span {
          color: ${baseTextColor} !important;
        }
        .${buttonClass}:hover span {
          color: ${hoverTextColor} !important;
        }
      `}</style>
      {/* Full background for complete coverage */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-800 z-10 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: hoverColor }}
      />
      
      {/* Split animation divs for visual effect */}
      <div 
        className="absolute top-0 left-0 w-full h-[50%] transition-transform duration-800 z-20 -translate-x-[110%] group-hover:translate-x-0"
        style={{ backgroundColor: hoverColor }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[50%] transition-transform duration-800 z-20 translate-x-[110%] group-hover:translate-x-0"
        style={{ backgroundColor: hoverColor }}
      />
      
    </motion.button>
  )
}