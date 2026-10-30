/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/mw/icons';

export const metadata = {
  title: 'Products',
  description: "A founder's platform, a live business website and the demos I use to stay sharp.",
};

export default function ProductsPage() {
  return (
    <>
      <section aria-labelledby="p-h1" className="phero">
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap">
          <span className="kicker"><span className="dot" />Products</span>
          <h1 id="p-h1">I don't just manage products. <span className="hl">I ship them.</span></h1>
          <p>A founder's platform, a live business website and the demos I use to stay sharp on the tech my teams build with.</p>
        </div>
      </section>

      <section aria-labelledby="ll-h" className="sec" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <article className="prod-feature reveal">
            <div className="shot" style={{ background: '#0a0a0a' }}><img alt="LegacyLink dashboard" src="/images/legacylink.png" style={{ objectFit: 'contain' }} /></div>
            <div className="prod-body">
              <div className="tags"><span className="tag live">● Live beta</span><span className="tag">Founder</span><span className="tag">Next.js</span><span className="tag">SQL</span></div>
              <h3 id="ll-h">LegacyLink</h3>
              <p className="muted" style={{ fontSize: 18 }}>The athletic alumni platform. Where rosters become legacies.</p>
              <a className="btn btn-primary" href="https://legacylinkhq.app" target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>Visit legacylinkhq.app <ArrowUpRight /></a>
            </div>
          </article>
          <div className="split reveal" style={{ marginTop: 64 }}>
            <div>
              <span className="kicker">The problem</span>
              <h2 style={{ fontSize: 40 }}>Programs lose touch with their alumni the day they graduate.</h2>
              <div className="prose" style={{ marginTop: 20 }}>
                <p>Athletic programs run alumni relations on spreadsheets, survey forms and mass emails, and the institutional memory lives in staff members' phones. When a coach leaves, the relationships go with them.</p>
                <p>As a former D1 football player at USF, I lived that gap. LegacyLink tracks athletes from the day they arrive on campus and keeps them connected after they leave.</p>
              </div>
            </div>
            <div>
              <span className="kicker">What it does</span>
              <div className="mini reveal" style={{ marginTop: 20 }}>
                <div className="mini-row"><b>Institutional memory</b><span>A living alumni directory owned by the program, not a staff member's phone.</span></div>
                <div className="mini-row"><b>Donor &amp; mentorship pipeline</b><span>Connect alumni with current players and the people who fund the program.</span></div>
                <div className="mini-row"><b>Targeted email campaigns</b><span>Rich-text emails to filtered segments, with delivery tracking and send limits.</span></div>
                <div className="mini-row"><b>Community</b><span>An alumni feed, message boards and event invitations.</span></div>
                <div className="mini-row"><b>White-label, multi-tenant</b><span>Each program gets its own branded space with its data kept isolated.</span></div>
              </div>
            </div>
          </div>
          <div className="facts" style={{ marginTop: 56 }}>
            <div className="fact"><b>Founder</b><span>Concept, product, design and build</span></div>
            <div className="fact"><b>Beta</b><span>Piloting free with USF Football</span></div>
            <div className="fact"><b>Next.js</b><span>With SQL, built using Claude Code</span></div>
            <div className="fact"><b>9</b><span>AI advisors in my "virtual board"</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="tcf-h" className="sec">
        <div className="wrap">
          <article className="prod-feature reveal">
            <div className="shot" style={{ background: '#030918' }}><img alt="The Connectivity Firm website homepage" src="/images/TCF.jpeg" style={{ objectFit: 'contain' }} /></div>
            <div className="prod-body">
              <div className="tags"><span className="tag live">● Live</span><span className="tag">Next.js</span><span className="tag">Tailwind</span><span className="tag">Resend</span></div>
              <h3 id="tcf-h">The Connectivity Firm</h3>
              <p className="muted" style={{ fontSize: 18 }}>An independent manufacturers' rep firm for low-voltage products: fiber, copper, splicers and connectors, across Florida and the Caribbean.</p>
              <p className="muted">I designed, launched and maintain the site, including manufacturer pages, a distributor directory and a contact form sent through Resend. I also run the firm's email marketing and LinkedIn.</p>
              <div className="actions" style={{ marginTop: 4 }}>
                <a className="btn btn-primary" href="https://theconnectivityfirm.com/" target="_blank" rel="noopener noreferrer">Live site <ArrowUpRight /></a>
                <a className="btn btn-ghost" href="https://github.com/mswalsh68/TCF-React" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="more-h" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div><span className="kicker">Demos &amp; side builds</span><h2 id="more-h">Always building something.</h2></div>
            <p>Smaller projects that keep my technical judgment sharp.</p>
          </div>
          <div className="grid3 reveal">
            <Link className="card" href="/scoreboard/nfl"><div className="card-body">
              <span className="ico"><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><rect height="16" rx="2" width="18" x="3" y="4" /><path d="M12 4v16M3 12h18" /></svg></span>
              <h3>NFL &amp; NCAA scoreboards</h3>
              <p>Server-rendered from the ESPN API, cached and revalidated every 60 seconds.</p>
              <span className="link">Open demo <ArrowRight /></span>
            </div></Link>
            <div className="card"><div className="card-body">
              <span className="ico"><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h6" /><circle cx="18" cy="16" r="3" /></svg></span>
              <h3>Claude PM toolkit</h3>
              <p>Turns stakeholder input into tickets and interactive mockups. Built for, and used in, my work at Price Studio.</p>
              <span className="tag" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>In daily use</span>
            </div></div>
            <div className="card"><div className="card-body">
              <span className="ico"><svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h12" /></svg></span>
              <h3>Quote-tracking CRM</h3>
              <p>For The Connectivity Firm: logs quotes straight from company email and tracks them through pricing and projects.</p>
              <span className="tag" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>In progress</span>
            </div></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-h" className="cta">
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap cta-in">
          <h2 id="cta-h">Want the story behind a build? Ask me.</h2>
          <Link className="btn btn-primary" href="/contact">Get in touch <ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
