import React from 'react';
import skillsData from '../data/skills.json';
import { Code, Terminal, Database, Wrench } from 'lucide-react';

export default function SkillsView() {
  // Safely extract categories whether skills.json is an Array or Object
  const skillCategories = Array.isArray(skillsData)
    ? skillsData
    : (skillsData?.categories || skillsData?.skills || []);

  const getIcon = (categoryName = '') => {
    const lower = categoryName.toLowerCase();
    if (lower.includes('language') || lower.includes('programming')) return <Code size={18} />;
    if (lower.includes('frame') || lower.includes('lib') || lower.includes('web')) return <Terminal size={18} />;
    if (lower.includes('data') || lower.includes('cloud')) return <Database size={18} />;
    return <Wrench size={18} />;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-bold tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">
          Technical Skills
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
          Proficiencies spanning software engineering, web technologies and core civil engineering disciplines.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">No skills data found.</p>
        ) : (
          skillCategories.map((cat, idx) => (
            <div
              key={cat.title || idx}
              className="p-6 bg-zinc-200/40 dark:bg-zinc-800/30 border border-zinc-300/50 dark:border-zinc-700/50 rounded-2xl space-y-4 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100">
                <span className="text-zinc-500 dark:text-zinc-400">
                  {getIcon(cat.title || cat.category)}
                </span>
                <h3 className="text-base font-extrabold uppercase tracking-wider">
                  {cat.title || cat.category || 'Skills'}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {(cat.items || cat.skills || []).map((skill, sIdx) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-lg shadow-2xs"
                    >
                      {skillName}
                    </span>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}