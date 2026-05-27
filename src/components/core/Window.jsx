import React from 'react';

export default function Window({ title, onClose, children }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-full max-w-4xl h-[80vh] max-h-[600px] bg-zinc-900/70 backdrop-blur-xl border border-zinc-700/40 rounded-xl shadow-2xl z-30 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      
      {/* Top Window Header (Window Toolbar) */}
      <div className="w-full h-11 bg-zinc-950/40 border-b border-white/5 flex items-center justify-between px-4 select-none shrink-0">
        {/* Mac OS Action Control Indicator Circles */}
        <div className="flex items-center gap-2 w-1/4">
          <button 
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center group relative cursor-pointer outline-none"
          >
            <span className="text-[9px] font-bold text-red-950/80 opacity-0 group-hover:opacity-100 transition-opacity font-sans leading-none">
              ×
            </span>
          </button>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>

        {/* Center Title Label */}
        <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase text-center w-2/4">
          {title}
        </div>

        {/* Dummy spacer layout alignment block */}
        <div className="w-1/4" />
      </div>

      {/* Main Container View Box Viewport - Increased contrast background */}
      <div className="w-full flex-1 overflow-y-auto custom-scrollbar bg-zinc-950/70 p-5 sm:p-6 text-zinc-200">
        {children}
      </div>
    </div>
  );
}