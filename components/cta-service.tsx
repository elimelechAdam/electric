"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"

export function CtaServiceSection() {
  return (
    <section id="contact" className="pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10  bg-[#171717] rounded p-9"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full rounded-3xl overflow-hidden "
          >
            <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-right p-4" dir="rtl"
          >
            <div className="text-[#2aba7f] font-semibold tracking-widest text-xs md:text-sm mb-4">צור קשר</div>
            <h2 className="text-4xl md:text-5xl font-extrabold  leading-tight mb-6">
              בחרו בשירות התיקון החשמלי שלנו
              כי הוא זמין 24/7  
            </h2>
            <p className=" text-lg leading-relaxed  max-w-xl ml-auto">
            אני דוגל במתן שירות איכותי ומהיר, עם פתרונות אמינים לכל צורך. שם את הדגש על התמדה וסבלנות כדי ליהנות מתוצאות טובות לאורך זמן            </p>
            <div className="flex flex-row-reverse items-center gap-4">
              {/* <AnimatedButton
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
              </AnimatedButton> */}
            </div>
          </motion.div>
          </motion.div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}