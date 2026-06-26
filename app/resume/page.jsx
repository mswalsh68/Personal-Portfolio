import Image from 'next/image';

export const metadata = {
  title: 'Resume',
  description: 'Mike Walsh — resume and certifications.',
};

export default function ResumePage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">Resume</h1>
          <p className="mt-2 text-muted">My experience and certifications.</p>
        </div>
        <a
          href="/images/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          Download PDF ↓
        </a>
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* PDF — hidden on small phones, shown from sm up */}
        <div className="hidden overflow-hidden rounded-xl border border-border bg-surface sm:block">
          <iframe
            src="/images/resume.pdf"
            title="Mike Walsh resume"
            className="h-[60vh] w-full lg:h-[80vh]"
          />
        </div>

        {/* Mobile-only prompt */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-surface p-8 text-center sm:hidden">
          <p className="text-muted">PDF preview is best on a larger screen.</p>
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            Open resume PDF ↓
          </a>
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
