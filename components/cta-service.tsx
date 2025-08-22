"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { AnimatedButton } from "./animated-button"

export function CtaServiceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-[#f7f7f7]"
          >
            <Image src="/images/cta-one-img-1.png" alt="electric service" fill className="object-cover" priority />
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="absolute left-10 bottom-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm shadow-xl grid place-items-center text-[#1f684a] ring-2 ring-[#e6f4ee]"
            >
              <Play className="w-8 h-8" fill="#1f684a" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-right" dir="rtl"
          >
            <div className="text-[#2aba7f] font-semibold tracking-widest text-xs md:text-sm mb-4">צור קשר</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#171717] leading-tight mb-6">
              בחרו בשירות התיקון החשמלי שלנו
              <br />
              כי הוא זמין 24/7
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-10 max-w-xl ml-auto">
            אני דוגל במתן שירות איכותי ומהיר, עם פתרונות אמינים לכל צורך. שם את הדגש על התמדה וסבלנות כדי ליהנות מתוצאות טובות לאורך זמן            </p>
            <div className="flex flex-row-reverse items-center gap-4">
              <AnimatedButton
                baseColor="#2aba7f"
                hoverColor="#fedb5d"
                baseTextColor="white"
                hoverTextColor="black"
                className="px-7 py-3 rounded-xl font-bold shadow-[0_10px_30px_rgba(42,186,127,0.35)]"
              >
                גלו עוד
              </AnimatedButton>
              <AnimatedButton
                baseColor="white"
                hoverColor="#2aba7f"
                baseTextColor="#1f684a"
                hoverTextColor="white"
                className="px-7 py-3 rounded-xl shadow-[0_10px_30px_rgba(42,186,127,0.35)] font-bold"
              >
                הצעת מחיר
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}