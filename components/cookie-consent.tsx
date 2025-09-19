'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handlePreferences = () => {
    localStorage.setItem('cookie-consent', 'preferences')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative mx-4 max-w-md rounded-lg bg-white p-6 shadow-xl" >
        <button
          onClick={handleClose}
          className="absolute left-4 top-4 text-gray-800 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          הגדרות עוגיות
        </h2>
        
        <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        אנו משתמשים בעוגיות (Cookies) וטכנולוגיות דומות לצורך תפקוד בסיסי של האתר בלבד. איננו שומרים מידע אישי כלשהו על המשתמשים.
        בלחיצה על "קבל", הינך מאשר/ת זאת, כפי שמפורט ב{' '}
          <a href="/cookie-policy" className="text-blue-600 hover:underline">
            מדיניות העוגיות
          </a>
          {' '}שלנו.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 rounded-lg bg-[#2bba7f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5eb691] transition-colors"
          >
            קבל
          </button>
          <button
            onClick={handleClose}
            className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            סגור
          </button>
        </div>
      </div>
    </div>
  )
}
