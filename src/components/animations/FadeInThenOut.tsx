'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeInThenOut({
  children,
  delay = 0,
  displayDuration = 1.5,
}: {
  children: ReactNode
  delay?: number
  displayDuration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-20, 0, 0, 20] }}
      transition={{
        duration: delay + displayDuration + 1,
        times: [0, 0.2, 0.8, 1],
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
