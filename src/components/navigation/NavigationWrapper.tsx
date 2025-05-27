'use client'

import { useHeroPin } from '@/context/HeroPinContext'
import Navigation from '@/components/navigation/desktop/Navigation'

export default function NavigationWrapper() {
  const { pinned } = useHeroPin()

  return (
    <div
      className={`hidden md:flex justify-center transition-opacity duration-1000 ease-in-out ${pinned ? 'opacity-100 mt-20' : 'opacity-0'
        }`}
    >
      <Navigation />
    </div>
  )
}
