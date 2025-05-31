'use client'

import { useHeroPin } from '@/context/HeroPinContext'
import Navigation from '@/components/navigation/desktop/Navigation'

export default function NavigationWrapper() {
  const { pinned } = useHeroPin()

  console.log('pinned:', pinned)

  if (!pinned) {
    console.log('Navigation is hidden from DOM')
    return null
  }

  console.log('Navigation is shown')

  return (
    <div className="hidden md:flex justify-center opacity-100 mt-20 transition-opacity duration-1000 ease-in-out">
      <Navigation />
    </div>
  )
}
