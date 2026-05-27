import React from 'react';
import { useTime } from '../../hooks/useTime';

export default function TopBar({ 
  activeMenu, 
  setActiveMenu, 
  handleMenuAction,
  theme
}) {
  const { time, date } = useTime();

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <div className="w-full h-7 bg-zinc-950/60 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 text-xs font-medium text-neutral-300 select-none z-50 fixed top-0 left-0">
      
      {/* Left Menu Items (Always visible on both Mobile and Desktop) */}
      <div className="flex items-center gap-1 relative">
        <span className="font-bold text-white cursor-default pr-2 sm:pr-3">WorkspaceOS</span>
        
        {/* FINDER MENU */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu('finder')}
            className={`px-2 sm:px-3 py-0.5 rounded transition ${activeMenu === 'finder' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
          >
            Finder
          </button>
          {activeMenu === 'finder' && (
            <div className="absolute top-6 left-0 w-48 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg p-1 shadow-2xl flex flex-col z-50">
              <button onClick={() => handleMenuAction('download_cv')} className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-neutral-200 rounded text-[11px]">📄 Download_Resume.pdf</button>
              <button onClick={() => handleMenuAction('open_all')} className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-neutral-200 rounded text-[11px]">📁 Open All Folders</button>
              <div className="border-t border-white/5 my-1" />
              <button onClick={() => handleMenuAction('restart')} className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-red-400 rounded text-[11px]">🔄 System Restart</button>
            </div>
          )}
        </div>

        {/* VIEW MENU */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu('view')}
            className={`px-2 sm:px-3 py-0.5 rounded transition ${activeMenu === 'view' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
          >
            View
          </button>
          {activeMenu === 'view' && (
            <div className="absolute top-6 left-0 w-52 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg p-1 shadow-2xl flex flex-col z-50">
              <div className="px-3 py-1 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Cycle Themes</div>
              <button onClick={() => handleMenuAction('theme_charcoal')} className={`w-full text-left px-3 py-1.5 hover:bg-white/10 rounded text-[11px] ${theme === 'charcoal' ? 'text-white font-bold' : 'text-neutral-300'}`}>🌗 Deep Charcoal</button>
              <button onClick={() => handleMenuAction('theme_navy')} className={`w-full text-left px-3 py-1.5 hover:bg-white/10 rounded text-[11px] ${theme === 'navy' ? 'text-white font-bold' : 'text-neutral-300'}`}>🌌 Space Navy</button>
              <button onClick={() => handleMenuAction('theme_emerald')} className={`w-full text-left px-3 py-1.5 hover:bg-white/10 rounded text-[11px] ${theme === 'emerald' ? 'text-white font-bold' : 'text-neutral-300'}`}>🌲 Dark Emerald</button>
              <div className="border-t border-white/5 my-1" />
              <button onClick={() => handleMenuAction('toggle_grid')} className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-neutral-200 rounded text-[11px]">📱 Hide / Show Folder Grid</button>
              <button onClick={() => handleMenuAction('toggle_widgets')} className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-neutral-200 rounded text-[11px]">⚙️ Hide / Show Desktop Widgets</button>
            </div>
          )}
        </div>

        {/* HELP MENU */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu('help')}
            className={`px-2 sm:px-3 py-0.5 rounded transition ${activeMenu === 'help' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
          >
            Help
          </button>
          {activeMenu === 'help' && (
            <div className="absolute top-6 left-0 w-56 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg p-2 shadow-2xl flex flex-col gap-1 z-50 text-[11px] text-neutral-300">
              <div className="px-2 py-0.5 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">System Specs</div>
              <div className="px-2 font-mono text-neutral-400 bg-black/30 p-1.5 rounded border border-white/5 space-y-0.5">
                <div>OS: React 19 + Vite</div>
                <div>UI: Tailwind CSS v4</div>
              </div>
              <div className="border-t border-white/5 my-1" />
              <p className="px-2 text-neutral-400 leading-normal">Use the bottom application dock to interact with database info nodes.</p>
            </div>
          )}
        </div>
      </div>

      {/* 🚀 FIXED: Right Status Dashboard now uses hidden on mobile, flex on desktop (md:) */}
      <div className="hidden md:flex items-center gap-4 text-neutral-400">
        <span className="text-[10px] bg-zinc-800/60 px-1.5 py-0.5 rounded border border-white/5 uppercase tracking-wider text-neutral-300">
          v1.0-Stable
        </span>
        <span className="cursor-default text-neutral-300">{date}</span>
        <span className="font-semibold text-neutral-200 cursor-default">{time}</span>
      </div>

    </div>
  );
}