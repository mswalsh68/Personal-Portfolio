/* eslint-disable @next/next/no-img-element */
const DATE_FMT = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'America/New_York' };
const TIME_FMT = { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' };

function fmtDate(iso) {
  if (!iso) return '';
  try { return new Date(iso).toLocaleDateString('en-US', DATE_FMT); } catch { return ''; }
}
function fmtKickoff(iso) {
  if (!iso) return '';
  try { return new Date(iso).toLocaleTimeString('en-US', TIME_FMT) + ' ET'; } catch { return ''; }
}

function abbr(team) {
  return team?.abbreviation || (team?.shortDisplayName ?? team?.displayName ?? 'TBD').slice(0, 3).toUpperCase();
}

function TeamRow({ competitor, state, showRank }) {
  const team = competitor?.team ?? {};
  const rank = competitor?.curatedRank?.current;
  const ranked = showRank && typeof rank === 'number' && rank < 26;
  let cls = 'team';
  if (state === 'post') cls += competitor?.winner ? ' win' : ' lose';
  const score = state === 'pre' ? '–' : competitor?.score ?? '–';
  return (
    <div className={cls}>
      <span className="nm">
        <span className="ab">
          {team.logo ? (
            <img src={team.logo} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          ) : (
            abbr(team)
          )}
        </span>
        {ranked && <span style={{ color: 'var(--gold)', marginRight: 4 }}>#{rank}</span>}
        {team.shortDisplayName ?? team.name ?? team.displayName ?? 'TBD'}
      </span>
      <span className="sc">{score}</span>
    </div>
  );
}

function Game({ event, showRank, showBroadcast }) {
  const comp = event.competitions?.[0];
  if (!comp) return null;
  const home = comp.competitors?.[0];
  const away = comp.competitors?.[1];
  const status = event.status?.type ?? {};
  const state = status.state; // 'pre' | 'in' | 'post'

  const label = fmtDate(event.date);
  const st = state === 'pre' ? fmtKickoff(event.date) : status.shortDetail || status.detail || '';

  const venue = comp.venue;
  const broadcast = comp.broadcasts?.[0]?.names?.[0];
  const footParts = [];
  if (venue?.fullName) footParts.push(venue.fullName);
  else if (venue?.address?.city) footParts.push([venue.address.city, venue.address.state].filter(Boolean).join(', '));
  if (showBroadcast && broadcast) footParts.push(`TV: ${broadcast}`);
  if (state === 'pre' && footParts.length === 0) footParts.push('Upcoming');

  return (
    <article className="game">
      <div className="game-top"><span>{label}</span><span className="st">{st}</span></div>
      <TeamRow competitor={away} state={state} showRank={showRank} />
      <TeamRow competitor={home} state={state} showRank={showRank} />
      {footParts.length > 0 && <div className="game-foot">{footParts.join(' · ')}</div>}
    </article>
  );
}

export default function Scoreboard({ seasonLabel, events = [], showRank, showBroadcast }) {
  return (
    <>
      <div className="sb-meta">
        <span className="live-dot"><i />{seasonLabel || 'Live'}</span>
        <small>Updated every 60s · source: ESPN</small>
      </div>

      {events.length === 0 ? (
        <p className="muted" style={{ padding: '24px 0' }}>No games scheduled right now. Check back during the season.</p>
      ) : (
        <div className="games reveal">
          {events.map((event) => (
            <Game key={event.id ?? event.shortName} event={event} showRank={showRank} showBroadcast={showBroadcast} />
          ))}
        </div>
      )}
    </>
  );
}
