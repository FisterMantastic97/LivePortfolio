import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, ImageSlot, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'

export const metadata = {
  title: 'Just write what you taste — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <CaseCover
            eyebrow="Case study · Product design + build"
            title={<>Just write what you <span className="tang">taste.</span></>}
            lede="Craft & Cup is an AI-powered coffee journaling app I designed, built, and shipped on my own, teaching myself full-stack web development to do it. It turns plain-language tasting notes into a structured flavor wheel, so anyone can journal coffee without learning the jargon."
            seal={{ number: 'LIVE', sublabel: 'SHIPPED SOLO', ring: '★ DESIGNED · BUILT · SHIPPED ★ EST. 2026 ' }}
          />

          <MetaStrip items={[
            ['Role', 'Designer + developer (solo)'],
            ['Type', 'Personal product'],
            ['Stack', 'Next.js · Supabase · Claude'],
            ['Status', 'Live · mycraftcup.com'],
            ['Timeline', '2026'],
          ]} />

          <Section num="01" heading="At a Glance">
            <p>Craft &amp; Cup is a coffee journaling app for people who love specialty coffee but find its vocabulary intimidating. You write what you taste in plain English, and Claude maps your words onto the industry-standard flavor wheel for you.</p>
            <p>I designed and built the whole thing solo, and I taught myself full-stack web development to do it, going from essentially zero to a deployed, accessible product. It is live at mycraftcup.com.</p>
            <Stats
              items={[
                { n: '0→1', l: 'designed, built, shipped solo' },
                { n: '3', l: 'user personas designed for' },
                { n: 'WCAG AA', l: 'accessibility, built in' },
                { n: 'Live', l: 'at mycraftcup.com' },
              ]}
              note="Self-taught: I learned full-stack web development from zero to build this."
            />
          </Section>

          <Section num="02" heading="The Problem">
            <p>Specialty coffee has a vocabulary problem. The flavor wheel experts use to describe taste is the industry standard, but for a newcomer it is a wall of jargon. Asking someone to map "this tastes good" onto a taxonomy of notes like dried stone fruit and jasmine is a learning curve most people never climb.</p>
            <p>Existing coffee apps tend to pick a side and lose. Some flatten everything to a five-star rating and throw away the richness. Others demand expert vocabulary and scare off everyone else. The gap in the middle: let people describe coffee the way humans actually talk, and still capture structured, comparable data underneath.</p>
            <p>And "coffee person" is not one user. I was designing for at least three: the curious beginner who knows what they like but not how to say it, the enthusiast dialing in ratios and grind size across multiple brewers, and the social sharer who already posts about beans and wants a feed. One app should not force all three through the same door.</p>
          </Section>

          <Section num="03" heading="Research">
            <p>This was a solo product, so the research leaned on persona work, a heuristic evaluation, and a small pilot test rather than a large formal study, and I want to be upfront about that scope.</p>
            <p>I built three personas grounded in the real specialty-coffee community. The Curious Beginner has a French press and good instincts but no vocabulary. The Dialing-In Enthusiast owns a V60 and an espresso machine, buys from named roasters, and tracks ratios and water temperature. The Social Sharer is already active on r/coffee and wants friends to see what they are trying. Each one needed something different, and naming them kept the feature list honest.</p>
            <p>I evaluated the app against a stack of established standards instead of designing by feel: Nielsen's ten heuristics as a working checklist through every screen, the WCAG accessibility guidelines, Apple's Human Interface Guidelines, ISO 9241, and inclusive design principles. I also pilot tested with other graduate students in my Human Factors program and folded their feedback back in. The honest limit is that those testers were informed peers, not the home baristas the app is actually for, which is exactly the gap I name at the end.</p>
            <ImageSlot tag="Figure 01 · the users" desc="The three personas and the SCA flavor wheel the app maps tasting notes onto." />
          </Section>

          <Section num="04" heading="The Process">
            <p>The defining decision was not technical, it was about the vocabulary barrier, and it shaped everything else.</p>
            <Pull>Instead of teaching users the flavor wheel, I let them write like humans and taught the app to do the mapping.</Pull>
            <p>You type "tastes chocolatey with some berry," and Claude maps it onto the SCA wheel structurally. That one move is what lets the same app serve a beginner and an expert at once: the beginner never has to learn the taxonomy, and the expert's detailed notes still get parsed into comparable data.</p>
            <p>From there the persona work drove a string of decisions. Onboarding asks "where are you at with coffee?" and branches into three paths, so beginners are not overwhelmed and experts are not bored. The app is offline-first, because people journal in cafes with bad wifi: everything saves locally the instant you type it and syncs to the cloud when you are back online, so a dropped connection never costs you data.</p>
            <p>A few smaller calls show where I chose intent over the default pattern. I used a five-second undo window instead of "are you sure?" confirmation dialogs, which keeps the workflow fast while still protecting against mistakes. Scores carry a text label (Excellent, Great, Good) next to the color, so colorblind users are not excluded, which is a real WCAG requirement rather than a nicety. And the brew calculator pre-selects your most-used method, because returning users should not have to re-enter what the app already knows.</p>
            <p>The detail I am proudest of is the smallest one: if a first-time user starts writing a tasting note and then hits a sign-in prompt, the app holds onto their note and hands it back after they log in. It is the exact moment people lose their work in most apps, and protecting it is pure human factors. Reactions and comments use the same instinct, they update instantly and roll back cleanly if the request fails, so the interface always tells the truth about what happened.</p>
            <ImageSlot tag="Figure 02 · the app" desc="Key screens: plain-language tasting input, the mapped flavor wheel, and the brew tools." />
            <p>Shipping it solo also meant learning to debug problems that only appear in production: a React hook-ordering bug that crashed the build, a service worker quietly serving a stale bundle, a tooltip thrown off by a CSS zoom. None of that is UX, but fixing it taught me the full cost of the decisions I was making on the design side.</p>
          </Section>

          <Outcome num="05">
            <p>It is live and usable at mycraftcup.com, and accessibility was built in from the first commit rather than bolted on at the end. Keyboard focus indicators, a skip link, semantic HTML and heading order, ARIA labels on every icon-only button, live-region announcements for toasts, reduced-motion support, AA contrast on the dark theme, and 44px touch targets on mobile. To be precise: this is self-directed WCAG AA conformance, not a formal third-party audit.</p>
            <p>Every decision points back to one principle: lower the barrier without dumbing it down. Plain-language input, branching onboarding, undo over confirmation, color plus label, each one removes friction while keeping the depth that makes specialty coffee interesting in the first place.</p>
            <p className="twist">And it ships. The whole thing is proof I can take a product from zero to live, design and build, which is not something most research candidates can point to.</p>
            <ImageSlot tag="Figure 03 · live" desc="The finished flavor-wheel result and the live app at mycraftcup.com." />
            <Takeaways items={[
              <><b>Design the hardest barrier out, do not document around it.</b> The flavor-wheel vocabulary problem got solved by removing the need to learn it, not by adding a longer tutorial.</>,
              <><b>Accessibility is cheap as a starting constraint and expensive as a final audit.</b> Building to WCAG AA from commit one cost me almost nothing; retrofitting it would have meant a rebuild.</>,
              <><b>Shipping changes what you can claim.</b> Building and deploying this solo surfaced tradeoffs that evaluation alone never does, and it gave me a real product to put my name on.</>,
            ]} />
          </Outcome>

          <Reflection items={[
            { h: 'What I learned', body: 'Building the kind of product I would normally evaluate changed how I read design decisions. Every heuristic I would cite in a critique turned into a real tradeoff with a cost attached. Shipping is a faster teacher than analysis.' },
            { h: 'What I\u2019d change', body: 'The honest gap is who I tested with. Pilot feedback from graduate-student peers caught real issues, but they are not the home baristas the app is for. The next step is moderated sessions with actual target users, watching where they stumble on tasks I designed.' },
            { h: 'What\u2019s next', body: 'Craft & Cup is live and still moving along a long roadmap: usability testing with target users, an A/B test on the persona onboarding, a freemium tier that gates unlimited AI analyses, and eventually expanding the same approach beyond coffee into tea and cocktails.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/driving-alert-salience" />
        </article>
      </main>
    </>
  )
}
