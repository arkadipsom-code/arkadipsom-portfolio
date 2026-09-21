import React from 'react';
import experiencesData from '../data/experiences.json';
import { Calendar, MapPin } from 'lucide-react';

export default function ExperiencesView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">
          Work Experience
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Industrial visits / training, open-source contributions and engineering internships.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-5">
        {experiencesData.map((exp, idx) => (
          <div
            key={exp.id || idx}
            className="p-6 bg-white dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl space-y-4 hover:border-gray-400 dark:hover:border-gray-700 transition-all duration-200"
          >
            {/* Top Row: Role + Organization on left, Metadata on right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 border-b border-gray-100 dark:border-gray-800/60">
              <div>
                <div className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                  {exp.company}
                </div>
                <h3 className="text-lg font-extrabold text-black dark:text-white tracking-tight mt-0.5">
                  {exp.role}
                </h3>
              </div>

              {/* Date & Location */}
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                {exp.duration && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gray-400" />
                    {exp.duration}
                  </span>
                )}
                {exp.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-gray-400" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {exp.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            )}

            {/* Bullet Points */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-1.5 pt-1">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-gray-400 dark:text-gray-600 select-none mt-0.5">–</span>
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
                    className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80 text-gray-700 dark:text-gray-300 text-[11px] font-medium rounded-md"
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