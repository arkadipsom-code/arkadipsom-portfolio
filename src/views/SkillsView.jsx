import React from 'react';
import skillsData from '../data/skills.json';

export default function SkillsView() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* View Header Block */}
      <div>
        <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Technical Inventory</h2>
      </div>

      {/* Skills Layout Matrix */}
      <div className="space-y-10">
        {skillsData.categories.map((cat) => (
          <div key={cat.id} className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 gap-x-8">
            
            {/* Left Column: Category Label */}
            <div className="sm:col-span-1 pt-0.5">
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
                {cat.title}
              </h3>
            </div>
            
            {/* Right Column: Clean Inline Tag Cloud */}
            <div className="sm:col-span-3">
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {cat.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded transition-colors duration-200 hover:bg-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}