'use client'

import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import MobileNav from '@/components/navigation/mobile/MobileNav'
import NavigationWrapper from '@/components/navigation/NavigationWrapper'
import { HeroPinProvider } from '@/context/HeroPinContext'
import Hero from '@/components/Hero'
import { FadeIn } from '@/components/animations'

import { useHeroPin } from '@/context/HeroPinContext'

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { pinned } = useHeroPin()

  return (
    <>
      <Hero />
      <NavigationWrapper />

      <main className="pt-[6rem]">{children}</main>

      {pinned && (
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
          <FadeIn><MobileNav /></FadeIn>
        </div>
      )}
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-raleway bg-background text-foreground transition-colors overflow-x-hidden overflow-y-auto">
        <HeroPinProvider>
          <ThemeProvider>
            <LayoutContent>{children}</LayoutContent>
          </ThemeProvider>
        </HeroPinProvider>
      </body>
    </html>
  )
}
