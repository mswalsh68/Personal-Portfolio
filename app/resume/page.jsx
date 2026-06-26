import Image from 'next/image';

export const metadata = {
  title: 'Resume',
  description: 'Mike Walsh — resume and certifications.',
};

export default function ResumePage() {
  return (
    <div className="container-page py-16">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl">Resume</h1>
          <p className="mt-3 text-muted">My experience and certifications.</p>
        </div>
        <a
          href="/images/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          Download PDF ↓
        </a>
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <iframe
            src="/images/resume.pdf"
            title="Mike Walsh resume"
            className="h-[80vh] w-full"
          />
        </div>

        <figure className="rounded-xl border border-border bg-surface p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-2">
            <Image
              src="/images/csharp-cert.png"
              alt="Microsoft Foundational C# Certification"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted">
            Microsoft Foundational C# Certification
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
