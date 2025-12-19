import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useDarkMode = create(
    persist((set) => ({
        isDarkMode: false,
        toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode}))
    }), {name: "dark-mode"})
)

export default useDarkMode