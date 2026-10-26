'use client';
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import Script from 'next/script';
import { ArrowRight } from '@/components/mw/icons';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Could not send your message. Please try again.');
      }
      setSent(true);
    } catch (err) {
      setError(err.message);
      setSending(false);
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <form aria-label="Send Mike a message" className="form" onSubmit={handleSubmit} noValidate>
        {sent && (
          <div className="sent" role="status">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M7.5 12.5l3 3 6-6.5" />
            </svg>
            Thanks, your message is on its way. I'll get back to you soon.
          </div>
        )}
        <div className="field"><label htmlFor="c-name">Name</label><input autoComplete="name" id="c-name" name="name" placeholder="Your name" required type="text" /></div>
        <div className="field"><label htmlFor="c-email">Email</label><input autoComplete="email" id="c-email" name="email" placeholder="you@company.com" required type="email" /></div>
        <div className="field full"><label htmlFor="c-msg">Message</label><textarea id="c-msg" name="comments" placeholder="What are you working on?" required /></div>

        {siteKey && (
          <div className="field full">
            <div className="cf-turnstile" data-sitekey={siteKey} />
          </div>
        )}

        {error && (
          <p className="field full" role="alert" style={{ color: '#ff9b9b', fontSize: 14 }}>{error}</p>
        )}

        <div className="form-foot">
          <button className="btn btn-primary" type="submit" disabled={sending || sent}>
            {sending ? 'Sending…' : sent ? 'Sent' : 'Send message'} <ArrowRight />
          </button>
        </div>
      </form>
    </>
  );
}
