'use client'

import Button from '@/components/Button'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa'

export default function Navigation() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4 px-4 z-[99]">
      <Button href="mailto:davis.a.edward@gmail.com" variant="primary" icon={<FiMail />}>
        Email
      </Button>
      <Button href="https://github.com/foqsi" variant="secondary" icon={<FaGithub />}>
        GitHub
      </Button>
      <Button href="https://linkedin.com/in/davisaedward" variant="primary" icon={<FaLinkedin />}>
        LinkedIn
      </Button>
      <Button href="/projects" variant="secondary" icon={<FaLaptopCode />}>
        Projects
      </Button>
    </div>
  )
}
