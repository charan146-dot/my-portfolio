import React from 'react';
import { SKILL_GROUPS } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
            02 · Technical Skills
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Technologies & Learning Areas
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="bg-yellow-400/15 text-yellow-300 border border-yellow-500/40 px-2.5 py-1 rounded-md">
            ● Confident / Core Focus
          </span>
          <span className="bg-zinc-900 text-zinc-400 border border-zinc-700 px-2.5 py-1 rounded-md">
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
              className={`bg-zinc-950/80 border border-yellow-500/20 rounded-2xl p-6 shadow-lg shadow-black/40 hover:border-yellow-500/40 transition-colors ${
                idx === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{group.title}</h3>
                  <p className="text-xs text-zinc-400">{group.subtitle}</p>
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
                          ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200 font-medium hover:border-yellow-400'
                          : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isPrimary
                            ? 'bg-yellow-400/20 text-yellow-300'
                            : 'bg-zinc-800 text-zinc-400'
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
