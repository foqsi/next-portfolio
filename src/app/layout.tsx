import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'
import MobileNav from '@/components/MobileNav'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edward Davis',
  description: 'Personal Portfolio of Edward Davis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground transition-colors overflow-hidden`}>

        <ThemeProvider>
          <div className="hidden md:block">
            <Navigation />
          </div>
          <ThemeToggle />

          {children}
          <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
            <MobileNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
