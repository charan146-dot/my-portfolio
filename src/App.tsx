import React, { useState, useRef, ChangeEvent } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProfileModal } from './components/ProfileModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { DSA } from './sections/DSA';
import { Education } from './sections/Education';
import { ProfileConfig } from './types';

export default function App() {
  // User Portrait Image State (Defaults to uploaded `link.jpeg` or fallback with live upload option)
  const [portraitSrc, setPortraitSrc] = useState<string>('/link.jpeg');
  const [imageError, setImageError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Configurable Metadata Modal
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [profileConfig, setProfileConfig] = useState<ProfileConfig>({
    leetcodeCount: '~220 Solved (Historical — Verify on Live Profile)',
    cgpa: '~8.48 CGPA (Historical — Verify Latest Transcript)',
    graduationYear: 'B.Tech CSE (In Progress)',
    resumeUrl: '',
  });

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPortraitSrc(reader.result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        scrollTo={scrollTo}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          scrollTo={scrollTo}
          portraitSrc={portraitSrc}
          imageError={imageError}
          setImageError={setImageError}
          fileInputRef={fileInputRef}
          handlePhotoUpload={handlePhotoUpload}
          profileConfig={profileConfig}
        />

        <About />

        <Skills />

        <Projects />

        <DSA leetcodeCount={profileConfig.leetcodeCount} />

        <Education
          profileConfig={profileConfig}
          onOpenConfig={() => setIsConfigOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer scrollTo={scrollTo} />

      {/* Profile & Photo Customization Modal */}
      <ProfileModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={profileConfig}
        setConfig={setProfileConfig}
        fileInputRef={fileInputRef}
      />
    </div>
  );
}
