import React from 'react';
import profileData from '../data/profile.json';
import { Award, BookOpen, Target, Download } from 'lucide-react';

export default function ProfileView() {
  const handleDownload = () => {
    
    const resumeUrl = '/Download_Resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arkadip_Som_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h2>
        <p className="text-xs text-neutral-400 mt-1">{profileData.title} • Based in {profileData.location}</p>
      </div>

      <p className="text-xs font-light text-neutral-300 leading-relaxed bg-zinc-900/20 border border-white/5 p-4 rounded-xl">
        {profileData.bio}
      </p>

      {/* Academic Score Tracker Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
          <BookOpen className="text-neutral-400 shrink-0" size={18} />
          <div>
            <div className="text-[10px] text-neutral-400 font-bold tracking-wider uppercase">B.Tech CGPA</div>
            <div className="text-sm font-bold text-white mt-0.5">{profileData.education.metrics.cgpa}</div>
          </div>
        </div>
        <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
          <Award className="text-neutral-400 shrink-0" size={18} />
          <div>
            <div className="text-[10px] text-neutral-400 font-bold tracking-wider uppercase">10th Percentage</div>
            <div className="text-sm font-bold text-white mt-0.5">{profileData.education.metrics.secondary_school}</div>
          </div>
        </div>
        <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
          <Award className="text-neutral-400 shrink-0" size={18} />
          <div>
            <div className="text-[10px] text-neutral-400 font-bold tracking-wider uppercase">12th Percentage</div>
            <div className="text-sm font-bold text-white mt-0.5">{profileData.education.metrics.higher_secondary_school}</div>
          </div>
        </div>
      </div>

      {/* Focus */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase flex items-center gap-2">
          <Target size={14} /> Core Targets
        </h3>
        <ul className="space-y-2">
          {profileData.objectives.map((obj, idx) => (
            <li key={idx} className="text-xs font-light text-neutral-300 flex items-start gap-2">
              <span className="text-neutral-500 mt-0.5">•</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Resume Section */}
      <div className="pt-4 border-t border-white/5 space-y-3">
        <div>
          <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
            Curriculum Vitae Link
          </h3>
          <p className="text-[11px] text-neutral-400 mt-0.5">
            Request compiled technical dossier, academic transcripts, and full history matrix.
          </p>
        </div>
        
        <button
          onClick={handleDownload}
          className="h-9 px-4 bg-neutral-200 text-zinc-950 text-xs font-bold rounded-lg hover:bg-white active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-md w-full sm:w-auto justify-center"
        >
          <Download size={14} /> Download Resume
        </button>
      </div>

    </div>
  );
}