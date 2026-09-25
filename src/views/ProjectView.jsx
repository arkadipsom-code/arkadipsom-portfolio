import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ExternalLink } from 'lucide-react';

// Custom Brand Icon SVG for GitHub
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectView() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Safely extract project array whether JSON root is an Array or an Object
  const rawList = Array.isArray(projectsData) 
    ? projectsData 
    : (projectsData?.projects || []);

  const categories = ['All', 'Web Development', 'Core Civil Engineering', 'Analytics'];

  const filteredProjects = selectedCategory === 'All' 
    ? rawList 
    : rawList.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header & Filter Tabs */}
      <div className="space-y-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">
              Technical Projects
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Production web applications, machine learning tools and engineering software.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300/60 dark:hover:bg-zinc-700/60 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">No projects found for this category.</p>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="p-6 bg-zinc-200/40 dark:bg-zinc-800/30 border border-zinc-300/50 dark:border-zinc-700/50 rounded-2xl space-y-4 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider rounded">
                      {project.category || 'Engineering'}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-[10px] font-bold uppercase tracking-wider rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-wide group-hover:underline">
                    {project.title}
                  </h3>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 text-xs font-bold rounded-lg transition-colors border border-zinc-300/50 dark:border-zinc-700/50"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 text-xs font-bold rounded-lg transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights / Features */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {project.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-zinc-400 dark:text-zinc-500 select-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Tags */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-300 text-[11px] font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

    </div>
  );
}