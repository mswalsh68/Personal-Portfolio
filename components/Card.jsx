import Image from 'next/image';

export default function Card({ title, coverImg, description, website, github, tags = [] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-surface-2"
      >
        <Image
          src={coverImg}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-4 pt-1">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent text-sm font-medium"
          >
            Live site ↗
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-ink"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}
