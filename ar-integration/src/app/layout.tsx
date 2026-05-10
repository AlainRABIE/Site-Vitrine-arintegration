import type { ReactNode } from 'react'

// Root layout : passthrough. Le vrai layout (html/body) est dans app/[locale]/layout.tsx.
// Next 14 exige un app/layout.tsx mais autorise qu'il soit délégué au layout enfant.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
