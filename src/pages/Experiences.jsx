import React from 'react';
import experiencesData from '../data/experiences.json';

const ExperienceArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block w-[1em] h-[1em] ml-1 self-center shrink-0"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function Experiences() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="editorial-heading text-2xl font-normal text-[var(--text-muted)]">
        Experience
      </h1>

      <div className="space-y-8">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="space-y-2.5 pb-6 border-b border-[var(--border-color)]/40 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-heading text-xl font-normal text-[var(--text-color)] underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--accent-green)] transition-colors inline-flex items-center leading-tight group"
              >
                <span>{exp.company}</span>
                <ExperienceArrowIcon />
              </a>
              <span className="text-xs text-[var(--text-muted)]">{exp.period}</span>
            </div>

            <div className="text-xs text-[var(--text-muted)] font-medium">
              {exp.role} {exp.location && `• ${exp.location}`}
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-0.5">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}