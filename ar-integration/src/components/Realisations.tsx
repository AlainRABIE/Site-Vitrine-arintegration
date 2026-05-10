import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { Reveal } from './Reveal'

export default function Realisations() {
  return (
    <section id="realisations" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            Réalisations
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            Quelques projets construits avec nos clients.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-relaxed text-muted dark:text-white/70">
            Cliquez pour voir le détail : fonctionnalités, design, technologies utilisées.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/projects/${project.slug}/`}
                className="card-bordered group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-neutral-50 to-neutral-100 dark:border-white/10 dark:from-white/[0.03] dark:to-white/[0.06]">
                  <div className="text-[40px] font-bold tracking-tight text-ink/15 dark:text-white/15">
                    {project.name}
                  </div>
                  {project.wip && (
                    <span className="absolute right-3 top-3 rounded-full border border-amber-400/40 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                      En cours
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">
                    {project.cat}
                  </div>
                  <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-ink dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted dark:text-white/65">
                    {project.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform group-hover:translate-x-0.5 dark:text-white">
                    Voir le projet
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
