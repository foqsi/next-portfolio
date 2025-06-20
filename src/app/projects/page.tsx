'use client'

import { FadeInDown } from '@/components/animations'
import FadeSequence from '@/components/animations/FadeSequence'
import ProjectCard from '@/components/ProjectCard'
import { FaFolderOpen } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiPython } from 'react-icons/si'

export default function ProjectsPage() {
  const techIcons = [
    { icon: <SiNextdotjs size={20} />, name: 'Next.js' },
    { icon: <SiTypescript size={20} />, name: 'TypeScript' },
    { icon: <SiTailwindcss size={20} />, name: 'Tailwind CSS' },
    { icon: <SiPostgresql size={20} />, name: 'PostgreSQL' },
  ]

  const projects = [
    {
      title: 'El Reno Nail Spa',
      description: 'CRUD app allowing owner to manage services, gallery, and appointments.',
      about: '/projects/salon',
      live: 'https://elrenonailspa.com',
      github: 'https://github.com/foqsi/react-salon',
      icons: techIcons,
    },
    {
      title: 'Simpler Salon',
      description: 'An ad site for people to purchase a CRUD app and has a separate demo on sub domain to experience the admin panel.',
      live: 'https://simplersalon.com',
      github: 'https://github.com/foqsi/next-simplersalon',
      icons: techIcons,
    },
    {
      title: 'Fossil Logs',
      description: 'A Discord bot that monitored The Isle Evrima game server logs to create an interactive player experience.',
      about: '/projects/fossil',
      github: 'https://github.com/foqsi/DiscordBot-TheIsle',
      icons: [
        { icon: <SiPython size={20} />, name: 'Python' },
        { icon: <SiPostgresql size={20} />, name: 'PostgreSQL' },
      ],
    },
    {
      title: 'New Hire Automation',
      description: 'A Python-based Selenium script that automated repetitive admin tasks for new hire onboarding.',
      about: '/projects/ldp',
      icons: [
        { icon: <SiPython size={20} />, name: 'Python' },
      ],
    },
    {
      title: 'Simpler Appointments - WIP',
      description: 'A customizable booking widget users can embed into their own sites.',
      // live: 'https://simplerappointments.com',
      github: 'https://github.com/foqsi/simpler',
      icons: techIcons,
    },
    {
      title: 'StreamLights',
      description: 'A simple program that shows what has been enabled or disabled at a glance.',
      github: 'https://github.com/foqsi/streamlight',
      icons: [
        { icon: <SiPython size={20} />, name: 'Python' },
      ],
    },
    {
      title: 'Portfolio',
      description: 'This portfolio site built with Next.js, Tailwind CSS, and TypeScript.',
      github: 'https://github.com/foqsi/next-portfolio',
      icons: techIcons,
    }
  ]


  return (
    <section className="bg-gray-50 dark:bg-background min-h-screen flex flex-col items-center px-4 pt-12 pb-24 text-center">
      <FadeInDown>
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-2 text-gradient bg-gradient-to-r dark:from-blue-500 dark:to-teal-400 from-gray-500 to-gray-400 bg-clip-text text-transparent">
          <FaFolderOpen className="text-gray-500 dark:text-accent text-3xl" />
          Projects
        </h2>
      </FadeInDown>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 text-left">
        <FadeSequence
          steps={projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        />
      </div>
    </section>
  )
}
