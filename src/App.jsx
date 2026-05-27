import React, { useState } from 'react';

// Shell & Structural Components
import Desktop from './components/core/Desktop';
import TopBar from './components/core/TopBar';
import FolderGrid from './components/folders/FolderGrid';
import Dock from './components/core/Dock';
import Window from './components/core/Window';
import DashboardWidgets from './components/core/DashboardWidgets';

// Application Module Content Panels
import ProfileView from './views/ProfileView';
import ProjectView from './views/ProjectView'; 
import SkillsView from './views/SkillsView';
import ContactView from './views/ContactView';
import ExperiencesView from './views/ExperiencesView';

export default function App() {
  // --- Core State Machine Drivers ---
  const [activeWindow, setActiveWindow] = useState(null);
  const [theme, setTheme] = useState('charcoal'); // 'charcoal' | 'navy' | 'emerald'
  const [foldersVisible, setFoldersVisible] = useState(true);
  const [widgetsVisible, setWidgetsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null); // null | 'finder' | 'view' | 'help'

  // --- Dynamic Window Router Switching Logic ---
  const renderWindowContent = () => {
    switch (activeWindow) {
      case 'profile': 
        return <ProfileView />;
      case 'projects': 
        return <ProjectView />; 
      case 'skills': 
        return <SkillsView />;
      case 'contact': 
        return <ContactView />;
      case 'experiences': 
        return <ExperiencesView />;
      default: 
        return <div className="p-4 font-mono text-xs text-neutral-400">Directory module initialization pending...</div>;
    }
  };

  // --- TopBar Dropdown Actions Handler Engine ---
  const handleMenuAction = (actionType) => {
    switch(actionType) {
      case 'download_cv':
        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'Arkadip_Som_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
        break;
      case 'open_all':
        setActiveWindow('profile');
        break;
      case 'restart':
        setActiveWindow(null);
        setTheme('charcoal');
        setFoldersVisible(true);
        setWidgetsVisible(true);
        break;
      case 'toggle_grid':
        setFoldersVisible(prev => !prev);
        break;
      case 'toggle_widgets':
        setWidgetsVisible(prev => !prev); 
        break;
      case 'theme_charcoal':
        setTheme('charcoal');
        break;
      case 'theme_navy':
        setTheme('navy');
        break;
      case 'theme_emerald':
        setTheme('emerald');
        break;
      default:
        break;
    }
    setActiveMenu(null);
  };

  return (
    <Desktop theme={theme}>
      {/* Persistent global header with context triggers */}
      <TopBar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        handleMenuAction={handleMenuAction}
        theme={theme}
      />

      {/* Global Backdrop Click Dismissal Engine for Dropdowns */}
      {activeMenu && (
        <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setActiveMenu(null)} />
      )}

      {/* 1. Desktop Folders Grid Layout Layer (Conditional Visibility) */}
      {foldersVisible && <FolderGrid setActiveWindow={setActiveWindow} />}

      {/* 2. Embedded Right-Side Widget Center & Terminal Pipeline */}
      {widgetsVisible && <DashboardWidgets setActiveWindow={setActiveWindow} />}

      {/* 3. Main Popup Window Viewport Container */}
      {activeWindow && (
        <Window 
          title={activeWindow} 
          onClose={() => setActiveWindow(null)}
        >
          {renderWindowContent()}
        </Window>
      )}

      {/* 4. Bottom System Task Launcher App Dock */}
      <Dock setActiveWindow={setActiveWindow} />
    </Desktop>
  );
}