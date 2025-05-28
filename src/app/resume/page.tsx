'use client'

import { FadeInDown } from '@/components/animations'
import { FiFileText } from 'react-icons/fi'

export default function ResumePage() {
  return (
    <section className="bg-gray-50 dark:bg-background min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-2  text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          <FiFileText className="text-accent text-3xl" />
          Resume
        </h2>
      </FadeInDown>

      {/* Dashboard Card */}
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6">
        <p>
          I&apos;m currently pursuing a Bachelor&apos;s degree in Technology and have been developing software since 2022.
          I focus on full-stack development using modern tools like React, Next.js, Tailwind CSS, Supabase, and Node.js.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React, Next.js, Tailwind CSS, Vue</li>
            <li>Backend: Node.js, PostgreSQL, SQL</li>
            <li>Other: Supabase, Git, Linux, REST APIs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Projects</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><a href='/projects' className='text-blue-500 hover:underline'>View Projects</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
