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
    <div className="bg-zinc-900/90 border border-yellow-500/25 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
              8-Channel Log-Mel Input Preview
            </span>
            <h5 className="text-sm font-semibold text-white">{active.name}</h5>
          </div>
          <span className="text-[11px] font-mono bg-black border border-yellow-500/30 text-yellow-300 px-2.5 py-1 rounded-md">
            Shape: 8 × (64, 626, 1)
          </span>
        </div>

        {/* Class Selector Buttons */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {HEART_CLASSES.map((cls) => (
            <button
              key={cls.code}
              onClick={() => setSelectedClass(cls.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                selectedClass === cls.code
                  ? 'bg-yellow-400 text-black shadow-sm'
                  : 'bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700'
              }`}
            >
              {cls.code}
            </button>
          ))}
        </div>

        {/* Acoustic Envelope Bar Visualization in Glowing Yellow/Gold */}
        <div className="h-36 bg-black rounded-xl border border-yellow-500/20 p-4 flex items-center justify-between gap-1.5 my-2">
          {active.bars.map((val, idx) => (
            <div key={idx} className="flex-1 h-full flex flex-col justify-center items-center">
              <div
                className="w-full rounded-full transition-all duration-300"
                style={{
                  height: `${val}%`,
                  backgroundColor: val > 60 ? '#FACC15' : val > 30 ? '#EAB308' : '#713F12',
                  boxShadow: val > 60 ? '0 0 8px rgba(250, 204, 21, 0.4)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-950 border border-yellow-500/20 rounded-xl p-3 mt-1">
        <div className="text-[10px] font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-0.5">
          Acoustic Envelope Profile (4 Auscultation Sites × Sitting & Supine):
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed">{active.pattern}</p>
      </div>
    </div>
  );
};
