"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedButton } from "./animated-button" 

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg relative group"
          >
            <Image src="/images/images/about-one-img-1.jpg" alt="work" width={600} height={700} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/20 to-transparent skew-x-12 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-2500 ease-in-out" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg sm:self-end relative group"
          >
            <Image src="/images/images/about-one-img-2.jpg" alt="technician" width={500} height={600} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/20 to-transparent skew-x-12 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-2500 ease-in-out" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:space-y-6"
        >
          <div className="text-[#2aba7f] font-semibold tracking-wide">הכירו אותנו</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] leading-tight">
            שירות ותיקוני חשמל ברמה גבוהה 
          </h2>
          <p className="text-[#4b5563] leading-relaxed">
            אני מספק פתרונות חשמל מקצה לקצה, עם דגש על איכות, בטיחות ושירות יוצא דופן. זמין לכל פרויקט או קריאה דחופה.
          </p>
          <p className="text-[#4b5563] leading-relaxed">
            אני מלווה את לקוחותינו משלב האבחון ועד למסירה מלאה, תוך מתן אחריות והתחייבות לעמידה בלוחות הזמנים.
          </p>
            <AnimatedButton className="px-7 py-3 md:px-9 md:py-4 rounded-lg w-full sm:w-auto">
                קרא עלינו
              </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
