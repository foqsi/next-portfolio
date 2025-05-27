'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeSequence({
  steps,
  baseDelay = 0,
  stepDelay = 0.1,
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
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + i * stepDelay,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          {step}
        </motion.div>
      ))}
    </>
  )
}
