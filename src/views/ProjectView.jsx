import React from 'react';
import projectsData from '../data/projects.json';
import { ArrowUpRight } from 'lucide-react'; 

export default function ProjectView() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      <div>
        <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Selected Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-y-12">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="flex flex-col space-y-3 group">
            
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-bold text-gray-900 group-hover:text-black transition-colors uppercase tracking-wide">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-4 text-gray-400 pt-0.5">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Source Code">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Launch Live App">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs font-bold tracking-wider text-gray-500">
              {project.subtitle}
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium text-gray-600 bg-gray-50 px-2.5 py-1 rounded border border-gray-200/60">
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