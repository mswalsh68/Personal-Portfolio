'use client';

export default function ScoreboardError({ league, reset }) {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl">Couldn&apos;t load the {league} scoreboard</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        The ESPN API didn&apos;t respond. This usually clears up on its own — try again
        in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
      >
        Try again
      </button>
    </div>
  );
}
