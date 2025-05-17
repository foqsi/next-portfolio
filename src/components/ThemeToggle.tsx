'use client'

import { useTheme } from '@/components/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 px-3 py-1 text-sm border rounded bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}
