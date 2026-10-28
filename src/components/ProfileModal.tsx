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
    <div className="fixed inset-0 z-50 bg-emerald-950/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-emerald-200 rounded-3xl max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-4">
          <h3 className="text-sm font-bold text-emerald-950">
            Customize Photo & Verified Profile Info
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Profile Photo (Defaults to `/profile.jpg` or upload directly):
            </label>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl px-3 py-2 font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-700" />
              <span>Choose Photo from Device</span>
            </button>
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              LeetCode Solved Display:
            </label>
            <input
              type="text"
              value={config.leetcodeCount}
              onChange={(e) =>
                setConfig({ ...config, leetcodeCount: e.target.value })
              }
              className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-emerald-600 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Academic CGPA Record:
            </label>
            <input
              type="text"
              value={config.cgpa}
              onChange={(e) => setConfig({ ...config, cgpa: e.target.value })}
              className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-emerald-600 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Résumé URL (Optional — enables "View Résumé" button in Hero):
            </label>
            <input
              type="url"
              placeholder="https://drive.google.com/..."
              value={config.resumeUrl}
              onChange={(e) =>
                setConfig({ ...config, resumeUrl: e.target.value })
              }
              className="w-full bg-white border border-emerald-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-emerald-600 text-xs"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm shadow-emerald-600/20"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};
