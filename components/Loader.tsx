'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Start the fade-out animation after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // Completely remove the loader from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false)
    }, 2500) // 1500ms + 1000ms (animation duration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div className={`loader-wrap ${!isLoading ? 'available' : ''}`}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
