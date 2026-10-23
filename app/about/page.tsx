import fs from 'fs'
import path from 'path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

// With a portrait.jpg in /public, the photo takes the intro spot and the facts move to a strip below it.
export const metadata = {
  title: 'About | Nicholas Mitchell',
  description: 'UX researcher and designer with an M.S. in Human Factors and Ergonomics Engineering from San José State. Background, focus areas, and how I work.',
  alternates: { canonical: '/about' },
}

const HAS_PORTRAIT = fs.existsSync(path.join(process.cwd(), 'public', 'portrait.jpg'))

const FACTS: [string, string][] = [
  ['Based in', 'San José, California'],
  ['Degree', 'M.S. Human Factors and Ergonomics, SJSU, 2026'],
  ['Focus', 'Automotive UX, accessibility, safety-critical interfaces'],
  ['Open to', 'UX research and human factors roles'],
]

const FOCUS = [
  {
    title: 'Automotive & safety-critical',
    body: 'Interfaces where a missed cue has real consequences. My thesis studies how alert salience and modality shape driver reaction time.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="6" fill="#E85D3F" />
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6">
          <ellipse cx="20" cy="20" rx="17" ry="7" />
          <ellipse cx="20" cy="20" rx="17" ry="7" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="17" ry="7" transform="rotate(120 20 20)" />
        </g>
      </svg>
    ),
  },
  {
    title: 'Cognitive load & complexity',
    body: 'Keeping deep systems usable without dumbing them down. Most "hard to use" is really "too much at once."',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6">
          <circle cx="20" cy="20" r="15" />
          <path d="M20 6 v28 M6 20 h28" />
        </g>
        <circle cx="20" cy="20" r="4" fill="#2DA8A8" />
      </svg>
    ),
  },
  {
    title: 'Accessibility-first',
    body: 'Designing for the full range of people from the first sketch, not as a retrofit. WCAG AA as a floor, not a finish line.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6">
          <path d="M6 20 Q20 8 34 20 Q20 32 6 20 Z" />
        </g>
        <circle cx="20" cy="20" r="4.5" fill="#E5B033" />
      </svg>
    ),
  },
]

const OFF_CLOCK = [
  {
    title: 'Coffee nerd',
    body: 'I make my own syrups and test new drink ideas. Coffee know-how is scattered across forums and YouTube, so I built Craft & Cup to put it in one place.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 17 H27 V24 A8 8 0 0 1 19 32 H17 A8 8 0 0 1 9 24 Z" />
          <path d="M27 19 H29.5 A3.5 3.5 0 0 1 29.5 26 H26.5" />
          <path d="M6 35.5 H31" />
          <path d="M14 13 Q12 10 14 7 M19 13 Q17 10 19 7 M24 13 Q22 10 24 7" />
        </g>
        <rect x="10.2" y="18" width="15.6" height="2.6" fill="#E85D3F" />
      </svg>
    ),
  },
  {
    title: 'Gamer',
    body: 'League of Legends is how I wind down at the end of the day.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M11 13 H29 A7 7 0 0 1 36 20 V24 A5 5 0 0 1 27 27 L25 24 H15 L13 27 A5 5 0 0 1 4 24 V20 A7 7 0 0 1 11 13 Z"
          fill="none" stroke="#2D1F15" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 17.5 V23.5 M8 20.5 H14" stroke="#2D1F15" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="27" cy="18.8" r="1.9" fill="#E5B033" />
        <circle cx="30.6" cy="22.4" r="1.9" fill="#2DA8A8" />
      </svg>
    ),
  },
  {
    title: 'Movies and anime',
    body: 'I watch a lot of both. The Fate series is a favorite.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <rect x="9" y="16" width="19" height="12" rx="2" fill="#2DA8A8" />
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6 L20 12 L25 6" />
          <rect x="5" y="12" width="30" height="20" rx="4" />
          <path d="M12 36 L14 32 M28 36 L26 32" />
        </g>
        <circle cx="31.3" cy="18" r="1.4" fill="#2D1F15" />
        <circle cx="31.3" cy="23" r="1.4" fill="#2D1F15" />
      </svg>
    ),
  },
  {
    title: 'Foodie',
    body: 'When I travel, I always research the good local spots to eat.',
    ico: (
      <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="21" r="10" fill="#F2A6A0" stroke="#2D1F15" strokeWidth="1.6" />
        <circle cx="20" cy="21" r="6" fill="none" stroke="#2D1F15" strokeWidth="1.2" />
        <g fill="none" stroke="#2D1F15" strokeWidth="1.6" strokeLinecap="round">
          <path d="M5 7 V15 A2 2 0 0 0 9 15 V7 M7 16 V34" />
          <path d="M34.5 7 C31.5 9 31.5 15 34.5 17 V34" />
        </g>
      </svg>
    ),
  },
]

const SKILLS: { cat: string; items: string[] }[] = [
  { cat: 'Research & design', items: ['Figma', 'Qualtrics', 'PsychoPy', 'Heuristic evaluation', 'Usability testing', 'Experimental design'] },
  { cat: 'Data & stats', items: ['Python', 'pandas', 'pingouin', 'SPSS', 'ANOVA', 'Regression'] },
  { cat: 'Build', items: ['React', 'Next.js', 'Supabase', 'Git'] },
  { cat: 'Accessibility', items: ['WCAG AA', 'axe-core', 'ARIA'] },
]

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main id="main">
        <article className="sheet">
          <div className="pad">
            <div className="intro-grid">
              <div>
                <h1 className="about-title">Hi, I&rsquo;m <span className="tang">Nicholas.</span></h1>
                <p className="lede">
                  A UX researcher and designer, and a recent master&rsquo;s graduate in Human Factors and
                  Ergonomics from San José State. I care about the same thing in a driving alert, a party
                  app, and a sprawling video game: whether a person can actually understand what&rsquo;s in
                front of them and act on it.
                </p>
                <p className="intro-link">
                  <a href="https://www.linkedin.com/in/nicholasscottmitchell/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span className="arw">→</span></a>
                </p>
              </div>
              {HAS_PORTRAIT ? (
                <figure className="portrait-print">
                  <div className="deckle">
                    <div className="mat">
                      <Image src="/portrait.jpg" width={960} height={1200} priority
                        sizes="(min-width: 1000px) 312px, (min-width: 600px) 31vw, 71vw"
                        alt="Nicholas on the Chicago Riverwalk at night, with the Marina City towers lit up behind him." />
                      <span className="pc tl" aria-hidden="true" />
                      <span className="pc tr" aria-hidden="true" />
                      <span className="pc bl" aria-hidden="true" />
                      <span className="pc br" aria-hidden="true" />
                    </div>
                  </div>
                </figure>
              ) : (
                <div className="plate about-plate">
                  <span className="rivet tl" aria-hidden="true" />
                  <span className="rivet tr" aria-hidden="true" />
                  <span className="rivet bl" aria-hidden="true" />
                  <span className="rivet br" aria-hidden="true" />
                  <p className="plate-k">At a glance</p>
                  <dl className="plate-rows">
                    {FACTS.map(([dt, dd]) => (
                      <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
          {HAS_PORTRAIT && (
            <dl className="meta about-meta">
              {FACTS.map(([dt, dd]) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          )}

          <section className="block pad">
            <h2 className="sec-title">The short version</h2>
            <p>
              I run real studies and turn them into design decisions. I came up through behavioral
              science before human factors, so I start from how people actually perceive, attend, and
              respond, not just from interface mechanics. I work across both halves of UX, research and
              design, because the best decisions come from evidence, not taste alone.
            </p>
            <p>
              I&rsquo;m also a builder. I shipped Craft &amp; Cup, a live AI coffee journal, starting from
              almost no coding experience. I designed it and directed AI coding agents to build it, under
              rules I set. One change per pull request, a WCAG, Nielsen, or HIG reason on every UI
              change, and an accessibility suite that has to pass before anything merges. Knowing how
              things actually get built makes me a sharper designer and an easier person for engineers
              to work with.
            </p>
          </section>

          <section className="block pad">
            <h2 className="sec-title">What I work on</h2>
            <p>A few threads run through everything I do, from a 24-person driving study to a heuristic teardown of one of gaming&rsquo;s most overwhelming interfaces.</p>
            <div className="focus">
              {FOCUS.map((f) => (
                <div className="fcard" key={f.title}>
                  {f.ico}
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="block pad">
            <h2 className="sec-title">How I work</h2>
            <p>
              A few things I don&rsquo;t compromise on. I start from evidence, real users and real data,
              before I trust my own instinct. I design for accessibility from the first sketch, targeting
              WCAG AA and going further where I can. And I lean on the fundamentals that earn their keep, like
              Nielsen&rsquo;s heuristics, Apple&rsquo;s Human Interface Guidelines, and the human-factors
              basics underneath both.
            </p>
            <p>None of it is decoration. It&rsquo;s just how you make something people can actually use, which is the only test that matters.</p>
            <p>Classmates tell me I&rsquo;m easy to work with and very hard-working. They also tell me not to worry so much, because I hold myself to a high bar.</p>
          </section>

          <section className="block pad">
            <h2 className="sec-title">Background</h2>
            <p>
              I&rsquo;m a recent graduate with an M.S. in Human Factors and Ergonomics Engineering from San
              José State University, finished in May 2026. My thesis, advised by Dr. Gaojian Huang,
              examined visual and auditory alert salience in driving.
            </p>
            <p>
              Before that, I earned a B.A. in Behavioral Science, also at SJSU. I hadn&rsquo;t heard of
              human factors until my senior year, when my capstone professor told me she thought I&rsquo;d
              click with it. SJSU&rsquo;s program was the only grad program I applied to. The through-line
              is simple. Behavioral science is the study of how people perceive, think, and
              decide. Human factors puts that knowledge to work in design, shaping the alert, the
              control, or the screen around the person using it. One taught me how people work. The
              other taught me how to build for them.
            </p>
            <p>
              On the experience side, I&rsquo;ve spent nine years at Best Buy, starting as a Computer Sales
              Associate and moving into home theater, where I coach every new hire and cover shift lead.
              That&rsquo;s nine years of watching non-expert people choose, struggle with, and reason about
              technology, which turns out to be a real research asset rather than a detour. When I can&rsquo;t
              fix something in the store, like a TV setting or a printer at home, I look up a good video
              walkthrough and send them off with it. Written manuals aren&rsquo;t always the best help. A
              video they can follow side by side usually is.
            </p>
            <p>
              I&rsquo;ve also worked as a research assistant at SJSU under Dr.
              Melissa Beresford on the Diverse Water Economies Project, which added qualitative,
              social-science research alongside my quantitative thesis work, and as a paraeducator at
              Discovery Charter School.
            </p>
            <p>Outside of all that, I build things to learn them. Craft &amp; Cup and this portfolio both started as &ldquo;I wonder if I can,&rdquo; which is usually how I figure out how something really works.</p>
          </section>

          <section className="block pad">
            <h2 className="sec-title">Tools &amp; methods</h2>
            <p>It&rsquo;s an unusual spread for a UX researcher. I script my own experiments, run my own stats in code, and build accessible full-stack apps. The combination is the point.</p>
            <div className="skills">
              {SKILLS.map((s) => (
                <div className="skillcat" key={s.cat}>
                  <h3>{s.cat}</h3>
                  <div className="chips">
                    {s.items.map((i) => <span className="chip" key={i}>{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="block pad">
            <h2 className="sec-title">Off the clock</h2>
            <div className="focus off">
              {OFF_CLOCK.map((f) => (
                <div className="fcard" key={f.title}>
                  {f.ico}
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="cta-block">
            <div className="pad-cta">
              <h2>Let&rsquo;s <span className="tang">talk.</span></h2>
              <p>Open to UX research and human factors roles. If your problem is a real one, I&rsquo;d like to hear about it.</p>
              <div className="cta-actions">
                <a className="btn btn-primary" href="/#contact">Get in touch <span className="arw">→</span></a>
                <a className="btn btn-ghost" href="/resume">Resume</a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/nicholasscottmitchell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <Footer />
        </article>
      </main>
    </>
  )
}
