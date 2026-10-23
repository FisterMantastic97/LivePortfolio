import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  CaseCover, MetaStrip, Section, Stats, Pull, Outcome, Takeaways, Reflection,
} from '@/components/CaseStudy'
import { ReadModeProvider, ReadToggle, DeepRead } from '@/components/ReadMode'
import SpecPlate from '@/components/SpecPlate'
import WorkPlate from '@/components/WorkPlate'

export const metadata = {
  title: 'Just write what you taste — Nicholas Mitchell',
}

// Everything on this page comes from the Craft & Cup case study brief, current as of October 2026.

const TRAINING: [string, string][] = [
  ['Behavioral Science (B.A.)', 'Stats are framed as reflection. No streaks, badges, or points, so journaling never turns into pressure to perform.'],
  ['Usability evaluation and testing', 'Heuristic evaluations against Nielsen’s ten and cognitive walkthroughs, with findings rated by severity. That’s how the two worst bugs were found.'],
  ['Medical error reduction (ISE 261)', 'Mode errors and silent failures are treated as safety problems. Undo as recovery, failed saves that say so, and a test for every fix.'],
  ['Cognitive load (KIN 266 review)', 'Plain-language input instead of tasting jargon, recognition over recall, and a 12px text floor on phones.'],
  ['Alert detection (ISE 298 thesis)', 'How the app signals status. Toasts and undo banners are announced to screen readers, and badges carry a count, not just a color.'],
  ['Research and statistics', 'Measure, don’t eyeball. Contrast ratios are computed, and small phone text was counted, screen by screen.'],
]

const LOOP = [
  ['Evaluate', 'against a named standard'],
  ['Plan', 'every finding becomes a roadmap phase'],
  ['Ship', 'one small pull request behind checks'],
  ['Verify', 'on a live preview, then evaluate again'],
]

const DECISIONS: { h: string; body: string; why: string }[] = [
  { h: 'Plain words in, a structured wheel out.', body: 'Asking people to place their own notes on a flavor wheel stops beginners cold. So people write the way they talk, like “chocolatey with some berry,” and the AI maps the words onto the wheel’s three rings. Experts’ detailed notes still get parsed.', why: 'Recognition over recall' },
  { h: 'Undo, not “Are you sure?”', body: 'Confirm dialogs add friction and train people to click through them. Deletes happen at once with a five-second undo, and sync waits until the window closes. The undo banner is announced to screen readers, because a five-second window is useless if nobody hears it.', why: 'User control and freedom' },
  { h: 'Color is never the only signal.', body: 'Tasting scores carry a word next to the color, like Excellent or Fair. Marks on the origin map are named in its label, and links are underlined, not just tinted.', why: 'WCAG 1.4.1, Use of Color' },
  { h: 'AI that shows its work.', body: '“What should I try next?” returns two comfort picks and one labeled stretch pick, each with a reason tied to your own beans. It suggests styles, never specific products, because the model can’t check what a roaster has in stock. And it’s one button, not a chat box, so there’s nothing to figure out and no prompt to hijack.', why: 'Calibrated trust' },
  { h: 'Fixing a mode error.', body: 'The milk amount had an oz/ml toggle that relabeled the number without converting it, so 6 oz quietly became 6 ml, and the unit was never saved. Now it converts, and the unit sticks.', why: 'Norman’s mode errors' },
]

const BEFORE_AFTER: [string, string, string, string][] = [
  ['Sign-in fine print, dark theme', '1.4.3', '4.48:1 and 4.22:1', '5.13:1 and 4.83:1'],
  ['Notifications empty-state hint', '1.4.3', '3.19:1 dark, 3.39:1 light', '5.20:1 and 6.65:1'],
  ['Flavor wheel labels', '1.4.3', 'About 2.91:1 on 18 of 26', 'A contrast halo behind every label'],
  ['Text under 12px on phones', 'Readability', '289 of 650 elements', '99, all small on purpose'],
  ['Touch targets on tablets', '2.5.8, HIG', '26 to 34px', '44px on any touch screen'],
  ['Recommendations button', '2.5.3', 'Spoken name didn’t match the label', 'Name matches the visible words'],
]

export default function Page() {
  return (
    <>
      <Header active="work" />
      <main id="main">
        <article className="sheet">
          <ReadModeProvider>
          <CaseCover
            crumb="Craft & Cup"
            title={<>Just write what you <span className="tang">taste.</span></>}
            lede="Craft & Cup is a live AI coffee journal I designed and shipped solo. You describe a coffee in your own words, and the app maps them onto the specialty coffee flavor wheel. It's where my love of coffee and my San José State training met. It's live, and it will always be a work in progress."
            seal={{ number: 'LIVE', sublabel: 'SHIPPED SOLO', ring: '★ DESIGNED · BUILT · SHIPPED ★ EST. 2026 ' }}
          />

          <WorkPlate kind="craft" cover />

          <MetaStrip items={[
            ['Role', 'Product owner + designer (solo)'],
            ['Type', 'Personal product'],
            ['Stack', 'Next.js · Supabase · Claude'],
            ['Status', 'Live · mycraftcup.com'],
            ['Timeline', 'April 2026 to now'],
          ]} />

            <ReadToggle />

            <SpecPlate
              model="Personal product · Live, always in progress"
              rows={[
                ['Question', 'Can plain-language tasting notes become data you can compare?'],
                ['Method', 'Named standards, seven expert evaluations, one roadmap.'],
                ['Outcome', 'Live at mycraftcup.com. Accessibility checked on every pull request.'],
                ['Takeaway', 'The dangerous failures are the silent ones.'],
              ]}
            />

          <Section num="01" heading="At a Glance">
            <p>You log a bag of beans and describe how it tastes, in your own words. The app maps those words onto the Specialty Coffee Association flavor wheel. Over time the journal builds a picture of your palate. It shows the flavor families you return to, your go-to origins, and how your taste drifts month to month.</p>
            <p>Around that sit a brew calculator and espresso timer, drink recipes, side-by-side compare, a friends feed, and a public profile that reads like a coffee identity instead of a list of posts.</p>
            <p>I own every product and design decision. I started with almost no coding experience, so I built it by directing AI coding agents under rules I set, and every design change waits for my approval.</p>
            <Stats
              items={[
                { n: '75', l: 'pull requests merged' },
                { n: '7', l: 'expert evaluation passes' },
                { n: '54', l: 'end-to-end browser tests' },
                { n: '204', l: 'screens checked per refactor' },
              ]}
              note="Counts from the public repo as of October 2026. There's no measured user base yet, so there are no user numbers here."
            />
          </Section>

          <Section
            num="02"
            heading="Why Coffee"
            summary="Notes like “kinda berry” mean nothing six months later. I wanted them to become data you can compare, and I used everything SJSU taught me to get there."
          >
            <p>Specialty coffee has a vocabulary problem. Its tasting language is intimidating, so most people&rsquo;s notes stop meaning anything a few months later, and they can&rsquo;t be compared with anything. Most coffee apps are inventory trackers or shopping catalogs, and neither helps with that.</p>
            <p>Craft &amp; Cup treats tasting notes as structured data. Free text becomes positions on a shared taxonomy, so notes compare across beans, across months, and eventually across people.</p>
            <p>Coffee is also just something I love, and it shows in the details. Real brew vocabulary, the SCA flavor taxonomy, roast colors that match real beans, and an espresso timer with a target extraction band. It&rsquo;s where I put my B.A. in Behavioral Science and my M.S. in Human Factors and Ergonomics to work.</p>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 01 · The training</p>
                <p className="fig-t">Where each part of my SJSU training shows up in the app</p>
              </div>
              <dl className="specs train">
                {TRAINING.map(([dt, dd]) => (
                  <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
                ))}
              </dl>
              <p className="fig-note">The alert detection link is the one my <Link href="/work/driving-alert-salience">thesis case study</Link> is about.</p>
            </figure>
              <DeepRead title="Who it’s for">
                <p>I designed for three proto-personas. They come from what I know of the specialty coffee community, not from interviews.</p>
                <dl className="specs">
                  <div><dt>Curious Beginner</dt><dd>Knows what they like but not the words for it. Served by plain-language input, the coffee guide, and a beginner onboarding path.</dd></div>
                  <div><dt>Dialing-In Enthusiast</dt><dd>Several brewers, named roasters, tracks ratio, temperature, and grind. Served by the brew calculator, espresso timer, scores, and side-by-side compare.</dd></div>
                  <div><dt>Social Sharer</dt><dd>Already active in coffee communities online. Served by the friends feed, the public profile, share cards, and taste match.</dd></div>
                  <div><dt>Design goals</dt><dd>Lower the vocabulary barrier. Make notes comparable over time. Frame the data as reflection, not performance. Keep every part usable by everyone, including keyboard, screen reader, and low-vision users.</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Section
            num="03"
            heading="The Method"
            summary="Every decision is made against a named standard. Seven expert evaluation passes found the problems, and every finding became a roadmap phase."
          >
            <p>Every interface decision is made against a named standard, like WCAG 2.1 AA, Nielsen&rsquo;s ten heuristics, or Apple&rsquo;s Human Interface Guidelines. A standing rule says every UI commit names its reason, so the why lives in the code history instead of in my head.</p>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 02 · The loop</p>
                <p className="fig-t">How every change moves through the project</p>
              </div>
              <ol className="loop">
                {LOOP.map(([h, d]) => (
                  <li key={h}><b>{h}</b><span>{d}</span></li>
                ))}
              </ol>
              <p className="fig-note">A failed check sends the change back. Only a passing, previewed change ships, and each release feeds the next evaluation.</p>
            </figure>
            <p>In July, once the app was feature-complete, it went through seven expert evaluation passes. They ran against published checklists, often as parallel AI agent reviews, and every finding had to be checked against the actual code before it counted.</p>
            <Pull>Findings aren&rsquo;t plans until they&rsquo;re on the roadmap.</Pull>
            <p>That rule came from a mistake. A full visual evaluation sat in a project document for three months because it never made it onto the roadmap. Now whoever writes an evaluation moves its open findings onto the roadmap in the same session.</p>
              <DeepRead title="The seven evaluation passes">
                <dl className="specs">
                  <div><dt>UX, visual, a11y</dt><dd>WCAG 2.1/2.2 AA, Nielsen, and HIG, in both themes at three widths. Verdict was refine, don&rsquo;t overhaul. Flavor wheel labels measured about 2.91:1, and one invalid CSS pattern was silently dropping borders.</dd></div>
                  <div><dt>Code review</dt><dd>Accessibility, UX copy, design system, and React performance. Found a live crash on the profile route, and the whole app living in two near-duplicate 9,000-line files that had drifted apart.</dd></div>
                  <div><dt>Interface guidelines</dt><dd>Vercel&rsquo;s Web Interface Guidelines plus a design checklist. Found invisible keyboard focus on the sliders and timer digits that jumped width every second.</dd></div>
                  <div><dt>Polish pass</dt><dd>Six lenses, from type and copy to responsive. Found a production sign-in redirect pointed at localhost and dark-mode colors leaking into light mode.</dd></div>
                  <div><dt>Human factors</dt><dd>Nielsen, WCAG criterion by criterion, error taxonomy, and cognitive walkthroughs. Found two critical breaks, verified live. AI mapping failed for every new bean, and signed-out Save Bean did nothing.</dd></div>
                  <div><dt>Security</dt><dd>The Supabase security advisor, later a penetration test. Found an owner-privileged function anyone could call, forgeable notifications, and listable photo buckets.</dd></div>
                  <div><dt>Visual overhaul</dt><dd>Consistency and the aesthetic-usability effect. Strong at the bookends, thin in the middle. The landing page and profile were deep Art Deco while the daily screens were plain.</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Section
            num="04"
            heading="Key Decisions"
            summary="Five calls, each with the principle behind it. Plain words in, undo over “are you sure,” color never alone, AI that shows its work, and a fixed mode error."
          >
            <p>Each decision names the problem, the choice, and the principle behind it.</p>
            <ol className="decisions">
              {DECISIONS.slice(0, 1).map((d) => (
                <li key={d.h}><p><b>{d.h}</b> {d.body}</p><span className="why">{d.why}</span></li>
              ))}
            </ol>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 03 · Plain words in</p>
                <p className="fig-t">One tasting note, mapped onto the wheel</p>
              </div>
              <div className="shot-pair phones">
                <img src="/craft/bean-notes.jpg" width={750} height={1390} loading="lazy" alt="Craft &amp; Cup bean page showing a long plain-language tasting note, with the detected flavors listed above it: wild blackberry, blood orange, white peach, jasmine, dried rose, demerara, dark chocolate, tobacco, and crisp." />
                <img src="/craft/bean-profile.jpg" width={750} height={1390} loading="lazy" alt="The same bean's one-line flavor profile above a multi-tier flavor wheel, with fruity, floral, and sweet families broken out into specific notes like blackberry and blood orange." />
              </div>
              <p className="fig-note">An example entry from the live app. The note on the left is written the way people talk. The app pulls out the flavors and builds the profile and wheel on the right.</p>
            </figure>
            <ol className="decisions" start={2}>
              {DECISIONS.slice(1, 3).map((d) => (
                <li key={d.h}><p><b>{d.h}</b> {d.body}</p><span className="why">{d.why}</span></li>
              ))}
            </ol>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 04 · Small calls</p>
                <p className="fig-t">A word next to every color, and a calculator that asks how it tasted</p>
              </div>
              <div className="shot-pair phones">
                <img src="/craft/bean-scores.jpg" width={750} height={1624} loading="lazy" alt="Tasting score sliders for aroma, acidity, body, sweetness, and finish. Each score shows a number and a word label, such as 9 Excellent, 8 Great, and 5 Good." />
                <img src="/craft/brew-tasting.jpg" width={750} height={1624} loading="lazy" alt="The brew calculator asking how the coffee is tasting, with options like too bitter, too sour, too weak, and too strong, above the coffee and water amounts." />
              </div>
              <p className="fig-note">Scores never rely on color alone (left). The brew tool asks how the cup tasted in plain words before it talks about numbers (right).</p>
            </figure>
            <ol className="decisions" start={4}>
              {DECISIONS.slice(3).map((d) => (
                <li key={d.h}><p><b>{d.h}</b> {d.body}</p><span className="why">{d.why}</span></li>
              ))}
            </ol>
              <DeepRead title="More decisions">
                <dl className="specs">
                  <div><dt>Matching names</dt><dd>The calculator&rsquo;s &ldquo;Save Recipe&rdquo; and the Recipes tab were two unrelated stores with the same name, so a saved calculator recipe never showed up under Recipes. The calculator&rsquo;s version became Save Preset.</dd></div>
                  <div><dt>Keeping what you typed</dt><dd>Signing in midway through a form wiped it, while the dialog promised &ldquo;Everything you&rsquo;ve typed is still here.&rdquo; Drafts are now saved before sign-in and restored after, so the promise is true.</dd></div>
                  <div><dt>Navigation in view</dt><dd>Inbox and Notifications became labeled icon buttons whose names include the unread count. On narrow windows, a container query folds three tabs into a More menu so nothing scrolls out of sight.</dd></div>
                  <div><dt>A kept trade-off</dt><dd>Hiding Feed and Collections from brand-new users was considered and rejected. The audience expects full access, so every tab stays visible, and onboarding plus a 14-step tour explain them.</dd></div>
                  <div><dt>My own regression</dt><dd>The first tasting-score help tooltips were mouse-only. They were rebuilt as real buttons that open on focus, stay open under the pointer, and close on Escape (WCAG 2.1.1 and 1.4.13).</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Section
            num="05"
            heading="How It Was Built"
            summary="I directed AI coding agents the way a human factors engineer supervises automation. I set the goals, the rules, and the checkpoints."
          >
            <p>I started with almost no coding experience. Claude wrote and tested the code, first in chat and later in Claude Code, and ran the evaluation passes. I own the product direction, the priorities, and every design decision, and design changes merge only after I approve them.</p>
            <p>That&rsquo;s supervisory control, a core human-automation topic in human factors. So I designed the guardrails. Each pull request holds one logical change. Four checks pass before any commit. Every UI commit names its WCAG, Nielsen, or HIG reason. AI calls stay on the server. And the agents stop and ask before anything irreversible, like touching the live database.</p>
            <p>Verification beats trust. Every bug fix comes with a test that fails on the old code. Refactors must leave 204 snapshot screenshots identical. Every UI change gets checked on a live preview before it merges.</p>
              <DeepRead title="Engineering, security, and quality">
                <dl className="specs">
                  <div><dt>Stack</dt><dd>Next.js 16 and React 19, Supabase for Postgres, passwordless auth, and storage, Claude Haiku through Vercel AI Gateway, and Vercel hosting. Installable as a PWA.</dd></div>
                  <div><dt>Architecture</dt><dd>In July the app lived in two near-duplicate page files, so every fix had to land twice, and once it didn&rsquo;t. In October the remaining 18,900-line page became a 1,350-line shell and 14 feature modules, and the snapshot harness showed every screen unchanged.</dd></div>
                  <div><dt>AI on the server</dt><dd>Model calls go through server routes that hold the key, check the session, and enforce a monthly quota, 10 flavor maps and 5 recommendations on the free tier. Clients send structured data, never prompt text.</dd></div>
                  <div><dt>Security</dt><dd>Row-level security, an enforced Content Security Policy, passwordless sign-in, and private photos behind short-lived signed links. Photos are re-encoded in the browser, so location data never reaches storage.</dd></div>
                  <div><dt>Quality gates</dt><dd>Every pull request runs lint, formatting, 49 unit tests, a production build, 54 end-to-end browser tests, and the accessibility suite. An uptime check hits the site, sign-in, and the database every 30 minutes.</dd></div>
                  <div><dt>Performance</dt><dd>Code splitting cut the first download from 320 KB of JavaScript to 217 KB. Field data still shows a slow first paint, 2.64 s first contentful paint and 4.3 s largest contentful paint. That&rsquo;s the next piece of work.</dd></div>
                  <div><dt>Limits</dt><dd>The evaluations were expert and heuristic reviews, run with AI agents and verified against the code. No real users have tested it yet.</dd></div>
                </dl>
              </DeepRead>
          </Section>

          <Outcome num="06">
            <p>It&rsquo;s live at mycraftcup.com. Accessibility is checked by machine on every pull request. An axe-core suite tests every tab and dialog in both themes, at phone and desktop widths, and a change that breaks it can&rsquo;t merge. To be precise, this is self-directed WCAG 2.1 AA conformance, not a third-party audit.</p>
            <p className="twist">Measured, not eyeballed. Contrast ratios were computed, and text under 12px on phones went from 289 of 650 elements to 99.</p>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 05 · Before and after</p>
                <p className="fig-t">Accessibility fixes, with the numbers</p>
              </div>
              <div className="ba-wrap" tabIndex={0} role="region" aria-label="Accessibility fixes, before and after">
                <table className="ba">
                  <thead><tr><th scope="col">Issue</th><th scope="col">WCAG</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
                  <tbody>
                    {BEFORE_AFTER.map(([issue, c, b, a]) => (
                      <tr key={issue}><th scope="row">{issue}</th><td>{c}</td><td>{b}</td><td>{a}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fig-note">Beyond these fixes, the baseline covers a skip link, a visible focus ring on every control, keyboard access to every card, and focus traps in dialogs that return focus on close.</p>
            </figure>
            <figure className="figure">
              <div className="fig-head">
                <p className="fig-k">★ Fig 06 · Live</p>
                <p className="fig-t">mycraftcup.com, as it stands today</p>
              </div>
              <div className="shot-pair phones">
                <img src="/craft/landing-wheel.jpg" width={750} height={1624} loading="lazy" alt="The Craft &amp; Cup landing page with a colorful multi-tier flavor wheel for a featured coffee and its tasting note." />
                <img src="/craft/brew-methods.jpg" width={750} height={1624} loading="lazy" alt="The Brew screen with eight brew methods to pick from and the grind, ratio, temperature, bloom, and brew time for pour over." />
              </div>
              <p className="fig-note">Captured October 2026. The app keeps changing, so these will too.</p>
            </figure>
            <Takeaways items={[
              <><b>The dangerous failures are the silent ones.</b> The worst bugs never threw an error. Failed saves said &ldquo;Added to your journal&rdquo; for beans that vanished on reload. Each one now has a test or a monitor, which is the patient-safety habit of designing for the failure you can&rsquo;t see.</>,
              <><b>Duplication is a correctness problem.</b> Two near-identical copies of the app meant a crash fix landed in one and not the other. Removing the copy prevented the next bug.</>,
              <><b>Refine before you overhaul.</b> The first evaluation could have justified a redesign. The better call was keeping a distinctive identity, fixing the layer underneath it, and carrying it into every screen.</>,
            ]} />
          </Outcome>

          <Reflection
            num="07"
            summary="Directing AI agents turned out to be a human factors problem. Next is testing with real users."
            items={[
            { h: 'What I learned', body: 'Directing AI agents is a human factors problem. The work got trustworthy once the rules, checkpoints, and verification were designed, not when the code got faster. Honesty is a design constraint too, which is why the recommender suggests styles and never invents products.' },
            { h: 'What I’d change', body: 'The personas are assumption-based, and no real users have tested it yet. Every evaluation so far has been expert review. I’d get real people in front of it sooner.' },
            { h: 'What’s next', body: 'Usability testing with five to seven people, then an A/B test of the persona onboarding against a single path. On the build side, a faster first paint and better photo handling. Further out, tea, cocktails, and wine, once the data model stops assuming coffee.' },
          ]} />

          <Footer prevHref="/work" nextHref="/work/driving-alert-salience" />
          </ReadModeProvider>
        </article>
      </main>
    </>
  )
}
