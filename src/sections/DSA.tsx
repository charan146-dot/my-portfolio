import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { DSA_TOPICS, DSA_APPROACH_STEPS } from '../data/dsa';

interface DSAProps {
  leetcodeCount: string;
}

export const DSA: React.FC<DSAProps> = ({ leetcodeCount }) => {
  return (
    <section id="dsa" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-zinc-950/90 border border-yellow-500/25 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
              04 · Coding Practice & Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Data Structures & Algorithms
            </h2>
          </div>

          <a
            href="https://leetcode.com/cherrysmm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md self-start md:self-auto"
          >
            <Terminal className="w-4 h-4" />
            <span>LeetCode Profile (@cherrysmm)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
          {/* Left 5 Cols: Milestone Box */}
          <div className="lg:col-span-5 bg-zinc-900/80 border border-yellow-500/25 rounded-2xl p-5">
            <div className="text-xs font-mono text-yellow-400 uppercase font-semibold mb-1">
              Coding Interview Preparation
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(250,204,21,0.2)]">
              {leetcodeCount}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Practicing algorithmic problem-solving primarily in{' '}
              <span className="font-semibold text-yellow-400">Java</span>. (~220 solved is a
              previously reported historical figure—visit{' '}
              <a
                href="https://leetcode.com/cherrysmm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline font-medium hover:text-yellow-300"
              >
                leetcode.com/cherrysmm
              </a>{' '}
              for live statistics.)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {DSA_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="text-[11px] font-mono bg-black border border-yellow-500/30 text-yellow-200 px-2.5 py-1 rounded-md"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Right 7 Cols: 4-Step Problem Solving Approach */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {DSA_APPROACH_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-zinc-900/60 border border-zinc-800 hover:border-yellow-500/40 rounded-2xl p-4 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-yellow-400 mb-1">
                  {item.step}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
