import React from 'react';
import { writings } from '../data/writingsData';

const BackArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block w-[1em] h-[1em] mr-1 self-center shrink-0"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export default function WritingDetail({ slug, onBack }) {
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    return (
      <div className="space-y-4 animate-fade-in py-12">
        <h1 className="editorial-heading text-2xl font-normal text-[var(--text-color)]">Writing not found</h1>
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors cursor-pointer"
        >
          <BackArrowIcon /> Back to Writings
        </button>
      </div>
    );
  }

  return (
    <article className="animate-fade-in space-y-8 pb-16">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center text-xs text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors cursor-pointer group"
      >
        <BackArrowIcon /> 
        <span>Back to writings</span>
      </button>

      {/* Header Section */}
      <div className="space-y-3 pb-6 border-b border-[var(--border-color)]/40">
        <h1 className="editorial-heading text-2xl sm:text-3xl font-normal text-[var(--text-color)] leading-tight">
          {writing.title}
        </h1>
        
        <div className="text-xs text-[var(--text-muted)]">
          {writing.date} • <span className="text-[var(--accent-green)] font-medium">{writing.readTime}</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {writing.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs px-2.5 py-0.5 rounded bg-[var(--border-color)]/20 text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Body Content */}
      <div className="space-y-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
        {writing.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return <p key={index}>{block.text}</p>;
          }
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="editorial-heading text-xl sm:text-2xl font-normal text-[var(--text-color)] pt-4">
                {block.text}
              </h2>
            );
          }
          if (block.type === 'image') {
            return (
                <figure key={index} className="my-6 space-y-2">
                <img 
                    src={block.url} 
                    alt={block.caption || 'Article image'} 
                    className="w-full h-auto rounded-lg border border-[var(--border-color)]/50 shadow-sm"
                />
                {block.caption && (
                    <figcaption className="text-xs text-center text-[var(--text-muted)] italic pt-1">
                    {block.caption}
                    </figcaption>
                )}
                </figure>
            );
        }
          if (block.type === 'video') {
            return (
              <figure key={index} className="my-6 space-y-2">
                <div className="w-full rounded-lg overflow-hidden border border-[var(--border-color)]/50 bg-black">
                  <video 
                    src={block.url} 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full max-h-[420px] object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-xs text-center text-[var(--text-muted)] italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}