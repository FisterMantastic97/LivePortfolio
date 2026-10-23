import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'
import PartifulScorecard from '@/components/PartifulScorecard'
import { ReadModeProvider, ReadToggle, DeepRead } from '@/components/ReadMode'
import SpecPlate from '@/components/SpecPlate'

export const metadata = {
  title: 'Fun to use, hard to trust — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <ReadModeProvider>
          <CaseCover
            eyebrow="Case study · UX research + design"
            title={<>Fun to use, hard to <span className="tang">trust.</span></>}
            lede="A five-person usability study of Partiful that found a playful party app people enjoyed but couldn't quite trust, plus the fixes to close the gap."
            seal={{ number: 'C-', sublabel: 'OVERALL', ring: '★ USABILITY STUDY ★ n = 5 ★ ISE 215 ★ ' }}
          />

          <MetaStrip items={[
            ['Role', 'Study design & moderation'],
            ['Type', 'Team usability study'],
            ['Methods', 'Moderated · heuristic'],
            ['Team', 'Lumon Research (5)'],
            ['Timeline', 'Spring 2025'],
          ]} />

            <ReadToggle />

            <SpecPlate
              model="Team usability study · Spring 2025"
              rows={[
                ['Question', 'Does the app live up to its mission?'],
                ['Method', 'Moderated sessions. 5 participants, 4 tasks.'],
                ['Finding', 'Tasks got done. Trust didn\'t follow. Grade C-.'],
                ['Recommendation', 'Confirm every action. Label what\'s public.'],
              ]}
            />

          <Section num="01" heading="At a Glance">
            <p>Our team was brought in to test whether Partiful's experience actually lives up to its mission: helping people make friends and memories through social events. I designed the task scenarios and moderated the sessions.</p>
            <p>Across five participants and four real host-and-guest tasks, the app tested as fun but low-trust. People finished almost everything we asked, then immediately second-guessed whether any of it had worked.</p>
            <Stats
              items={[
                { n: '5', l: 'participants' },
                { n: '4', l: 'task scenarios' },
                { n: '3', l: 'measure types triangulated' },
                { n: 'C-', l: 'overall usability grade', stamp: true },
              ]}
              note="Highest-severity finding: all five participants couldn't tell whether cancelling an event notified guests."
            />
          </Section>

          <Section
            num="02"
            heading="The Problem"
            summary="A playful tone can hide whether people trust what the app is doing. We tested the promise against the core host and guest flows."
          >
            <p>Partiful's pitch is one place for the whole party: logistics and social connection, no more juggling group chats, calendar invites, and scattered DMs. Its stated mission is literally "to help people make friends (and memories)."</p>
            <p>But a playful tone can quietly paper over whether people trust what the app is doing. We set out to test the promise against the experience, focused on the core flows: RSVPing, creating and editing events, pushing updates and cancellations, and reconnecting after the party.</p>
            <p>Here's why it matters beyond Partiful. For any social or transactional product, "the user completed the task" is not success if they walked away unsure it worked. Uncertainty is its own failure mode, and it's the kind that quietly pushes people back to texting and external apps.</p>
          </Section>

          <Section
            num="03"
            heading="Research"
            summary="The team used Partiful for real meetings and ran a heuristic pass first. It flagged system status and real-world match as the weak points."
          >
            <p>We started inside the app. The team used Partiful to organize our own meetings, as both host and guest, and ran a heuristic evaluation to find where it broke established usability principles before any participant walked in. That gave us a map of suspected trouble spots.</p>
            <p>We then built personas from Partiful's real audience, Gen Z and Millennial social hosts and guests, so the study tested realistic behavior instead of edge cases.</p>
            <p>The heuristic pass pointed straight at visibility of system status and the match between the system and the real world as the likely weak points. That's exactly where the user sessions later did the most damage.</p>
          </Section>

          <Section
            num="04"
            heading="The Process"
            summary="Four realistic task scenarios, moderated live, measured by performance, behavior, and what people said."
          >
            <p>The study was built to provoke the gap between what people do and what they believe is happening, and then catch it in the act.</p>
            <p>I designed the four task scenarios, each tied to a core use case and a company goal: a first-time guest RSVPing, a first-time host creating and adjusting an event, an experienced host handling a venue change and a cancellation, and someone reconnecting with a guest from a past event. I wrote them to mirror real moments rather than feature checklists, so friction would surface on its own instead of being prompted.</p>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 01 · Task 1</p>
                <p className="fig-t">Where an RSVP comment actually goes</p>
              </div>
              <div className="shot-pair phones">
                <img src="/partiful/rsvp-comment.jpg" width={516} height={1080} loading="lazy" alt="Partiful RSVP sheet on a phone with 'I am vegetarian' typed into the optional comment box." />
                <img src="/partiful/rsvp-feed.jpg" width={499} height={1080} loading="lazy" alt="The event page's public Activity feed showing the RSVP with the comment 'I am vegetarian' visible to everyone." />
              </div>
              <p className="fig-note">A dietary note typed into the RSVP comment box (left) posts to the event&rsquo;s public activity feed (right). All five participants put dietary restrictions here. Three of five assumed it was private.</p>
            </figure>
            <Pull>I moderated the sessions, probing hardest at the moments where participants' behavior and their words split apart.</Pull>
            <p>We measured three ways at once and triangulated them. Performance (time on task, completion, errors), behavioral (negative non-verbal cues, asking for help, re-reading the instructions), and subjective (post-task probes, satisfaction, ease of use). Any one channel can lie. Together they tell you not just whether someone succeeded, but how confident they felt doing it.</p>
            <p>That split, finishing a task while visibly unsure it worked, is where the most important findings came from. We rated every issue on a severity framework so the recommendations could be ranked by impact rather than just listed.</p>
              <DeepRead title="Study design">
                <dl className="specs">
                  <div><dt>Team</dt><dd>Lumon Research, five people. I designed the task scenarios and moderated the sessions.</dd></div>
                  <div><dt>Participants</dt><dd>Five, matched to personas built from Partiful’s real audience of Gen Z and Millennial hosts and guests.</dd></div>
                  <div><dt>Tasks</dt><dd>A first-time guest RSVPing. A first-time host creating and adjusting an event. An experienced host handling a venue change and a cancellation. Reconnecting with a guest from a past event.</dd></div>
                  <div><dt>Performance</dt><dd>Time on task, completion, and errors.</dd></div>
                  <div><dt>Behavioral</dt><dd>Negative non-verbal cues, asking for help, and re-reading the instructions.</dd></div>
                  <div><dt>Subjective</dt><dd>Post-task probes, satisfaction, and ease of use.</dd></div>
                  <div><dt>Analysis</dt><dd>Every issue rated on a severity framework, so fixes could be ranked by impact.</dd></div>
                  <div><dt>Limits</dt><dd>Five participants surface severe, repeated problems. It’s thin for anything subtle.</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Outcome num="05">
            <p>The app rarely told people that anything had worked. No clear confirmation after edits, text blasts, or messages. Participants would finish an action and then sit there second-guessing it.</p>
            <p className="twist">The worst case was cancellation: all five participants couldn't tell whether cancelling an event had actually notified guests. For the one action where ambiguity is genuinely dangerous, the app stayed silent.</p>
            <p>Two more patterns ran through everything. Public and private were blurry: three of five assumed the RSVP comment box was private, but it posts publicly to the event feed, so people dropped dietary and personal details into a public field thinking only the host would see. And critical features hid: the messaging feature, half the entire reason the app exists, went undiscovered by every single participant, and "Text Blast" got misread or missed because the name didn't match what anyone expected to find. Overall grade: C-. Fun on the surface, real trust and discoverability gaps underneath.</p>
            <PartifulScorecard />
            <Takeaways items={[
              <><b>Task completion is a trap metric.</b> People finished nearly everything and still didn't trust the app. Measure confidence, not just success.</>,
              <><b>The cheapest usability win is telling the user what just happened.</b> Most of our highest-severity fixes were confirmations, not redesigns.</>,
              <><b>A playful brand raises the bar for clarity, it doesn't lower it.</b> The fun tone made the app's silence more confusing, not more forgivable.</>,
            ]} />
          </Outcome>

          <Reflection
            summary="The gap between what people did and what they said was the most useful signal. Next is prototyping the fixes and retesting."
            items={[
            { h: 'What I learned', body: 'The gap between what people did and what they said was more informative than any single metric. Designing the task scripts to provoke it, and probing it live while moderating, is where the real findings lived.' },
            { h: 'What I\u2019d change', body: 'Five participants is plenty to surface severe, repeated problems, and we saw clean patterns. It\u2019s thin for anything subtle. I\u2019d add a few more and a light quantitative satisfaction measure.' },
            { h: 'What\u2019s next', body: 'Prototype the top fixes, the confirmations and the public-private labeling, and re-test them, to prove they actually move the trust needle rather than just reading well on paper.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/path-of-exile-2-evaluation" />
          </ReadModeProvider>
        </article>
      </main>
    </>
  )
}
