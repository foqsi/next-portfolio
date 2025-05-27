/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
}
