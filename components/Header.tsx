import Link from 'next/link'

type Nav = 'work' | 'writing' | 'about' | null

export default function Header({ active = null }: { active?: Nav }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        Nicholas <span>Mitchell</span>
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/work" className={active === 'work' ? 'active' : undefined}>Work</Link>
        <Link href="/writing" className={active === 'writing' ? 'active' : undefined}>Writing</Link>
        <Link href="/about" className={active === 'about' ? 'active' : undefined}>About</Link>
        <a href="mailto:NicholasSMitchell@gmail.com">Contact</a>
      </nav>
    </header>
  )
}
