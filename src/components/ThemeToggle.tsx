'use client'

import { useTheme } from '@/components/ThemeProvider'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded text-xl text-yellow-400 hover:text-yellow-300 transition"
      title={isDark ? 'Turn on the light' : 'Turn off the light'}
    >
      {isDark ? <FaLightbulb /> : <FaRegLightbulb />}
    </button>
  )
}
