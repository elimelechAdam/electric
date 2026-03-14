"use client"

import { motion } from "framer-motion"

const faqs = [
  { q: "מה כוללים שירותי חשמלאי אצלכם?", a: "אנו מספקים תיקוני חשמל לבית ולמשרד, התקנת תאורה ומתקנים, תחזוקה שוטפת ואבחון תקלות. כל העבודות עם אחריות ומחירים שקופים." },
  { q: "האם אתם נותנים שירות בראשון לציון ובמרכז?", a: "כן. אנו נותנים שירות במרכז הארץ – ראשון לציון, חולון, בת ים, תל אביב והסביבה. זמינים גם לשירות דחוף." },
  { q: "יש אחריות על העבודה?", a: "כן. אחריות מלאה על העבודה והחומרים למשך התקופה המוסכמת. עושים את העבודה נכון מההתחלה." },
  { q: "כמה עולה שירות חשמלאי או הנדימן?", a: "המחירים תלויים בסוג העבודה. אנו שומרים על מחירים הוגנים ושקופים – תקבלו הצעת מחיר ברורה לפני תחילת העבודה." },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16"
        >
          <div className="text-[#2aba7f] font-semibold tracking-wider text-sm">שאלות נפוצות</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717]">
            תשובות על שירותי חשמל והנדימן
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#f5fbf9] p-8 md:p-12 space-y-6"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-[#e6f4ee] last:border-0 pb-6 last:pb-0"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#171717] mb-2">{faq.q}</h3>
              <p className="text-[#4b5563] leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
