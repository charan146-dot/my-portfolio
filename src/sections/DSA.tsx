import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { DSA_TOPICS, DSA_APPROACH_STEPS } from '../data/dsa';

interface DSAProps {
  leetcodeCount: string;
}

export const DSA: React.FC<DSAProps> = ({ leetcodeCount }) => {
  return (
    <section id="dsa" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-white border border-emerald-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-100">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
              04 · Coding Practice & Problem Solving
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
              Data Structures & Algorithms
            </h2>
          </div>

          <a
            href="https://leetcode.com/cherrysmm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-xs self-start md:self-auto"
          >
            <Terminal className="w-4 h-4" />
            <span>LeetCode Profile (@cherrysmm)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
          {/* Left 5 Cols: Historical Milestone Box */}
          <div className="lg:col-span-5 bg-[#F6FBF8] border border-emerald-200/80 rounded-2xl p-5">
            <div className="text-xs font-mono text-emerald-800 uppercase font-semibold mb-1">
              Coding Interview Preparation
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
              {leetcodeCount}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Practicing algorithmic problem-solving primarily in{' '}
              <span className="font-semibold text-emerald-950">Java</span>. (~220 solved is a
              previously reported historical figure—visit{' '}
              <a
                href="https://leetcode.com/cherrysmm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline font-medium"
              >
                leetcode.com/cherrysmm
              </a>{' '}
              for live statistics.)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {DSA_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="text-[11px] font-mono bg-white border border-emerald-200 text-emerald-900 px-2.5 py-1 rounded-md"
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
                className="bg-[#FAFDFB] border border-emerald-100 rounded-2xl p-4"
              >
                <div className="text-xs font-mono font-bold text-emerald-800 mb-1">
                  {item.step}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
