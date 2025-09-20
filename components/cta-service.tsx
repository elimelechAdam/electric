"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"
import Image from "next/image"

export function CtaServiceSection() {
  return (
    <section id="contact" className="pb-10 relative ">
      <motion.div className="absolute bottom-0 right-0 -z-50">
        <Image src="/images/images/shape-3.png" alt="contact" width={600} height={700} className="w-full h-auto transition-transform duration-700 group-hover:scale-105 invert-[5%] " />
      </motion.div>
      <div className="px-4  max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10  bg-[#171717] rounded p-9 z-50"
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
            
          </motion.div>
          </motion.div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}