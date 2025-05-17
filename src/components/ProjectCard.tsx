'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white border border-gray-200 rounded-xl shadow p-6 w-full max-w-md text-left hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View Project →
      </Link>
    </motion.div>
  )
}
