import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/education';
import { SectionHeader } from '../components/common/SectionHeader';
import {
  GraduationCap,
  Award,
  Building,
  Calendar,
  Flame,
  Compass,
  FileCheck,
  Wrench,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const EducationPage: React.FC = () => {
  const leadershipPrograms = [
    {
      title: "Falcon Ignite",
      role: "Leadership Development Program",
      icon: Flame,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Falcon Forward",
      role: "Leadership Development Program",
      icon: Compass,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    }
  ];

  const processGovernance = [
    "SOPs (Standard Operating Procedures)",
    "SOWs (Statements of Work)",
    "MSAs (Master Service Agreements)"
  ];

  const businessTools = [
    "Advanced Excel",
    "Microsoft Visio",
    "Business Process Mapping"
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div>
        <SectionHeader
          badgeText="QUALIFICATIONS & DEVELOPMENT"
          heading="Education & Professional Development"
          subheading="Academic degrees in Finance and Commerce from Pune University, complemented by corporate leadership programs and operational governance standards."
          align="center"
        />
      </div>

      {/* 1. ACADEMIC CREDENTIALS */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
          <GraduationCap className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Academic Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-navy-900 border border-white/5 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-300 bg-navy-950 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-xs font-semibold text-slate-300 flex items-start gap-1.5 mt-2">
                  <Building className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </p>

                <p className="text-xs text-slate-400 mt-1 pl-5">
                  {edu.university}
                </p>

                {edu.score && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Score: {edu.score}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] text-slate-500 font-medium">
                Verified Academic Degree
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. PROFESSIONAL & LEADERSHIP DEVELOPMENT */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
          <Award className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Leadership Programs & Professional Training
          </h2>
        </div>

        {/* 40+ Hours Badge Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-navy-850 to-navy-850 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">40+ Hours of Dedicated Leadership Training</p>
              <p className="text-xs text-slate-300">Completed across specialized leadership development programs.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 shrink-0">
            Executive Leadership Track
          </span>
        </div>

        {/* Leadership Programs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leadershipPrograms.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-navy-800/80 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors"
              >
                <div className={`p-3 rounded-xl border shrink-0 ${prog.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{prog.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{prog.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PROCESS EXCELLENCE & BUSINESS TOOLS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Process Excellence */}
        <div className="p-6 rounded-2xl bg-navy-800/80 border border-white/10 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
              <FileCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Process Excellence & Governance</h3>
          </div>
          <ul className="space-y-2.5">
            {processGovernance.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Tools */}
        <div className="p-6 rounded-2xl bg-navy-800/80 border border-white/10 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Wrench className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">Business Analysis Tools</h3>
          </div>
          <ul className="space-y-2.5">
            {businessTools.map((tool, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
