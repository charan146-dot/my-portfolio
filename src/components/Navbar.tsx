import React from 'react';
import { Sliders } from 'lucide-react';

interface NavbarProps {
  scrollTo: (id: string) => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollTo, onOpenConfig }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Navbar Brand: CHARAN GIRI */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm shadow-emerald-600/20 group-hover:bg-emerald-700 transition-colors">
            CG
          </div>
          <div>
            <span className="font-mono text-sm font-bold tracking-wider text-emerald-950 block leading-none">
              CHARAN GIRI
            </span>
            <span className="text-[10px] font-mono text-emerald-700">
              Full-Stack & AI/ML
            </span>
          </div>
        </button>

        {/* Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-emerald-700 transition-colors cursor-pointer"
          >
            About & Goals
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-emerald-700 transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-emerald-700 transition-colors cursor-pointer"
          >
            Research Projects
          </button>
          <button
            onClick={() => scrollTo('dsa')}
            className="hover:text-emerald-700 transition-colors cursor-pointer"
          >
            DSA & LeetCode
          </button>
          <button
            onClick={() => scrollTo('education')}
            className="hover:text-emerald-700 transition-colors cursor-pointer"
          >
            Education
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo('projects')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-sm shadow-emerald-600/15 cursor-pointer"
          >
            Explore My Work
          </button>
          <button
            onClick={onOpenConfig}
            title="Edit Profile Metadata or Photo"
            className="p-2 rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition-colors cursor-pointer"
            aria-label="Customize Profile Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
