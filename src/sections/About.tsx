import React from 'react';
import { UserCheck, CheckCircle2 } from 'lucide-react';
import { CAREER_ROLES, CAREER_GOALS } from '../data/career';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-zinc-950/80 border border-yellow-500/20 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/40">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
            01 · Positioning & Ambitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            An aspiring full-stack developer focused on backend engineering, intelligent
            systems, and AI-driven applications.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-2 leading-relaxed">
            My goal is to build a strong foundation in practical software engineering—specifically
            Java & Spring Boot backend architecture and modern full-stack development—while
            exploring applied research in deep learning, Transformers, and agentic AI.
          </p>
        </div>

        {/* 4 Target Career Paths */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
            Target Career Paths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CAREER_ROLES.map((item) => (
              <div
                key={item.role}
                className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4 hover:border-yellow-400/60 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-2.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{item.role}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300">
          {CAREER_GOALS.map((goal) => (
            <div key={goal} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
