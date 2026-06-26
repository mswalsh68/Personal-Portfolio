'use client';

import ScoreboardError from '@/components/ScoreboardError';

export default function Error({ reset }) {
  return <ScoreboardError league="NCAA" reset={reset} />;
}
