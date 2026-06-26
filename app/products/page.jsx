import Link from 'next/link';
import Card from '@/components/Card';
import { featuredProduct, otherProducts } from '@/data/products';

export const metadata = {
  title: 'Products',
  description: 'Products built and shipped by Mike Walsh.',
};

function FeaturedProduct({ product }) {
  return (
    <article className="rounded-xl border border-accent/30 bg-surface p-8 sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">

        {/* Left — identity + description */}
        <div className="flex-1">
          <p className="font-mono text-sm text-accent">{product.tagline}</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            {product.title}
          </h2>
          <p className="mt-1 font-mono text-sm text-muted italic">
            &ldquo;{product.quote}&rdquo;
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {product.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            Visit site ↗
          </a>
        </div>

        {/* Right — feature list */}
        <div className="shrink-0 rounded-lg border border-border bg-bg p-6 lg:w-72">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Features
          </p>
          <ul className="space-y-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <div className="container-page py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl">Products</h1>
        <p className="mt-3 text-muted">
          What I&apos;ve built and shipped.
        </p>
      </header>

      {/* Featured */}
      <FeaturedProduct product={featuredProduct} />

      {/* Other work */}
      {otherProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-lg font-semibold text-muted">Other work</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {otherProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}

      {/* Demos */}
      <section className="mt-16 border-t border-border pt-12">
        <h2 className="mb-2 text-lg font-semibold text-muted">Technical demos</h2>
        <p className="mb-6 text-sm text-muted">
          Built to showcase server-side rendering with Next.js — live data fetched
          from the ESPN API on the server, cached and revalidated every 60 seconds.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/nfl"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            NFL Scoreboard →
          </Link>
          <Link
            href="/ncaa"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            NCAA Scoreboard →
          </Link>
        </div>
      </section>
    </div>
  );
}
