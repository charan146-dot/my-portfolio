import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  tag: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: SkillItem[];
}

export interface HeartSoundClass {
  code: string;
  name: string;
  pattern: string;
  bars: number[];
}

export interface PipelineNode {
  step: string;
  sub: string;
}

export interface CaseStudyPoint {
  title: string;
  content: string;
}

export interface CareerRole {
  role: string;
  desc: string;
}

export interface DsaStep {
  step: string;
  desc: string;
}

export interface ProfileConfig {
  leetcodeCount: string;
  cgpa: string;
  graduationYear: string;
  resumeUrl: string;
}
