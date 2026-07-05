import React, { useState } from 'react';
import ProfileView from './views/ProfileView';
import ProjectView from './views/ProjectView';
import ExperiencesView from './views/ExperiencesView';
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <ProfileView />;
      case 'projects': return <ProjectView />;
      case 'experience': return <ExperiencesView />;
      case 'skills': return <SkillsView />;
      case 'contact': return <ContactView />;
      default: return <ProfileView />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-52 flex-shrink-0">
          <div className="md:sticky md:top-24 flex flex-col gap-6 md:gap-8">
            
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-black uppercase">
                Arkadip Som
              </h1>
            </div>
            
            <nav className="flex flex-row md:flex-col gap-x-6 gap-y-4 flex-wrap border-b border-gray-100 pb-4 md:pb-0 md:border-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-bold tracking-widest text-left uppercase transition-all duration-150 cursor-pointer outline-none focus:outline-none select-none relative pb-1 md:pb-0 ${
                    activeTab === item.id
                      ? 'text-black font-extrabold'
                      : 'text-gray-400 hover:text-black'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black md:hidden" />
                  )}
                  {activeTab === item.id && (
                    <span className="hidden md:inline-block ml-2 text-black font-extrabold">▪</span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 w-full pt-1 md:pt-0">
          {renderContent()}
        </main>

      </div>
    </div>
  );
}