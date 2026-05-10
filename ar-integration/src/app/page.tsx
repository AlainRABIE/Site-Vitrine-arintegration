import { redirect } from 'next/navigation'
import { routing } from '@/i18n/routing'

// Redirige / vers /fr (locale par défaut).
// Avec output: 'export', Next.js génère un fichier de redirection HTML.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`)
}
