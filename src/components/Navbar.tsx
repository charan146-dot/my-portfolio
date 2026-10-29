import React from 'react';
import { Sliders } from 'lucide-react';

interface NavbarProps {
  scrollTo: (id: string) => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollTo, onOpenConfig }) => {
  return (
    <header className="sticky top-0 z-40 bg-yellow-400 text-black border-b border-yellow-500 shadow-md shadow-yellow-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Navbar Brand: CHARAN GIRI */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-xl bg-black text-yellow-400 flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-all">
            CG
          </div>
          <div>
            <span className="font-mono text-sm font-extrabold tracking-wider text-black block leading-none">
              CHARAN GIRI
            </span>
            <span className="text-[10px] font-mono text-zinc-900 font-semibold">
              Full-Stack & AI/ML
            </span>
          </div>
        </button>

        {/* Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-zinc-900">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-black hover:underline decoration-black/50 underline-offset-4 transition-colors cursor-pointer"
          >
            About & Goals
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-black hover:underline decoration-black/50 underline-offset-4 transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-black hover:underline decoration-black/50 underline-offset-4 transition-colors cursor-pointer"
          >
            Research Projects
          </button>
          <button
            onClick={() => scrollTo('dsa')}
            className="hover:text-black hover:underline decoration-black/50 underline-offset-4 transition-colors cursor-pointer"
          >
            DSA & LeetCode
          </button>
          <button
            onClick={() => scrollTo('education')}
            className="hover:text-black hover:underline decoration-black/50 underline-offset-4 transition-colors cursor-pointer"
          >
            Education
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo('projects')}
            className="bg-black hover:bg-zinc-900 text-yellow-400 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Explore My Work
          </button>
          <button
            onClick={onOpenConfig}
            title="Edit Profile Metadata or Photo"
            className="p-2 rounded-xl border-2 border-black/20 text-black hover:bg-black/10 transition-colors cursor-pointer"
            aria-label="Customize Profile Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
