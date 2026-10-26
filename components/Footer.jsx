import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <Link aria-label="Mike Walsh — home" className="wordmark" href="/">
          mike<b>.</b>walsh
        </Link>
        <nav aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/scoreboard/nfl">Scoreboard</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://github.com/mswalsh68" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <small>Built by Mike Walsh with Next.js · 2026</small>
      </div>
    </footer>
  );
}
