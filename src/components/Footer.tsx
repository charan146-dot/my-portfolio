import React from 'react';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
  return (
    <footer className="bg-zinc-950 border-t border-yellow-500/30 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-mono font-bold text-xs">
            CG
          </div>
          <span className="font-mono font-bold text-yellow-400">CHARAN GIRI</span>
          <span>·</span>
          <span>Charan Tej · B.Tech CSE @ KMIT, Hyderabad</span>
        </div>
        <div className="flex items-center gap-4 font-medium text-yellow-400">
          <button onClick={() => scrollTo('hero')} className="hover:text-yellow-300 hover:underline cursor-pointer">
            Top
          </button>
          <button onClick={() => scrollTo('projects')} className="hover:text-yellow-300 hover:underline cursor-pointer">
            Projects
          </button>
          <a
            href="https://leetcode.com/cherrysmm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 hover:underline"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};
