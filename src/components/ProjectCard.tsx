'use client'

import React, { useEffect, useRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

type Props = {
  title: string
  description: string
  about?: string
  live?: string
  github?: string
  icons: { icon: React.ReactNode; name: string }[]
}

export default function ProjectCard({
  title,
  description,
  about,
  live,
  github,
  icons
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cardRef.current.style.setProperty('--mouse-x', `${x}px`)
      cardRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="card relative rounded-lg w-full max-w-md overflow-hidden bg-gray-200 dark:bg-[rgba(255,255,255,0.05)] border-2 border-white dark:border-gray-600 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      <div className="m-1 bg-white-50 dark:bg-gray-700 rounded-lg p-6 relative z-10 flex flex-col flex-grow text-black dark:text-white">
        <div className="flex flex-col flex-grow justify-between">
          {/* Title and Description */}
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">{description}</p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-blue-200 text-lg">
            {icons.map(({ icon, name }) => (
              <Tippy key={name} content={name} delay={[0, 0]} duration={[150, 100]}>
                <div>{icon}</div>
              </Tippy>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 text-sm font-medium text-blue-500">
            {about && (
              <a href={about} target="_self" rel="noopener noreferrer" className="hover:underline">
                Read More
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Live
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Radial hover effect layers */}
      <div className="card-hover pointer-events-none absolute inset-0 rounded-lg z-0" />
      <div className="card-hover pointer-events-none absolute inset-0 rounded-lg z-0" />
    </div>
  )
}
