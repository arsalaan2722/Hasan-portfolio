import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ExperienceItem } from '../../types/portfolio';
import {
  Building2,
  Calendar,
  Users,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  MapPin,
  Briefcase
} from 'lucide-react';
import { Badge } from '../common/Badge';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(index === 0);

  return (
    <div className="relative pl-6 sm:pl-10 pb-10 group last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/40 via-blue-500/20 to-white/5 group-last:hidden" />

      {/* Timeline Node Bullet */}
      <div className={`absolute left-0 sm:left-2 top-2 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
        experience.isCurrent
          ? 'bg-emerald-500 border-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.6)]'
          : 'bg-navy-900 border-white/20 group-hover:border-emerald-400 group-hover:scale-110'
      }`}>
        {experience.isCurrent ? (
          <span className="w-2 h-2 rounded-full bg-navy-950"></span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-emerald-400"></span>
        )}
      </div>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className={`rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border transition-all duration-300 p-5 sm:p-7 backdrop-blur-xl ${
          experience.isCurrent
            ? 'border-emerald-500/40 shadow-[0_0_30px_rgba(34,197,94,0.1)]'
            : 'border-white/[0.08] hover:border-white/20'
        }`}
      >
        {/* Header Details */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              {experience.isCurrent && (
                <Badge variant="glow" dot size="sm">
                  CURRENT ROLE
                </Badge>
              )}
              {experience.isSoleProprietor && (
                <Badge variant="blue" size="sm">
                  ENTREPRENEURSHIP
                </Badge>
              )}
              {experience.teamSize && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 bg-navy-950/70 px-2.5 py-0.5 rounded-md border border-white/5">
                  <Users className="w-3 h-3 text-blue-400" />
                  {experience.teamSize}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {experience.role}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" /> {experience.company}
              </span>
              {experience.location && (
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {experience.location}
                </span>
              )}
            </div>
          </div>

          {/* Period Badge & Expand Trigger */}
          <div className="flex items-center gap-3 self-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/80 border border-white/10 text-xs font-mono font-semibold text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              {experience.period}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-xl bg-navy-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
              aria-label="Expand details"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Key Metrics Chips */}
        {experience.keyMetrics && experience.keyMetrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/[0.06]">
            {experience.keyMetrics.map((metric, i) => (
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
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="pt-2">
                    <p className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider mb-2">
                      Systems & Frameworks
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech, i) => (
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
};
