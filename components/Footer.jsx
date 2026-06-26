import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:py-8">
        <p className="font-mono text-sm text-muted">
          Built by Mike Walsh · {new Date().getFullYear()}
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/mswalsh68"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
