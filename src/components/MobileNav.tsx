'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-background border-t border-muted shadow-md px-6 py-3 flex justify-around text-muted relative z-50">
      <Link href="/" className="flex flex-col items-center text-xs text-gray-500">
        <FaHome className="text-xl" />
        Home
      </Link>

      <Link href="/about" className="flex flex-col items-center text-xs text-gray-500">
        <FaUserAlt className="text-xl" />
        About
      </Link>

      <Link href="/projects" className="flex flex-col items-center text-xs text-gray-500">
        <FaCode className="text-xl" />
        Projects
      </Link>

      {/* Contact button */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex flex-col items-center text-xs text-gray-500 focus:outline-none"
        >
          <FaEnvelope className="text-xl" />
          Contact
        </button>

        {showMenu && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-background border border-muted rounded-md shadow-lg text-md p-2 space-y-2 w-40 z-50">
            <a
              href="mailto:davis.a.edward@gmail.com"
              className="flex items-center gap-2 hover:text-accent text-gray-500"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://github.com/foqsi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent text-gray-500"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/davisaedward"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent text-gray-500"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
