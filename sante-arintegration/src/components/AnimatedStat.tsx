'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

interface AnimatedStatProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

export function AnimatedStat({ value, prefix = '', suffix = '', duration = 1.6 }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    return count.on('change', (v) => setDisplay(Math.round(v)))
  }, [count])

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] })
    return () => controls.stop()
  }, [inView, value, duration, count])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
