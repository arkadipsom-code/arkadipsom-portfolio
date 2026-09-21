import React, { useState } from 'react';
import profileData from '../data/profile.json';
import { ArrowDownToLine, Mail, FileText, X } from 'lucide-react';

// Custom Brand Icon SVGs to bypass lucide-react brand icon export issues
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ProfileView() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Multi-Domain Resume Variants
  const resumeOptions = [
    {
      title: 'Technical',
      description: 'Focused on software engineering, full-stack web development, and data science projects.',
      filename: 'Arkadip_Som_Tech_Resume.pdf',
      fileUrl: '/resumes/accenture-intern-resume.pdf',
    },
    {
      title: 'Business Strategy & Consulting',
      description: 'Focused on corporate strategy, operations, and business transformation.',
      filename: 'Arkadip_Som_Consulting_Resume.pdf',
      fileUrl: '/resumes/resume-consultancy-v3.pdf.pdf',
    },
    {
      title: 'Core Civil Engineering',
      description: 'Focused on infrastructure projects, project management, and fundamental civil engineering principles.',
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
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      <div className="flex flex-col sm:flex-row gap-8 md:gap-12 justify-between items-start">
        
        <div className="w-full aspect-square sm:w-48 sm:h-48 sm:order-last flex-shrink-0 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800 shadow-sm">
          <img 
            src="/avatar.jpg" 
            alt={profileData.name} 
            className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
            onError={(e) => { e.target.style.opacity = '0.4'; }}
          />
        </div>

        {/* Bio Narrative Segment */}
        <div className="space-y-4 flex-1 text-lg tracking-wide leading-relaxed">
          <div className="space-y-1">
            <p>Hi, this is <span className="font-bold text-black dark:text-white">{profileData.name}</span> here.</p>
            <p>
              Civil Engineering Undergrad | Pre-Final Year at{' '}
              <a href="https://www.iiests.ac.in/en" className="font-bold text-black dark:text-white underline" target="_blank" rel="noopener noreferrer">IIEST Shibpur</a>
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Focused on engineering meaningful, scalable and feasible solutions for real-world problems.
              <br />
              Interested Domains: Technology, Management Consulting, Business Analytics, Strategy and Operations.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="https://github.com/arkadipsom-code" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/arkadip-som" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="mailto:arkadipsom.official@gmail.com" 
              aria-label="Email"
              className="p-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

      </div>

      <hr className="border-gray-100 dark:border-gray-800" />

      {/* Education Scores */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">Education & Standings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8">
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">B.Tech CGPA</div>
            <div className="text-2xl font-extrabold text-black dark:text-white mt-1">{profileData.education.metrics.cgpa}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">12th Grade</div>
            <div className="text-2xl font-extrabold text-black dark:text-white mt-1">{profileData.education.metrics.higher_secondary_school}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">10th Grade</div>
            <div className="text-2xl font-extrabold text-black dark:text-white mt-1">{profileData.education.metrics.secondary_school}</div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">Core Focus</h3>
        <ul className="space-y-3">
          {profileData.objectives.map((obj, idx) => (
            <li key={idx} className="text-lg text-gray-700 dark:text-gray-300 flex items-start gap-3 leading-relaxed">
              <span className="text-gray-400 select-none mt-1.5 text-sm">•</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-100 dark:border-gray-800" />

      {/* Curriculum Vitae Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
        <div className="space-y-1">
          <h4 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">Curriculum Vitae</h4>
          <p className="text-lg text-gray-500">Download domain-specific resumes here.</p>
        </div>
        
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 h-10 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold tracking-widest rounded hover:bg-black dark:hover:bg-gray-100 active:scale-[0.98] transition-all cursor-pointer shadow-sm w-full sm:w-auto uppercase"
        >
          <ArrowDownToLine size={14} /> Download Resume
        </button>
      </div>

      {/* Multi-Domain Resume Selector Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold uppercase tracking-wider text-black dark:text-white">Choose Resume Variant</h3>
              <button 
                onClick={() => setIsResumeModalOpen(false)}
                className="text-gray-400 hover:text-black dark:hover:text-white p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {resumeOptions.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleDownload(option.fileUrl, option.filename)}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-black dark:hover:border-white transition-all cursor-pointer group flex items-start gap-4"
                >
                  <FileText className="text-gray-400 group-hover:text-black dark:group-hover:text-white mt-1 flex-shrink-0" size={20} />
                  <div className="space-y-1">
                    <div className="font-bold text-black dark:text-white text-sm group-hover:underline">{option.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{option.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}