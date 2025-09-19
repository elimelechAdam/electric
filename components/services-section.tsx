"use client"

import { motion } from "framer-motion"
import { Plug, LampCeiling, Wrench } from "lucide-react"

const services = [
  {
    icon: Plug,
    type: "סוג שירות 1",
    title: "תיקוני חשמל",
    desc: "אני מבצע תיקונים אמינים ומהירים לכל תקלה חשמלית בבית ובעסק."
  },
  {
    icon: LampCeiling,
    type: "סוג שירות 2",
    title: "תאורה ומתקנים",
    desc: "תכנון והתקנה של פתרונות תאורה מתקדמים וחכמים לכל חלל."
  },
  {
    icon: Wrench,
    type: "סוג שירות 3",
    title: "תחזוקה שוטפת",
    desc: "חבילות תחזוקה 24/7 לשקט נפשי וזמינות מלאה לכל צורך."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="relative max-w-7xl mx-auto py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <div className="text-[#2aba7f] font-semibold tracking-wider text-sm">השירותים שלנו</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717]">
            פתרונות עדכניים לבעיות המודרניות שלכם
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] ring-1 ring-[#e9f4ef] group"
              >
                <div className="absolute -top-6 start-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#f6fbf8] ring-1 ring-[#e6f4ee] flex items-center justify-center transition-all duration-500 ease-in-out relative overflow-hidden">
                    <Icon className="w-9 h-9 text-[#1f684a] group-hover:text-white transition-colors duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-[#2aba7e] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-2xl" />
                  </div>
                </div>

                <div className="ps-0 pt-12">
                  <div className="text-[#2aba7f] text-sm font-semibold mb-2">{s.type}</div>
                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#171717] mb-4">{s.title}</h3>
                  <p className="text-[#6b7280] leading-relaxed mb-6">{s.desc}</p>

                  
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
