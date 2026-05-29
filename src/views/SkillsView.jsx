import React from 'react';
import skillsData from '../data/skills.json';

export default function SkillsView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Technical Inventory</h2>
        <p className="text-xs text-neutral-400 mt-1">Cross-functional domains combining analysis, data models, and programming mechanics</p>
      </div>

      <div className="space-y-4">
        {skillsData.categories.map((cat) => (
          <div key={cat.id} className="bg-zinc-900/20 border border-white/5 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase border-b border-white/5 pb-2">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs bg-zinc-900/60 text-white font-light px-3 py-1 rounded-lg border border-white/5 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}