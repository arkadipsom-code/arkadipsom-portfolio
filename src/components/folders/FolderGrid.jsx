import React from 'react';
import FolderIcon from './FolderIcon';
import { User, Code2, ShieldAlert, Mail, Briefcase } from 'lucide-react';

export default function FolderGrid({ setActiveWindow }) {
  const folders = [
    { id: 'profile', title: 'Profile', icon: User },
    { id: 'projects', title: 'Projects', icon: Code2 },
    { id: 'skills', title: 'Skills', icon: ShieldAlert },
    { id: 'experiences', title: "Experiences", icon: Briefcase},
    { id: 'contact', title: 'Contact', icon: Mail },
  ];

  return (
    <div className="absolute top-4 left-6 flex flex-col sm:flex-wrap sm:max-h-[70vh] gap-6 z-10 pointer-events-auto">
      {folders.map((folder) => (
        <FolderIcon
          key={folder.id}
          id={folder.id}
          title={folder.title}
          icon={folder.icon}
          onClick={() => setActiveWindow(folder.id)}
        />
      ))}
    </div>
  );
}