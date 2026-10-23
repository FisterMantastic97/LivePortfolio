import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Accessibility — Nicholas Mitchell',
  description: 'How this site is built and tested to meet WCAG 2.2 AA, and where it still falls short.',
  alternates: { canonical: '/accessibility' },
}

const EMAIL = 'NicholasSMitchell@gmail.com'

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main">
        <article className="sheet resume">
          <header className="pad acc-head">
            <h1 className="rs-name">The fine <span className="tang">print.</span></h1>
            <p className="lede">
              This site aims to meet WCAG 2.2 at Level AA. Accessibility is part of how I work, so here is how I check it and
              where it still falls short.
            </p>
          </header>

          <section className="rs-sec" aria-labelledby="acc-test">
            <h2 className="rs-h" id="acc-test">How it’s checked</h2>
            <div className="rs-body">
              <ul className="rs-bul">
                <li>Every page is scanned with axe-core against the WCAG 2.0, 2.1, and 2.2 A and AA rules. Each scan covers desktop and phone widths, in both the Quick and Full reading modes. The last full run, in October 2026, found no violations.</li>
                <li>Everything works from a keyboard. Focus is always visible, and a skip link jumps past the header to the content.</li>
                <li>Text colors are tuned to at least 4.5 to 1 contrast on the cream paper, and large display type to at least 3 to 1. Color never carries meaning alone. Charts and results also label their values in text.</li>
                <li>Animations stop for anyone whose device is set to reduce motion.</li>
                <li>Screenshots and figures have written descriptions. Decorative art is hidden from screen readers.</li>
                <li>Quick and Full reading modes let people choose how much to read. The short version always comes first.</li>
                <li>The resume and thesis PDFs are tagged, so screen readers can follow their structure.</li>
              </ul>
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="acc-limits">
            <h2 className="rs-h" id="acc-limits">Known limits</h2>
            <div className="rs-body">
              <ul className="rs-bul">
                <li>The salience demo on the thesis page tests how fast people see a visual alert, so it needs sight to play. The study’s results are also written out in full on the same page.</li>
                <li>Automated scans catch a lot but not everything. I also check pages by hand, and I still miss things.</li>
              </ul>
            </div>
          </section>

          <section className="rs-sec" aria-labelledby="acc-report">
            <h2 className="rs-h" id="acc-report">Found a problem?</h2>
            <div className="rs-body">
              <p className="rs-sum">
                Email me at <a className="acc-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>. Tell me the page and what got in your way,
                and I’ll fix it.
              </p>
            </div>
          </section>

          <Footer />
        </article>
      </main>
    </>
  )
}
