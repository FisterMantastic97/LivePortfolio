import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Sputnik, AtomicDivider } from '@/components/Brand'
import CaseCard, { CaseRow, CASES } from '@/components/CaseCard'
import EmailButton from '@/components/EmailButton'

const CURRENTLY: [string, string][] = [
  ['Recently finished', 'My M.S. thesis on in-car alert design.'],
  ['Recently shipped', 'Craft & Cup, a coffee companion app.'],
  ['Writing', '\u201cLook, Listen, Feel,\u201d a follow-up study design.'],
  ['Curious about', 'HUDs and automotive alert design.'],
]

const PROOF: [string, string][] = [
  ['183', 'players surveyed for one study'],
  ['1,008', 'trials in a controlled experiment'],
  ['1', 'app designed, built, and shipped solo'],
]

const EMAIL = 'NicholasSMitchell@gmail.com'
// The Resume button appears on its own once a resume.pdf is added to /public.
const HAS_RESUME = fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'))

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main id="main">
        <section className="hero">
          <Sputnik />
          <div className="container">
            <p className="eyebrow">★ UX Research + Human Factors · San José</p>
            <h1 className="hero-name">Nicholas <span className="tang">Mitchell.</span></h1>
            <p className="tagline">Designing tomorrow, <span className="tang">today.</span></p>
            <p className="pitch">
              I run real studies, then design and build what they point to. A human factors
              researcher who ships, working across automotive UX, accessibility, and safety-critical interfaces.
            </p>
            <p className="hero-open"><span className="dot" aria-hidden="true" />Open to UX research and human factors roles</p>
            <ul className="proof" aria-label="At a glance">
              {PROOF.map(([n, l]) => (
                <li key={l}><span className="proof-n">{n}</span><span className="proof-l">{l}</span></li>
              ))}
            </ul>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/work">See the work <span className="arw">→</span></Link>
              {HAS_RESUME && <a className="btn btn-ghost" href="/resume.pdf">Resume <span className="arw">↓</span></a>}
              <EmailButton email={EMAIL} />
            </div>
          </div>
        </section>

        <section className="currently">
          <div className="container">
            <div className="lead"><span className="k">Currently</span></div>
            <dl className="curgrid">
              {CURRENTLY.map(([dt, dd]) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <AtomicDivider />

        <section className="home-section">
          <div className="container">
            <div className="section-head">
              <h2 className="sh">Selected work</h2>
              <Link className="more" href="/work">All work <span className="arw">→</span></Link>
            </div>
            <ul className="catalog feature">
              <CaseRow c={CASES[0]} />
            </ul>
            <div className="grid">
              {CASES.slice(1).map((c) => <CaseCard key={c.slug} c={c} />)}
            </div>
          </div>
        </section>

        <AtomicDivider />

        <section className="contact" id="contact">
          <div className="container">
            <div className="coupon">
              <span className="scissors" aria-hidden="true">✂</span>
              <div className="stampbox">Place stamp here</div>
              <p className="kicker">★ Mail this coupon today ★</p>
              <h2>Let&rsquo;s make something people can <span className="tang">actually use.</span></h2>
              <p className="sub">Open to UX research and human factors roles. Fill it out, drop it in the box.</p>
              <form className="coupon-form" action="https://formspree.io/f/xzdqwdaa" method="POST">
                <div className="fields">
                  <p className="field">
                    <label className="lbl" htmlFor="cf-name">Your name</label>
                    <input id="cf-name" name="name" type="text" autoComplete="name" required />
                  </p>
                  <p className="field">
                    <label className="lbl" htmlFor="cf-email">Your email</label>
                    <input id="cf-email" name="email" type="email" autoComplete="email" required />
                  </p>
                  <p className="field">
                    <label className="lbl" htmlFor="cf-message">The problem you&rsquo;re solving</label>
                    <textarea id="cf-message" name="message" rows={3} required></textarea>
                  </p>
                </div>
                <input type="hidden" name="_subject" value="New message from your portfolio" />
                <div className="send">
                  <button className="btn btn-primary" type="submit">Send it over <span className="arw">→</span></button>
                  <a className="btn btn-ghost" href="https://www.linkedin.com/in/nicholasscottmitchell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
