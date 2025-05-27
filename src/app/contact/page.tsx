'use client'

import { FadeInDown } from '@/components/animations'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaCommentDots } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-2  text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          <FaCommentDots className="text-accent text-3xl" />
          Contact
        </h2>
      </FadeInDown>

      {/* Dashboard-style card */}
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left space-y-4">
        <div className="flex items-center gap-3">
          <FiMail className="text-xl text-foreground" />
          <a
            href="mailto:davis.a.edward@gmail.com"
            className="hover:text-accent transition-colors font-medium"
          >
            davis.a.edward@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaGithub className="text-xl text-foreground" />
          <a
            href="https://github.com/foqsi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-medium"
          >
            github.com/foqsi
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaLinkedin className="text-xl text-foreground" />
          <a
            href="https://linkedin.com/in/davisaedward"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-medium"
          >
            linkedin.com/in/davisaedward
          </a>
        </div>
      </div>
    </section>
  )
}
