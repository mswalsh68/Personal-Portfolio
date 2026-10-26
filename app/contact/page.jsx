/* eslint-disable react/no-unescaped-entities */
import ContactForm from './ContactForm';
import { ArrowUpRight, Download } from '@/components/mw/icons';

export const metadata = {
  title: 'Contact',
  description: "Hiring for a product role, building something new, or want to talk football and SaaS? Get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="c-h1" className="phero" style={{ paddingBottom: 48 }}>
        <div aria-hidden="true" className="aurora"><i /><i /><i /></div>
        <div className="wrap">
          <span className="kicker"><span className="dot" />Contact</span>
          <h1 id="c-h1">Let's get in touch.</h1>
          <p>Hiring for a product role, building something new, or just want to talk football and SaaS? Send a message and I'll get back to you.</p>
        </div>
      </section>

      <section aria-label="Contact form" style={{ paddingBottom: 112 }}>
        <div className="wrap split c-split reveal">
          <ContactForm />
          <div className="side-links">
            <a className="side-link" href="https://github.com/mswalsh68" target="_blank" rel="noopener noreferrer">
              <div><b>GitHub</b><span>github.com/mswalsh68</span></div>
              <ArrowUpRight />
            </a>
            <a className="side-link" href="/images/resume.pdf" target="_blank" rel="noopener noreferrer">
              <div><b>Resume</b><span>Download the PDF</span></div>
              <Download />
            </a>
            <a className="side-link" href="https://legacylinkhq.app" target="_blank" rel="noopener noreferrer">
              <div><b>LegacyLink</b><span>See what I'm building</span></div>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
