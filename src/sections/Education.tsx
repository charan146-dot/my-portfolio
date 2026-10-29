import React from 'react';
import { GraduationCap, Sliders } from 'lucide-react';
import { EDUCATION_DATA } from '../data/education';
import { ProfileConfig } from '../types';

interface EducationProps {
  profileConfig: ProfileConfig;
  onOpenConfig: () => void;
}

export const Education: React.FC<EducationProps> = ({ profileConfig, onOpenConfig }) => {
  return (
    <section id="education" className="py-12 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-zinc-950/90 border border-yellow-500/25 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-md font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
                05 · Education
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {EDUCATION_DATA.institution}
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono bg-zinc-900 border border-yellow-500/30 text-yellow-300 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            {EDUCATION_DATA.location}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-yellow-400 uppercase">Degree Program</div>
            <div className="text-sm font-bold text-white mt-1">
              {EDUCATION_DATA.degree}
            </div>
          </div>
          <div className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-yellow-400 uppercase">Academic Record</div>
            <div className="text-sm font-bold text-white mt-1">{profileConfig.cgpa}</div>
          </div>
          <div className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-yellow-400 uppercase">Status</div>
            <div className="text-sm font-bold text-white mt-1">
              {profileConfig.graduationYear}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-zinc-400">
          <div className="flex flex-wrap gap-2">
            {EDUCATION_DATA.coursework.map((course) => (
              <span
                key={course}
                className="bg-black border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg font-mono hover:border-yellow-500/40 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
          <button
            onClick={onOpenConfig}
            className="text-yellow-400 hover:text-yellow-300 hover:underline font-medium flex items-center gap-1 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Edit Academic / Résumé Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};
