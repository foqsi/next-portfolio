'use client'

import Link from 'next/link'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

type Props = {
  title: string
  description: string
  link: string
  icons: { icon: React.ReactNode; name: string }[]
}

export default function ProjectCard({ title, description, link, icons }: Props) {
  // Determine if the link is external
  const isExternal = link.startsWith('http')

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-6 w-full max-w-md text-left transition-transform transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      {/* Icons with tooltips */}
      <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
        {icons.map(({ icon, name }) => (
          <Tippy
            key={name}
            content={name}
            delay={[0, 0]} // Instant tooltip
            duration={[150, 100]} // Fade in/out durations
          >
            <div>{icon}</div>
          </Tippy>
        ))}
      </div>

      {/* Link with conditional behavior */}
      <Link
        href={link}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
      >
        View Project
      </Link>
    </div>
  )
}
