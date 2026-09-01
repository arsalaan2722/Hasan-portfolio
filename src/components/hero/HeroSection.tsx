import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ExecutiveDashboardMockup } from './ExecutiveDashboardMockup';
import { scrollToSection } from '../../utils/scrollToSection';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows & Mesh Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Headline & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Label */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="glow" dot size="md">
                FINANCE & ACCOUNTING LEADER
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-navy-800/80 px-3 py-1 rounded-full border border-white/5">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                18+ Years Global Experience
              </span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 leading-snug">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => scrollToSection('experience')}
              >
                Explore Experience
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<Layers className="w-4 h-4" />}
                onClick={() => scrollToSection('projects')}
              >
                View Key Initiatives
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<FileText className="w-4 h-4 text-emerald-400" />}
                onClick={onOpenResume}
              >
                View Resume
              </Button>
            </div>

            {/* Micro Highlights Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>US GAAP & Audit Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Enterprise Finance Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>GenAI & Finance Automation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Financial Intelligence Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <ExecutiveDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
