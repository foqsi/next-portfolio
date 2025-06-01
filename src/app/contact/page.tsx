'use client'

import { FadeInDown } from '@/components/animations'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaCommentDots } from 'react-icons/fa'
import GlowCard from '@/components/GlowCard'

export default function ContactPage() {
  return (
    <section className="bg-gray-50 dark:bg-background min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-2  text-gradient bg-gradient-to-r dark:from-blue-500 dark:to-teal-400 from-gray-500 to-gray-400 bg-clip-text text-transparent">
          <FaCommentDots className="text-gray-500 dark:text-accent text-3xl" />
          Contact
        </h2>
      </FadeInDown>

      {/* Dashboard-style card */}
      <div className="max-w-md w-full rounded-lg shadow">
        <GlowCard className="max-w-md w-full">
          <div className="flex items-center gap-3 p-3">
            <FiMail className="text-xl text-foreground" />
            <a
              href="mailto:davis.a.edward@gmail.com"
              className="hover:text-accent transition-colors font-medium hover:underline"
            >
              davis.a.edward@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 p-3">
            <FaGithub className="text-xl text-foreground" />
            <a
              href="https://github.com/foqsi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-medium hover:underline"
            >
              github.com/foqsi
            </a>
          </div>

          <div className="flex items-center gap-3 p-3">
            <FaLinkedin className="text-xl text-foreground" />
            <a
              href="https://linkedin.com/in/davisaedward"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-medium hover:underline"
            >
              linkedin.com/in/davisaedward
            </a>
          </div>
        </GlowCard>
      </div>
    </section>
  )
}
