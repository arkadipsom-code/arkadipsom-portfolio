import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Sun, Moon } from 'lucide-react';
import ProfileView from './views/ProfileView';
import ProjectView from './views/ProjectView';
import ExperiencesView from './views/ExperiencesView';
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';

export default function App() {
  // Helper to read initial route directly from window.location.pathname
  const getInitialTab = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // strip leading/trailing slashes
    const validTabs = ['projects', 'experience', 'skills', 'contact'];
    if (path === '' || path === 'home') return 'home';
    return validTabs.includes(path) ? path : 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Defaults to Dark Mode unless explicitly set to 'light'
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Dark Mode Class Sync & LocalStorage Persistence
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

  // Browser Back/Forward Button State Sync
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
    <div className="min-h-screen w-full bg-[#faf9f6] dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 antialiased transition-colors duration-200">
      <Analytics />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-52 flex-shrink-0">
          <div className="md:sticky md:top-24 flex flex-col gap-6 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
                Arkadip Som
              </h1>
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Toggle Theme"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <nav className="flex flex-row md:flex-col gap-x-6 gap-y-4 flex-wrap border-b border-zinc-200 dark:border-zinc-800 pb-4 md:pb-0 md:border-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`text-sm font-bold tracking-widest text-left uppercase transition-all duration-150 cursor-pointer outline-none focus:outline-none select-none relative pb-1 md:pb-0 ${
                    activeTab === item.id
                      ? 'text-zinc-900 dark:text-zinc-100 font-extrabold'
                      : 'text-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900 dark:bg-zinc-100 md:hidden" />
                  )}
                  {activeTab === item.id && (
                    <span className="hidden md:inline-block ml-2 text-zinc-900 dark:text-zinc-100 font-extrabold">
                      ▪
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 w-full pt-1 md:pt-0">{renderContent()}</main>
      </div>
    </div>
  );
}