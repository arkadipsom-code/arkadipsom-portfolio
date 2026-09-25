import React, { useState } from 'react';
import profileData from '../data/profile.json';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
        setErrorMessage(data?.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      type: 'email',
      icon: Mail,
      label: profileData.email || 'arkadipsom@gmail.com',
      href: `mailto:${profileData.email || 'arkadipsom@gmail.com'}`,
    },
    {
      type: 'linkedin',
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/arkadip-som',
      external: true,
    },
    {
      type: 'github',
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/arkadipsom-code',
      external: true,
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-bold tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">
          Get in Touch
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
          Open to opportunities in core engineering, technology and management consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Direct Contact Links */}
        <div className="space-y-6">
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Feel free to reach out directly via email or connect across social platforms. 
          </p>

          <div className="space-y-3">
            {contactLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3.5 p-4 bg-zinc-200/50 dark:bg-zinc-800/40 border border-zinc-300/50 dark:border-zinc-700/50 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-300/40 dark:hover:bg-zinc-800/80 transition-all text-zinc-800 dark:text-zinc-200 group"
                >
                  <IconComponent 
                    size={20} 
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors flex-shrink-0" 
                  />
                  <div className="text-sm font-semibold group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {link.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-zinc-200/40 dark:bg-zinc-800/30 border border-zinc-300/50 dark:border-zinc-700/50 rounded-2xl shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-3">
              <CheckCircle2 className="text-emerald-500" size={44} />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Thank you for reaching out. Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-xs font-medium">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-bold tracking-widest rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer uppercase disabled:opacity-50"
              >
                <Send size={14} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}