import React from 'react';
import experiencesData from '../data/experiences.json';

export default function ExperiencesView() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      <div>
        <h2 className="text-2xl font-bold tracking-widest text-gray-800 uppercase">Work History</h2>
      </div>

      <div className="space-y-12">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-4 gap-y-3 gap-x-8">
            
            <div className="sm:col-span-1 pt-1">
              <span className="text-lg font-bold text-gray-900 tracking-wider block uppercase">
                {exp.duration}
              </span>
              <span className="text-lg text-gray-500 block mt-1">
                {exp.location}
              </span>
            </div>

            <div className="sm:col-span-3 space-y-3">
              <div>
                <div className="flex items-baseline flex-wrap gap-x-3">
                  <h3 className="text-2xl font-bold text-black tracking-wide uppercase">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-bold tracking-wide text-gray-600 uppercase">
                    {exp.role}
                  </span>
                </div>
                {exp.facility && (
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    Facility: <span className="text-gray-900 font-semibold">{exp.facility}</span>
                  </p>
                )}
              </div>

              <ul className="space-y-2.5">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-gray-400 select-none mt-1.5 text-xs">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-medium text-gray-800 bg-gray-50 px-2.5 py-1 rounded border border-gray-200/60">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}