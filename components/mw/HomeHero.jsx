'use client';

import Link from 'next/link';
import { ArrowRight } from '@/components/mw/icons';

export default function HomeHero() {
  function onMove(e) {
    const h = e.currentTarget;
    const r = h.getBoundingClientRect();
    h.style.setProperty('--mx', e.clientX - r.left + 'px');
    h.style.setProperty('--my', e.clientY - r.top + 'px');
  }

  return (
    <section aria-labelledby="h1" className="hero" style={{ '--mx': '70%', '--my': '30%' }} onMouseMove={onMove}>
      <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
      <div className="wrap hero-grid">
        <div>
          <span className="kicker">
            <span className="dot" />Mike Walsh ·{' '}
            <span aria-label="Product manager, founder, builder, former D1 athlete" className="rotator">
              <span aria-hidden="true">
                <span>Product manager</span>
                <span>Founder</span>
                <span>Builder</span>
                <span>Former D1 athlete</span>
                <span>Product manager</span>
              </span>
            </span>
          </span>
          <h1 id="h1">
            <span className="w">Product</span> <span className="w">manager</span> <span className="w">who</span>{' '}
            <span className="w"><span className="grad">builds</span></span> <span className="w">his</span>{' '}
            <span className="w">own</span> <span className="w">products.</span>
          </h1>
          <p className="lede">
            I lead B2B SaaS product work by day and ship my own products by night, with Next.js, SQL and
            Claude Code. This site is the proof: shipped products, live demos and my resume.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/products">View products <ArrowRight /></Link>
            <Link className="btn btn-ghost" href="/resume">Read my resume</Link>
          </div>
        </div>
        <div className="photo-wrap">
          <div style={{ border: '1px solid var(--line-hi)', borderRadius: 20, background: 'var(--surf)', overflow: 'hidden', boxShadow: '0 24px 48px -24px #000' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '14px 16px', borderBottom: '1px solid var(--line)' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--green)' }} />
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--dim)' }}>mike.walsh ~ now</span>
            </div>
            <div style={{ padding: 24, fontFamily: 'var(--mono)', fontSize: 14, lineHeight: 2, color: 'var(--muted)' }}>
              <div><span style={{ color: 'var(--green)' }}>$</span> whoami</div>
              <div style={{ color: 'var(--text)' }}>product_manager · founder · builder</div>
              <div style={{ marginTop: 14 }}><span style={{ color: 'var(--green)' }}>$</span> stack --daily</div>
              <div style={{ color: 'var(--text)' }}>Next.js · SQL · Claude Code</div>
              <div style={{ marginTop: 14 }}><span style={{ color: 'var(--green)' }}>$</span> status</div>
              <div><span style={{ color: 'var(--gold)' }}>●</span> shipping LegacyLink · beta with USF Football</div>
            </div>
          </div>
          <div className="badge">
            <i />
            <div><b>Now building LegacyLink</b><small>Live beta with USF Football</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
