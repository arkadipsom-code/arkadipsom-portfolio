import React, { useState } from 'react';
import profileData from '../data/profile.json';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

// Custom Brand Icon SVGs
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Open to opportunities in core engineering, technology and management consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Direct Contact Links */}
        <div className="space-y-6">
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Feel free to reach out directly via email or connect across social platforms. 
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${profileData.email || 'arkadipsom@gmail.com'}`}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all text-black dark:text-white group"
            >
              <Mail className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" size={20} />
              <div className="text-sm font-semibold">
                {profileData.email || 'arkadipsom@gmail.com'}
              </div>
            </a>

            <a
              href="https://linkedin.com/in/arkadip-som"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all text-black dark:text-white group"
            >
              <LinkedinIcon className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" size={20} />
              <div className="text-sm font-semibold">LinkedIn</div>
            </a>

            <a
              href="https://github.com/arkadipsom-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all text-black dark:text-white group"
            >
              <GithubIcon className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" size={20} />
              <div className="text-sm font-semibold">GitHub</div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-white dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-3">
              <CheckCircle2 className="text-emerald-500" size={40} />
              <h3 className="text-lg font-bold text-black dark:text-white">Message Sent</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Thank you for reaching out! I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xbldpgyq"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold tracking-widest rounded-lg hover:bg-black dark:hover:bg-gray-100 active:scale-[0.98] transition-all cursor-pointer uppercase disabled:opacity-50"
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