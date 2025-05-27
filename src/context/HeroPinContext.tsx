'use client'

import { createContext, useContext, useState } from 'react'

const HeroPinContext = createContext<{
  pinned: boolean
  setPinned: (val: boolean) => void
}>({
  pinned: false,
  setPinned: () => { },
})

export function HeroPinProvider({ children }: { children: React.ReactNode }) {
  const [pinned, setPinned] = useState(false)
  return (
    <HeroPinContext.Provider value={{ pinned, setPinned }}>
      {children}
    </HeroPinContext.Provider>
  )
}

export function useHeroPin() {
  return useContext(HeroPinContext)
}
