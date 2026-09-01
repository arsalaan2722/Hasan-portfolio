import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { SectionHeader } from '../components/common/SectionHeader';
import {
  PieChart,
  TrendingUp,
  Receipt,
  Activity,
  Cpu,
  Users,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const ExpertisePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-teal-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      default:
        return <PieChart className="w-5 h-5 text-emerald-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <SectionHeader
          badgeText="EXECUTIVE CAPABILITY MATRIX"
          heading="Core Finance & Accounting Expertise"
          subheading="A multidisciplinary domain matrix spanning US GAAP accounting standards, high-volume transactional governance, cross-border migrations, and modern GenAI process optimization."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 -mt-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-navy-950 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-bold'
                : 'bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 border border-white/5'
            }`}
          >
            All Areas (6 Core Pillars)
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-navy-950 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-bold'
                  : 'bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 border border-white/5'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Matrix of 6 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 sm:p-7 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-navy-900/90 border border-white/5 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                  {getIcon(category.iconName)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-navy-950 px-2.5 py-1 rounded-md border border-white/5">
                  {category.skills.length} Capabilities
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {category.title}
              </h3>

              <ul className="space-y-2.5">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Domain Pillar
              </span>
              <span className="text-emerald-400 font-semibold">18+ Years Experience</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
