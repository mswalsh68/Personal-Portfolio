/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Download } from '@/components/mw/icons';

export const metadata = {
  title: 'Resume',
  description: 'Mike Walsh — B2B SaaS product manager, founder and builder.',
};

export default function ResumePage() {
  return (
    <>
      <section aria-labelledby="r-h1" className="phero">
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap">
          <span className="kicker"><span className="dot" />Resume</span>
          <h1 id="r-h1">B2B SaaS product manager. <span className="hl">Founder.</span> Builder.</h1>
          <p>Two years of prioritization, requirements and release readiness, a community platform taken from concept to live beta, and a decade of teaching before that.</p>
          <div className="actions">
            <a className="btn btn-primary" href="/images/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF <Download /></a>
            <Link className="btn btn-ghost" href="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="exp-h" className="sec" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="sec-head reveal"><div><span className="kicker">Experience</span><h2 id="exp-h">Where I've worked.</h2></div></div>
          <div className="tl">
            <div className="tl-item now reveal">
              <div className="tl-when"><b>Current</b>Oct 2024 — Present</div>
              <div className="tl-what">
                <h3>Associate Product Manager</h3>
                <p className="org">Price Studio · AI-powered B2B SaaS for revenue management (formerly Product Analyst)</p>
                <ul>
                  <li>Set sprint priorities by weighing business need, cost and expected return, and explain the tradeoffs to engineering and stakeholders.</li>
                  <li>Write requirements and user stories in planning sessions, working through technical constraints with engineers.</li>
                  <li>Standardized sprint planning and engineering management processes to improve delivery clarity and cadence.</li>
                  <li>Coordinate QA and release readiness, validating features against acceptance criteria before each release.</li>
                  <li>Built and use a Claude-based toolkit that turns stakeholder input into tickets and interactive mockups.</li>
                  <li>Analyze product data in Google Analytics, Microsoft Clarity and Azure Application Insights, with SQL for ad hoc questions.</li>
                </ul>
              </div>
            </div>
            <div className="tl-item now reveal">
              <div className="tl-when"><b>Current</b>2026 — Present</div>
              <div className="tl-what">
                <h3>Owner &amp; CEO</h3>
                <p className="org">Legacy Link HQ, LLC</p>
                <ul>
                  <li>Founded a private community platform for athletic program players and alumni, built on Next.js and SQL with Claude Code from concept to live beta.</li>
                  <li>Piloting the platform at no cost with USF Football.</li>
                  <li>Built an AI "virtual board of directors" of nine executive personas as a Claude skill, to pressure-test product and business decisions through structured debate.</li>
                </ul>
              </div>
            </div>
            <div className="tl-item now reveal">
              <div className="tl-when"><b>Current</b>2018 — Present</div>
              <div className="tl-what">
                <h3>Webmaster &amp; Sales Support</h3>
                <p className="org">The Connectivity Firm, Inc.</p>
                <ul>
                  <li>Designed, launched and maintain the company website; create marketing emails and manage the LinkedIn presence.</li>
                  <li>Building a CRM that logs quotes automatically from company email and tracks them through pricing and projects.</li>
                  <li>Support outside sales for a low-voltage systems provider: client calls, job sites and correspondence.</li>
                </ul>
              </div>
            </div>
            <div className="tl-item reveal">
              <div className="tl-when">2014 — 2024</div>
              <div className="tl-what">
                <h3>Math Teacher</h3>
                <p className="org">Hillsborough County Public Schools</p>
                <ul>
                  <li>Taught math for ten years in a high-accountability district, using student performance data to improve instruction.</li>
                  <li>Used the Canvas LMS daily for five years, seeing firsthand how learners and educators adopt or abandon software.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sk-h" className="sec">
        <div className="wrap">
          <div className="sec-head reveal"><div><span className="kicker">Skills</span><h2 id="sk-h">What I bring.</h2></div></div>
          <div className="skillset reveal">
            <div className="skill-grp"><h3>Product management</h3><div className="chips"><span className="chip">Roadmapping &amp; prioritization</span><span className="chip">Requirements &amp; user stories</span><span className="chip">Agile / Scrum</span><span className="chip">0→1 builds</span><span className="chip">QA &amp; release readiness</span></div></div>
            <div className="skill-grp"><h3>AI-native building</h3><div className="chips"><span className="chip">Claude &amp; Claude Code</span><span className="chip">PM automation toolkit</span><span className="chip">HTML prototyping</span><span className="chip">Multi-persona simulation</span></div></div>
            <div className="skill-grp"><h3>Technical</h3><div className="chips"><span className="chip">Codebase review</span><span className="chip">Next.js</span><span className="chip">SQL</span><span className="chip">Azure DevOps</span></div></div>
            <div className="skill-grp"><h3>Analytics &amp; domain</h3><div className="chips"><span className="chip">Google Analytics</span><span className="chip">Microsoft Clarity</span><span className="chip">App Insights</span><span className="chip">B2B SaaS</span><span className="chip">EdTech</span><span className="chip">Community platforms</span></div></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ed-h" className="sec">
        <div className="wrap split reveal">
          <div>
            <span className="kicker">Education &amp; certification</span>
            <h2 id="ed-h" style={{ fontSize: 40 }}>Learning never stopped.</h2>
            <div className="mini reveal" style={{ marginTop: 24 }}>
              <div className="mini-row"><b>B.S. Business Administration</b><span>University of South Florida · 2007–2011 · Information management systems &amp; management</span></div>
              <div className="mini-row"><b>Foundational C# Certification</b><span>Microsoft</span></div>
            </div>
          </div>
          <div>
            <span className="kicker">Athletics &amp; leadership</span>
            <h2 style={{ fontSize: 40 }}>Team first, always.</h2>
            <div className="mini reveal" style={{ marginTop: 24 }}>
              <div className="mini-row"><b>USF Football · 2007–2011</b><span>Three-year letterman · 2009 Special Teams MVP</span></div>
              <div className="mini-row"><b>Plant High School · 2012–2019</b><span>Football coach: led special teams and mentored student-athletes</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
