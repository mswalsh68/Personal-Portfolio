/* eslint-disable @next/next/no-img-element */

function Competitor({ competitor, showRank, align }) {
  const team = competitor?.team ?? {};
  const rank = competitor?.curatedRank?.current;
  const ranked = showRank && typeof rank === 'number' && rank < 26;

  return (
    <div
      className={`flex flex-1 items-center gap-3 ${
        align === 'right' ? 'flex-row-reverse text-right' : ''
      }`}
    >
      {team.logo && (
        <img
          src={team.logo}
          alt={team.displayName ?? 'team'}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink">
          {ranked && <span className="mr-1 text-accent">#{rank}</span>}
          {team.displayName ?? 'TBD'}
        </p>
        <p className="font-mono text-xl font-semibold text-white">
          {competitor?.score ?? '–'}
        </p>
      </div>
    </div>
  );
}

function GameCard({ event, showRank, showBroadcast }) {
  const competition = event.competitions?.[0];
  if (!competition) return null;

  const away = competition.competitors?.[1];
  const home = competition.competitors?.[0];
  const venue = competition.venue;
  const broadcast = competition.broadcasts?.[0]?.names?.[0];
  const detail = event.status?.type?.detail ?? '';

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="mb-4 text-center font-mono text-xs uppercase tracking-wide text-muted">
        {detail}
      </p>

      <div className="flex items-center gap-2">
        <Competitor competitor={away} showRank={showRank} align="left" />
        <span className="px-2 font-mono text-xs text-muted">@</span>
        <Competitor competitor={home} showRank={showRank} align="right" />
      </div>

      {(venue || (showBroadcast && broadcast)) && (
        <div className="mt-4 border-t border-border pt-3 text-center text-xs text-muted">
          {venue?.fullName && <span>{venue.fullName}</span>}
          {venue?.address?.city && (
            <span>
              {' '}
              · {venue.address.city}
              {venue.address.state ? `, ${venue.address.state}` : ''}
            </span>
          )}
          {showBroadcast && broadcast && (
            <span className="block">TV: {broadcast}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default function Scoreboard({ title, leagueLogo, seasonLabel, events, showRank, showBroadcast }) {
  return (
    <div className="container-page py-16">
      <header className="mb-10 flex items-center gap-4">
        {leagueLogo && (
          <img src={leagueLogo} alt={title} width={56} height={56} className="h-14 w-14 object-contain" />
        )}
        <div>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          {seasonLabel && <p className="mt-1 text-muted">{seasonLabel}</p>}
        </div>
      </header>

      {events.length === 0 ? (
        <p className="text-muted">No games scheduled right now. Check back during the season.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <GameCard
              key={event.id ?? event.shortName}
              event={event}
              showRank={showRank}
              showBroadcast={showBroadcast}
            />
          ))}
        </div>
      )}
    </div>
  );
}
