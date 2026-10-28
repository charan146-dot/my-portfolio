import React from 'react';
import { UserCheck, CheckCircle2 } from 'lucide-react';
import { CAREER_ROLES, CAREER_GOALS } from '../data/career';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
            01 · Positioning & Ambitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
            An aspiring full-stack developer focused on backend engineering, intelligent
            systems, and AI-driven applications.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            My goal is to build a strong foundation in practical software engineering—specifically
            Java & Spring Boot backend architecture and modern full-stack development—while
            exploring applied research in deep learning, Transformers, and agentic AI.
          </p>
        </div>

        {/* 4 Target Career Paths */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
            Target Career Paths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CAREER_ROLES.map((item) => (
              <div
                key={item.role}
                className="bg-[#F6FBF8] border border-emerald-200/70 rounded-2xl p-4 hover:border-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-2.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-emerald-950 mb-1">{item.role}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-emerald-100 text-xs sm:text-sm text-slate-700">
          {CAREER_GOALS.map((goal) => (
            <div key={goal} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
