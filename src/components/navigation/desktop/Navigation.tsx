'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMail } from 'react-icons/fi'
import { FaFile, FaLaptopCode, FaHome } from 'react-icons/fa'

const tabs = [
  { href: '/home', label: 'Home', icon: <FaHome />, external: false },
  { href: '/projects', label: 'Projects', icon: <FaLaptopCode />, external: false },
  { href: '/resume', label: 'Resume', icon: <FaFile />, external: false },
  { href: '/contact', label: 'Contact', icon: <FiMail />, external: false },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed top-28 left-0 w-full bg-gray-100 dark:bg-background z-[99] flex justify-center border-b border-border mx-auto">
      <nav className="flex gap-4">
        {tabs.map(({ href, label, icon, external }) => {
          const isActive = pathname === href
          const baseStyle =
            'flex items-center gap-2 px-4 py-2 rounded-t-lg border-b-2 transition-all'
          const activeStyle =
            'border-primary text-primary font-semibold'
          const inactiveStyle =
            'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseStyle} ${inactiveStyle}`}
            >
              {icon}
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              {icon}
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
