'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { countries } from '@/data/countries'

const SITE_SOURCE = 'medecins.arintegration.fr (vertical médecins)'

const EMAILJS_SERVICE_ID = 'service_8ml6h64'
const EMAILJS_TEMPLATE_ID = 'template_w4kjqcl'
const EMAILJS_PUBLIC_KEY = 'MLPRubrisJiF2a_lW'

const SPECIALITES = [
  'Médecin généraliste',
  'Spécialiste',
  'Dentiste',
  'Kiné',
  'Ostéo',
  'Sage-femme',
  'Infirmier libéral',
  'Autre',
]

const PRATICIENS = ['1', '2-5', '6+']

const OFFRES = [
  { value: 'essentielle', label: 'Présence Essentielle (690€ lancement)' },
  { value: 'connecte', label: 'Cabinet Connecté (1050€ lancement)' },
  { value: 'premium', label: 'Cabinet Premium (1750€ lancement)' },
  { value: 'groupe', label: 'Devis personnalisé (cabinet de groupe / MSP)' },
  { value: 'fondateur', label: 'Programme partenaire fondateur' },
  { value: 'demo', label: 'Voir une démo de mon futur site' },
]

const CRENEAUX = [
  'Matin tôt (avant 9h)',
  'Midi (12h-14h)',
  'Fin de journée (17h-19h)',
  'Soir (après 19h)',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

function buildFormattedMessage(d: FormData, fullPhone: string): string {
  const userMessage = String(d.get('message') || '').trim()
  const lines: string[] = []
  if (userMessage) {
    lines.push('Message du visiteur :', userMessage, '')
  }
  lines.push('— Détails du contact —')
  const push = (label: string, value: string) => {
    if (value) lines.push(`${label} : ${value}`)
  }
  push('Nom', String(d.get('nom') || '').trim())
  push('Email', String(d.get('email') || '').trim())
  push('Téléphone', fullPhone)
  push('Spécialité', String(d.get('specialite') || '').trim())
  push('Nombre de praticiens', String(d.get('praticiens') || '').trim())
  push('Offre intéressée', String(d.get('offre') || '').trim())
  push('Créneau préféré', String(d.get('creneau') || '').trim())
  lines.push(`Source : ${SITE_SOURCE}`)
  return lines.join('\n')
}

export default function ContactForm() {
  const params = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [defaultOffre, setDefaultOffre] = useState('')
  const [defaultIntent, setDefaultIntent] = useState('')

  useEffect(() => {
    if (!params) return
    const offre = params.get('offre')
    const intent = params.get('intent')
    if (offre) setDefaultOffre(offre)
    if (intent) setDefaultIntent(intent)
  }, [params])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)
    const indicatif = String(data.get('indicatif') || '+33').trim()
    const rawTel = String(data.get('telephone') || '').trim()
    const fullPhone = rawTel ? `${indicatif} ${rawTel}` : ''

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: String(data.get('nom') || ''),
          reply_to: String(data.get('email') || ''),
          project_type: String(data.get('specialite') || 'Non précisé'),
          message: buildFormattedMessage(data, fullPhone),
          telephone: fullPhone,
          specialite: String(data.get('specialite') || ''),
          praticiens: String(data.get('praticiens') || ''),
          offre: String(data.get('offre') || ''),
          creneau: String(data.get('creneau') || ''),
          intent: defaultIntent,
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

      <div>
        <label htmlFor="telephone" className="label-field">Téléphone</label>
        <div className="grid grid-cols-[140px_1fr] gap-2">
          <select
            id="indicatif"
            name="indicatif"
            required
            defaultValue="+33"
            className="input-field !px-2 text-[14px]"
            aria-label="Indicatif pays"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.dial}>
                {c.flag} {c.dial} {c.name}
              </option>
            ))}
          </select>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            className="input-field"
            autoComplete="tel-national"
            placeholder="6 67 75 58 50"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="specialite" className="label-field">Spécialité</label>
          <select id="specialite" name="specialite" required defaultValue="" className="input-field">
            <option value="" disabled>Choisir…</option>
            {SPECIALITES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="praticiens" className="label-field">Nombre de praticiens</label>
          <select id="praticiens" name="praticiens" required defaultValue="" className="input-field">
            <option value="" disabled>Choisir…</option>
            {PRATICIENS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="offre" className="label-field">Offre intéressée</label>
          <select
            id="offre"
            name="offre"
            required
            key={`offre-${defaultOffre}`}
            defaultValue={defaultOffre || ''}
            className="input-field"
          >
            <option value="" disabled>Choisir…</option>
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
        <label htmlFor="message" className="label-field">Message (facultatif)</label>
        <textarea id="message" name="message" rows={4} className="textarea-field" placeholder="Décrivez en quelques mots votre projet ou vos questions…" />
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
