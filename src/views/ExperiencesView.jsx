import React from 'react';
import experiencesData from '../data/experiences.json';

export default function ExperiencesView() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 text-neutral-800 dark:text-neutral-200">
      
      {/* Editorial Header */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Experience
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          Industrial visits, open-source contributions, and engineering roles.
        </p>
      </div>

      {/* Editorial Timeline Entry List */}
      <div className="space-y-10 pt-2">
        {experiencesData.map((exp, idx) => (
          <div key={exp.id || idx} className="space-y-3">
            
            {/* Header: Company & Role on left, Date & Location on right */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h2 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {exp.role} <span className="text-neutral-400 font-normal">at</span>{' '}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors font-medium"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 flex items-center gap-2 flex-shrink-0">
                {exp.duration && <span>{exp.duration}</span>}
                {exp.location && (
                  <>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </>
                )}
              </div>
            </div>

            {/* Narrative Paragraph Breakdown */}
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {exp.highlights.map((point, pIdx) => (
                  <p key={pIdx}>
                    {point}
                  </p>
                ))}
              </div>
            )}

            {/* Minimal Inline Tech / Skill Tags */}
            {(exp.tags || exp.skills) && (
              <div className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 flex flex-wrap items-center gap-x-2 pt-1">
                <span>Key focus:</span>
                <span>{(exp.tags || exp.skills).join(', ')}</span>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}