'use client'

import { FadeIn, FadeInDown, FadeInLeft, FadeInThenSlideLeft } from '@/components/animations'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 bg-background text-foreground"
    >
      {/* Intro Line */}
      <FadeInThenSlideLeft>
        <p className="text-base sm:text-lg tracking-wide text-cyan-400 mb-2 light:text-red-300">
          Hi, my name is
        </p>
      </FadeInThenSlideLeft>

      {/* Name */}
      <FadeIn delay={2.5}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-accent">
          Edward Davis
        </h1>
      </FadeIn>

      {/* Subheadline */}
      <FadeIn delay={3.2}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-muted mt-4">
          Full-Stack Software Developer
        </h2>
      </FadeIn>

      {/* Supporting Text */}
      <FadeIn delay={4}>
        <p className="mt-6 max-w-xl text-sm sm:text-base text-muted/80 leading-relaxed">
          I enjoy building scalable, modular applications with clean, maintainable code.
          My goal is to craft intuitive experiences — one function at a time.
        </p>
      </FadeIn>
    </section>
  )
}
