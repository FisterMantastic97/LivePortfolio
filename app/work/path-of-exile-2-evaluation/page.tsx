import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, ImageSlot, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'

export const metadata = {
  title: 'When depth becomes a wall — Nicholas Mitchell',
}

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <CaseCover
            eyebrow="Case study · UX research + design"
            title={<>When <span className="pool">depth</span> becomes a <span className="tang">wall.</span></>}
            lede="A heuristic evaluation of Path of Exile 2, backed by 183 survey responses, on how a brilliant game buries its depth under cognitive load, and how to dig it back out."
            seal={{ number: '183', sublabel: 'RESPONSES', ring: '★ HEURISTIC EVAL ★ n = 183 ★ EST. 1997 ' }}
          />

          <MetaStrip items={[
            ['Role', 'Researcher + evaluator (sole)'],
            ['Type', 'Graduate coursework'],
            ['Methods', 'Survey · heuristic eval'],
            ['Sample', '183 players (20h+)'],
            ['Timeline', 'Spring 2025'],
          ]} />

          <Section num="01" heading="At a Glance">
            <p>Path of Exile 2 is one of the deepest action RPGs ever made. It's also exhausting to play, and not because of the depth. The interface buries that depth under so much cognitive load that players fight the menus harder than the monsters.</p>
            <p>I ran a contextual inquiry and a full heuristic evaluation to find where the interface fails its players, and what to do about it. The short version: the game's biggest strength is being hidden by its own presentation.</p>
            <Stats
              items={[
                { n: '183', l: 'survey responses' },
                { n: '20h+', l: 'experienced players only' },
                { n: '7', l: 'usability violations' },
                { n: 'B-', l: 'best persona grade' },
              ]}
              note="Not one of the five personas scored above a B-. The game people love tested as a usability problem."
            />
          </Section>

          <Section num="02" heading="The Problem">
            <p>Path of Exile 2's identity is its complexity: an enormous passive skill tree, deep crafting, dense itemization, fast and punishing combat. That depth is the draw. The problem is that the interface treats "deep" and "overwhelming" as the same thing, and asks players to carry the load in their heads.</p>
            <p>This isn't a complaint about the game being hard. It's that the difficulty is coming from the wrong place. Players want to fight the boss. Instead they fight the tooltip, the menu, the unlabeled node, the item they can't parse fast enough. The challenge leaks out of the gameplay and into the interface, where it doesn't belong.</p>
            <p>For a free-to-play game, that's not just a feel problem, it's a business one. Retention drives the whole model, and friction stacked at the start is exactly what stops new players from reaching the endgame where they'd happily spend money. Reducing the load is a growth lever, not a polish pass.</p>
          </Section>

          <Section num="03" heading="Research">
            <p>I needed real player behavior fast, so I ran a contextual inquiry as a survey, mixing rating scales for measurable usability signals with open-ended questions for the why. I seeded it with experienced players I knew, then posted it to the Path of Exile community on Reddit.</p>
            <p>It went further than I expected. In a few hours, while I was at work, it pulled 183 responses, every one from a player with at least 20 hours in the game. That detail matters: this wasn't first-impression confusion. These were invested, experienced players, which makes the findings harder to wave off. If the people who love the game most are still overloaded, the interface, not the player, is the problem.</p>
            <p>One honest limit I'll name: a Reddit survey self-selects for the most engaged slice of the community. But that cuts in the study's favor here. The overload showed up in exactly the population most equipped to handle it.</p>
            <ImageSlot tag="Figure 01 · the systems" desc="The empty passive skill tree, and a chaotic combat encounter where threats vanish into particle effects." />
          </Section>

          <Section num="04" heading="The Process">
            <p>I built the evaluation in layers, each one feeding the next. First, the survey gave me the lived player experience. From those responses, I extracted eight usage assumptions the interface quietly makes, things like "players can read large amounts of information at once" and "players can tell a lethal attack from a decorative effect mid-fight." Naming the assumptions made the failures concrete instead of vague.</p>
            <p>Those assumptions mapped onto seven violations of universal usability principles: excessive cognitive load, poor visibility of system status, unpredictable mapping, weak support for recognition over recall, no clear visual hierarchy, limited feedforward, and heavy dependence on external resources. Standard heuristics, applied to a product most people would never think to evaluate that way.</p>
            <Pull>I split the problems two ways on purpose: interface-based (what's broken on screen) and goal-based (what the player is trying to do and can't).</Pull>
            <p>The same issue reads differently from each angle, and seeing both is what turns "this menu is bad" into "this menu blocks the thing the player came here to do." I closed with five personas, each graded against how well the current interface serves them, from the strategic theorycrafter to the brand-new player.</p>
          </Section>

          <Outcome num="05">
            <p>Three findings stack into one argument.</p>
            <p><b>Load is the cause.</b> Over 70% of players described the passive tree and item modifiers as overwhelming. The interface shows everything at once, with no progressive disclosure, no grouping, no way to scan. Players hover every node and re-read every modifier, holding it all in working memory. The depth is real, but the interface makes you carry it.</p>
            <p><b>Combat is where the load turns violent.</b> That overload has its worst moment in a fight. Players repeatedly described dying with no idea what killed them, because lethal attacks blend into a wash of particle effects with no consistent visual hierarchy. When the interface can't separate a high-damage attack from decoration, death stops feeling earned and starts feeling random.</p>
            <p className="twist">External tools are the verdict: players leave the game to play the game. Build planners because the tree has no planning mode, loot filters because items are unreadable, wikis because modifiers go unexplained.</p>
            <p>When a core feature only works through a third-party site, the interface has failed, and the players told me so directly.</p>
            <ImageSlot tag="Figure 02 · the verdict" desc="A loot drop with and without a third-party filter, and the sprawl of the crafting menus." />
            <p>Not one of the five personas scored above a B-. The new player landed at a D. The efficient collector, whose whole loop is loot and inventory, hit a D+. That's the game's core audience grading its core experience as barely passing.</p>
            <p>The fixes don't touch the depth. They dig it out:</p>
            <Takeaways items={[
              <><b>Externalize the knowledge.</b> Progressive disclosure on the passive tree, collapsible clusters, search, and tooltips that actually explain modifiers. Stop making players memorize what the interface could just show.</>,
              <><b>Make threats unmistakable.</b> Standardized telegraphs, stronger contrast for dangerous attacks, simplified effects in critical moments. Let players read combat in real time.</>,
              <><b>Unify and integrate.</b> Consolidate crafting, gem, and passive management into one coherent interface, and build the planner and loot filter into the game so players never have to leave it.</>,
            ]} />
          </Outcome>

          <Reflection items={[
            { h: 'What I learned', body: 'Heuristics travel further than I assumed. Cognitive load, recognition over recall, visibility of system status, the same principles that govern a car dashboard expose a video game just as cleanly. Evaluating something nobody calls an "interface" sharpened how I see all of them.' },
            { h: 'What I\u2019d change', body: 'A Reddit survey is fast but self-selecting. I\u2019d pair it with a few moderated sessions watching new players, the group the data only let me infer. I\u2019d also tighten my instrument: an early draft listed two different playtime minimums, easy to miss at speed.' },
            { h: 'What\u2019s next', body: 'Prototype the highest-impact fix, progressive disclosure on the passive tree, and usability-test it head to head against the current version. The recommendations are well-grounded; the honest next step is proving a redesign lowers the load.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/driving-alert-salience" />
        </article>
      </main>
    </>
  )
}
