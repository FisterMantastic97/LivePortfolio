import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Sputnik } from '@/components/Brand'
import CaseCard, { CASES } from '@/components/CaseCard'

const CURRENTLY: [string, string][] = [
  ['Working on', 'This portfolio, in 1950s retro-futurism.'],
  ['Wrestling with', 'Showing research work visually.'],
  ['Recently shipped', 'Craft & Cup, a coffee companion app.'],
  ['Curious about', 'HUDs and automotive alert design.'],
]

const WRITING = [
  { title: 'Task completion is a trap metric', meta: 'Essay · draft' },
  { title: 'What turning a thesis into a case study taught me', meta: 'Essay · draft' },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <Sputnik />
          <div className="container">
            <p className="eyebrow">★ UX Research + Design · San José</p>
            <h1 className="hero-name">Nicholas <span className="tang">Mitchell.</span></h1>
            <p className="tagline">Designing tomorrow, <span className="tang">today.</span></p>
            <p className="pitch">
              I run real studies and turn them into design decisions. Equal parts researcher and
              designer, working in automotive UX, accessibility, and safety-critical interfaces.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/work">See the work <span className="arw">→</span></Link>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
        </section>

        <section className="currently">
          <div className="container">
            <div className="lead"><span className="k">Currently</span><span className="d">★ Jun &rsquo;26</span></div>
            <dl className="curgrid">
              {CURRENTLY.map(([dt, dd]) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="section-head">
              <h2 className="sh">Selected work</h2>
              <Link className="more" href="/work">All work <span className="arw">→</span></Link>
            </div>
            <div className="grid">
              {CASES.map((c) => <CaseCard key={c.slug} c={c} />)}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="section-head">
              <h2 className="sh">From the notebook</h2>
              <Link className="more" href="/writing">All writing <span className="arw">→</span></Link>
            </div>
            <div className="wlist">
              {WRITING.map((w) => (
                <Link className="wrow" href="/writing" key={w.title}>
                  <h3>{w.title}</h3>
                  <span className="meta-tag">{w.meta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <div className="coupon">
              <span className="scissors" aria-hidden="true">✂</span>
              <div className="stampbox">Place stamp here</div>
              <p className="kicker">★ Mail this coupon today ★</p>
              <h2>Let&rsquo;s make something people can <span className="tang">actually use.</span></h2>
              <p className="sub">Open to UX research and design roles, freelance projects, and graduate research. Fill it out, drop it in the box.</p>
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
