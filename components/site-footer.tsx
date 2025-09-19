"use client"

import { Facebook, Instagram, Linkedin, Twitter, Settings, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#121212] text-white/80 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b !border-white/10"
        >
          <motion.div className="space-y-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className="flex items-center gap-3 text-white">
              
              <Image src="/images/images/logo.png" alt="logo" width={150} height={150} />

            </div>
            <p className="leading-relaxed text-white/70">
              לא מחפפים – עושים את העבודה נכון מההתחלה, כדי שתחיו בראש שקט בלי תקלות חוזרות.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center"><Instagram size={16} /></a>
            </div>
          </motion.div>

          <motion.div className="space-y-4" dir="rtl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="text-white font-bold">החברה שלנו</div>
            <ul className="space-y-3">
              <li><a className="hover:text-white" href="#">דף הבית</a></li>
              <li><a className="hover:text-white" href="#">אודות</a></li>
              <li><a className="hover:text-white" href="#">שירותים</a></li>
              <li><a className="hover:text-white" href="#">בלוג</a></li>
              <li><a className="hover:text-white" href="#">צור קשר</a></li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" dir="rtl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="text-white font-bold">השירותים שלנו</div>
            <ul className="space-y-3">
              <li><a className="hover:text-white" href="#">תיקוני חשמל</a></li>
              <li><a className="hover:text-white" href="#">תאורה ומתקנים</a></li>
              <li><a className="hover:text-white" href="#">תחזוקה</a></li>
              <li><a className="hover:text-white" href="#">התקנות</a></li>
              <li><a className="hover:text-white" href="#">שירות 24/7</a></li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" dir="rtl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="text-white font-bold">צרו קשר</div>
            <div className="space-y-3">
              
              <div>
                <div className="text-white/60 text-sm">טלפון</div>
                <div>+972 52 555 5555</div>
              </div>
              <div>
                <div className="text-white/60 text-sm">אימייל</div>
                <div>example@gmail.com</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm text-white/60" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex justify-between w-full">
            <div>
            © {new Date().getFullYear()} כל הזכויות שמורות
            </div>
            <div className="flex gap-4">
              <Link href="/cookie-policy">מדיניות עוגיות</Link>
              <Link href="/privacy-policy">מדיניות פרטיות</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}