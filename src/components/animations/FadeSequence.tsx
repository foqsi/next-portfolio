// components/animations/FadeSequence.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeSequence({
  steps,
  baseDelay = 0,
  stepDelay = 1.5,
}: {
  steps: ReactNode[]
  baseDelay?: number
  stepDelay?: number
}) {
  return (
    <>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
          transition={{
            delay: baseDelay + i * stepDelay,
            duration: stepDelay,
            times: [0, 0.2, 0.8, 1],
            ease: 'easeInOut',
          }}
          className="absolute"
        >
          {step}
        </motion.div>
      ))}
    </>
  )
}