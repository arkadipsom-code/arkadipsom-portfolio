import React from 'react';

export default function Desktop({ children, theme = 'charcoal' }) {
  // Translate string properties into dynamic CSS gradient strings
  const themeMap = {
    charcoal: 'radial-gradient(circle at center, #27272a 0%, #09090b 100%)',
    navy: 'radial-gradient(circle at center, #1e3a8a 0%, #020617 100%)',
    emerald: 'radial-gradient(circle at center, #064e3b 0%, #022c22 100%)'
  };

  return (
    <div 
      className="w-screen h-screen text-neutral-200 relative overflow-hidden flex flex-col pt-7 transition-all duration-700 ease-in-out"
      style={{ backgroundImage: themeMap[theme] || themeMap.charcoal }}
    >
      {/* Interactive Desktop Canvas Area */}
      <div className="w-full flex-1 relative p-6 flex justify-between items-start">
        {children}
      </div>
    </div>
  );
}