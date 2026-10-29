import React, { RefObject, ChangeEvent } from 'react';
import {
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import { ProfileConfig } from '../types';

interface HeroProps {
  scrollTo: (id: string) => void;
  portraitSrc?: string;
  imageError?: boolean;
  setImageError?: (hasError: boolean) => void;
  fileInputRef?: RefObject<HTMLInputElement>;
  handlePhotoUpload?: (e: ChangeEvent<HTMLInputElement>) => void;
  profileConfig: ProfileConfig;
}

export const Hero: React.FC<HeroProps> = ({
  scrollTo,
  portraitSrc = '/profile.jpg',
  profileConfig,
}) => {
  return (
    <section
      id="hero"
      className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0d] to-black border-b border-yellow-500/20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left 7 Columns: Personal Identity & Positioning */}
        <div className="lg:col-span-7 space-y-5">
          {/* Yellow Pill Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-3.5 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span>Aspiring Full-Stack Developer</span>
            <span className="text-yellow-500">·</span>
            <span className="font-mono text-yellow-200">B.Tech CSE @ KMIT, Hyderabad</span>
          </div>

          {/* Primary Hero Name: CHARAN TEJ */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-yellow-400 font-semibold mb-1">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(250,204,21,0.15)]">
              CHARAN TEJ
            </h1>
            <p className="text-lg sm:text-xl font-medium text-yellow-400 mt-2">
              Building intelligent systems. Engineering practical solutions.
            </p>
          </div>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            I'm a computer science student focused on{' '}
            <span className="font-semibold text-yellow-300">Java backend development</span>,{' '}
            <span className="font-semibold text-yellow-300">full-stack engineering</span>, and{' '}
            <span className="font-semibold text-yellow-300">AI/ML</span>. I explore challenging
            problems through software projects, research-driven experimentation, and consistent
            problem-solving practice.
          </p>

          {/* Technical Identity Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Java Backend Development',
              'Spring Boot & REST APIs',
              'React & Full-Stack',
              'AI/ML & Deep Learning',
              'Data Structures & Algorithms'
            ].map((pill) => (
              <span
                key={pill}
                className="text-xs font-mono bg-zinc-900/90 border border-yellow-500/30 text-yellow-200 px-3 py-1.5 rounded-lg shadow-xs hover:border-yellow-400 hover:bg-zinc-800 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => scrollTo('projects')}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-yellow-400/20 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {profileConfig.resumeUrl ? (
              <a
                href={profileConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-yellow-300 border border-yellow-500/40 font-medium text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
              >
                <span>View Résumé</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="https://leetcode.com/cherrysmm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-yellow-300 border border-yellow-500/40 font-medium text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
              >
                <span>LeetCode (@cherrysmm)</span>
                <ArrowUpRight className="w-4 h-4 text-yellow-400" />
              </a>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Yellow Rim-Lit Obsidian Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Soft decorative yellow backdrop glow card */}
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-yellow-500/30 via-yellow-400/20 to-amber-500/10 rounded-3xl transform rotate-2 pointer-events-none blur-xs" />

            <div className="relative bg-zinc-950 border-2 border-yellow-500/40 rounded-3xl p-3 shadow-2xl shadow-yellow-500/10">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-yellow-500/20">
                <img
                  src={portraitSrc}
                  alt="Charan Tej - Aspiring Full-Stack Developer and Software Engineer"
                  className="w-full h-full object-cover object-[50%_20%]"
                  style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                />
              </div>

              {/* Caption Strip Below Photo */}
              <div className="pt-3 px-2 pb-1 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Charan Tej</div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-yellow-400" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-yellow-400/10 text-yellow-300 border border-yellow-500/30 px-2.5 py-1 rounded-lg font-medium">
                  KMIT · CSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
