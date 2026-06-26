import Link from 'next/link';
import Image from 'next/image';

const photos = [
  { src: '/images/home-3.jpg', alt: 'Mike Walsh' },
  { src: '/images/home-1.jpg', alt: 'Mike Walsh' },
  { src: '/images/home-2.jpg', alt: 'Mike Walsh' },
];

export default function Home() {
  return (
    <div className="container-page py-20 sm:py-28">
      <section className="max-w-3xl">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m Mike Walsh</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Product manager who builds his own products.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          I lead products professionally — and build my own with React and Next.js.
          This site is a living portfolio: projects I&apos;ve shipped, my resume, and a
          few live demos like server-rendered NFL and NCAA scoreboards pulled straight
          from the ESPN API.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
