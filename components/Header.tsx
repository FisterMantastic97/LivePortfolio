import Link from 'next/link'

type Nav = 'home' | 'work' | 'about' | null

export default function Header({ active = null }: { active?: Nav }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        Nicholas <span>Mitchell</span>
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/" className={active === 'home' ? 'active' : undefined}>Home</Link>
        <Link href="/work" className={active === 'work' ? 'active' : undefined}>Work</Link>
        <Link href="/about" className={active === 'about' ? 'active' : undefined}>About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  )
}