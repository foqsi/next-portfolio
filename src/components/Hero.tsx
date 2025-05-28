'use client'

import { useEffect, useState, useCallback } from 'react'
import { useHeroPin } from '@/context/HeroPinContext'
import { FadeIn } from '@/components/animations'
import ThemeToggle from '@/components/ThemeToggle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Hero() {
  const { pinned, setPinned } = useHeroPin()
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const hasSeen = sessionStorage.getItem('hasSeenHero')

    if (!hasSeen) {
      setShouldAnimate(true)
      const timeout = setTimeout(() => {
        setPinned(true)
        sessionStorage.setItem('hasSeenHero', 'true')
      }, 6000)
      return () => clearTimeout(timeout)
    } else {
      setPinned(true)
    }
  }, [hasMounted, setPinned])

  const skipIntro = useCallback(() => {
    setShouldAnimate(false)
    setPinned(true)
    sessionStorage.setItem('hasSeenHero', 'true')
  }, [setPinned])

  return (
    <header
      onClick={skipIntro}
      onTouchStart={skipIntro}
      className={`fixed top-0 left-0 w-full z-50 bg-background text-foreground transition-all duration-700 ${pinned ? 'h-28 py-2' : 'min-h-screen flex justify-center items-center'
        }`}
    >
      {/* Theme toggle in top-right */}
      <div className="absolute top-4 right-4 z-[60]">
        <ThemeToggle />
      </div>

      <div
        className={`bg-background transition-all duration-700 text-center w-full ${pinned ? 'scale-90' : ''
          }`}
      >
        <h1
          onClick={() => {
            sessionStorage.removeItem('hasSeenHero')
            window.location.reload()
          }}
          className="text-4xl sm:text-5xl font-extrabold text-accent cursor-pointer hover:underline transition"
        >
          Edward Davis
        </h1>

        {shouldAnimate && !pinned && (
          <>
            <FadeIn delay={2.1}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-muted mt-4">
                Full-Stack Software Developer
              </h2>
            </FadeIn>
            <FadeIn delay={2.4}>
              <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-muted/80 leading-relaxed">
                I like to write code, and I try to make it modular and clean.
              </p>
            </FadeIn>
          </>
        )}

        {pinned && (
          <div className="mt-2 flex justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:davis.a.edward@gmail.com"
              className="flex items-center gap-1 hover:text-accent transition"
            >
              <FiMail className="text-lg" />
              Email
            </a>
            <a
              href="https://github.com/foqsi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/davisaedward"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </header>
  )
}