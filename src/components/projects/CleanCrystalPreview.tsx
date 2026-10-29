import React from 'react';

interface CleanCrystalPreviewProps {
  mode: 'perovskite' | 'tetragonal';
  setMode: (mode: 'perovskite' | 'tetragonal') => void;
}

export const CleanCrystalPreview: React.FC<CleanCrystalPreviewProps> = ({ mode, setMode }) => {
  const isPerovskite = mode === 'perovskite';

  return (
    <div className="bg-zinc-900/90 border border-yellow-500/25 rounded-2xl p-5 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
            Interactive Structure Preview
          </span>
          <h5 className="text-sm font-semibold text-white">
            {isPerovskite ? 'SrTiO₃ Cubic Perovskite (Pm-3m)' : 'Tetragonal Unit Cell (I4/mmm)'}
          </h5>
        </div>
        <div className="flex items-center gap-1.5 bg-black p-1 rounded-lg border border-yellow-500/30">
          <button
            onClick={() => setMode('perovskite')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              isPerovskite
                ? 'bg-yellow-400 text-black shadow-sm font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            Cubic (Pm-3m)
          </button>
          <button
            onClick={() => setMode('tetragonal')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              !isPerovskite
                ? 'bg-yellow-400 text-black shadow-sm font-bold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            Tetragonal
          </button>
        </div>
      </div>

      {/* Vector Crystal Diagram in High-Contrast Yellow/Gold on Black */}
      <div className="relative h-52 bg-black rounded-xl border border-yellow-500/20 flex items-center justify-center overflow-hidden my-2">
        <svg viewBox="0 0 280 180" className="w-full h-full max-w-[280px]">
          {/* Subtle background dark grid */}
          <defs>
            <pattern id="lightGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#1f1f23"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="280" height="180" fill="url(#lightGrid)" />

          {/* Back Cube Face */}
          <polygon
            points={
              isPerovskite
                ? '95,35 195,35 195,125 95,125'
                : '100,22 190,22 190,132 100,132'
            }
            fill="none"
            stroke="#854D0E"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Connecting Depth Edges */}
          <line
            x1={isPerovskite ? 95 : 100}
            y1={isPerovskite ? 35 : 22}
            x2={isPerovskite ? 65 : 70}
            y2={isPerovskite ? 60 : 48}
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
          <line
            x1={isPerovskite ? 195 : 190}
            y1={isPerovskite ? 35 : 22}
            x2={isPerovskite ? 165 : 160}
            y2={isPerovskite ? 60 : 48}
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
          <line
            x1={isPerovskite ? 95 : 100}
            y1={isPerovskite ? 125 : 132}
            x2={isPerovskite ? 65 : 70}
            y2={isPerovskite ? 150 : 158}
            stroke="#CA8A04"
            strokeWidth="1.5"
          />
          <line
            x1={isPerovskite ? 195 : 190}
            y1={isPerovskite ? 125 : 132}
            x2={isPerovskite ? 165 : 160}
            y2={isPerovskite ? 150 : 158}
            stroke="#CA8A04"
            strokeWidth="1.5"
          />

          {/* Octahedral Coordination Cage (O2- Face Centers) */}
          <polygon
            points="130,47 180,92 130,137 80,92"
            fill="#FACC15"
            fillOpacity="0.15"
            stroke="#FACC15"
            strokeWidth="1.5"
          />
          <line x1="130" y1="47" x2="130" y2="137" stroke="#EAB308" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="80" y1="92" x2="180" y2="92" stroke="#EAB308" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Front Cube Face */}
          <polygon
            points={
              isPerovskite
                ? '65,60 165,60 165,150 65,150'
                : '70,48 160,48 160,158 70,158'
            }
            fill="none"
            stroke="#FACC15"
            strokeWidth="1.8"
          />

          {/* Corner A-Site Atoms */}
          {(isPerovskite
            ? [
                [95, 35],
                [195, 35],
                [95, 125],
                [195, 125],
                [65, 60],
                [165, 60],
                [65, 150],
                [165, 150]
              ]
            : [
                [100, 22],
                [190, 22],
                [100, 132],
                [190, 132],
                [70, 48],
                [160, 48],
                [70, 158],
                [160, 158]
              ]
          ).map(([cx, cy], idx) => (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r="5.5"
              fill="#EAB308"
              stroke="#000000"
              strokeWidth="1.5"
            />
          ))}

          {/* Face-Center Oxygen Atoms */}
          {[
            [130, 47],
            [180, 92],
            [130, 137],
            [80, 92]
          ].map(([cx, cy], idx) => (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r="5"
              fill="#FDE047"
              stroke="#713F12"
              strokeWidth="1.2"
            />
          ))}

          {/* Center B-Site Cation (Ti4+) */}
          <circle
            cx="130"
            cy="92"
            r="8.5"
            fill="#FFFFFF"
            stroke="#FACC15"
            strokeWidth="2.5"
          />
        </svg>

        <div className="absolute bottom-2 right-2.5 bg-black/90 border border-yellow-500/40 px-2.5 py-1 rounded-md text-[10px] font-mono text-yellow-300">
          {isPerovskite ? 'a = b = c = 3.905 Å' : 'a = b = 4.12 Å, c = 5.48 Å'}
        </div>
      </div>

      {/* Robocrystallographer Generated Text Snippet */}
      <div className="bg-zinc-950 border border-yellow-500/20 rounded-xl p-3">
        <div className="text-[10px] font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-1">
          Robocrystallographer Text Representation:
        </div>
        <p className="text-xs text-zinc-300 font-mono leading-relaxed">
          {isPerovskite
            ? '"SrTiO3 crystallizes in the cubic Pm-3m space group. Ti4+ is bonded to six equivalent O2- atoms to form corner-sharing TiO6 octahedra."'
            : '"Tetragonal unit cell exhibiting axial elongation along the c-axis (c/a = 1.33), altering local octahedral coordination symmetry."'}
        </p>
      </div>
    </div>
  );
};
