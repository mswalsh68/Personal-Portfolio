'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/scoreboard/nfl', label: 'NFL' },
  { href: '/scoreboard/ncaa', label: 'NCAA' },
];

export default function ScoreboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <div className="border-b border-border">
        <div className="container-page">
          <div className="flex items-end justify-between pb-0 pt-10">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Scoreboard
            </h1>
          </div>
          <nav className="mt-4 flex gap-1">
            {tabs.map((tab) => {
              const active = pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`-mb-px border-b-2 px-4 pb-3 text-sm font-medium transition-colors ${
                    active
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
