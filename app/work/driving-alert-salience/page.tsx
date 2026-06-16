import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, ImageSlot, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'

export const metadata = {
  title: 'When does a visual alert beat a beep? — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <CaseCover
            eyebrow="Case study · UX research"
            title={<>When does a <span className="pool">visual alert</span> beat a <span className="tang">beep?</span></>}
            lede="A 24-person study on whether an in-car alert's salience or its modality matters more for how fast drivers react, and what that means for designing alerts."
            seal={{ number: '591', sublabel: 'MS · FASTEST', ring: '★ EVIDENCE-BASED ★ n = 24 ★ EST. 1997 ' }}
          />

          <MetaStrip items={[
            ['Role', 'Researcher (sole)'],
            ['Type', 'Master\u2019s research'],
            ['Tools', 'PsychoPy · SPSS'],
            ['Advisor', 'Dr. Gaojian Huang'],
            ['Timeline', 'Completed May 2026'],
          ]} />

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

          <Section num="02" heading="The Problem">
            <p>A modern car throws a steady stream of visual and audio alerts at a driver who is already visually maxed out. For every alert, someone had to decide how to deliver it. The research that's supposed to guide that decision has a hole in it: most of it compares visual against audio while ignoring how noticeable the alert actually is.</p>
            <p>That produces advice like "use audio, it reacts faster," which might only be true because the visual alert in the study was badly placed or too subtle to begin with. Channel and salience got tangled together, so nobody could say which one was doing the work.</p>
            <p>I wanted to pull them apart. Does the delivery channel matter, or does standing out matter more? Anyone designing alerts is making this tradeoff, in cars and in any notification-heavy or safety-critical interface. In a car, the cost of getting it wrong is measured in reaction time, and reaction time is crash risk.</p>
          </Section>

          <Section num="03" heading="Research">
            <p>Three things in the literature set up the question.</p>
            <p>First, multiple resource theory says vision and hearing draw on separate mental pools. An audio alert shouldn't compete with the visual work of driving, so in theory it should be detected faster. That predicts an audio advantage.</p>
            <p>Second, the driving studies mostly agreed. One widely-cited intersection study found audio alerts beat visual ones, and the reason was telling: their visual alerts lived on a separate display, so drivers had to glance away from the road to read them. The visual alert was paying a glance penalty.</p>
            <p>Third, salience itself turns out to be messy. Recent work found that cranking up a visual alert's salience could actually <em>slow people down</em>. So salience and modality clearly interact, and almost no one had tested them together in one design.</p>
            <p>That gap was the opening. Cross modality with salience in a single experiment and you can finally see which lever is bigger, and whether the old "audio wins" rule survives once the visual alert is placed properly.</p>
          </Section>

          <Section num="04" heading="The Process">
            <p>The study itself was a series of design decisions, and a couple of them drove the whole result.</p>
            <p>I used a 2×2 within-subjects design: alert modality (visual or audio) crossed with salience (low or high), four conditions, every participant doing all four. Within-subjects means each person is their own control, which is how you get clean comparisons out of a sample of 24 instead of needing hundreds.</p>
            <p>I ran it on video-based driving rather than a full simulator. Real dashcam footage from Chicago and LA, played back while participants responded to alerts in PsychoPy. The trade is honest: I give up the motor realism of actually steering, but I keep the perceptual demand of a busy road, the setup is fast and repeatable, and video-based driving tasks have been validated against real crash risk.</p>
            <ImageSlot tag="Figure 01 · stimulus" desc="Recreated mockup: high-salience vs low-salience visual alert overlaid on a driving frame." placeholder="visual coming" />
            <Pull>The decision that mattered most: I placed the visual alerts in the center of the driving scene, right where the driver was already looking, instead of on a separate dashboard.</Pull>
            <p>Most prior studies put visual alerts off to the side, which forces a glance. I didn't want to test the glance penalty. I wanted to test the channel.</p>
            <p>I manipulated salience differently in each channel, visual through size, brightness, and contrast, audio through phrasing. That's a real limitation, and I said so: I can compare salience cleanly <em>within</em> a channel, but the two scales aren't identical, so I can't claim the visual and audio effects are the exact same size. I counterbalanced condition order across two groups to keep practice and fatigue from skewing things.</p>
          </Section>

          <Outcome num="05">
            <p>Salience dominated everything. High-salience alerts were dramatically faster and missed far less often, in both channels. Reaction time swung 166 ms between low and high salience for visual alerts and 117 ms for audio. Low-salience alerts were missed roughly twice as often as high-salience ones.</p>
            <p>Modality, on its own, did nothing significant. Which channel you used didn't move the needle. Whether the alert stood out did.</p>
            <p className="twist">Then the twist: at high salience, the visual alert was the fastest of all four conditions at 591 ms, beating audio. That's the reverse of what the field predicted.</p>
            <p>The reason is placement. My visual alert sat where the driver was already looking, so it never paid the glance penalty that sank visual alerts in earlier work. The "audio is faster" rule was really measuring a glance, not a channel. And the worst performer of the whole study was the low-salience visual alert at 757 ms. Same channel as the winner, opposite end of the result.</p>
            <ImageSlot tag="Figure 02 · results" desc="Reaction-time interaction chart and miss-rate chart, rebuilt in the brand palette." placeholder="visual coming" />
            <p>One last finding that's easy to miss and worth a lot: what people <em>said</em> didn't match what they <em>did</em>. Preference was split almost evenly between visual and audio, even though visual measurably won at high salience. A preference survey alone would have pointed the wrong way.</p>
            <Takeaways items={[
              <><b>Get salience right before you argue about channel.</b> It's the bigger lever, and it isn't close.</>,
              <><b>A visual alert placed where the user is already looking can beat sound.</b> Think heads-up display, not dashboard. The old rule was measuring placement in disguise.</>,
              <><b>Low-salience visual is the trap.</b> If you can't guarantee salience, audio is the safer default. And measure behavior, don't trust preference data to tell you what performed best.</>,
            ]} />
          </Outcome>

          <Reflection items={[
            { h: 'What I learned', body: 'The cleanest result wasn\u2019t the one I hypothesized. I predicted audio would win at high salience. Placement flipped it. A lot of "modality" findings are really "placement" findings wearing a costume.' },
            { h: 'What I\u2019d change', body: 'Accuracy hit a ceiling, about 97% across every condition, so it couldn\u2019t tell conditions apart. A harder response mapping or tighter window would pull it off the ceiling next time.' },
            { h: 'What\u2019s next', body: 'Vary visual placement on purpose, foveal versus peripheral versus dashboard, in one experiment to test the placement explanation head-on. Then more salience levels, then a simulator.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/partiful-usability" />
        </article>
      </main>
    </>
  )
}
