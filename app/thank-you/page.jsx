import Link from 'next/link';

export const metadata = {
  title: 'Thank you',
  description: 'Your message has been sent.',
};

export default function ThankYouPage() {
  return (
    <div className="container-page py-16 text-center sm:py-24 lg:py-28">
      <p className="font-mono text-sm text-accent">Message sent</p>
      <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl">Thanks for reaching out!</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        I&apos;ve received your message and will get back to you soon.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
      >
        Back home
      </Link>
    </div>
  );
}
