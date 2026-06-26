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
          className="h-10 w-10 flex-shrink-0 object-contain"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">
          {ranked && <span className="mr-1 text-accent">#{rank}</span>}
          {team.shortDisplayName ?? team.name ?? team.displayName ?? 'TBD'}
        </p>
        <p className="font-mono text-lg font-semibold text-white sm:text-xl">
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
    <div className="overflow-hidden rounded-xl border border-border bg-surface p-4 sm:p-5">
      <p className="mb-3 text-center font-mono text-[0.65rem] uppercase tracking-wide text-muted sm:mb-4 sm:text-xs">
        {detail}
      </p>

      <div className="flex items-center gap-1 sm:gap-2">
        <Competitor competitor={away} showRank={showRank} align="left" />
        <span className="shrink-0 px-1 font-mono text-xs text-muted sm:px-2">@</span>
        <Competitor competitor={home} showRank={showRank} align="right" />
      </div>

      {(venue || (showBroadcast && broadcast)) && (
        <div className="mt-3 border-t border-border pt-2 text-center text-[0.65rem] text-muted sm:mt-4 sm:pt-3 sm:text-xs">
          {venue?.fullName && <span className="block truncate">{venue.fullName}</span>}
          {venue?.address?.city && (
            <span>
              {venue.address.city}
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

export default function Scoreboard({ leagueLogo, seasonLabel, events, showRank, showBroadcast }) {
  return (
    <div className="container-page py-8 sm:py-10">
      {(leagueLogo || seasonLabel) && (
        <div className="mb-6 flex items-center gap-3">
          {leagueLogo && (
            <img src={leagueLogo} alt="" width={36} height={36} className="h-9 w-9 flex-shrink-0 object-contain" />
          )}
          {seasonLabel && <p className="text-sm text-muted">{seasonLabel}</p>}
        </div>
      )}

      {events.length === 0 ? (
        <p className="text-muted">No games scheduled right now. Check back during the season.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
