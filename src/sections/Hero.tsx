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
      className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#F0F9F4] via-[#FAFDFB] to-[#FAFDFB] border-b border-emerald-100/80"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left 7 Columns: Clean Personal Identity & Positioning */}
        <div className="lg:col-span-7 space-y-5">
          {/* Soft Green Pill Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Aspiring Full-Stack Developer</span>
            <span className="text-emerald-400">·</span>
            <span className="font-mono text-emerald-800">B.Tech CSE @ KMIT, Hyderabad</span>
          </div>

          {/* Primary Hero Name: CHARAN TEJ */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-1">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950">
              CHARAN TEJ
            </h1>
            <p className="text-lg sm:text-xl font-medium text-emerald-800 mt-2">
              Building intelligent systems. Engineering practical solutions.
            </p>
          </div>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            I'm a computer science student focused on{' '}
            <span className="font-medium text-emerald-950">Java backend development</span>,{' '}
            <span className="font-medium text-emerald-950">full-stack engineering</span>, and{' '}
            <span className="font-medium text-emerald-950">AI/ML</span>. I explore challenging
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
                className="text-xs font-mono bg-white border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-lg shadow-2xs hover:border-emerald-300 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => scrollTo('projects')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {profileConfig.resumeUrl ? (
              <a
                href={profileConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
              >
                <span>View Résumé</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="https://leetcode.com/cherrysmm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
              >
                <span>LeetCode (@cherrysmm)</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </a>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Natural Greenery Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Soft decorative botanical backdrop card */}
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-emerald-200/70 via-emerald-100/50 to-white rounded-3xl transform rotate-2 pointer-events-none" />

            <div className="relative bg-white border-2 border-emerald-100 rounded-3xl p-3 shadow-xl shadow-emerald-900/5">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-emerald-50">
                <img
                  src="/profile.jpg"
                  alt="Charan Tej - Aspiring Full-Stack Developer and Software Engineer"
                  className="w-full h-full object-cover object-[50%_20%]"
                  style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                />
              </div>

              {/* Clean Caption Strip Below Photo */}
              <div className="pt-3 px-2 pb-1 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-emerald-950">Charan Tej</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg font-medium">
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
