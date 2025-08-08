import { create } from 'zustand'

import type { Language } from '@/types'

interface AppState {
  language: Language
  darkMode: boolean
  setLanguage: (lang: Language) => void
  toggleDarkMode: () => void
}

export const useAppStore = create<AppState>((set) => ({
  language: 'es',
  darkMode: false,
  setLanguage: (lang) => set({ language: lang }),
  toggleDarkMode: () =>
    set((state) => ({ darkMode: !state.darkMode })),
}))