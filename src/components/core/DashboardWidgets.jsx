import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { useTime } from '../../hooks/useTime';

export default function DashboardWidgets({ setActiveWindow }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    'WorkspaceOS v1.0 Terminal Shell Core.',
    'Type "help" to view system control triggers.'
  ]);
  
  const { time, date } = useTime();
  const terminalEndRef = useRef(null);

  // --- Live Screen Time Tracker State & Engine ---
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    // Starts an interval processor that ticks up every 1000ms (1 second)
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    // Clean up interval when the user unmounts or leaves the app
    return () => clearInterval(timer);
  }, []);

  // Helper function to format seconds into a clean human-readable "00h 05m 12s" string
  const formatScreenTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
  };

  // --- Calendar Date Processing Engine ---
  const today = new Date();
  const currentDayNumber = today.getDate();
  const currentMonthName = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  
  
  const totalDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = `sh: command not found: ${cmd}. Type "help" for info.`;
    
    switch(cmd) {
      case 'help':
        response = 'Commands: help | profile | project | skill | contact | experiences | clear';
        break;
      case 'profile':
        setActiveWindow('profile');
        response = 'Executing: Launching Profile Node system parameters...';
        break;
      case 'project':
      case 'projects':
        setActiveWindow('projects');
        response = 'Executing: Mapping Data Pipelines and Case Files...';
        break;
      case 'skill':
      case 'skills':
        setActiveWindow('skills');
        response = 'Executing: Opening Tech Stack Matrices...';
        break;
      case 'contact':
        setActiveWindow('contact');
        response = 'Executing: Spawning remote communications form...';
        break;
      case 'experiences':
        setActiveWindow('experiences');
        response = 'Executing: Showing all the Professional Experiences...';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
    }

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className="hidden lg:flex flex-col w-80 h-full max-h-[85vh] gap-4 absolute right-6 top-4 select-none pointer-events-auto z-10">
      
      {/* SECTION 1: THE ULTRA-MINIMAL TIME STAMP */}
      <div className="text-right space-y-0.5 pr-2">
        <h1 className="text-4xl font-light tracking-tighter text-white/50 font-sans">
          {time.split(' ')[0]}
        </h1>
        <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-medium opacity-70">
          {date}
        </p>
      </div>

      {/* WIDGET 1: MINIMAL SYSTEM CALENDAR */}
      <div className="bg-zinc-950/20 border border-white/5 rounded-xl p-3 backdrop-blur-sm space-y-2">
        <div className="flex items-center justify-between text-neutral-400 text-[9px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <CalendarIcon size={12} className="text-neutral-400" /> System Calendar
          </div>
          <span className="text-neutral-500 text-[10px] lowercase">{currentMonthName} {currentYear}</span>
        </div>
        
        {/* Quick Micro-Grid Matrix of Calendar Days */}
        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[9px] text-neutral-500 pt-1">
          {['S','M','T','W','T','F','S'].map((d, i) => (
            <div key={i} className="font-bold text-neutral-600">{d}</div>
          ))}
          {daysArray.map((day) => {
            const isToday = day === currentDayNumber;
            return (
              <div 
                key={day} 
                className={`py-0.5 rounded transition-all duration-300 ${
                  isToday 
                    ? 'bg-white text-zinc-950 font-bold shadow-md scale-105' 
                    : 'text-neutral-300 hover:bg-white/5'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* WIDGET 2: LIVE PORTFOLIO SESSION SCREEN TIME */}
      <div className="bg-zinc-950/20 border border-white/5 rounded-xl p-3 backdrop-blur-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900/40 border border-white/5 flex items-center justify-center text-neutral-400">
            <Clock size={14} className="text-emerald-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider">Session Runtime</span>
            <span className="text-sm font-bold text-neutral-200 block mt-0.5">
              {formatScreenTime(secondsElapsed)}
            </span>
          </div>
        </div>
        <div className="text-[9px] text-emerald-500/80 bg-emerald-950/30 border border-emerald-900/30 px-1.5 py-0.5 rounded tracking-wide uppercase font-bold">
          Active
        </div>
      </div>

      {/* CONTAINER-STYLED TERMINAL */}
      <div className="flex-1 bg-black/60 border border-zinc-800/60 rounded-xl p-3 font-mono text-[11px] flex flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 text-neutral-500 border-b border-zinc-900 pb-2 mb-2 shrink-0">
          <TerminalIcon size={12} /> console.sh
        </div>
        
        {/* Terminal Line Feed History */}
        <div className="flex-1 overflow-y-auto space-y-1.5 text-zinc-300 custom-scrollbar pr-1">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">{line}</div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Form Stream */}
        <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-zinc-900 pt-2 mt-1 shrink-0">
          <span className="text-emerald-500 font-bold font-mono text-xs">{`>`}</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent border-none outline-none text-white text-[11px] font-mono font-light placeholder-zinc-700"
          />
        </form>
      </div>

    </div>
  );
}