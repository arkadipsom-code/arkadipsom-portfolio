import React, { useState } from 'react';
import ProfileView from '../views/ProfileView';
import ProjectView from '../views/ProjectView';
import ExperiencesView from '../views/ExperiencesView';
import SkillsView from '../views/SkillsView';
import ContactView from '../views/ContactView';

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Navigation configurations
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  // Dynamically render the active view component
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <ProfileView />;
      case 'projects':
        return <ProjectView />;
      case 'experience':
        return <ExperiencesView />;
      case 'skills':
        return <SkillsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <ProfileView />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left Sidebar - Fixed-style navigation matching image_63c91e.jpg */}
        <aside className="w-full md:w-48 flex-shrink-0">
          <div className="md:sticky md:top-24 flex flex-col gap-8">
            
            <h1 className="text-2xl font-bold tracking-wider text-black">
              Arkadip Som
            </h1>
            
            {/* Navigation Menu */}
            <nav className="flex flex-row md:flex-col gap-4 md:gap-3 flex-wrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-semibold tracking-widest text-left uppercase transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'text-blue-600 font-bold' 
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right Content Stream */}
        <main className="flex-1 max-w-2xl min-h-[50vh] animate-fadeIn">
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default MainLayout;