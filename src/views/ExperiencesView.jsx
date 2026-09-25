import React from 'react';
import experiencesData from '../data/experiences.json';
import { Calendar, MapPin } from 'lucide-react';

export default function ExperiencesView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-bold tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">
          Work Experience
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
          Industrial visits / training, open-source contributions and engineering internships.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-5">
        {experiencesData.map((exp, idx) => (
          <div
            key={exp.id || idx}
            className="p-6 bg-zinc-200/40 dark:bg-zinc-800/30 border border-zinc-300/50 dark:border-zinc-700/50 rounded-2xl space-y-4 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
          >
            {/* Top Row: Role + Organization on left, Metadata on right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                  {exp.company}
                </div>
                <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mt-0.5">
                  {exp.role}
                </h3>
              </div>

              {/* Date & Location */}
              <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {exp.duration && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-zinc-400 dark:text-zinc-500" />
                    {exp.duration}
                  </span>
                )}
                {exp.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-zinc-400 dark:text-zinc-500" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {exp.description && (
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {exp.description}
              </p>
            )}

            {/* Bullet Points */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-1.5 pt-1">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-zinc-400 dark:text-zinc-500 select-none mt-0.5">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Skill Tags */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-300 text-[11px] font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}