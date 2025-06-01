'use client'

import { FadeInDown } from '@/components/animations'
import Skills from '@/components/Skills'
import GlowCard from '@/components/GlowCard'

export default function HomePage() {
  return (
    <section className="bg-gray-50 dark:bg-background min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 text-gradient bg-gradient-to-r dark:from-blue-500 dark:to-teal-400 from-gray-500 to-gray-400 bg-clip-text text-transparent">Hey there 👋</h2>
      </FadeInDown>

      <GlowCard className="max-w-3xl w-full">
        <div className="m-1 dark:bg-gray-700 rounded-lg gap-2 relative z-10 flex flex-col flex-grow text-black dark:text-white">

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Name is <span className="text-foreground font-semibold">Edward</span>. I&apos;m a <span className="text-accent">full-stack software developer</span> and current bachelor’s student in technology. I’ve been writing code since 2022. I write modular and responsive code.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Outside of coding, you’ll usually find me turning wrenches under a car hood or playing video games.
            I also enjoy creating the occasional{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://www.youtube.com/@foqsi_"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>{" "}
            gaming video. I dabble in video editing and game development.
          </p>
        </div>
      </GlowCard>

      {/* Skills */}
      <div className="mt-8 w-full max-w-3xl">
        <Skills />
      </div>
    </section>
  )
}
