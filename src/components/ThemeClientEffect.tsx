'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

export default function ThemeClientEffect() {
  const darkMode = useAppStore((state) => state.darkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return null
}