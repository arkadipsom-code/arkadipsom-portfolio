import React from 'react';
import { writings } from '../data/writingsData';

export default function Writings({ onSelectWriting }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="editorial-heading text-2xl font-normal text-[var(--text-muted)]">
        My Writings
      </h1>

      <div className="space-y-8">
        {writings.map((item) => (
          <div key={item.slug} className="space-y-2.5 pb-6 border-b border-[var(--border-color)]/40 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <button
                onClick={() => onSelectWriting(item.slug)}
                className="text-left editorial-heading text-xl font-normal text-[var(--text-color)] underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--accent-green)] transition-colors inline-flex items-center leading-tight cursor-pointer"
              >
                <span>{item.title}</span>
              </button>
              <span className="text-xs text-[var(--text-muted)]">
                {item.date} • <span className="text-[var(--accent-green)] font-medium">{item.readTime}</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-0.5">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-[var(--text-muted)]">
                  {tag}{idx < item.tags.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-0.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}