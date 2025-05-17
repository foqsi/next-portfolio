'use client'

import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Simpler Appointments',
      description: 'A customizable booking widget users can embed into their own sites.',
      link: 'https://github.com/realedavis/simpler-appointments',
    },
    {
      title: 'Nail Salon Dashboard',
      description: 'Admin dashboard to manage services, gallery uploads, and booking.',
      link: 'https://github.com/realedavis/nail-salon-dashboard',
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
