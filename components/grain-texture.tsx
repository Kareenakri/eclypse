"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function GrainTexture() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <div className="grain-texture fixed inset-0 pointer-events-none z-[1000]" aria-hidden="true" />
}
