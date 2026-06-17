import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Sputnik } from '@/components/Brand'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <Sputnik />
          <div className="container">
            <p className="eyebrow">★ Error 404 · Off the map</p>
            <h1 className="hero-name">Lost in <span className="tang">space.</span></h1>
            <p className="tagline">This page drifted out of orbit.</p>
            <p className="pitch">
              The link you followed doesn&rsquo;t exist, or it shipped to a different galaxy.
              Let&rsquo;s get you back to solid ground.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/">Back to home <span className="arw">&rarr;</span></Link>
              <Link className="btn btn-ghost" href="/work">See the work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
