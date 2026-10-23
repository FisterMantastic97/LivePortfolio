import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'
import { ReadModeProvider, ReadToggle, DeepRead } from '@/components/ReadMode'
import SpecPlate from '@/components/SpecPlate'
import WorkPlate from '@/components/WorkPlate'
import DashScores from '@/components/DashScores'
import DashDemo from '@/components/DashDemo'

export const metadata = {
  title: 'Buttons, screens, or both? — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <ReadModeProvider>
          <CaseCover
            crumb="Dashboard study"
            title={<><span className="pool">Buttons,</span> screens, or <span className="tang">both?</span></>}
            lede="A 67-driver survey on how people rate analog, hybrid, and fully digital car dashboards, run while automakers were trading knobs for touchscreens."
            seal={{ number: '67', sublabel: 'DRIVERS', ring: '★ SURVEY STUDY ★ n = 67 ★ ISE 210 ★ ' }}
          />

          <WorkPlate kind="dash" cover />

          <MetaStrip items={[
            ['Role', 'Co-researcher'],
            ['Type', 'Graduate coursework'],
            ['Methods', 'Survey · modified SUS'],
            ['Team', 'With Abdullah Rehman'],
            ['Timeline', 'Fall 2024'],
          ]} />

            <ReadToggle />

            <SpecPlate
              model="Graduate coursework · Fall 2024"
              rows={[
                ['Question', 'How do drivers rate analog, hybrid, and digital dashboards?'],
                ['Method', 'A 27-question survey. 67 drivers. A modified SUS.'],
                ['Finding', 'All-button dashboards scored lowest, 82 out of 100.'],
                ['Recommendation', 'Keep physical controls for key functions. Simplify the screens.'],
              ]}
            />

          <Section num="01" heading="At a Glance">
            <p>Car dashboards are moving from knobs and buttons to touchscreens, fast. My classmate Abdullah Rehman and I wanted to know how drivers actually feel about that shift, so we asked them.</p>
            <p>We built the survey in Qualtrics and ran the analysis in SPSS. Sixty-seven drivers finished it. Each one rated the car they drive most, and we sorted every car into analog, hybrid, or digital by its dashboard.</p>
            <Stats
              items={[
                { n: '67', l: 'drivers surveyed' },
                { n: '27', l: 'survey questions' },
                { n: '3', l: 'dashboard types' },
                { n: '82.2', l: 'analog score, the lowest' },
              ]}
              note="Analog dashboards scored about half a standard deviation below cars with a screen."
            />
          </Section>

          <Section
            num="02"
            heading="The Problem"
            summary="Automakers moved controls onto screens before anyone settled whether drivers want them there. We asked the drivers."
          >
            <p>Analog dashboards run on physical buttons and knobs. You can work them by feel, without looking. Hybrids keep some of those controls and add a touchscreen. Fully digital dashboards move almost everything onto the screen.</p>
            <p>That last step has a real cost. AAA found that programming navigation on an in-car screen can take up to 40 seconds, about as distracting as texting. Some automakers are already walking it back. Hyundai said in late 2024 that it was bringing physical buttons back.</p>
            <p>So the question wasn&rsquo;t whether screens are good or bad. It was how real drivers rate the dashboards they live with every day.</p>
          </Section>

          <Section
            num="03"
            heading="The Process"
            summary="A 27-question survey that asked each driver about their own car, by name."
          >
            <p>Instead of asking about dashboards in general, the survey asked about each person&rsquo;s own car. Drivers entered the year, make, and model, and the survey piped it straight into the questions. Someone with a 2007 Honda Civic rated their 2007 Honda Civic.</p>
            <Pull>People answer more carefully about the car in their driveway than about cars in the abstract.</Pull>
            <p>The usability questions came from a modified System Usability Scale, trimmed to seven items so people wouldn&rsquo;t drop out. They asked about real moments behind the wheel, like finding the volume or a setting while driving. Three more questions asked which style each driver preferred, and an open-ended one let people tell us what we missed.</p>
            <p>We sorted every car by hand into analog, hybrid, or digital, scored each driver&rsquo;s answers out of 100, and compared the groups.</p>
              <DeepRead title="Study design">
                <dl className="specs">
                  <div><dt>Team</dt><dd>Two researchers, Abdullah Rehman and me.</dd></div>
                  <div><dt>Participants</dt><dd>67 completed responses out of 77 started. Licensed drivers 18 and older, recruited at SJSU and through friends, family, and coworkers in California and Nevada.</dd></div>
                  <div><dt>Instrument</dt><dd>27 questions, 10 to 20 minutes. Multiple choice and 5-point Likert items, with each driver&rsquo;s own car piped into the wording.</dd></div>
                  <div><dt>Scoring</dt><dd>A modified seven-item SUS, scored out of 35 and converted to 100.</dd></div>
                  <div><dt>Groups</dt><dd>25 analog, 36 hybrid, and 4 digital, sorted by hand from each car&rsquo;s year, make, and model.</dd></div>
                  <div><dt>Tests</dt><dd>An independent t-test of analog against hybrid and digital combined, t(63) = &minus;2.15, p &lt; .05. A Spearman correlation between car type and stated preference, r = &minus;.29, p = .017.</dd></div>
                  <div><dt>Window</dt><dd>Open November 12 to 24, 2024.</dd></div>
                  <div><dt>Limits</dt><dd>Four digital drivers is too few to compare on their own. Over half the cars were Toyotas or Hondas.</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Outcome num="04">
            <p>The all-button cars came in last. Analog dashboards averaged 82.2 out of 100, and cars with a screen scored higher. The gap held up statistically, about half a standard deviation.</p>
            <p className="twist">The popular story says buttons were always better. Our drivers didn&rsquo;t rate it that way. Hybrids, which keep physical controls and add a screen, scored 86.9 across 36 drivers.</p>
            <p>Digital dashboards scored highest on paper, 90.0, but only four people drove one. That&rsquo;s too few to call, and some drivers still described screen-only controls as complex and slow to navigate. What people drove also shaped what they preferred: car type and stated preference were linked, a modest correlation.</p>
            <p>Preferences told a different story than scores. Asked what they&rsquo;d want, drivers rated an all-digital, Tesla-style dashboard lowest, 2.5 out of 5. A hybrid got 3.2, and for volume, knobs beat buttons at 4.0.</p>
            <DashScores />
            <DashDemo />
            <Takeaways items={[
              <><b>Ask about their car, not cars.</b> Piping each driver&rsquo;s own year, make, and model into the questions kept the answers grounded in real use.</>,
              <><b>Keep the buttons that matter.</b> Physical controls for what drivers reach for while moving, like volume and climate, with a simpler screen for the rest.</>,
              <><b>A small group can&rsquo;t carry a headline.</b> Digital scored highest, but four drivers is an anecdote, not a finding.</>,
            ]} />
          </Outcome>

          <Reflection
            num="05"
            summary="Asking about each driver's own car paid off. Next time I'd recruit for balance, then take it from the survey into the car."
            items={[
            { h: 'What I learned', body: 'Building the survey around each person’s own car paid off. People answer more carefully about something they use every day than about a category in the abstract.' },
            { h: 'What I’d change', body: 'Recruit for balance. Four digital drivers, and a sample that was over half Toyota and Honda, limited what we could compare. I’d set quotas by dashboard type up front.' },
            { h: 'What’s next', body: 'Take it out of the survey and into the car. Real driving tasks would show how long each kind of control actually takes, not just how it feels. My thesis stays in the car too, looking at how alerts get a driver’s attention.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/craft-and-cup" />
          </ReadModeProvider>
        </article>
      </main>
    </>
  )
}
