import React from 'react';
import profileData from '../data/profile.json';
import { ArrowDownToLine } from 'lucide-react';

export default function ProfileView() {
  const handleDownload = () => {
    const resumeUrl = '/resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arkadip_Som_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      
      <div className="flex flex-col sm:flex-row gap-8 md:gap-12 justify-between items-start">
        
        
        <div className="w-full aspect-square sm:w-48 sm:h-48 sm:order-last flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm">
          <img 
            src="/avatar.jpg" 
            alt={profileData.name} 
            className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
            onError={(e) => { e.target.style.opacity = '0.4'; }}
          />
        </div>

        {/* Bio Narrative Segment */}
        <div className="space-y-1 flex-1 text-lg tracking-wide leading-relaxed">
          <p>Hi, this is <span className="font-bold text-black">{profileData.name}</span> here.</p>
          <p>
            Civil Engineering Undergrad | Pre-Final Year at{' '}
            <a href="https://www.iiests.ac.in/en" className="font-bold text-black underline" target="_blank" rel="noopener noreferrer">IIEST Shibpur</a>
          </p>

          <p>
            Focused on engineering meaningful, scalable and feasible solutions for real-world problems.
            <br />
            Interested Domains: Technology, Management Consulting, Business Analytics, Strategy and Operations.
          </p>

          {/* <p className="text-sm text-gray-700 font-medium tracking-wide">
            Location: {profileData.location}
          </p> */}
        </div>

      </div>

      <hr className="border-gray-100" />

      {/* Education Scores */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Education & Standings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8">
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">B.Tech CGPA</div>
            <div className="text-2xl font-extrabold text-black mt-1">{profileData.education.metrics.cgpa}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">10th Grade</div>
            <div className="text-2xl font-extrabold text-black mt-1">{profileData.education.metrics.secondary_school}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-bold tracking-wider uppercase">12th Grade</div>
            <div className="text-2xl font-extrabold text-black mt-1">{profileData.education.metrics.higher_secondary_school}</div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Core Focus</h3>
        <ul className="space-y-3">
          {profileData.objectives.map((obj, idx) => (
            <li key={idx} className="text-lg text-gray-700 flex items-start gap-3 leading-relaxed">
              <span className="text-gray-400 select-none mt-1.5 text-sm">•</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-100" />

      {/* Resume Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
        <div className="space-y-1">
          <h4 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Curriculum Vitae</h4>
          <p className="text-lg text-gray-500">Download compiled technical credentials and history metrics.</p>
        </div>
        
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 px-5 h-10 bg-gray-900 text-white text-xs font-bold tracking-widest rounded hover:bg-black active:scale-[0.98] transition-all cursor-pointer shadow-sm w-full sm:w-auto uppercase"
        >
          <ArrowDownToLine size={14} /> Download Resume
        </button>
      </div>

    </div>
  );
}