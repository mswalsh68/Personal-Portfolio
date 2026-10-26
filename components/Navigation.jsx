'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/products', label: 'Products', key: 'products' },
  { href: '/scoreboard/nfl', label: 'Scoreboard', key: 'scoreboard' },
  { href: '/resume', label: 'Resume', key: 'resume' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];

function Arrow() {
  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const activeKey = pathname.startsWith('/scoreboard')
    ? 'scoreboard'
    : pathname.startsWith('/products')
    ? 'products'
    : pathname.startsWith('/resume')
    ? 'resume'
    : pathname.startsWith('/contact')
    ? 'contact'
    : null;

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link aria-label="Mike Walsh — home" className="wordmark" href="/">
          mike<b>.</b>walsh
        </Link>
        <nav aria-label="Primary" className="nav">
          {NAV.map((item) => (
            <Link key={item.key} href={item.href} className={activeKey === item.key ? 'on' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link className="btn btn-primary" href="/contact">
            Get in touch <Arrow />
          </Link>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="burger"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="drawer" hidden={!open} id="mobile-menu">
        <div className="wrap">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/scoreboard/nfl">Scoreboard</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <Link className="btn btn-primary" href="/contact">Get in touch</Link>
        </div>
      </div>
    </header>
  );
}
