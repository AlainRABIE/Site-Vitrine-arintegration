'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink dark:border-white/15 dark:text-white dark:hover:border-white/40"
    >
      {/* Avoid hydration mismatch — render neutral icon until mounted */}
      {mounted ? (
        isDark ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />
      ) : (
        <Moon size={16} strokeWidth={1.7} />
      )}
    </button>
  )
}
