'use client'

import { FadeInDown } from '@/components/animations'
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
    <section className="bg-gray-50 dark:bg-background min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Hey there 👋</h2>
      </FadeInDown>

      {/* Card */}
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left space-y-4">
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Name is <span className="text-foreground font-semibold">Edward</span>. I&apos;m a <span className="text-accent">full-stack software developer</span> and current bachelor’s student in technology. I’ve been writing code since 2022. I try to write clean, modular code.
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

      {/* Skills */}
      <div className="mt-8 w-full max-w-3xl">
        <Skills />
      </div>
    </section>
  )
}
