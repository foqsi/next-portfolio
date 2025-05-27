// layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'
import MobileNav from '@/components/navigation/mobile/MobileNav'
import NavigationWrapper from '@/components/navigation/NavigationWrapper'
import { HeroPinProvider } from '@/context/HeroPinContext'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Edward Davis',
  description: 'Personal Portfolio of Edward Davis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-raleway bg-background text-foreground transition-colors overflow-x-hidden overflow-y-auto">
        <HeroPinProvider>
          <ThemeProvider>
            <Hero />
            <NavigationWrapper />

            <main className="pt-[6rem]">{children}</main>

            <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
              <MobileNav />
            </div>
          </ThemeProvider>
        </HeroPinProvider>
      </body>
    </html>
  )
}
