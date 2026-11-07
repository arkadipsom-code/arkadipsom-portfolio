import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

export const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-0.5"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function App() {
  const getInitialTab = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const validTabs = ['projects', 'experiences', 'contact'];
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
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
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
    { id: 'projects', label: 'Projects' },
    { id: 'experiences', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'experiences':
        return <Experiences />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between w-full bg-[var(--bg-color)] text-[var(--text-color)] antialiased transition-colors duration-200">
      <Analytics />

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-8 sm:py-12 flex-1 flex flex-col">
        {/* Mobile-optimized Header Layout */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-[var(--border-color)]/40">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button
              onClick={() => handleTabChange('home')}
              className="editorial-heading text-xl sm:text-2xl font-normal hover:opacity-80 transition-opacity cursor-pointer text-[var(--text-color)]"
            >
              Arkadip Som
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className="sm:hidden text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors cursor-pointer p-1"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 justify-between sm:justify-end">
            <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`transition-colors cursor-pointer relative pb-1 ${
                    activeTab === item.id
                      ? 'text-[var(--text-color)] font-medium border-b border-[var(--text-color)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Theme Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className="hidden sm:block text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors cursor-pointer p-1"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* Dynamic Main Content */}
        <main className="w-full flex-1 pt-10">
          <div key={activeTab} className="animate-fade-in">
            {renderContent()}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-[var(--border-color)]/40 pt-8 mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>© {new Date().getFullYear()} Arkadip Som. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="mailto:arkadipsom@gmail.com" className="hover:text-[var(--text-color)] transition-colors">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors inline-flex items-center">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/arkadipsom-code" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors inline-flex items-center">GitHub <ArrowIcon /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}