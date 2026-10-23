import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'
import PartifulScorecard from '@/components/PartifulScorecard'
import { ReadModeProvider, ReadToggle, DeepRead } from '@/components/ReadMode'
import SpecPlate from '@/components/SpecPlate'
import WorkPlate from '@/components/WorkPlate'
import { caseMetadata } from '@/lib/caseMeta'
import { Materials, Doc, ScriptCard } from '@/components/Materials'
import Image from 'next/image'

export const metadata = caseMetadata('partiful-usability', 'Fun to use, hard to trust.')

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <ReadModeProvider>
          <CaseCover
            crumb="Partiful"
            title={<>Fun to use, hard to <span className="tang">trust.</span></>}
            lede="A five-person usability study of Partiful that found a playful party app people enjoyed but couldn't quite trust, plus the fixes to close the gap."
            seal={{ number: 'C-', sublabel: 'OVERALL', ring: '★ USABILITY STUDY ★ n = 5 ★ ISE 215 ★ ' }}
          />

          <WorkPlate kind="partiful" cover />

          <MetaStrip items={[
            ['Role', 'UX researcher'],
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
            <p>Our team was brought in to test whether Partiful's experience actually lives up to its mission: helping people make friends and memories through social events.</p>
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
            <p>We designed four task scenarios, each tied to a core use case and a company goal: a first-time guest RSVPing, a first-time host creating and adjusting an event, an experienced host handling a venue change and a cancellation, and someone reconnecting with a guest from a past event. We wrote them to mirror real moments rather than feature checklists, so friction would surface on its own instead of being prompted.</p>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 01 · Task 1</p>
                <p className="fig-t">Where an RSVP comment actually goes</p>
              </div>
              <div className="shot-pair phones">
                <Image src="/partiful/rsvp-comment.jpg" width={516} height={1080} sizes="(min-width: 600px) 240px, 37vw" alt="Partiful RSVP sheet on a phone with 'I am vegetarian' typed into the optional comment box." />
                <Image src="/partiful/rsvp-feed.jpg" width={499} height={1080} sizes="(min-width: 600px) 240px, 37vw" alt="The event page's public Activity feed showing the RSVP with the comment 'I am vegetarian' visible to everyone." />
              </div>
              <p className="fig-note">A dietary note typed into the RSVP comment box (left) posts to the event&rsquo;s public activity feed (right). All five participants put dietary restrictions here. Three of five assumed it was private.</p>
            </figure>
            <Pull>The sessions were moderated live, probing hardest at the moments where participants' behavior and their words split apart.</Pull>
            <p>We measured three ways at once and triangulated them. Performance (time on task, completion, errors), behavioral (negative non-verbal cues, asking for help, re-reading the instructions), and subjective (post-task probes, satisfaction, ease of use). Any one channel can lie. Together they tell you not just whether someone succeeded, but how confident they felt doing it.</p>
            <p>That split, finishing a task while visibly unsure it worked, is where the most important findings came from. We rated every issue on a severity framework so the recommendations could be ranked by impact rather than just listed.</p>
              <DeepRead title="Study design">
                <dl className="specs">
                  <div><dt>Team</dt><dd>Lumon Research, five people.</dd></div>
                  <div><dt>Participants</dt><dd>Five, matched to personas built from Partiful’s real audience of Gen Z and Millennial hosts and guests.</dd></div>
                  <div><dt>Tasks</dt><dd>A first-time guest RSVPing. A first-time host creating and adjusting an event. An experienced host handling a venue change and a cancellation. Reconnecting with a guest from a past event.</dd></div>
                  <div><dt>Performance</dt><dd>Time on task, completion, and errors.</dd></div>
                  <div><dt>Behavioral</dt><dd>Negative non-verbal cues, asking for help, and re-reading the instructions.</dd></div>
                  <div><dt>Subjective</dt><dd>Post-task probes, satisfaction, and ease of use.</dd></div>
                  <div><dt>Analysis</dt><dd>Every issue rated on a severity framework, so fixes could be ranked by impact.</dd></div>
                  <div><dt>Limits</dt><dd>Five participants surface severe, repeated problems. It’s thin for anything subtle.</dd></div>
                </dl>
              </DeepRead>
              <Materials>
                <Doc form="ISE 215 · Moderator guide" title="Session intro, read aloud" note="Excerpt">
                  <p>First, this is not a test of you. We are evaluating the product, not your abilities.</p>
                  <p>Second, there are no right or wrong answers. Take your time during each task. If you get stuck or take a different path than expected, that is completely okay.</p>
                  <p>If you have any questions during the session, feel free to ask. However, I may not answer right away so that I do not influence your choices.</p>
                </Doc>
                <Doc form="ISE 215 · Moderator guide" title="The four task scripts" note="Tasks and probes, trimmed">
                  <ScriptCard
                    no={1}
                    title="First-time guest: RSVP and privacy"
                    scenario="Your close friend Alex is turning 26 and is hosting a birthday party this weekend! Alex texted you an invite link using Partiful. You’ve never used Partiful before, but you’d love to go and celebrate. You’re vegetarian and want to make sure Alex knows this. You’re curious how much personal information other guests might see about you."
                    tasks={['Open the link Alex sent via text.', 'RSVP to the event, noting your vegetarian dietary preference.', 'Check the event’s date, time, and location.']}
                    probes={['What do you think happens after you RSVP?', 'What personal information do you expect others can see about you?', 'Would you feel safe and comfortable responding to invitations this way regularly?']}
                  />
                  <ScriptCard
                    no={2}
                    title="First-time host: creating and adjusting an event"
                    scenario="You’re helping a friend throw a small get-together at their apartment this Friday night at 6:00pm. Since their apartment isn’t very large, you can only comfortably accommodate about 8 people. Their friend Sarah has a severe peanut allergy, so you must ensure the guests don’t bring peanut-based snacks to the party. After posting the event, you realize it needs to start 30 minutes later than planned, and now you have to update everyone about this change to the event."
                    tasks={['Create your event on Partiful and choose a theme that matches your casual gathering.', 'Clearly communicate the peanut allergy restriction to your guests.', 'Distribute the invitations.', 'Adjust the start time by moving it 30 minutes later.', 'Demonstrate how you would notify guests of this updated start time.']}
                    probes={['How clearly do you think your guests will understand the peanut allergy restriction?', 'How do you anticipate your guests will be aware of the updated start time?', 'Text Blast. Did you see it?', 'What do you think it will do if you used it? (Without tapping on it.)']}
                    note="Here is where we mention the truth if they missed it. This lets us ask why they missed it and what they expected."
                  />
                  <ScriptCard
                    no={3}
                    title="Experienced host: a venue change, then a cancellation"
                    scenario="You often use Partiful for organizing club meetups, and this weekend, you planned a local hiking event with about 20 RSVPs. However, heavy rain in the forecast means you have to change the meeting point to a sheltered picnic area instead. Later, due to worsening weather predictions, you unfortunately have to cancel the event entirely. You want to make sure your guests clearly understand these last-minute adjustments and cancellations."
                    tasks={['Update the meeting location to the picnic shelter.', 'Demonstrate how you would notify your guests about this location change.', 'Cancel the event.', 'Confirm the cancellation and manage the notifications sent to your guests.']}
                    probes={['After updating the location, how confident are you that guests will be aware of the change?', 'Upon cancellation, how clear do you expect the communication to be?']}
                  />
                  <ScriptCard
                    no={4}
                    title="Reconnecting with someone from a past event"
                    scenario="Last weekend, you went to a party hosted through Partiful. It was a really fun night, and while you were there, you hit it off with someone. You talked for a while, shared similar interests, and really wanted to keep in touch, but the night flew by, and you never exchanged contact info. You don’t have any mutual friends, and now you’re hoping you can find a way to reconnect through the app."
                    tasks={['Look for a way to view the guest list or people who attended.', 'Find the person from that event.', 'See if there is a way to message them directly through the app.', 'Send them a short message saying it was great to meet them.']}
                    probes={['How confident are you that this person will receive your message?', 'Was it clear who you’re allowed to message or view from past events?']}
                  />
                </Doc>
                <Doc form="ISE 215 · Session log" title="Participant 3, Task 1" note="One logged task, as recorded">
                  <dl className="log">
                    <div><dt>Time on task</dt><dd>1:27.81</dd></div>
                    <div><dt>Completed</dt><dd>Yes</dd></div>
                    <div><dt>Task error</dt><dd>Typed the vegetarian note into the RSVP comment box, which is shared with every guest.</dd></div>
                    <div><dt>Behavior</dt><dd>Moved through the task with confidence, but asked for clarification on where to note the dietary preference. Showed confusion when probed about what personal information was shared.</dd></div>
                    <div><dt>Said aloud</dt><dd><q>Uh, is there something for me to note?</q> <q>Um, I cannot see anybody else’s information.</q></dd></div>
                    <div><dt>Satisfaction</dt><dd><q>Pretty easy to use.</q> <q>It was easy to figure.</q></dd></div>
                  </dl>
                  <p className="doc-fn">Said it was easy, and got it wrong. That gap is the study’s main finding in one row.</p>
                </Doc>
              </Materials>
          </Section>

          <Outcome num="05">
            <p>The app rarely told people that anything had worked. No clear confirmation after edits, text blasts, or messages. Participants would finish an action and then sit there second-guessing it.</p>
            <p className="twist">The worst case was cancellation: all five participants couldn't tell whether cancelling an event had actually notified guests. For the one action where ambiguity is genuinely dangerous, the app stayed silent.</p>
            <p>Two more patterns ran through everything. Public and private were blurry: three of five assumed the RSVP comment box was private, but it posts publicly to the event feed, so people dropped dietary and personal details into a public field thinking only the host would see. And critical features hid: most participants only found the messaging feature, half the reason the app exists, after a prompt or a deep click into the guest list, and "Text Blast" got misread or missed because the name didn't match what anyone expected to find. Overall grade: C-. Fun on the surface, real trust and discoverability gaps underneath.</p>
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

          <Footer prevHref="/work" nextHref="/work/dashboard-usability" />
          </ReadModeProvider>
        </article>
      </main>
    </>
  )
}
