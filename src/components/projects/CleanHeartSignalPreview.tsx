import React from 'react';
import { HEART_CLASSES } from '../../data/projects';

interface CleanHeartSignalPreviewProps {
  selectedClass: string;
  setSelectedClass: (code: string) => void;
}

export const CleanHeartSignalPreview: React.FC<CleanHeartSignalPreviewProps> = ({
  selectedClass,
  setSelectedClass,
}) => {
  const active = HEART_CLASSES.find((c) => c.code === selectedClass) || HEART_CLASSES[0];

  return (
    <div className="bg-[#F6FBF8] border border-emerald-200/80 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
              8-Channel Log-Mel Input Preview
            </span>
            <h5 className="text-sm font-semibold text-emerald-950">{active.name}</h5>
          </div>
          <span className="text-[11px] font-mono bg-white border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded-md">
            Shape: 8 × (64, 626, 1)
          </span>
        </div>

        {/* Class Selector Buttons */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {HEART_CLASSES.map((cls) => (
            <button
              key={cls.code}
              onClick={() => setSelectedClass(cls.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedClass === cls.code
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-emerald-900 border border-emerald-200/70 hover:bg-emerald-50'
              }`}
            >
              {cls.code}
            </button>
          ))}
        </div>

        {/* Clean Acoustic Envelope Bar Visualization */}
        <div className="h-36 bg-white rounded-xl border border-emerald-100 p-4 flex items-center justify-between gap-1.5 my-2">
          {active.bars.map((val, idx) => (
            <div key={idx} className="flex-1 h-full flex flex-col justify-center items-center">
              <div
                className="w-full rounded-full transition-all duration-300"
                style={{
                  height: `${val}%`,
                  backgroundColor: val > 60 ? '#059669' : val > 30 ? '#34D399' : '#A7F3D0',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-emerald-200/70 rounded-xl p-3 mt-1">
        <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-semibold mb-0.5">
          Acoustic Envelope Profile (4 Auscultation Sites × Sitting & Supine):
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{active.pattern}</p>
      </div>
    </div>
  );
};
