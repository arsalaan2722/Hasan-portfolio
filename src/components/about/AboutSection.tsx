import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import { SectionHeader } from '../common/SectionHeader';
import { LeadershipFramework } from './LeadershipFramework';
import { CheckCircle2, Award, Zap, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="ABOUT ME"
          heading="Financial Leadership Built on Experience, Transformation & Results"
          subheading="Over 18 years of experience managing financial operations, leading teams, supporting global process migrations, and improving finance processes through technology and automation."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Narrative & Key Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.extendedSummary.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Core Pillars Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-3.5 rounded-xl bg-navy-800/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">US GAAP & Close Operations</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">GL, month-end close, budgeting, and financial reporting.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-800/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Team Leadership</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Led and developed finance teams of up to 30 members.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-800/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Process Migrations</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Successful migration of US and UK financial operations.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-800/80 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Automation & GenAI</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Claude-driven KPI dashboards and automated reconciliation workflows.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Leadership Framework Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex"
          >
            <LeadershipFramework />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
