import React from 'react'
import{User, Code2, ShieldAlert, Mail, Briefcase} from 'lucide-react';

export default function Dock({setActiveWindow}) {
    const dockItems = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'skills', icon: ShieldAlert, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'experiences', icon: Briefcase, label: 'Experiences'},
    ];

    return (
    <div className="w-full absolute bottom-4 left-0 flex justify-center px-4 select-none pointer-events-none z-40">
      <div className="glass-blur-md px-4 py-2.5 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl pointer-events-auto transition-transform hover:scale-[1.02]">
        {dockItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveWindow(item.id)}
              className="relative group p-2.5 bg-zinc-900/40 hover:bg-zinc-100/10 text-neutral-300 hover:text-white rounded-xl border border-white/5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-folder-glow"
              title={item.label}
            >
              <IconComponent size={20} strokeWidth={1.5} />
              
              {/* Desktop Tooltip popup on hover */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900/90 text-white text-[10px] tracking-wider font-medium px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}