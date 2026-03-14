"use client"

import { useEffect } from "react"

const DEFAULT_TITLE = "חשמלאי מקצועי במרכז וראשון לציון | שירותי חשמל והנדימן – MS Electrical Solutions"

export function DocumentTitle() {
  useEffect(() => {
    if (typeof document === "undefined") return
    const fix = () => {
      const current = document.title
      if (!current || current === "[object HTMLHeadingElement]" || current.length < 10) {
        document.title = DEFAULT_TITLE
      }
    }
    fix()
    const t = setTimeout(fix, 150)
    return () => clearTimeout(t)
  }, [])
  return null
}
