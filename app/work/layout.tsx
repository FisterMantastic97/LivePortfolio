import type { ReactNode } from 'react'

export const metadata = {
  title: 'Work | Nicholas Mitchell',
  description: 'Five case studies in UX research and human factors, from a driving-alert thesis to a coffee app I designed and shipped solo.',
  alternates: { canonical: '/work' },
}

export default function WorkLayout({ children }: { children: ReactNode }) {
  return children
}
