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
      <div className="pb-2 border-b border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">
          Technical Skills
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Proficiencies spanning data science, web development technologies and civil engineering disciplines.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.length === 0 ? (
          <p className="text-sm text-gray-500">No skills data found.</p>
        ) : (
          skillCategories.map((cat, idx) => (
            <div
              key={cat.title || idx}
              className="p-6 bg-white dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl space-y-4 hover:border-black dark:hover:border-white transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 text-black dark:text-white">
                <span className="text-gray-500 dark:text-gray-400">
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
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-lg shadow-2xs"
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