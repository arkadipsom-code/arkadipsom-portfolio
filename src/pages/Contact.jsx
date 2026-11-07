import React, { useState } from 'react';
import { ArrowIcon } from '../App';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeedpnbb', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="py-4 animate-fade-in space-y-10">
      <div className="text-base sm:text-lg text-[var(--text-color)] leading-relaxed max-w-2xl">
        Reach out directly via{' '}
        <a
          href="mailto:arkadipsom@gmail.com"
          className="font-semibold underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-color)] transition-colors"
        >
        arkadipsom@gmail.com
        </a>{' '}
        or connect across social platforms:
      </div>

      <div className="flex items-center gap-6 text-sm text-[var(--text-muted)] pb-6 border-b border-[var(--border-color)]/40">
        <a
          href="https://linkedin.com/in/arkadip-som"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--text-color)] transition-colors inline-flex items-center"
        >
          linkedin <ArrowIcon />
        </a>
        <a
          href="https://www.instagram.com/arkadipsom"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--text-color)] transition-colors inline-flex items-center"
        >
          instagram <ArrowIcon />
        </a>
        <a
          href="https://x.com/arkadip_som"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--text-color)] transition-colors inline-flex items-center"
        >
          twitter / x <ArrowIcon />
        </a>
      </div>

      {/* Formspree Contact Form matching Image 4 */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-[var(--text-muted)] font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-color)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-color)] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-[var(--text-muted)] font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-color)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-color)] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-[var(--text-muted)] font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Write your note here..."
            className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] text-[var(--text-color)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--text-color)] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] font-medium rounded-lg text-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Send Message
        </button>

        {status === 'SUCCESS' && (
          <p className="text-xs text-emerald-500">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'ERROR' && (
          <p className="text-xs text-rose-500">Something went wrong. Please try emailing directly.</p>
        )}
      </form>
    </div>
  );
}