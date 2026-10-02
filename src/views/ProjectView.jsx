import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectView() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const rawList = Array.isArray(projectsData) 
    ? projectsData 
    : (projectsData?.projects || []);

  const categories = ['All', 'Web Development', 'Analytics', 'Core Civil Engineering'];

  const filteredProjects = selectedCategory === 'All' 
    ? rawList 
    : rawList.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-neutral-800 dark:text-neutral-200">
      
      {/* Editorial Header & Minimal Category Filter Bar */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Projects
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
            Production web apps, machine learning engines, and civil engineering systems.
          </p>
        </div>

        {/* Minimal Category Nav */}
        <div className="flex items-center gap-x-5 flex-wrap gap-y-2 pt-2 text-xs sm:text-sm border-b border-neutral-200 dark:border-neutral-800 pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'text-neutral-900 dark:text-neutral-100 font-medium underline underline-offset-4 decoration-neutral-400'
                  : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Vertical Project List */}
      <div className="space-y-10">
        {filteredProjects.length === 0 ? (
          <p className="text-sm sm:text-base text-neutral-500">No projects listed under this category.</p>
        ) : (
          filteredProjects.map((project, idx) => (
            <div key={project.id || idx} className="space-y-3 group">
              
              {/* Project Title & Action Links Inline */}
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-400">
                  {project.title}
                </h2>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 flex-shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                    >
                      code <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-0.5"
                    >
                      demo <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>

              {/* Tech Stack & Metadata Inline Footer */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.techStack.join(', ')}</span>
                </div>
              )}

            </div>
          ))
        )}
      </div>

    </div>
  );
}