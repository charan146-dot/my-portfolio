import React from 'react';
import { SKILL_GROUPS } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
            02 · Technical Skills
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
            Technologies & Learning Areas
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="bg-emerald-100 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-md">
            ● Confident / Core Focus
          </span>
          <span className="bg-white text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md">
            ○ Learning / Research Direction
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={group.id}
              className={`bg-white border border-emerald-100 rounded-2xl p-6 shadow-xs ${
                idx === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-emerald-50">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-emerald-950">{group.title}</h3>
                  <p className="text-xs text-slate-500">{group.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const isPrimary =
                    skill.tag.includes('Confident') ||
                    skill.tag.includes('Core') ||
                    skill.tag.includes('Practiced');
                  return (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 border transition-all ${
                        isPrimary
                          ? 'bg-[#F3FAF6] border-emerald-200 text-emerald-950 font-medium'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isPrimary
                            ? 'bg-emerald-600/10 text-emerald-800'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {skill.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
