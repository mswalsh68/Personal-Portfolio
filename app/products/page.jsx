import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import { featuredProduct, otherProducts } from '@/data/products';

export const metadata = {
  title: 'Products',
  description: 'Products built and shipped by Mike Walsh.',
};

function FeaturedProduct({ product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-accent/30 bg-surface">
      {product.screenshot && (
        <div className="relative aspect-[16/9] w-full border-b border-border">
          <Image
            src={product.screenshot}
            alt={`${product.title} dashboard`}
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="object-cover object-top"
            priority
          />
        </div>
      )}
      <div className="flex flex-col gap-6 p-5 sm:gap-8 sm:p-8 lg:flex-row lg:items-start lg:gap-16 lg:p-10">

        {/* Left — identity + description */}
        <div className="flex-1">
          <p className="font-mono text-sm text-accent">{product.tagline}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            {product.title}
          </h2>
          <p className="mt-1 font-mono text-sm text-muted italic">
            &ldquo;{product.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {product.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
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
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            Visit site ↗
          </a>
        </div>

        {/* Right — feature list */}
        <div className="w-full rounded-lg border border-border bg-bg p-5 sm:p-6 lg:w-72 lg:shrink-0">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Features
          </p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 shrink-0 text-accent">✓</span>
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
    <div className="container-page py-12 sm:py-16">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">Products</h1>
        <p className="mt-2 text-muted sm:mt-3">
          What I&apos;ve built and shipped.
        </p>
      </header>

      {/* Featured */}
      <FeaturedProduct product={featuredProduct} />

      {/* Other work */}
      {otherProducts.length > 0 && (
        <section className="mt-10 sm:mt-12">
          <h2 className="mb-4 text-base font-semibold text-muted sm:mb-6 sm:text-lg">Other work</h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {otherProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}

      {/* Demos */}
      <section className="mt-12 border-t border-border pt-10 sm:mt-16 sm:pt-12">
        <h2 className="mb-2 text-base font-semibold text-muted sm:text-lg">Technical demos</h2>
        <p className="mb-5 text-sm text-muted">
          Built to showcase server-side rendering with Next.js — live data fetched
          from the ESPN API on the server, cached and revalidated every 60 seconds.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/scoreboard/nfl"
            className="rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            NFL Scoreboard →
          </Link>
          <Link
            href="/scoreboard/ncaa"
            className="rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            NCAA Scoreboard →
          </Link>
        </div>
      </section>
    </div>
  );
}
