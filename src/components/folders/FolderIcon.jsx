import React from 'react';

export default function FolderIcon({ id, title, icon: IconComponent, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="w-24 flex flex-col items-center justify-center gap-1.5 cursor-pointer group select-none text-center outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      
      <div className="w-14 h-14 bg-zinc-900/20 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-neutral-300 transition-all duration-200 group-hover:bg-zinc-800/40 group-hover:text-white group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.07)] group-active:scale-95">
        <IconComponent size={26} strokeWidth={1.25} />
      </div>
      
      {/* Matte Label text with smooth hover transitions */}
      <span className="text-[11px] font-medium text-neutral-200 tracking-wide bg-zinc-950/40 px-1.5 py-0.5 rounded border border-transparent group-hover:bg-zinc-900/60 group-hover:border-white/5 transition-all truncate max-w-full">
        {title}
      </span>
    </div>
  );
}