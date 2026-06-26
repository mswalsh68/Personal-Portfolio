const ENDPOINTS = {
  nfl: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard',
  ncaa: 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard',
};

/**
 * Fetch an ESPN scoreboard on the server. Revalidated every 60s so the page
 * is statically cached but stays fresh, without a client-side loading flash.
 */
export async function getScoreboard(league) {
  const url = ENDPOINTS[league];
  if (!url) throw new Error(`Unknown league: ${league}`);

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`ESPN ${league} fetch failed: ${res.status}`);

  const data = await res.json();
  return {
    season: data.leagues?.[0]?.season ?? null,
    leagueLogo: data.leagues?.[0]?.logos?.[0]?.href ?? null,
    events: data.events ?? [],
  };
}
