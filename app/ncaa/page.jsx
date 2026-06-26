import Scoreboard from '@/components/Scoreboard';
import { getScoreboard } from '@/lib/espn';

export const metadata = {
  title: 'NCAA Scoreboard',
  description: 'Live college football scoreboard, server-rendered from the ESPN API.',
};

export default async function NCAAPage() {
  const { season, leagueLogo, events } = await getScoreboard('ncaa');

  const seasonLabel = [season?.displayName, season?.type?.name]
    .filter(Boolean)
    .join(' · ');

  return (
    <Scoreboard
      title="NCAA Scoreboard"
      leagueLogo={leagueLogo}
      seasonLabel={seasonLabel}
      events={events}
      showRank
    />
  );
}
