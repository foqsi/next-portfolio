// components/animations/FadeInThenSlideLeft.tsx
'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function FadeInThenSlideLeft({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0, transition: { duration: 0.6, delay } })
      await new Promise((r) => setTimeout(r, 1500))
      await controls.start({ x: '-8rem', transition: { duration: 0.6 } }) // move left
    }
    sequence()
  }, [controls, delay])

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={controls}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}