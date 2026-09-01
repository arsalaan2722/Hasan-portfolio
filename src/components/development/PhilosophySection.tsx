import React from 'react';
import { motion } from 'framer-motion';
import { leadershipQuote, leadershipPillars } from '../../data/philosophy';
import { Quote, Users, Workflow, Cpu, TrendingUp } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-300" />;
      default:
        return <Users className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-navy-800 via-navy-850 to-navy-900 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl overflow-hidden mb-12 text-center"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <Quote className="w-12 h-12 text-emerald-400/30 mx-auto mb-6" />

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed max-w-4xl mx-auto tracking-tight">
            "{leadershipQuote.quote}"
          </blockquote>

          <div className="mt-6 flex flex-col items-center">
            <span className="text-base font-bold text-emerald-400">{leadershipQuote.author}</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 mt-0.5">
              {leadershipQuote.title}
            </span>
          </div>
        </motion.div>

        {/* 4 Pillars of Leadership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.pillar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-navy-900 border border-white/5 group-hover:scale-105 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">PILLAR 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {pillar.pillar}
                </h3>

                <p className="text-xs font-semibold text-slate-200 mb-2">
                  {pillar.description}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] text-slate-500 font-mono">
                OPERATIONAL FOUNDATION
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
