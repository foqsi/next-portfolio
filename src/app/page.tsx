import HomePage from './home/page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edward Davis Portfolio',
  keywords: [
    'Edward Davis',
    'Portfolio',
    'Web Developer',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Personal Portfolio',
    'Web Design',
    'Web Development',
    'Software Development',
    'Programming',
    'Coding',
    'Tech Portfolio',
    'Developer Portfolio',
    'Portfolio Website',
    'Portfolio Design',
  ],
  authors: [
    {
      name: 'Edward Davis',
      url: 'https://realedavis.com',
    },
  ],
  openGraph: {
    title: 'Edward Davis Portfolio',
    description: 'Personal Portfolio of Edward Davis',
  }
}

export default function RootHomePage() {
  return <HomePage />
}
