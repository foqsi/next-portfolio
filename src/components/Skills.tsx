// /components/Skills.tsx

import FadeSequence from '@/components/animations/FadeSequence'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiSupabase, SiSailsdotjs, SiFramer } from 'react-icons/si'
import GlowCard from './GlowCard'

export default function Skills() {
  const skills = [
    { name: 'Next.js', icon: <SiNextdotjs size={28} /> },
    { name: 'React', icon: <FaReact size={28} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} /> },
    { name: 'TypeScript', icon: <SiTypescript size={28} /> },
    { name: 'Python', icon: <SiPython size={28} /> },
    { name: 'PostgreSQL', icon: <SiSailsdotjs size={28} /> },
    { name: 'Node.js', icon: <FaNodeJs size={28} /> },
    { name: 'Supabase', icon: <SiSupabase size={28} /> },
    { name: 'EmailJS', icon: <SiSailsdotjs size={28} /> },
    { name: 'Framer Motion', icon: <SiFramer size={28} /> },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <FadeSequence
          steps={skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm transition hover:scale-105"
            >

              <div className="text-gray-600 dark:text-blue-400 mb-2">
                {skill.icon}
              </div>

              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
            </div>
          ))}
          stepDelay={0.1}
        />
      </div>

    </section>
  )
}
