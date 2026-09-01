export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  extendedSummary: string[];
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  yearsOfExperience: number;
}

export interface TrustHighlight {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location?: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  isSoleProprietor?: boolean;
  teamSize?: string;
  responsibilities: string[];
  technologies: string[];
  keyMetrics: string[];
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  category: string;
  title: string;
  description: string;
  impact: string[];
  technologies: string[];
  visualType: 'claude-kpi' | 'reconciliation-flow' | 'forecasting-pipeline' | 'cloud-billing' | 'process-matrix';
  featuredMetric?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface TechItem {
  name: string;
  description?: string;
  isKey?: boolean;
}

export interface TechCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  technologies: TechItem[];
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  iconName: string;
  accentColor?: string;
}

export interface DevelopmentItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'leadership' | 'excellence' | 'tools';
  items?: string[];
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university: string;
  year: string;
  score?: string;
  details?: string;
}

export interface PhilosophyPillar {
  pillar: string;
  description: string;
  iconName: string;
  details: string;
}
