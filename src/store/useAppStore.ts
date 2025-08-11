import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Language } from "@/types";

interface AppState {
  language: Language;
  darkMode: boolean;
  setLanguage: (lang: Language) => void;
  toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: "es",
      darkMode: true, // por defecto true
      setLanguage: (lang) => set({ language: lang }),
      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.darkMode;

          if (typeof document !== "undefined") {
            // Ahora partimos de siempre tener "dark" y solo la sacamos si es false
            if (!newDarkMode) {
              document.documentElement.classList.remove("dark");
            } else {
              document.documentElement.classList.add("dark");
            }
          }

          return { darkMode: newDarkMode };
        }),
    }),
    {
      name: "app-storage",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : undefined,
      onRehydrateStorage: () => (state) => {
        if (typeof document !== "undefined") {
          if (!state?.darkMode) {
            document.documentElement.classList.remove("dark");
          }
        }
      },
    }
  )
);