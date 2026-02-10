import React from 'react';
import { View } from '../types';
import { Dumbbell, Utensils, MessageSquare, Activity, HeartPulse } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  setView: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="p-4 bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">
            TOBAIYEZ'S: UNLEASHING 2026
          </h1>
          <span className="text-xs text-slate-500 font-mono hidden sm:block">MUSCULAR MASS PROGRAM</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-24 max-w-5xl mx-auto w-full">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-2 z-50">
        <div className="max-w-5xl mx-auto flex justify-around items-center">
          <NavButton 
            active={currentView === View.DASHBOARD} 
            onClick={() => setView(View.DASHBOARD)} 
            icon={<Activity size={20} />} 
            label="Dash" 
          />
          <NavButton 
            active={currentView === View.WORKOUT} 
            onClick={() => setView(View.WORKOUT)} 
            icon={<Dumbbell size={20} />} 
            label="Train" 
          />
          <NavButton 
            active={currentView === View.NUTRITION} 
            onClick={() => setView(View.NUTRITION)} 
            icon={<Utensils size={20} />} 
            label="Fuel" 
          />
          <NavButton 
             active={currentView === View.RECOVERY}
             onClick={() => setView(View.RECOVERY)}
             icon={<HeartPulse size={20} />}
             label="Recover"
          />
          <NavButton 
            active={currentView === View.ADVISOR} 
            onClick={() => setView(View.ADVISOR)} 
            icon={<MessageSquare size={20} />} 
            label="Coach" 
          />
        </div>
      </nav>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-200 ${
      active ? 'bg-slate-800 shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800/50'
    }`}
  >
    {/* Icon: Blue/Luminous when active, Light Gray when inactive */}
    <div className={`${active ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'text-slate-300'}`}>
        {icon}
    </div>
    
    {/* Label: Luminous White */}
    <span className={`text-[10px] mt-1 font-medium transition-all ${
        active 
        ? 'text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' 
        : 'text-slate-100'
    }`}>
        {label}
    </span>
  </button>
);

export default Layout;