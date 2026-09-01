import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects } from '../data/projects';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import {
  CheckCircle2,
  Sparkles,
  Info,
  Layers,
  ChevronDown,
  Eye,
  Activity
} from 'lucide-react';
import { AIReconciliationWorkflow } from '../components/projects/AIReconciliationWorkflow';
import { ClaudeKPIVisual } from '../components/projects/ClaudeKPIVisual';
import { ForecastingPipelineVisual } from '../components/projects/ForecastingPipelineVisual';
import { CloudBillingVisual } from '../components/projects/CloudBillingVisual';
import { ProcessMatrixVisual } from '../components/projects/ProcessMatrixVisual';
import { ClaudeKPIDemoModal } from '../components/projects/ClaudeKPIDemoModal';

export const ProjectsPage: React.FC = () => {
  // Top 3 featured flagship projects
  const topProjects = featuredProjects.slice(0, 3);
  // Other initiatives (smaller cards)
  const otherProjects = featuredProjects.slice(3);

  // Track which featured project's interactive demo is currently open
  const [activeDemoProject, setActiveDemoProject] = useState<string | null>(null);
  const [isClaudeModalOpen, setIsClaudeModalOpen] = useState<boolean>(false);

  const toggleDemo = (projectId: string) => {
    setActiveDemoProject((prev) => (prev === projectId ? null : projectId));
  };

  const renderVisualForProject = (visualType: string) => {
    switch (visualType) {
      case 'claude-kpi':
        return <ClaudeKPIVisual />;
      case 'reconciliation-flow':
        return <AIReconciliationWorkflow />;
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Claude KPI Modal */}
      <ClaudeKPIDemoModal
        isOpen={isClaudeModalOpen}
        onClose={() => setIsClaudeModalOpen(false)}
      />

      {/* Page Header */}
      <div>
        <SectionHeader
          badgeText="INNOVATION & TRANSFORMATION"
          heading="Finance Transformation & AI Projects"
          subheading="Pioneering modern financial architecture through Generative AI workflows, automated reconciliation engines, and enterprise system integration."
          align="center"
        />

        {/* Global Compliance & Simulation Notice */}
        <div className="max-w-3xl mx-auto -mt-6 p-3.5 rounded-2xl bg-navy-800/80 border border-emerald-500/20 flex items-center gap-3 text-xs text-slate-300 backdrop-blur-md">
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white font-semibold">Illustrative Demonstrations:</strong>{' '}
            All interactive modules and AI dashboards use simulated illustrative data models. No confidential company, customer, or proprietary financial records are displayed.
          </span>
        </div>
      </div>

      {/* 1. TOP 3 FEATURED STRATEGIC PROJECTS */}
      <div className="space-y-10">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white tracking-wide">
            Flagship Transformation & AI Initiatives
          </h2>
        </div>

        <div className="space-y-8">
          {topProjects.map((project, idx) => {
            const isDemoOpen = activeDemoProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-navy-800/95 via-navy-850/90 to-navy-900/95 border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Description & Strategic Scope */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                        {project.projectNumber}
                      </span>
                      <Badge variant="blue" size="sm">
                        {project.category}
                      </Badge>
                      {project.featuredMetric && (
                        <span className="text-xs font-semibold text-slate-300 bg-navy-950 px-2.5 py-1 rounded-full border border-white/5">
                          {project.featuredMetric}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Strategic Impacts */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                        Business Purpose & Demonstrated Impact
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Action Bar */}
                    <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-navy-950 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                        {project.id === 'ai-manager-dashboard' && (
                          <button
                            onClick={() => setIsClaudeModalOpen(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-200 bg-navy-900 hover:bg-navy-800 border border-white/10 hover:border-emerald-500/40 rounded-xl transition-all"
                            title="Open Query Explorer"
                          >
                            <Eye className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Explore Queries</span>
                          </button>
                        )}

                        <button
                          onClick={() => toggleDemo(project.id)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-navy-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all"
                        >
                          <Activity className="w-3.5 h-3.5" />
                          <span>{isDemoOpen ? 'Hide Interactive Demo' : 'View Interactive Demo'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isDemoOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual / Interactive Demo (Expandable / Preview) */}
                  <div className="lg:col-span-5 w-full">
                    {/* Collapsed Preview Card */}
                    {!isDemoOpen && (
                      <div
                        onClick={() => toggleDemo(project.id)}
                        className="rounded-2xl bg-navy-950/80 border border-white/10 p-6 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer group hover:border-emerald-500/40 transition-all min-h-[220px]"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                          <Activity className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                            Interactive Architecture Visual
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            Click to launch the interactive simulation & step workflow.
                          </p>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1">
                          Open Demo Visual <ChevronDown className="w-3 h-3" />
                        </span>
                      </div>
                    )}

                    {/* Expanded Live Visual */}
                    <AnimatePresence>
                      {isDemoOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {renderVisualForProject(project.visualType)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. OTHER STRATEGIC INITIATIVES */}
      <div className="space-y-8 pt-4">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
          <Layers className="w-5 h-5 text-blue-400" />
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              Other Strategic Initiatives
            </h2>
            <p className="text-xs text-slate-400">
              Additional operational standardization and cloud financial management projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {project.projectNumber}
                  </span>
                  <Badge variant="glow" size="sm">
                    {project.category}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Impact bullets */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                    Demonstrated Impact
                  </h4>
                  <ul className="space-y-1.5">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inline Compact Visual */}
                <div className="pt-2">
                  {renderVisualForProject(project.visualType)}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-navy-950 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
