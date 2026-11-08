import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowIcon } from '../App';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeModalOpen]);

  const handleSelectResume = (type) => {
    if (type === 'technical') {
      window.open('/resumes/accenture-intern-resume.pdf', '_blank');
    } else if (type === 'consulting') {
      window.open('/resumes/resume-consultancy-v3.pdf', '_blank');
    } else if (type === 'civil') {
      window.open('/resumes/resume-nhai-v2.pdf', '_blank');
    }
    setIsResumeModalOpen(false);
  };

  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in">
      <div className="space-y-4">
        <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[var(--text-color)]">
          I focus on engineering <span className="text-green-accent font-medium">sustainable</span> and <span className="text-green-accent font-medium">scalable</span> solutions across technology, business strategy, and infrastructure.
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
          Hi, I’m Arkadip, a Civil Engineering undergrad in my pre-final year at{' '}
          <a
            href="https://www.iiests.ac.in/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-color)] font-medium underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--accent-green)] transition-colors inline-flex items-center"
          >
            IIEST Shibpur <ArrowIcon />
          </a>
          . I bridge core domain knowledge with analytical models and predictive systems to solve complex operational, environmental, and strategic challenges.
        </p>
      </div>

      <div className="space-y-5 text-base text-[var(--text-muted)] leading-relaxed max-w-3xl border-t border-[var(--border-color)]/40 pt-6">
        <p>
          Academically, I maintain a <span className="text-[var(--text-color)] font-medium">7.99 CGPA</span> (till 4th semester) in B.Tech Civil Engineering, having previously secured <span className="text-[var(--text-color)] font-medium">87.8%</span> in 12th grade and <span className="text-[var(--text-color)] font-medium">97.8%</span> in 10th grade.
        </p>
        <p>
          My work spans sustainable infrastructure systems, data-driven optimization, and modern software engineering. Whether modeling resource efficiency, building predictive analytics platforms, or evaluating low-carbon environmental interventions, I prioritize long-term scalability and practical feasibility to drive strategic impact at the intersection of technology, engineering, and enterprise operations.
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--border-color)]/40 flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)]">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors inline-flex items-center">
          LinkedIn <ArrowIcon />
        </a>
        <a href="https://github.com/arkadipsom-code" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors inline-flex items-center">
          GitHub <ArrowIcon />
        </a>
        <a href="mailto:arkadipsom@gmail.com" className="hover:text-[var(--text-color)] transition-colors inline-flex items-center">
          Email <ArrowIcon />
        </a>
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="hover:text-[var(--text-color)] underline underline-offset-4 decoration-[var(--accent-green)] transition-colors cursor-pointer inline-flex items-center font-medium"
        >
          Resume
        </button>
      </div>

      {/* Location / Status with Map Pin SVG */}
      <div className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block shrink-0 text-green-accent"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>Kolkata, India • Open for Internships and Full-time roles</span>
      </div>

      {/* Full Screen Viewport Backdrop Blur Resume Modal via Portal */}
      {isResumeModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
            <div className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-4">
                <h3 className="editorial-heading text-lg font-normal text-[var(--text-color)]">Select Resume Variant</h3>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="text-[var(--text-muted)] hover:text-[var(--text-color)] text-xl font-bold px-2 py-1 cursor-pointer"
                >
                  ×
                </button>
              </div>

              <div className="space-y-3">
                <div
                  onClick={() => handleSelectResume('technical')}
                  className="p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-green)] cursor-pointer transition-all bg-[var(--bg-color)] group"
                >
                  <div className="font-medium text-sm text-[var(--text-color)] group-hover:underline">Technical Resume</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Software engineering, full-stack web development, and data science projects.</div>
                </div>

                <div
                  onClick={() => handleSelectResume('consulting')}
                  className="p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-green)] cursor-pointer transition-all bg-[var(--bg-color)] group"
                >
                  <div className="font-medium text-sm text-[var(--text-color)] group-hover:underline">Business Strategy & Consulting</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Corporate strategy, operations, and business transformation.</div>
                </div>

                <div
                  onClick={() => handleSelectResume('civil')}
                  className="p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-green)] cursor-pointer transition-all bg-[var(--bg-color)] group"
                >
                  <div className="font-medium text-sm text-[var(--text-color)] group-hover:underline">Core Civil Engineering</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Infrastructure projects, management, and civil engineering principles.</div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}