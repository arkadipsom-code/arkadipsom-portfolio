import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-color)]/80 border-b border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Name / Home Link */}
        <Link to="/" className="font-semibold text-base tracking-tight hover:opacity-80 transition-opacity">
          Arkadip Som
        </Link>

        {/* Right: Navigation Links & Theme Toggle */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/projects"
            className={`transition-colors ${isActive('/projects') ? 'font-semibold text-[var(--text-color)]' : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Projects
          </Link>
          <Link
            to="/experiences"
            className={`transition-colors ${isActive('/experiences') ? 'font-semibold text-[var(--text-color)]' : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Experiences
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${isActive('/contact') ? 'font-semibold text-[var(--text-color)]' : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:bg-[var(--hover-bg)] transition-colors ml-2"
          >
            {theme === 'light' ? (
              // Moon Icon (Switch to Dark)
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun Icon (Switch to Light)
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}