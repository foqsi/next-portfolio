'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

interface ContactLinksProps {
  showLabels?: boolean // default: true
}

export default function ContactLinks({ showLabels = true }: ContactLinksProps) {
  return (
    <div className="flex justify-center gap-6 text-sm text-muted-foreground">
      <a
        href="mailto:davis.a.edward@gmail.com"
        className="flex items-center gap-1 hover:text-accent transition"
      >
        <FiMail className="text-lg" />
        {showLabels ? 'Email' : 'davis.a.edward@gmail.com'}
      </a>

      <a
        href="https://github.com/foqsi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-accent transition"
      >
        <FaGithub className="text-lg" />
        {showLabels ? 'GitHub' : 'github.com/foqsi'}
      </a>

      <a
        href="https://linkedin.com/in/davisaedward"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-accent transition"
      >
        <FaLinkedin className="text-lg" />
        {showLabels ? 'LinkedIn' : 'linkedin.com/in/davisaedward'}
      </a>
    </div>
  )
}
