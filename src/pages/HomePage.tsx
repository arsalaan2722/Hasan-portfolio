import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  ArrowRight,
  Layers,
  Sparkles,
  Mail,
  ShieldCheck,
  TrendingUp,
  Users,
  Briefcase,
  Cpu,
  BarChart3,
  Scale,
  Workflow,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeader } from '../components/common/SectionHeader';
import { ExecutiveDashboardMockup } from '../components/hero/ExecutiveDashboardMockup';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  const compactHighlights = [
    {
      value: "18+ Years",
      label: "Global Finance Experience",
      sublabel: "US & UK Operations Track Record",
      icon: TrendingUp,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      value: "15 Members",
      label: "Current Team Leadership",
      sublabel: "Active leadership at CrowdStrike",
      icon: Users,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      value: "30 Members",
      label: "Largest Team Managed",
      sublabel: "End-to-End US Finance Operations",
      icon: ShieldCheck,
      accent: "text-teal-400 bg-teal-500/10 border-teal-500/20"
    },
    {
      value: "3,000+",
      label: "Customer Accounts Managed",
      sublabel: "Cash Application & Risk Governance",
      icon: Briefcase,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  const coreFocusAreas = [
    {
      title: "Financial Operations",
      description: "AR, AP, General Ledger, Month-End Close & Reconciliation",
      icon: Scale,
      color: "emerald"
    },
    {
      title: "Finance Leadership",
      description: "Team recruitment, talent development, coaching & KPI governance",
      icon: Users,
      color: "blue"
    },
    {
      title: "Process Transformation",
      description: "Global process migrations (US & UK), Fix and Shift methodologies",
      icon: Workflow,
      color: "teal"
    },
    {
      title: "Technology & Automation",
      description: "HighRadius, NetSuite, SAP, GenAI & automated workflows",
      icon: Cpu,
      color: "indigo"
    },
    {
      title: "Analytics & Reporting",
      description: "Executive KPI dashboards, FP&A alignment & CFO reporting",
      icon: BarChart3,
      color: "blue"
    },
    {
      title: "US GAAP & Compliance",
      description: "Financial standards, 401K/941 payroll compliance & internal controls",
      icon: ShieldCheck,
      color: "emerald"
    }
  ];

  const profilePillars = [
    "18+ Years Comprehensive Finance & Accounting Experience",
    "Accounts Receivable (AR) & Accounts Payable (AP) Governance",
    "General Ledger (GL) & Strict US GAAP Compliance",
    "Executive Financial Reporting & CFO KPI Dashboards",
    "Financial Budgeting, Planning & Multi-System Forecasting",
    "Multi-Account Bank & Transaction Reconciliations",
    "US Payroll Operations (Calculations, 401K & 941 Compliance)",
    "High-Performance Team Leadership (up to 30 members)",
    "Finance Transformation & Cross-Border Process Migrations",
    "GenAI & Claude Automation for Operations & Reconciliations"
  ];

  return (
    <div className="space-y-20 md:space-y-28 pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="glow" dot size="md">
                  FINANCE & ACCOUNTING LEADER
                </Badge>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-navy-800/80 px-3 py-1 rounded-full border border-white/5">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  18+ Years Global Experience
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                  {personalInfo.name}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 leading-snug">
                  {personalInfo.subtitle}
                </p>
              </div>

              {/* Concise Summary */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>

              {/* 4 Primary CTAs - Compact Single-Line Layout */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5">
                <Link to="/experience" className="shrink-0">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                    className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap"
                  >
                    View Experience
                  </Button>
                </Link>

                <Link to="/projects" className="shrink-0">
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Layers className="w-3.5 h-3.5" />}
                    className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap"
                  >
                    View Projects
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="sm"
                  icon={<FileText className="w-3.5 h-3.5 text-emerald-400" />}
                  onClick={onOpenResume}
                  className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0"
                >
                  View Resume
                </Button>

                <Link to="/contact" className="shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Mail className="w-3.5 h-3.5 text-blue-400" />}
                    className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap"
                  >
                    Contact
                  </Button>
                </Link>
              </div>

              {/* Core Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>US GAAP Compliance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Enterprise Finance Systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>AI-Driven Finance Workflows</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <ExecutiveDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT CAREER HIGHLIGHTS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {compactHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 shadow-xl backdrop-blur-xl flex items-center gap-4 group hover:border-emerald-500/40 transition-all"
              >
                <div className={`p-3 rounded-xl border shrink-0 ${item.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. EXECUTIVE PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-navy-800/80 via-navy-850/70 to-navy-900/80 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Summary Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="glow" size="sm">
                EXECUTIVE PROFILE
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Strategic Finance Leadership with End-to-End Operational Excellence
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With over 18 years of global experience, Hasan Abdul Shaikh delivers comprehensive oversight across critical corporate finance functions. From establishing rigorous US GAAP compliance and scaling AR/AP workflows to migrating international finance operations and introducing AI-driven reconciliation automation, he bridges traditional accounting rigor with modern technological agility.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore full career history</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  to="/expertise"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View capability matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Key Areas Checklist */}
            <div className="lg:col-span-6 bg-navy-900/90 rounded-2xl border border-white/5 p-6 space-y-3">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Core Competency Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profilePillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FOCUS VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="STRATEGIC FOCUS"
          heading="Core Areas of Focus"
          subheading="Six foundational pillars driving financial performance, compliance, and technological transformation."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFocusAreas.map((focus, idx) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 shadow-xl backdrop-blur-xl group hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all"
              >
                <div className="p-3 rounded-xl bg-navy-900/90 border border-white/5 w-fit mb-4 group-hover:scale-105 transition-transform text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                  {focus.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {focus.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. BOTTOM CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 border border-emerald-500/20 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Discuss Finance Leadership & Transformation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Explore detailed career milestones, flagship AI finance initiatives, or connect directly for executive opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/experience">
              <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Explore Experience
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary" size="md" icon={<Layers className="w-4 h-4" />}>
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md" icon={<Mail className="w-4 h-4 text-emerald-400" />}>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
