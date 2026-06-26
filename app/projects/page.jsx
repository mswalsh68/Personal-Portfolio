import Card from '@/components/Card';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description: 'A selection of projects built by Mike Walsh.',
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl">Projects</h1>
        <p className="mt-3 text-muted">
          A few things I&apos;ve built. More on my{' '}
          <a
            href="https://github.com/mswalsh68"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            GitHub
          </a>
          .
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
