import React from 'react';
import { motion } from 'framer-motion';
import { developmentPrograms } from '../../data/development';
import { SectionHeader } from '../common/SectionHeader';
import { Flame, Compass, FileCheck, Wrench, CheckCircle2, GraduationCap } from 'lucide-react';

export const DevelopmentSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="PROFESSIONAL DEVELOPMENT"
          heading="Continuous Learning & Leadership Development"
          subheading="Dedicated to ongoing professional growth through leadership development programs, process excellence frameworks, and business tools."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentPrograms.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.1)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-navy-900 border border-white/5 group-hover:scale-105 transition-transform">
                    {getIcon(prog.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-500">
                    {prog.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-400 mb-4">
                  {prog.subtitle}
                </p>

                {prog.items && (
                  <ul className="space-y-2">
                    {prog.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] text-slate-500 font-medium">
                Professional Development
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shared Leadership Training Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-navy-800/80 via-navy-850/80 to-navy-800/80 border border-emerald-500/20 text-center max-w-2xl mx-auto backdrop-blur-xl"
        >
          <p className="text-xs sm:text-sm font-medium text-emerald-300 flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
            40+ hours of dedicated leadership training completed across leadership development programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
