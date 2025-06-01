'use client'

import React, { useEffect, useRef } from 'react'

type GlowCardProps = {
  children: React.ReactNode
  className?: string
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
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
      className={`card relative rounded-lg w-full overflow-hidden bg-gray-200 dark:bg-[rgba(255,255,255,0.05)] border-2 border-white dark:border-gray-600 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-300  ${className}`}
    >
      <div className="m-1 bg-white-50 dark:bg-gray-700 rounded-lg p-6 relative z-10 flex flex-col flex-grow text-black dark:text-white">
        {children}
      </div>

      {/* Radial hover effect layers */}
      <div className="card-hover pointer-events-none absolute inset-0 rounded-lg z-0" />
      <div className="card-hover pointer-events-none absolute inset-0 rounded-lg z-0" />
    </div>
  )
}
