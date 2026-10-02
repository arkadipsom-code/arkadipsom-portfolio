import React, { useState } from 'react';
import profileData from '../data/profile.json';
import { ArrowUpRight } from 'lucide-react';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.target;
    
    try {
      const response = await fetch('https://formspree.io/f/xeedpnbb', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error || 'Failed to submit message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const email = profileData.email || 'arkadipsom@gmail.com';

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-neutral-800 dark:text-neutral-200">
      
      {/* Editorial Header */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Contact
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          Open to roles and opportunities across software, consulting, and civil engineering.
        </p>
      </div>

      {/* Direct Social Links (LinkedIn, Instagram, Twitter) & Email */}
      <div className="space-y-4 pt-2">
        <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          Reach out directly via{' '}
          <a 
            href={`mailto:${email}`} 
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors font-medium"
          >
            {email}
          </a>{' '}
          or connect across social platforms:
        </p>

        <div className="flex items-center gap-6 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          <a
            href="https://linkedin.com/in/arkadip-som"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
          >
            linkedin <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.instagram.com/arkadipsom"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
          >
            instagram <ArrowUpRight size={14} />
          </a>
          <a
            href="https://x.com/arkadip_som"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
          >
            twitter / x <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Minimal Form */}
      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
        {submitted ? (
          <div className="py-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 space-y-1">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">Message sent.</p>
            <p className="text-neutral-500">Thank you for getting in touch. I will respond as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2.5 bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-md text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-md text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your note here..."
                className="w-full px-3 py-2.5 bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-md text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs sm:text-sm font-medium rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}