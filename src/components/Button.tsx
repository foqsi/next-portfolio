'use client'

import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
} & ComponentProps<'button'>

export default function Button({
  children,
  href,
  icon,
  variant = 'primary',
  onClick,
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95'

  const variants = {
    primary:
      'bg-black text-white hover:bg-gray-800 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300',
    secondary:
      'border border-black text-black hover:bg-gray-100 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-black',
  }

  const className = `${baseStyles} ${variants[variant]}`

  const content = (
    <span className="flex items-center gap-2">
      {icon}
      {children}
    </span>
  )

  if (href) {
    return href.startsWith('http') || href.startsWith('mailto') ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    ) : (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={className} {...rest}>
      {content}
    </button>
  )
}
