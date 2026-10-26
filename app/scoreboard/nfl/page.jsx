import Scoreboard from '@/components/Scoreboard';
import { getScoreboard } from '@/lib/espn';

export const metadata = {
  title: 'NFL Scoreboard',
  description: 'Live NFL scoreboard, server-rendered from the ESPN API.',
};

export default async function NFLPage() {
  const { season, events } = await getScoreboard('nfl');
  return <Scoreboard seasonLabel={season?.type?.name} events={events} showBroadcast />;
}
