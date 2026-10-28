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
      <div className="bg-white border border-emerald-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
                05 · Education
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
                {EDUCATION_DATA.institution}
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono bg-[#F3FAF6] border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            {EDUCATION_DATA.location}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#F6FBF8] border border-emerald-200/70 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-emerald-800 uppercase">Degree Program</div>
            <div className="text-sm font-bold text-emerald-950 mt-1">
              {EDUCATION_DATA.degree}
            </div>
          </div>
          <div className="bg-[#F6FBF8] border border-emerald-200/70 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-emerald-800 uppercase">Academic Record</div>
            <div className="text-sm font-bold text-emerald-950 mt-1">{profileConfig.cgpa}</div>
          </div>
          <div className="bg-[#F6FBF8] border border-emerald-200/70 rounded-2xl p-4">
            <div className="text-[11px] font-mono text-emerald-800 uppercase">Status</div>
            <div className="text-sm font-bold text-emerald-950 mt-1">
              {profileConfig.graduationYear}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500">
          <div className="flex flex-wrap gap-2">
            {EDUCATION_DATA.coursework.map((course) => (
              <span
                key={course}
                className="bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg font-mono"
              >
                {course}
              </span>
            ))}
          </div>
          <button
            onClick={onOpenConfig}
            className="text-emerald-700 hover:underline font-medium flex items-center gap-1 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Edit Academic / Résumé Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};
