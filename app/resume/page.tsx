import type { ReactNode } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EmailButton from '@/components/EmailButton'

// The web edition of /public/resume.pdf. Keep the wording in step with the PDF when either one changes.

export const metadata = {
  title: 'Resume | Nicholas Mitchell',
  description:
    'Human factors and UX researcher with an M.S. in Human Factors and Ergonomics Engineering. Runs studies end to end and ships the software.',
  alternates: { canonical: '/resume' },
}

const EMAIL = 'NicholasSMitchell@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/nicholasscottmitchell/'
const CITI = 'https://www.citiprogram.org/verify/?wd877cd09-0ced-41fc-ad1c-2433740aec8e-60952918'

const SKILLS: [string, string][] = [
  ['Research methods', 'Experimental design, moderated usability testing, contextual inquiry, user interviews, heuristic evaluation, persona development, survey design, thematic analysis, IRB and informed consent'],
  ['Data & analysis', 'Mixed ANOVA, regression, non-parametric testing, PCA and CFA, power analysis, data cleaning and documentation; SPSS, Python (pingouin, pandas), MATLAB, G*Power, Excel, Qualtrics'],
  ['Design & technical', 'Figma, wireframing and prototyping, interaction design, WCAG AA accessibility (axe-core); React, Next.js, TypeScript, Git, relational databases, LLM API integration, PsychoPy'],
  ['Instrumentation', 'Eye tracking, ECG, force sensors, multi-camera session capture, equipment setup and calibration, oscilloscope and multimeter'],
]

type Project = { title: string; ctx?: ReactNode; bullets: string[]; href?: string; no?: string }

const PROJECTS: Project[] = [
  {
    title: 'Alert Modality & Salience in Driving',
    ctx: 'Master’s Thesis, SJSU',
    href: '/work/driving-alert-salience',
    no: 'ISE 298',
    bullets: [
      'Designed and ran a 2x2 within-subjects experiment with 24 participants on how visual versus auditory alert modality and intensity affect detection speed and accuracy under task load.',
      'Built the simulation and protocol in Python and PsychoPy, secured IRB approval, moderated every session as sole researcher, analyzed results in pingouin and SPSS, and defended the work to a faculty committee.',
    ],
  },
  {
    title: 'Path of Exile 2: Contextual Inquiry & Heuristic Evaluation',
    href: '/work/path-of-exile-2-evaluation',
    no: 'PSYCH 273',
    bullets: [
      'Recruited 183 experienced users through the product community, built 5 personas, and scored each against a structured heuristic rubric, finding a consistent gap between perceived and actual usability.',
    ],
  },
  {
    title: 'Partiful Mobile App: Moderated Usability Study',
    href: '/work/partiful-usability',
    no: 'ISE 215',
    bullets: [
      'Moderated task-based sessions capturing screen, face, and hand recordings. 5 of 5 participants were unsure whether cancellations notified guests. Delivered fixes ranked by severity.',
    ],
  },
  {
    title: 'Instrument Cluster Usability: Analog vs. Hybrid vs. Digital',
    href: '/work/dashboard-usability',
    no: 'ISE 210',
    bullets: [
      'Built a 27-question Qualtrics instrument and analyzed 67 responses in SPSS across three display architectures.',
    ],
  },
  {
    title: 'Craft & Cup: Specialty Coffee Web App',
    ctx: <a href="https://mycraftcup.com/" target="_blank" rel="noopener noreferrer">mycraftcup.com</a>,
    href: '/work/craft-and-cup',
    no: 'Solo build',
    bullets: [
      'Designed and shipped a live full-stack product solo, from wireframes through deployment, including an LLM workflow converting freeform tasting notes into a structured flavor wheel.',
      'Audited and remediated the interface against WCAG AA using axe-core, correcting ARIA attributes, heading semantics, and color contrast.',
    ],
  },
  {
    title: 'Writing & Analysis',
    bullets: [
      'Sole-authored an APA 7 literature review synthesizing ten peer-reviewed sources on cognitive load and skill acquisition. Co-authored a health system quality proposal applying root cause analysis, Pareto prioritization, and FMEA with risk priority scoring.',
    ],
  },
]

const JOBS: { role: string; org: string; when: string; bullet: string }[] = [
  {
    role: 'Senior Research Assistant',
    org: 'San Jose State University',
    when: 'Jan 2024 – Dec 2024',
    bullet: 'Conducted and transcribed interviews, coded qualitative data, and processed survey responses for mixed-methods research. Promoted from intern in five months.',
  },
  {
    role: 'Sales Advisor, Home Theater',
    org: 'Best Buy',
    when: 'Jul 2017 – Present',
    bullet: 'Nine years in consumer technology, promoted through three roles. Trained every new hire in the department and built a training program delivered across multiple stores.',
  },
  {
    role: 'Special Education Paraeducator',
    org: 'Discovery Charter School',
    when: 'Nov 2023 – Jun 2025',
    bullet: 'Collected and analyzed individual behavior data over time to inform intervention.',
  },
]

/** A heading line with a dotted leader running out to the date, like a catalog price list. */
function Leader({ children, when, as: Tag = 'p' }: { children: ReactNode; when?: string; as?: 'p' | 'h3' }) {
  return (
    <Tag className={`rs-line${Tag === 'h3' ? ' rs-t' : ''}`}>
      <span className="rs-what">{children}</span>
      {when && <><span className="rs-dots" aria-hidden="true" /><span className="rs-when">{when}</span></>}
    </Tag>
  )
}

export default function ResumePage() {
  return (
    <>
      <Header />
      <main id="main">
        <article className="sheet resume">
          <header className="rs-head">
            <div className="rs-id">
              <h1 className="rs-name">Nicholas S. <span className="tang">Mitchell.</span></h1>
              <p className="rs-role">Human Factors &amp; UX Researcher</p>
            </div>
            <div className="rs-actions">
              <a className="btn btn-primary" href="/resume.pdf" download="Nicholas-Mitchell-Resume.pdf">
                Download the PDF <span className="arw">↓</span>
              </a>
              <EmailButton email={EMAIL} />
            </div>
            <ul className="rs-contact">
              <li>San Jose, CA</li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">linkedin.com/in/nicholasscottmitchell</a></li>
            </ul>
          </header>

          <section className="rs-sec" aria-labelledby="rs-summary">
            <h2 className="rs-h" id="rs-summary">Summary</h2>
            <div className="rs-body">
              <p className="rs-sum">
                Human factors researcher with an M.S. in Human Factors and Ergonomics Engineering who runs studies end to end and
                ships the software. Designs experiments and usability evaluations, secures IRB approval, recruits and moderates
                participants, analyzes the data, and delivers recommendations ranked by severity. Also designs and builds live
                products, with accessibility audited rather than assumed. Nine years in consumer technology.
              </p>
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="rs-edu">
            <h2 className="rs-h" id="rs-edu">Education &amp; certification</h2>
            <div className="rs-body">
              <Leader when="May 2026"><b>M.S., Human Factors &amp; Ergonomics Engineering</b></Leader>
              <p className="rs-org">San Jose State University</p>
              <Leader><b>B.A., Behavioral Sciences</b></Leader>
              <p className="rs-org">San Jose State University</p>
              <p className="rs-note">
                Coursework in usability evaluation and testing, sensory and cognitive psychology in system design, applied statistics,
                biomechanics and physical ergonomics, motor learning, and patient safety engineering.
              </p>
              <p className="rs-note">
                <a href={CITI} target="_blank" rel="noopener noreferrer">CITI Human Subjects Research certification</a>, Social and
                Behavioral Research (Basic / Refresher)
              </p>
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="rs-skills">
            <h2 className="rs-h" id="rs-skills">Skills</h2>
            <div className="rs-body">
              <dl className="specs rs-skills">
                {SKILLS.map(([dt, dd]) => (
                  <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
                ))}
              </dl>
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="rs-projects">
            <h2 className="rs-h" id="rs-projects">Research &amp; projects</h2>
            <div className="rs-body">
              {PROJECTS.map((p) => (
                <div className="rs-item" key={p.title}>
                  <h3 className="rs-t">
                    {p.title}
                    {p.ctx && <span className="rs-ctx"> · {p.ctx}</span>}
                  </h3>
                  <ul className="rs-bul">
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {p.href && (
                    <Link className="rs-case" href={p.href}>
                      <span className="rs-no">No. {p.no}</span>
                      <span className="rs-go">Read the case study</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="rs-exp">
            <h2 className="rs-h" id="rs-exp">Experience</h2>
            <div className="rs-body">
              {JOBS.map((j) => (
                <div className="rs-item" key={j.role}>
                  <Leader as="h3" when={j.when}>{j.role}</Leader>
                  <p className="rs-org">{j.org}</p>
                  <ul className="rs-bul"><li>{j.bullet}</li></ul>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </article>
      </main>
    </>
  )
}
