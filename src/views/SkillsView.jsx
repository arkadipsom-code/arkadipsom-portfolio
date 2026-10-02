import React from 'react';
import skillsData from '../data/skills.json';

export default function SkillsView() {
  const skillCategories = Array.isArray(skillsData)
    ? skillsData
    : (skillsData?.categories || skillsData?.skills || []);

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-neutral-800 dark:text-neutral-200">
      
      {/* Editorial Header */}
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          Skills
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
          Proficiencies across software engineering, machine learning, and civil engineering.
        </p>
      </div>

      {/* Editorial Clean Text Blocks */}
      <div className="space-y-8 pt-2">
        {skillCategories.length === 0 ? (
          <p className="text-sm sm:text-base text-neutral-500">No skills data found.</p>
        ) : (
          skillCategories.map((cat, idx) => {
            const rawSkills = cat.items || cat.skills || [];
            const skillList = rawSkills.map(skill => typeof skill === 'string' ? skill : skill.name);

            return (
              <div key={cat.id || idx} className="space-y-2">
                <h2 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {cat.title || cat.category || 'Category'}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {skillList.join(' · ')}
                </p>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}