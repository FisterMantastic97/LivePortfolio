import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'
import { ReadModeProvider, ReadToggle, DeepRead } from '@/components/ReadMode'
import SpecPlate from '@/components/SpecPlate'
import ReactionDemo from '@/components/ReactionDemo'
import ResultsChart from '@/components/ResultsChart'
import { AlertIllustration } from '@/components/RoadScene'

export const metadata = {
  title: 'When does a visual alert beat a beep? — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <ReadModeProvider>
            <CaseCover
              eyebrow="Case study · UX research"
              title={<>When does a <span className="pool">visual alert</span> beat a <span className="tang">beep?</span></>}
              lede="A 24-person study on whether an in-car alert's salience or its modality matters more for how fast drivers react, and what that means for designing alerts."
              seal={{ number: '591', sublabel: 'MS · FASTEST', ring: '★ EVIDENCE-BASED ★ n = 24 ★ EST. 1997 ' }}
            />

            <MetaStrip items={[
              ['Role', 'Researcher (sole)'],
              ['Type', 'Master’s research'],
              ['Tools', 'PsychoPy · SPSS'],
              ['Advisor', 'Dr. Gaojian Huang'],
              ['Timeline', 'Completed May 2026'],
            ]} />

            <ReadToggle />

            <SpecPlate
              model="Master's thesis · 2026"
              rows={[
                ['Question', 'Does channel or salience matter more for noticing an alert?'],
                ['Method', '2×2 within-subjects. 24 participants. Video-based driving.'],
                ['Finding', 'Salience won. High-salience visual was fastest at 591 ms.'],
                ['Recommendation', 'Fix salience first. Put alerts where drivers already look.'],
              ]}
            />

            <Section num="01" heading="At a Glance">
              <p>I ran a controlled study to settle a question car-alert designers keep getting wrong: when a driver needs to notice an alert fast, does it matter more <em>how</em> you deliver it (a visual or a sound) or <em>how much it stands out</em>?</p>
              <p>Twenty-four people, four alert conditions, a video-based driving task. Salience won by a mile. And a well-placed visual alert beat sound, which is the opposite of what the field predicted.</p>
              <Stats
                items={[
                  { n: '24', l: 'participants' },
                  { n: '1,008', l: 'recorded trials' },
                  { n: '166 ms', l: 'swing from salience' },
                  { n: '591 ms', l: 'fastest condition' },
                ]}
                note="Modality on its own: no significant effect on any measure."
              />
            </Section>

            <section className="block pad">
              <p className="stamp"><span className="num">★ Try it</span></p>
              <h2 className="sec-title">Feel the salience effect.</h2>
              <p>Same idea as the study, shrunk to six alerts. Keep your eyes on the center of the road. A warning will pop up, sometimes bold and sometimes faint. Tap the road or press Space the moment you see it.</p>
              <ReactionDemo />
            </section>

            <Section
              num="02"
              heading="The Problem"
              summary="Most alert research compares visual against audio without controlling how noticeable the alert is. Channel and salience get tangled, so nobody can say which one does the work."
            >
              <p>A modern car throws a steady stream of visual and audio alerts at a driver who is already visually maxed out. For every alert, someone had to decide how to deliver it. The research that's supposed to guide that decision has a hole in it: most of it compares visual against audio while ignoring how noticeable the alert actually is.</p>
              <p>That produces advice like "use audio, it reacts faster," which might only be true because the visual alert in the study was badly placed or too subtle to begin with. Channel and salience got tangled together, so nobody could say which one was doing the work.</p>
              <p>I wanted to pull them apart. Does the delivery channel matter, or does standing out matter more? Anyone designing alerts is making this tradeoff, in cars and in any notification-heavy or safety-critical interface. In a car, the cost of getting it wrong is measured in reaction time, and reaction time is crash risk.</p>
            </Section>

            <Section
              num="03"
              heading="Research"
              summary="Theory and past driving studies predicted audio would win. But in those studies, the visual alert sat off to the side and paid a glance penalty."
            >
              <p>Three things in the literature set up the question.</p>
              <p>First, multiple resource theory says vision and hearing draw on separate mental pools. An audio alert shouldn't compete with the visual work of driving, so in theory it should be detected faster. That predicts an audio advantage.</p>
              <p>Second, the driving studies mostly agreed. One widely-cited intersection study found audio alerts beat visual ones, and the reason was telling: their visual alerts lived on a separate display, so drivers had to glance away from the road to read them. The visual alert was paying a glance penalty.</p>
              <p>Third, salience itself turns out to be messy. Recent work found that cranking up a visual alert's salience could actually <em>slow people down</em>. So salience and modality clearly interact, and almost no one had tested them together in one design.</p>
              <p>That gap was the opening. Cross modality with salience in a single experiment and you can finally see which lever is bigger, and whether the old "audio wins" rule survives once the visual alert is placed properly.</p>
            </Section>

            <Section
              num="04"
              heading="The Process"
              summary="A 2×2 within-subjects study on real dashcam footage, with visual alerts placed where the driver was already looking."
            >
              <p>The study itself was a series of design decisions, and a couple of them drove the whole result.</p>
              <p>I used a 2×2 within-subjects design: alert modality (visual or audio) crossed with salience (low or high), four conditions, every participant doing all four. Within-subjects means each person is their own control, which is how you get clean comparisons out of a sample of 24 instead of needing hundreds.</p>
              <p>I ran it on video-based driving rather than a full simulator. Real dashcam footage from Chicago and LA, played back while participants responded to alerts in PsychoPy. The trade is honest: I give up the motor realism of actually steering, but I keep the perceptual demand of a busy road, the setup is fast and repeatable, and video-based driving tasks have been validated against real crash risk.</p>
              <AlertIllustration />
              <Pull>The decision that mattered most: I placed the visual alerts in the center of the driving scene, right where the driver was already looking, instead of on a separate dashboard.</Pull>
              <p>Most prior studies put visual alerts off to the side, which forces a glance. I didn't want to test the glance penalty. I wanted to test the channel.</p>
              <p>I manipulated salience differently in each channel, visual through size, brightness, and contrast, audio through phrasing. That's a real limitation, and I said so: I can compare salience cleanly <em>within</em> a channel, but the two scales aren't identical, so I can't claim the visual and audio effects are the exact same size. I counterbalanced condition order across two groups to keep practice and fatigue from skewing things.</p>

              <DeepRead title="Study protocol">
                <dl className="specs">
                  <div><dt>Design</dt><dd>2×2 fully within-subjects. Modality (visual, auditory) by salience (low, high). Every participant completed all four conditions.</dd></div>
                  <div><dt>Sample</dt><dd>N = 24. 1,008 recorded trials. Full IRB approval.</dd></div>
                  <div><dt>Task</dt><dd>Video-based driving. Real dashcam footage from Chicago and Los Angeles, with alerts presented and responses logged in PsychoPy.</dd></div>
                  <div><dt>Build</dt><dd>I programmed the full study in PsychoPy: stimulus timing, randomization, data logging, and the post-task survey.</dd></div>
                  <div><dt>Visual salience</dt><dd>Size, brightness, and contrast. Alerts appeared at the center of the scene, not on a separate display.</dd></div>
                  <div><dt>Audio salience</dt><dd>Phrasing of the audio alert.</dd></div>
                  <div><dt>Order</dt><dd>Condition order counterbalanced across two groups to control practice and fatigue.</dd></div>
                  <div><dt>Measures</dt><dd>Reaction time, accuracy and misses, and a post-task modality preference.</dd></div>
                  <div><dt>Reaction time</dt><dd>2×2 repeated-measures ANOVA.<span className="sx">Salience <b>F(1, 23) = 869.47, p &lt; .001</b></span><span className="sx">Modality <b>F(1, 23) = 0.72, p = .405</b></span><span className="sx">Modality × salience <b>F(1, 23) = 39.55, p &lt; .001</b></span></dd></div>
                  <div><dt>Planned tests</dt><dd>Paired t-tests, Bonferroni α = .0167. <span className="nw">All p &lt; .001.</span><span className="sx">Visual high vs. low <b>t(23) = −28.66, d = −5.85</b></span><span className="sx">Audio high vs. low <b>t(23) = −18.00, d = −3.67</b></span><span className="sx">Visual high vs. audio high <b>t(23) = −5.12, d = −1.05</b></span></dd></div>
                  <div><dt>Miss rate</dt><dd>3.1% to 9.3% by condition. Modality and the interaction were not significant.<span className="sx">Salience <b>F(1, 23) = 14.39, p &lt; .001</b></span></dd></div>
                  <div><dt>Accuracy</dt><dd>95.9% to 98.4% by condition. No significant effects.<span className="sx">Modality, the closest <b>F(1, 23) = 3.35, p = .08</b></span></dd></div>
                  <div><dt>Preference</dt><dd>Visual 7, audio 7, both equally 6, no preference 4.</dd></div>
                  <div><dt>Limits</dt><dd>Salience scales differ across channels, so effect sizes compare cleanly within a channel only. Accuracy sat near 97% in every condition, a ceiling. No steering, so motor load is absent.</dd></div>
                </dl>
              </DeepRead>
            </Section>

            <Outcome num="05">
              <p>Salience dominated everything. High-salience alerts were dramatically faster and missed far less often, in both channels. Reaction time swung 166 ms between low and high salience for visual alerts and 117 ms for audio. Low-salience alerts were missed roughly twice as often as high-salience ones.</p>
              <p>Modality, on its own, did nothing significant. Which channel you used didn't move the needle. Whether the alert stood out did.</p>
              <ResultsChart />
              <p className="twist">Then the twist: at high salience, the visual alert was the fastest of all four conditions at 591 ms, beating audio. That's the reverse of what the field predicted.</p>
              <p>The reason is placement. My visual alert sat where the driver was already looking, so it never paid the glance penalty that sank visual alerts in earlier work. The "audio is faster" rule was really measuring a glance, not a channel. And the worst performer of the whole study was the low-salience visual alert at 757 ms. Same channel as the winner, opposite end of the result.</p>
              <p>One last finding that's easy to miss and worth a lot: what people <em>said</em> didn't match what they <em>did</em>. Preference was split almost evenly between visual and audio, even though visual measurably won at high salience. A preference survey alone would have pointed the wrong way.</p>
              <Takeaways items={[
                <><b>Get salience right before you argue about channel.</b> It's the bigger lever, and it isn't close.</>,
                <><b>A visual alert placed where the user is already looking can beat sound.</b> Think heads-up display, not dashboard. The old rule was measuring placement in disguise.</>,
                <><b>Low-salience visual is the trap.</b> If you can't guarantee salience, audio is the safer default. And measure behavior, don't trust preference data to tell you what performed best.</>,
              ]} />
            </Outcome>

            <Reflection
              summary="Placement, not channel, explained the result. The next study tests placement head-on."
              items={[
                { h: 'What I learned', body: 'The cleanest result wasn’t the one I hypothesized. I predicted audio would win at high salience. Placement flipped it. A lot of "modality" findings are really "placement" findings wearing a costume.' },
                { h: 'What I’d change', body: 'Accuracy hit a ceiling, about 97% across every condition, so it couldn’t tell conditions apart. A harder response mapping or tighter window would pull it off the ceiling next time.' },
                { h: 'What’s next', body: 'Vary visual placement on purpose, foveal versus peripheral versus dashboard, in one experiment to test the placement explanation head-on. Then more salience levels, then a simulator.' },
              ]}
            />

            <Footer prevHref="/work" nextHref="/work/partiful-usability" />
          </ReadModeProvider>
        </article>
      </main>
    </>
  )
}
