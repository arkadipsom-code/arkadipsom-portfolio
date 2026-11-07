import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ArrowIcon } from '../App';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Analytics', 'Core Civil Engineering'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="space-y-10 animate-fade-in">
      <h1 className="editorial-heading text-2xl font-normal text-[var(--text-muted)]">
        Projects
      </h1>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 text-sm pb-4 border-b border-[var(--border-color)]/40">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`transition-colors cursor-pointer pb-1 ${
              activeFilter === cat
                ? 'text-[var(--text-color)] font-medium border-b border-[var(--text-color)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="space-y-3 border-b border-[var(--border-color)]/40 pb-8 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="editorial-heading text-xl font-normal text-[var(--text-color)]">
                {project.title}
              </h2>
              <span className="text-xs text-[var(--text-muted)]">
                {project.category}
              </span>
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {project.summary}
            </p>

            <div className="flex items-center gap-6 text-xs pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] underline underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center"
                >
                  GitHub <ArrowIcon />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-color)] underline underline-offset-4 hover:opacity-80 transition-opacity inline-flex items-center"
                >
                  Live Demo <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}