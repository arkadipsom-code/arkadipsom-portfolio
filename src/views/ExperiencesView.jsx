import React from 'react';
import experiencesData from '../data/experiences.json';
import { Calendar, MapPin } from 'lucide-react';

export default function ExperiencesView() {
  return (
    <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      
      <div className="px-1">
        <h2 className="text-lg font-semibold text-white tracking-tight">Experiences</h2>
        <p className="text-xs text-neutral-500 mt-0.5">Blueprint of work history</p>
      </div>

      
      <div className="space-y-4">
        {experiencesData.map((exp) => (
          <div 
            key={exp.id}
            className="bg-zinc-900/20 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 hover:bg-zinc-900/40 hover:border-white/[0.08] transition-all duration-300 ease-out shadow-sm"
          >
            
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/[0.04] pb-3 mb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  
                  <span className="text-[10px] font-medium bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/10 tracking-wide">
                    {exp.role}
                  </span>
                </div>
                
                <p className="text-xs text-neutral-400 mt-1">
                  Facility: <span className="text-neutral-300 font-medium">{exp.facility}</span>
                </p>
              </div>

              
              <div className="flex sm:flex-col items-start sm:items-end gap-x-3 gap-y-0.5 text-[11px] font-sans text-neutral-500 mt-1 sm:mt-0 shrink-0">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar size={11} className="text-neutral-600" /> {exp.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-neutral-600" /> {exp.location}
                </span>
              </div>
            </div>

            
            <ul className="space-y-3">
              {exp.highlights.map((bullet, idx) => (
                <li key={idx} className="text-xs text-neutral-300 flex items-start gap-3 leading-relaxed font-light">
                  
                  <span className="w-1 h-1 rounded-full bg-neutral-600 mt-2 shrink-0 animate-pulse" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            
            <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/[0.04]">
              {exp.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx} 
                  className="text-[10px] text-neutral-400 bg-white/[0.02] border border-white/[0.04] px-2.5 py-0.5 rounded-md font-sans tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}