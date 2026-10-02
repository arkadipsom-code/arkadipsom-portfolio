import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import profileData from '../data/profile.json';
import { ArrowUpRight, FileText, X } from 'lucide-react';

export default function ProfileView() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const resumeOptions = [
    {
      title: 'Technical Resume',
      description: 'Software engineering, full-stack web development, and data science projects.',
      filename: 'Arkadip_Som_Tech_Resume.pdf',
      fileUrl: '/resumes/accenture-intern-resume.pdf',
    },
    {
      title: 'Business Strategy & Consulting',
      description: 'Corporate strategy, operations, and business transformation.',
      filename: 'Arkadip_Som_Consulting_Resume.pdf',
      fileUrl: '/resumes/resume-consultancy-v3.pdf.pdf',
    },
    {
      title: 'Core Civil Engineering',
      description: 'Infrastructure projects, management, and civil engineering principles.',
      filename: 'Arkadip_Som_Civil_Resume.pdf',
      fileUrl: '/resumes/resume-nhai-v2.pdf',
    },
  ];

  const handleDownload = (fileUrl, filename) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsResumeModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-neutral-800 dark:text-neutral-200">
      
      {/* Intro Header & Avatar Inline */}
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 dark:text-neutral-100">
            Arkadip Som
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal">
            Radical Optimist / Absolute Learner
          </p>
        </div>

        <img 
          src="/avatar.jpg" 
          alt={profileData.name} 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover grayscale contrast-105 border border-neutral-200 dark:border-neutral-800"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Narrative Paragraph Bio */}
      <div className="space-y-6 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
        <p>
          Hi, I’m <span className="text-neutral-900 dark:text-neutral-100 font-medium">{profileData.name}</span>, a Civil Engineering undergraduate in my pre-final year at{' '}
          <a 
            href="https://www.iiests.ac.in/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors font-medium"
          >
            IIEST Shibpur
          </a>. I focus on engineering meaningful, scalable, and feasible solutions across technology, management consulting, business analytics, and strategy operations.
        </p>

        <p>
          Academically, I maintain a <span className="text-neutral-900 dark:text-neutral-100 font-medium">{profileData.education.metrics.cgpa} CGPA (till 4th semester)</span> in B.Tech Civil Engineering, having previously secured <span className="text-neutral-900 dark:text-neutral-100 font-medium">{profileData.education.metrics.higher_secondary_school}</span> in 12th grade and <span className="text-neutral-900 dark:text-neutral-100 font-medium">{profileData.education.metrics.secondary_school}</span> in 10th grade.
        </p>

        <p>
          My core work revolves around building scalable, responsive, and user-centric web applications using modern web frameworks while integrating intelligent data models and predictive AI to solve complex, real-world problems. I leverage software engineering and data analytics to optimize sustainable engineering solutions, continuously preparing for future leadership and consulting roles at the intersection of business and technology.
        </p>
      </div>

      {/* Social & Resume Links Inline Bar */}
      <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal">
        <a 
          href="https://linkedin.com/in/arkadip-som" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1 leading-none"
        >
          linkedin <ArrowUpRight size={14} />
        </a>

        <a 
          href="https://github.com/arkadipsom-code" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-1 leading-none"
        >
          github <ArrowUpRight size={14} />
        </a>

        <a 
          href="mailto:arkadipsom@gmail.com" 
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors leading-none"
        >
          email
        </a>

        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer inline-flex items-center gap-1 leading-none"
        >
          resume <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Live Location & Local Time Display */}
      <div className="pt-4 text-sm sm:text-base text-neutral-900 dark:text-neutral-100 font-normal">
        Kolkata, India <span className="mx-1.5 text-neutral-400">•</span> {currentTime || '00:00 XX IST'}
      </div>

      {/* React Portal Modal - Rendered at document.body level */}
      {isResumeModalOpen && createPortal(
        <div 
          onClick={() => setIsResumeModalOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4 transition-all"
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Select Resume Variant
              </span>
              <button 
                onClick={() => setIsResumeModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {resumeOptions.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleDownload(option.fileUrl, option.filename)}
                  className="p-3.5 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 rounded-lg transition-all cursor-pointer group flex items-start gap-3"
                >
                  <FileText className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 mt-0.5 flex-shrink-0 transition-colors" size={16} />
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-400">
                      {option.title}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                      {option.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}