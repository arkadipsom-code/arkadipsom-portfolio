import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-8 mt-20 text-xs text-[var(--text-muted)]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Arkadip Som. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:arkadip.som.ce@gmail.com" className="hover:text-[var(--text-color)] transition-colors">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}