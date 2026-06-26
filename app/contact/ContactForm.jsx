'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const inputClass =
  'w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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

      form.reset();
      router.push('/thank-you');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} type="text" name="name" placeholder="Name" required />
        <input className={inputClass} type="email" name="email" placeholder="Email" required />
      </div>
      <input className={inputClass} type="tel" name="phone" placeholder="Phone (optional)" />
      <textarea
        className={inputClass}
        name="comments"
        rows={6}
        placeholder="What would you like to talk about?"
        required
      />

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
