import React from 'react';
import { motion } from 'framer-motion';
import { impactStatistics } from '../../data/statistics';
import { SectionHeader } from '../common/SectionHeader';
import { StatCounter } from '../common/StatCounter';
import {
  Calendar,
  Users,
  Shield,
  Building2,
  Landmark,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const ImpactStatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-teal-400" />;
      default:
        return <Shield className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="leadership" className="py-20 md:py-28 relative bg-navy-950/60 border-y border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="LEADERSHIP & IMPACT"
          heading="Leadership by the Numbers"
          subheading="A career track record spanning team leadership, high-volume account management, bank reconciliations, and finance automation."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {impactStatistics.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.12)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-navy-900 border border-white/5 group-hover:scale-105 transition-transform">
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-200 mt-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-slate-500">
                <span>Career Metric</span>
                <span className="text-emerald-400 font-semibold">Career Highlight</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
