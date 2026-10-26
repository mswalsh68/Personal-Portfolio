'use client';
/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ScoreboardLayout({ children }) {
  const pathname = usePathname();
  const isNfl = pathname.startsWith('/scoreboard/nfl');
  const isNcaa = pathname.startsWith('/scoreboard/ncaa');

  return (
    <>
      <section aria-labelledby="s-h1" className="phero" style={{ paddingBottom: 48 }}>
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap">
          <span className="kicker"><span className="dot" />Live demo</span>
          <h1 id="s-h1">Scoreboard</h1>
          <p>Live NFL and NCAA scores, rendered on the server from the ESPN API and refreshed every 60 seconds.</p>
        </div>
      </section>

      <section aria-label="Games" style={{ paddingBottom: 104 }}>
        <div className="wrap">
          <nav aria-label="League" className="tabs">
            <Link className={isNfl ? 'on' : undefined} href="/scoreboard/nfl">NFL</Link>
            <Link className={isNcaa ? 'on' : undefined} href="/scoreboard/ncaa">NCAA Football</Link>
          </nav>

          {children}

          <div className="how reveal">
            <div className="now-card"><small>Rendering</small><h3>Server-side</h3><p>Pages render on the server with Next.js, so scores are in the HTML on first load.</p></div>
            <div className="now-card"><small>Freshness</small><h3>60-second cache</h3><p>Responses are cached and revalidated every minute: fast pages, fresh scores.</p></div>
            <div className="now-card"><small>Data</small><h3>ESPN API</h3><p>Game, team and status data come straight from ESPN's public scoreboard feed.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
