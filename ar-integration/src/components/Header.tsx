'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV = [
  { label: 'Solutions', href: '/#secteurs' },
  { label: 'Services', href: '/#services' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'À propos', href: '/#apropos' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md transition-colors dark:bg-[#0A0A0A]/80 ${
        scrolled
          ? 'border-b border-line dark:border-white/10'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-[17px] font-bold tracking-tight text-ink dark:text-white">
            AR Intégration
          </span>
          <span className="hidden rounded-full border border-line px-2 py-0.5 text-[11px] font-medium text-muted dark:border-white/15 dark:text-white/70 sm:inline-block">
            Lyon
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-muted transition-colors hover:text-ink dark:text-white/65 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" className="btn-primary !h-10 !px-4 text-[13px] hidden sm:inline-flex">
            Demander un devis
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink dark:border-white/15 dark:text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white dark:border-white/10 dark:bg-[#0A0A0A] md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[15px] font-medium text-ink last:border-b-0 dark:border-white/10 dark:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
