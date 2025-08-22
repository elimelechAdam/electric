"use client"

import { motion } from "framer-motion"
import { Banknote, ShieldCheck, Headphones } from "lucide-react"

const items = [
  {
    icon: Banknote,
    title: "מחיר משתלם",
    desc: "אנו שומרים על מחירים הוגנים ושקופים בכל עבודה."
  },
  {
    icon: ShieldCheck,
    title: "אחריות 100%",
    desc: "אחריות מלאה על העבודה והחומרים למשך התקופה המוסכמת."
  },
  {
    icon: Headphones,
    title: "שירות 24/7",
    desc: "זמינות גבוהה לכל קריאה דחופה בכל שעות היום."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#f5fbf9] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={
                    "flex flex-col items-start gap-6 p-6 md:p-10" +
                    (idx > 0 ? " md:border-s md:!border-[#e6f4ee]" : "")
                  }
                >
                  <div className="relative">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        transition: { 
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      className="w-16 h-16 rounded-full bg-white hover:bg-[#2aba7e] shadow-sm ring-1 ring-black/5 flex items-center justify-center cursor-pointer transition-colors duration-800 ease-out"
                    >
                      <Icon className="w-7 h-7 text-[#1f684a] transition-colors duration-800 ease-out group-hover:text-white" />
                    </motion.div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#171717]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-[#6b7280]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
