import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Mike Walsh.',
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-2xl py-16">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl">Let&apos;s get in touch</h1>
        <p className="mt-3 text-muted">
          Like what you see? Send me a message and I&apos;ll get back to you.
        </p>
      </header>

      <ContactForm />
    </div>
  );
}
