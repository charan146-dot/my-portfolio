import React, { RefObject } from 'react';
import { X, Upload } from 'lucide-react';
import { ProfileConfig } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProfileConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProfileConfig>>;
  fileInputRef: RefObject<HTMLInputElement>;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  config,
  setConfig,
  fileInputRef,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-yellow-500/30 rounded-3xl max-w-md w-full p-6 shadow-2xl text-zinc-100">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
          <h3 className="text-sm font-bold text-yellow-400">
            Customize Photo & Verified Profile Info
          </h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs">
          <div>
            <label className="block font-medium text-zinc-300 mb-1">
              Profile Photo (Defaults to `/profile.jpg` or upload directly):
            </label>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-yellow-300 border border-yellow-500/40 rounded-xl px-3 py-2 font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-yellow-400" />
              <span>Choose Photo from Device</span>
            </button>
          </div>

          <div>
            <label className="block font-medium text-zinc-300 mb-1">
              LeetCode Solved Display:
            </label>
            <input
              type="text"
              value={config.leetcodeCount}
              onChange={(e) =>
                setConfig({ ...config, leetcodeCount: e.target.value })
              }
              className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-300 mb-1">
              Academic CGPA Record:
            </label>
            <input
              type="text"
              value={config.cgpa}
              onChange={(e) => setConfig({ ...config, cgpa: e.target.value })}
              className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-zinc-300 mb-1">
              Résumé URL (Optional — enables "View Résumé" button in Hero):
            </label>
            <input
              type="url"
              placeholder="https://drive.google.com/..."
              value={config.resumeUrl}
              onChange={(e) =>
                setConfig({ ...config, resumeUrl: e.target.value })
              }
              className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-xs"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-yellow-400/20"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
