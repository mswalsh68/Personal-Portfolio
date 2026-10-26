/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import Link from 'next/link';
import HomeHero from '@/components/mw/HomeHero';
import { ArrowRight, ArrowUpRight } from '@/components/mw/icons';

const SKILLS = [
  'Roadmapping', 'User stories', 'Agile / Scrum', 'QA & release', '0→1 products',
  'Claude Code', 'Next.js', 'SQL', 'Azure DevOps', 'Product analytics',
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div aria-label="Skills" className="marquee">
        <div className="marquee-track">
          {SKILLS.map((s) => <span key={s}>{s}</span>)}
          {SKILLS.map((s) => <span key={`dup-${s}`} aria-hidden="true">{s}</span>)}
        </div>
      </div>

      <section aria-label="At a glance" style={{ padding: '104px 0' }}>
        <div className="wrap">
          <div className="facts reveal">
            <div className="fact"><b><span className="count" style={{ '--to': 2 }} /> yrs</b><span>B2B SaaS product management</span></div>
            <div className="fact"><b>0→1</b><span>Founded and shipped LegacyLink</span></div>
            <div className="fact"><b><span className="count" style={{ '--to': 10 }} /> yrs</b><span>Teaching math with data-driven instruction</span></div>
            <div className="fact"><b>D1</b><span>USF football letterman, Special Teams MVP</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="now-h" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="kicker">What I'm doing now</span><h2 id="now-h">Three roles. One habit: <span className="serif-i">shipping.</span></h2></div>
            <p>Product work at a SaaS company, my own startup, and the web for a family-run rep firm.</p>
          </div>
          <div className="now reveal">
            <div className="now-card"><small>Oct 2024 — now</small><h3>Associate Product Manager</h3><p>Price Studio · AI-powered B2B SaaS for revenue management. Prioritization, requirements, QA and release readiness.</p></div>
            <div className="now-card"><small>2026 — now</small><h3>Founder &amp; CEO</h3><p>Legacy Link HQ · an alumni platform for athletic programs, built from concept to live beta.</p></div>
            <div className="now-card"><small>2018 — now</small><h3>Webmaster &amp; sales support</h3><p>The Connectivity Firm · company website, email marketing, LinkedIn and an in-house CRM.</p></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="prod-h" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="kicker">Selected products</span><h2 id="prod-h">Things I've shipped.</h2></div>
            <Link className="link" href="/products">All products <ArrowRight /></Link>
          </div>
          <article className="prod-feature reveal">
            <div className="shot"><img alt="LegacyLink dashboard" src="/images/legacylink.png" /></div>
            <div className="prod-body">
              <div className="tags"><span className="tag live">● Live</span><span className="tag">Founder</span><span className="tag">SaaS</span><span className="tag">Multi-tenant</span></div>
              <h3>LegacyLink</h3>
              <p className="muted" style={{ fontSize: 18 }}>Where rosters become legacies. A private platform that follows athletes from the day they arrive on campus and keeps alumni connected long after they leave, replacing spreadsheets, survey forms and mass emails.</p>
              <p className="muted">Built on Next.js and SQL with Claude Code. Piloting free with USF Football.</p>
              <div className="actions" style={{ marginTop: 8 }}>
                <a className="btn btn-primary" href="https://legacylinkhq.app" target="_blank" rel="noopener noreferrer">Visit LegacyLink <ArrowUpRight /></a>
                <Link className="btn btn-ghost" href="/products">Case study</Link>
              </div>
            </div>
          </article>
          <div className="grid2 reveal" style={{ marginTop: 20 }}>
            <Link className="card" href="/products">
              <div className="shot"><img alt="The Connectivity Firm website homepage" src="/images/TCF.jpeg" /></div>
              <div className="card-body">
                <div className="tags"><span className="tag live">● Live</span><span className="tag">Next.js</span><span className="tag">Tailwind</span><span className="tag">Resend</span></div>
                <h3>The Connectivity Firm</h3>
                <p>Designed, built and maintain the website for a low-voltage manufacturers' rep firm serving Florida and the Caribbean.</p>
                <span className="link">See the project <ArrowRight /></span>
              </div>
            </Link>
            <Link className="card" href="/scoreboard/nfl">
              <div className="shot ph-bg" style={{ padding: 28, alignItems: 'stretch', justifyContent: 'stretch' }}>
                <div style={{ flex: 1, display: 'grid', gap: 10, alignContent: 'center' }}>
                  <div className="game" style={{ padding: '14px 18px' }}><div className="team"><span className="nm"><span className="ab">CHI</span>Bears</span><span className="sc">30</span></div><div className="team lose"><span className="nm"><span className="ab">NE</span>Patriots</span><span className="sc">24</span></div></div>
                  <div className="game" style={{ padding: '14px 18px' }}><div className="team"><span className="nm"><span className="ab">TB</span>Buccaneers</span><span className="sc">43</span></div><div className="team lose"><span className="nm"><span className="ab">CAR</span>Panthers</span><span className="sc">13</span></div></div>
                </div>
              </div>
              <div className="card-body">
                <div className="tags"><span className="tag">Demo</span><span className="tag">SSR</span><span className="tag">ESPN API</span></div>
                <h3>Live scoreboards</h3>
                <p>NFL and NCAA scoreboards rendered on the server from the ESPN API and refreshed every 60 seconds.</p>
                <span className="link">Open the scoreboard <ArrowRight /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-h" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="kicker">How I work</span><h2 id="how-h">A PM who can read the code.</h2></div>
            <p>The same habits I bring to every sprint, whether the product is mine or someone else's.</p>
          </div>
          <div className="principles reveal">
            <div className="pr"><span className="n">01</span><h3>Prioritize by value</h3><p>Weigh business need, cost and return, then explain the tradeoffs to engineering and stakeholders.</p></div>
            <div className="pr"><span className="n">02</span><h3>Write it down</h3><p>Clear requirements and user stories, worked out with engineers around real technical constraints.</p></div>
            <div className="pr"><span className="n">03</span><h3>Ship with confidence</h3><p>Own QA and release readiness, checking every feature against its acceptance criteria.</p></div>
            <div className="pr"><span className="n">04</span><h3>Build to learn</h3><p>Prototype with Claude to turn stakeholder input into tickets and clickable mockups, fast.</p></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bg-h" className="sec">
        <div className="wrap split reveal">
          <div>
            <span className="kicker">Background</span>
            <h2 id="bg-h">Teacher. Coach. Athlete. <span className="hl">Now PM.</span></h2>
            <div className="chips" style={{ marginTop: 28 }}>
              {['Roadmapping', 'User stories', 'Agile / Scrum', 'QA & release', '0→1 products', 'Claude Code', 'Next.js', 'SQL', 'Azure DevOps', 'Google Analytics', 'Microsoft Clarity'].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
          <div className="prose">
            <p>I spent ten years teaching math, using student performance data to decide what to change next. Five of those years I lived in Canvas every day, watching which software people adopt and which they quietly abandon.</p>
            <p>Before that I played D1 football at USF and coached special teams at Plant High School. Today I bring the same discipline to product: clear priorities, honest tradeoffs and a team that knows what ships next.</p>
            <div className="actions"><Link className="btn btn-ghost" href="/resume">Full resume <ArrowRight /></Link></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="cta">
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap cta-in">
          <h2 id="cta-h">Like what you see? Let's talk product.</h2>
          <Link className="btn btn-primary" href="/contact">Get in touch <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
