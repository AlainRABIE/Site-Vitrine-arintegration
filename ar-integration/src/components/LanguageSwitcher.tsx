'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Globe, Check } from 'lucide-react'
import { usePathname, useRouter } from '@/i18n/routing'
import { routing } from '@/i18n/routing'

const LOCALE_FLAGS: Record<string, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
  it: '🇮🇹',
}

export default function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const change = (next: string) => {
    setOpen(false)
    router.replace(pathname, { locale: next as never })
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t('switcherLabel')}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink dark:border-white/15 dark:text-white dark:hover:border-white/40"
      >
        <Globe size={16} strokeWidth={1.7} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 min-w-[180px] overflow-hidden rounded-xl border border-line bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#16181d] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <ul className="py-1.5">
            {routing.locales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => change(l)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-[14px] transition-colors hover:bg-neutral-50 dark:hover:bg-white/[0.06] ${
                    l === locale ? 'font-semibold text-ink dark:text-white' : 'text-muted dark:text-white/70'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span aria-hidden>{LOCALE_FLAGS[l]}</span>
                    {t(l)}
                  </span>
                  {l === locale && <Check size={14} strokeWidth={2.4} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
