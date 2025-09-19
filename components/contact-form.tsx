'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { AnimatedButton } from './animated-button'

interface FormData {
  name: string
  email: string
  mobile: string
  company: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          company: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'שגיאה בשליחת ההודעה')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('שגיאה בחיבור לשרת')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full h-full p-8">
      

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="text-green-600" size={20} />
          <span className="text-green-800 font-medium">ההודעה נשלחה בהצלחה!</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <AlertCircle className="text-red-600" size={20} />
          <span className="text-red-800 font-medium">{errorMessage}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border bg-[#232323] !border-[#343434] rounded-xl  transition-colors"
              placeholder="הכנס את שמך המלא"
            />
          </div>

          <div>
            
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border bg-[#232323] !border-[#343434] rounded-xl  transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border bg-[#232323] !border-[#343434] rounded-xl  transition-colors"
              placeholder="050-1234567"
            />
          </div>

          <div>
            
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border bg-[#232323] !border-[#343434] rounded-xl  transition-colors"
              placeholder="שם החברה (אופציונלי)"
            />
          </div>
        </div>

        <div>
          
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border bg-[#232323] !border-[#343434] rounded-xl  transition-colors"
            placeholder="הודעה"
          />
        </div>

        <AnimatedButton
          baseColor="#fedb5d"
          hoverColor="#2aba7f"
          baseTextColor="black"
          hoverTextColor="white"
          className="px-10 py-5 rounded-xl font-bold w-full"
        >
          {isSubmitting ? (
            <>
              <div className="border-2 border-white border-t-transparent rounded-full animate-spin" />
              שולח...
            </>
          ) : (
            <>
              שלח הודעה
            </>
          )}
        </AnimatedButton>
      </form>
    </div>
  )
}
