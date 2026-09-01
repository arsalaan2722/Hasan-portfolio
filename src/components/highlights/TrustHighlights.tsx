import React from 'react';
import { motion } from 'framer-motion';
import { trustHighlights } from '../../data/personal';
import { TrendingUp, Users, ShieldCheck, Briefcase, FileCheck2 } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-r from-navy-800/90 via-navy-750/90 to-navy-800/90 border border-white/10 shadow-2xl backdrop-blur-xl p-4 sm:p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {trustHighlights.map((item, index) => (
            <div
              key={item.id}
              className={`p-3 sm:p-4 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                index > 0 ? 'pt-4 sm:pt-4 sm:pl-6' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-navy-900/80 border border-white/5 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                  {getIcon(item.iconName)}
                </span>
                <span className="text-[10px] font-mono font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {item.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
