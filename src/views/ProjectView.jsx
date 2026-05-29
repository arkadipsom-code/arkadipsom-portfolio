import React from 'react';
import projectsData from '../data/projects.json';
import { ExternalLink, GitBranch, Folder } from 'lucide-react'; 

export default function ProjectView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Project Blueprints & Deployments</h2>
        <p className="text-xs text-neutral-400 mt-1">Select an application file to review technical execution blueprints</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.projects.map((project) => (
          <div 
            key={project.id}
            className="bg-zinc-900/30 border border-white/5 rounded-xl p-5 flex flex-col justify-between hover:bg-zinc-900/50 hover:border-white/10 transition-all group shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-zinc-950/60 rounded-lg border border-white/5 text-neutral-400 group-hover:text-white transition-colors">
                  <Folder size={18} strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  
                  <a href={project.githubLink} className="hover:text-white transition-colors" title="Source Code">
                    <GitBranch size={16} strokeWidth={1.5} />
                  </a>
                  <a href={project.liveLink} className="hover:text-white transition-colors" title="Launch App">
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <h3 className="text-xs font-bold tracking-wider text-white uppercase">{project.title}</h3>
              <p className="text-[11px] font-medium text-neutral-400 mt-0.5">{project.subtitle}</p>
              <p className="text-xs font-light text-neutral-300 mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/5">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] bg-zinc-950/50 text-neutral-400 px-2 py-0.5 rounded border border-white/5 font-medium"
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