import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techCategories } from '../../data/techEcosystem';
import { SectionHeader } from '../common/SectionHeader';
import {
  Layers,
  Network,
  BarChart3,
  Sparkles,
  Database,
  Search
} from 'lucide-react';

export const TechnologyEcosystem: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
      case 'Database':
        return <Database className="w-5 h-5 text-slate-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = techCategories
    .filter((cat) => selectedCatId === 'all' || cat.id === selectedCatId)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingTechs = cat.technologies.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return { ...cat, technologies: matchingTechs };
    })
    .filter((cat) => cat.technologies.length > 0);

  return (
    <section id="technology" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="FINANCE SYSTEMS & TECHNOLOGY"
          heading="Finance Technology Ecosystem"
          subheading="A comprehensive toolkit spanning ERP platforms, CRM systems, business intelligence reporting, and AI-driven automation."
          align="center"
        />

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-navy-800/80 rounded-2xl border border-white/5 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCatId('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCatId === 'all'
                  ? 'bg-emerald-500 text-navy-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Systems
            </button>
            {techCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCatId(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCatId === c.id
                    ? 'bg-emerald-500 text-navy-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.category.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search software/tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-navy-800/90 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="rounded-3xl bg-gradient-to-br from-navy-800/80 via-navy-850/70 to-navy-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 self-start sm:self-center bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {category.technologies.length} Systems
                </span>
              </div>

              {/* Technologies Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="p-4 rounded-xl bg-navy-900/90 border border-white/5 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)] transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-sm sm:text-base text-white group-hover:text-emerald-400 transition-colors">
                          {tech.name}
                        </span>
                        {tech.isKey && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                            Core
                          </span>
                        )}
                      </div>
                      {tech.description && (
                        <p className="text-xs text-slate-400 leading-snug">
                          {tech.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
