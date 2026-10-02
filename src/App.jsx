import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Sun, Moon } from 'lucide-react';
import ProfileView from './views/ProfileView';
import ProjectView from './views/ProjectView';
import ExperiencesView from './views/ExperiencesView';
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';

export default function App() {
  const getInitialTab = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const validTabs = ['projects', 'experience', 'skills', 'contact'];
    if (path === '' || path === 'home') return 'home';
    return validTabs.includes(path) ? path : 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const targetPath = tabId === 'home' ? '/' : `/${tabId}`;
    window.history.pushState({ tab: tabId }, '', targetPath);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

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
    <div className="min-h-screen w-full bg-[#faf9f6] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-200 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Analytics />

      {/* Central reading container scaled for desktop & mobile readability */}
      <div className="max-w-2xl sm:max-w-3xl mx-auto px-6 py-10 sm:py-16 md:py-20 space-y-8 sm:space-y-10">
        
        {/* Navigation Header */}
        <header className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <nav className="flex items-center gap-6 sm:gap-8 text-base sm:text-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`transition-all cursor-pointer relative pb-1 font-medium ${
                  activeTab === item.id
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle Theme"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer p-1.5 rounded-lg"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Dynamic View Container with smooth tab key-transition */}
        <main className="w-full pt-1">
          <div key={activeTab} className="animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}