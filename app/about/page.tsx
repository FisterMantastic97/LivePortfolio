import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
                <p className="eyebrow">★ About</p>
                <h1 className="about-title">Hi, I&rsquo;m <span className="tang">Nicholas.</span></h1>
                <p className="lede">
                  A UX researcher and designer, and a recent master&rsquo;s graduate in Human Factors and
                  Ergonomics from San José State. I care about the same thing in a driving alert, a party
                  app, and a sprawling video game: whether a person can actually understand what&rsquo;s in
                  front of them and act on it.
                </p>
              </div>
              <div className="portrait">
                <span className="tag">Portrait</span>
                <span className="ph">drop in a photo</span>
              </div>
            </div>
          </div>

          <section className="block pad">
            <p className="stamp"><span className="num">★ 01</span></p>
            <h2 className="sec-title">The short version</h2>
            <p>
              I run real studies and turn them into design decisions. I came up through behavioral
              science before human factors, so I start from how people actually perceive, attend, and
              respond, not just from interface mechanics. I work across both halves of UX, research and
              design, because the best decisions come from evidence, not taste alone.
            </p>
            <p>
              I&rsquo;m also a self-taught builder. I taught myself web development from essentially zero
              and shipped Craft &amp; Cup, a coffee companion app, end to end with Next.js, React,
              Supabase, and the Anthropic API. I built it to WCAG AA from the first commit using
              axe-core and ARIA, self-directed, not a box someone made me check. Knowing how things
              actually get built makes me a sharper designer and an easier person for engineers to work
              with.
            </p>
          </section>

          <section className="block pad">
            <p className="stamp"><span className="num">★ 02</span></p>
            <h2 className="sec-title">What I work on</h2>
            <p>A few threads run through everything I do, from a 24-person driving study to a heuristic teardown of one of gaming&rsquo;s most overwhelming interfaces:</p>
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
            <p className="stamp"><span className="num">★ 03</span></p>
            <h2 className="sec-title">How I work</h2>
            <p>
              A few things I don&rsquo;t compromise on. I start from evidence, real users and real data,
              before I trust my own instinct. I design for accessibility from the first sketch, targeting
              WCAG AA and going further where I can. And I lean on the fundamentals that earn their keep:
              Nielsen&rsquo;s heuristics, Apple&rsquo;s Human Interface Guidelines, and the human-factors
              basics underneath both.
            </p>
            <p>None of it is decoration. It&rsquo;s just how you make something people can actually use, which is the only test that matters.</p>
          </section>

          <section className="block pad">
            <p className="stamp"><span className="num">★ 04</span></p>
            <h2 className="sec-title">Background</h2>
            <p>
              I&rsquo;m a recent graduate with an M.S. in Human Factors and Ergonomics Engineering from San
              José State University, finished in May 2026. My thesis, advised by Dr. Gaojian Huang,
              examined visual and auditory alert salience in driving. Before that, I earned my degree in
              Behavioral Science, also at SJSU, which is where the through-line starts: understanding how
              people think and decide before designing for them.
            </p>
            <p>
              On the experience side, I spent eight years at Best Buy, rising from Computer Sales
              Associate to Home Theater Supervisor. That&rsquo;s eight years of watching non-expert people
              choose, struggle with, and reason about technology, which turns out to be a real research
              asset rather than a detour. I&rsquo;ve also worked as a research assistant at SJSU under Dr.
              Melissa Beresford on the Diverse Water Economies Project, which added qualitative,
              social-science research alongside my quantitative thesis work, and as a paraeducator at
              Discovery Charter School.
            </p>
            <p>Outside of all that, I build things to learn them. Craft &amp; Cup and this portfolio both started as &ldquo;I wonder if I can,&rdquo; which is usually how I figure out how something really works.</p>
          </section>

          <section className="block pad">
            <p className="stamp"><span className="num">★ 05</span></p>
            <h2 className="sec-title">Tools &amp; methods</h2>
            <p>An unusual spread for a UX researcher: I script my own experiments, run my own stats in code, and build accessible full-stack apps. The combination is the point.</p>
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

          <div className="cta-block">
            <div className="pad-cta">
              <h2>Let&rsquo;s <span className="tang">talk.</span></h2>
              <p>Open to UX research and design roles, freelance projects, and graduate research. If your problem is a real one, I&rsquo;d like to hear about it.</p>
              <a className="btn btn-primary" href="/#contact">Get in touch <span className="arw">→</span></a>
            </div>
          </div>

          <Footer />
        </article>
      </main>
    </>
  )
}
