import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../types/portfolio';
import { CheckCircle2, Eye } from 'lucide-react';
import { Badge } from '../common/Badge';
import { AIReconciliationWorkflow } from './AIReconciliationWorkflow';
import { ClaudeKPIVisual } from './ClaudeKPIVisual';
import { ForecastingPipelineVisual } from './ForecastingPipelineVisual';
import { CloudBillingVisual } from './CloudBillingVisual';
import { ProcessMatrixVisual } from './ProcessMatrixVisual';
import { ClaudeKPIDemoModal } from './ClaudeKPIDemoModal';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isClaudeModalOpen, setIsClaudeModalOpen] = useState(false);

  const renderVisual = () => {
    switch (project.visualType) {
      case 'reconciliation-flow':
        return <AIReconciliationWorkflow />;
      case 'claude-kpi':
        return <ClaudeKPIVisual />;
      case 'forecasting-pipeline':
        return <ForecastingPipelineVisual />;
      case 'cloud-billing':
        return <CloudBillingVisual />;
      case 'process-matrix':
        return <ProcessMatrixVisual />;
      default:
        return null;
    }
  };

  return (
    <>
      {project.id === 'ai-manager-dashboard' && (
        <ClaudeKPIDemoModal
          isOpen={isClaudeModalOpen}
          onClose={() => setIsClaudeModalOpen(false)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="rounded-3xl bg-gradient-to-br from-navy-800/95 via-navy-850/90 to-navy-900/95 border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                {project.projectNumber}
              </span>
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Key Impacts */}
            <div className="space-y-2 pt-2">
              <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Key Strategic Impact & Outcomes
              </p>
              <ul className="space-y-2">
                {project.impact.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags & Optional Action */}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-navy-950/90 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.id === 'ai-manager-dashboard' && (
                <button
                  onClick={() => setIsClaudeModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore Queries</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Visual Representation */}
          <div className="lg:col-span-6">
            {renderVisual()}
          </div>
        </div>
      </motion.div>
    </>
  );
};
