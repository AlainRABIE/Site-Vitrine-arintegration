'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const SITE_SOURCE = 'arintegration.fr (site marque)'

const EMAILJS_SERVICE_ID = 'service_8ml6h64'
const EMAILJS_TEMPLATE_ID = 'template_w4kjqcl'
const EMAILJS_PUBLIC_KEY = 'MLPRubrisJiF2a_lW'

const TYPES_PROJET = [
  'Site vitrine',
  'Site e-commerce',
  'Application mobile (iOS/Android)',
  'SaaS / dashboard',
  'Refonte de site existant',
  'Conseil / autre',
]

const BUDGETS = [
  '< 1 500 €',
  '1 500 € — 3 000 €',
  '3 000 € — 6 000 €',
  '6 000 € — 12 000 €',
  '> 12 000 €',
  'À déterminer ensemble',
]

const OFFRES = [
  { value: 'site-essentielle', label: 'Site Essentielle (690€ lancement)' },
  { value: 'site-connecte', label: 'Site Connecté (1050€ lancement)' },
  { value: 'site-premium', label: 'Site Premium (1750€ lancement)' },
  { value: 'ecom-starter', label: 'E-commerce Starter (2090€ lancement)' },
  { value: 'ecom-pro', label: 'E-commerce Pro (3490€ lancement)' },
  { value: 'app-mvp', label: 'App MVP (3490€ lancement)' },
  { value: 'app-pro', label: 'App Pro (6990€ lancement)' },
  { value: 'sur-mesure', label: 'Projet sur-mesure / SaaS' },
  { value: 'autre', label: 'Je ne sais pas encore' },
]

const CRENEAUX = [
  'Matin tôt (avant 9h)',
  'Midi (12h-14h)',
  'Fin de journée (17h-19h)',
  'Soir (après 19h)',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

function buildFormattedMessage(d: FormData): string {
  const userMessage = String(d.get('message') || '').trim()
  const lines: string[] = []
  if (userMessage) {
    lines.push('Message du visiteur :', userMessage, '')
  }
  lines.push('— Détails du contact —')
  const push = (label: string, key: string) => {
    const v = String(d.get(key) || '').trim()
    if (v) lines.push(`${label} : ${v}`)
  }
  push('Nom', 'nom')
  push('Email', 'email')
  push('Téléphone', 'telephone')
  push('Entreprise', 'entreprise')
  push('Type de projet', 'type')
  push('Budget', 'budget')
  push('Offre intéressée', 'offre')
  push('Créneau préféré', 'creneau')
  lines.push(`Source : ${SITE_SOURCE}`)
  return lines.join('\n')
}

export default function ContactForm() {
  const params = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [defaultOffre, setDefaultOffre] = useState('')

  useEffect(() => {
    if (!params) return
    const offre = params.get('offre')
    if (offre) setDefaultOffre(offre)
  }, [params])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: String(data.get('nom') || ''),
          reply_to: String(data.get('email') || ''),
          project_type: String(data.get('type') || 'Non précisé'),
          message: buildFormattedMessage(data),
          telephone: String(data.get('telephone') || ''),
          entreprise: String(data.get('entreprise') || ''),
          budget: String(data.get('budget') || ''),
          offre: String(data.get('offre') || ''),
          creneau: String(data.get('creneau') || ''),
          site_source: SITE_SOURCE,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      const detail = err instanceof Error ? err.message : 'Une erreur est survenue.'
      setErrorMessage(`${detail} Réessayez ou écrivez à contact@arintegration.fr.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="card-bordered p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
          <CheckCircle2 size={24} />
        </div>
        <h2 className="mt-5 text-[24px] font-bold tracking-tight text-ink dark:text-white">Merci.</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted dark:text-white/65">
          Nous vous rappelons dans les 24h ouvrées au numéro indiqué.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card-bordered space-y-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nom" className="label-field">Nom et prénom</label>
          <input id="nom" name="nom" type="text" required className="input-field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="label-field">Email professionnel</label>
          <input id="email" name="email" type="email" required className="input-field" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="label-field">Téléphone</label>
          <input id="telephone" name="telephone" type="tel" required className="input-field" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="entreprise" className="label-field">Entreprise (facultatif)</label>
          <input id="entreprise" name="entreprise" type="text" className="input-field" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="type" className="label-field">Type de projet</label>
          <select id="type" name="type" required defaultValue="" className="input-field">
            <option value="" disabled>Choisir…</option>
            {TYPES_PROJET.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="label-field">Budget envisagé</label>
          <select id="budget" name="budget" required defaultValue="" className="input-field">
            <option value="" disabled>Choisir…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="offre" className="label-field">Offre intéressée (facultatif)</label>
          <select
            id="offre"
            name="offre"
            key={`offre-${defaultOffre}`}
            defaultValue={defaultOffre || ''}
            className="input-field"
          >
            <option value="">Aucune offre précise</option>
            {OFFRES.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="creneau" className="label-field">Créneau préféré pour l'appel</label>
          <select id="creneau" name="creneau" required defaultValue="" className="input-field">
            <option value="" disabled>Choisir…</option>
            {CRENEAUX.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-field">Décrivez votre projet (facultatif)</label>
        <textarea id="message" name="message" rows={4} className="textarea-field" placeholder="Quelques lignes pour préparer notre échange…" />
      </div>

      <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted dark:text-white/60">
        <input type="checkbox" name="rgpd" required className="mt-1 h-4 w-4 flex-shrink-0 accent-black dark:accent-white" />
        <span>
          J'accepte que mes données soient utilisées uniquement pour me recontacter dans le cadre
          de cette demande. Je peux exercer mes droits RGPD à tout moment auprès de{' '}
          <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
            contact@arintegration.fr
          </a>.
        </span>
      </label>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          'Envoyer ma demande'
        )}
      </button>

      <p className="text-center text-[12.5px] text-dim dark:text-white/45">
        Vous préférez parler directement ?{' '}
        <a href="tel:+33667755850" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
          06 67 75 58 50
        </a>
      </p>
    </form>
  )
}
