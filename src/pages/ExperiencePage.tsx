import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceList } from '../data/experience';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import {
  Building2,
  Calendar,
  Users,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MapPin,
  Briefcase,
  Layers
} from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  // Store expanded state per experience ID; first one open by default
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    crowdstrike: true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    experienceList.forEach((exp) => {
      allExpanded[exp.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <SectionHeader
          badgeText="CAREER TIMELINE"
          heading="Professional Experience & Leadership Journey"
          subheading="A continuous 18+ year track record spanning enterprise US & UK finance operations, large team leadership, and finance process automation."
          align="center"
        />

        {/* Global Expand/Collapse controls */}
        <div className="flex items-center justify-center gap-3 -mt-6">
          <button
            onClick={expandAll}
            className="px-3.5 py-1.5 rounded-lg bg-navy-800/80 hover:bg-navy-700 text-xs font-semibold text-slate-300 border border-white/5 transition-colors"
          >
            Expand All Roles
          </button>
          <button
            onClick={collapseAll}
            className="px-3.5 py-1.5 rounded-lg bg-navy-800/80 hover:bg-navy-700 text-xs font-semibold text-slate-400 hover:text-slate-200 border border-white/5 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pt-4">
        {experienceList.map((exp, index) => {
          const isExpanded = !!expandedIds[exp.id];

          return (
            <div key={exp.id} className="relative pl-6 sm:pl-10 pb-10 group last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/40 via-blue-500/20 to-white/5 group-last:hidden" />

              {/* Timeline Node Bullet */}
              <div
                className={`absolute left-0 sm:left-2 top-2 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-emerald-500 border-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.6)]'
                    : 'bg-navy-900 border-white/20 group-hover:border-emerald-400 group-hover:scale-110'
                }`}
              >
                {exp.isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-navy-950" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-emerald-400" />
                )}
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border transition-all duration-300 p-5 sm:p-7 backdrop-blur-xl shadow-xl ${
                  exp.isCurrent
                    ? 'border-emerald-500/40 shadow-[0_0_30px_rgba(34,197,94,0.1)]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.isCurrent && (
                        <Badge variant="glow" dot size="sm">
                          CURRENT ROLE
                        </Badge>
                      )}
                      {exp.isSoleProprietor && (
                        <Badge variant="blue" size="sm">
                          ENTREPRENEURSHIP
                        </Badge>
                      )}
                      {exp.teamSize && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 bg-navy-950/70 px-2.5 py-0.5 rounded-md border border-white/5">
                          <Users className="w-3 h-3 text-blue-400" />
                          {exp.teamSize}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-300">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" /> {exp.company}
                      </span>
                      {exp.location && (
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period Badge & View Details Trigger */}
                  <div className="flex items-center gap-3 self-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/80 border border-white/10 text-xs font-mono font-semibold text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.period}
                    </span>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 border border-white/10 hover:border-emerald-500/30 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                      aria-label="Toggle role details"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Key Metrics Chips */}
                {exp.keyMetrics && exp.keyMetrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/[0.06]">
                    {exp.keyMetrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Expandable Responsibilities Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-4">
                        <div>
                          <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                            Key Responsibilities & Operational Impact
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Tags */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="pt-2">
                            <p className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                              <Layers className="w-3 h-3 text-blue-400" />
                              Systems & Toolsets
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-navy-950/80 text-slate-300 border border-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
