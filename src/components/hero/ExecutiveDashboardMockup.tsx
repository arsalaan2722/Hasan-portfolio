import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingDown,
  Users,
  Activity,
  Sparkles,
  Building,
  CheckCircle2,
  RefreshCw,
  Layers,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

type TabType = 'overview' | 'ar_health' | 'team_performance' | 'ai_automation';

export const ExecutiveDashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Illustrative abstract metric dataset
  const dsoTrendData = [
    { period: 'Q1', dso: 44, target: 35, compliance: 95 },
    { period: 'Q2', dso: 39, target: 35, compliance: 97 },
    { period: 'Q3', dso: 34, target: 35, compliance: 99 },
    { period: 'Q4', dso: 31, target: 35, compliance: 100 },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow behind the dashboard */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-emerald-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Glass Dashboard Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-navy-800/95 via-navy-850/95 to-navy-900/95 border border-white/10 shadow-2xl p-4 sm:p-6 backdrop-blur-2xl overflow-hidden">
        {/* Top Console Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white tracking-wider">CFO INTELLIGENCE DASHBOARD</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ACTIVE SIMULATION
            </span>
          </div>
        </div>

        {/* 4 Interactive Dashboard Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-navy-950/70 rounded-xl border border-white/5 mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'overview'
                ? 'bg-emerald-500 text-navy-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3 h-3 shrink-0" />
            <span className="truncate">Operations</span>
          </button>

          <button
            onClick={() => setActiveTab('ar_health')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'ar_health'
                ? 'bg-emerald-500 text-navy-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingDown className="w-3 h-3 shrink-0" />
            <span className="truncate">AR Health</span>
          </button>

          <button
            onClick={() => setActiveTab('team_performance')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'team_performance'
                ? 'bg-emerald-500 text-navy-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-3 h-3 shrink-0" />
            <span className="truncate">Team Scale</span>
          </button>

          <button
            onClick={() => setActiveTab('ai_automation')}
            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'ai_automation'
                ? 'bg-emerald-500 text-navy-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3 h-3 shrink-0" />
            <span className="truncate">AI & Auto</span>
          </button>
        </div>

        {/* Tab 1: Operations Overview */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3.5"
          >
            {/* Quick KPI Row */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Leadership Exp</span>
                <p className="text-lg font-black text-white mt-0.5">18+ <span className="text-xs text-emerald-400 font-normal">Yrs</span></p>
              </div>
              <div className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Teams</span>
                <p className="text-lg font-black text-white mt-0.5">30 <span className="text-xs text-blue-400 font-normal">Max</span></p>
              </div>
              <div className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Customer Base</span>
                <p className="text-lg font-black text-white mt-0.5">3,000+</p>
              </div>
            </div>

            {/* Operational Status Box */}
            <div className="bg-navy-900/70 p-3 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> End-to-End Financial Operations
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">ACTIVE</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-navy-950/80 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400">US GAAP Close:</span>
                  <p className="font-bold text-white">Standardized SOPs</p>
                </div>
                <div className="bg-navy-950/80 p-2 rounded-lg border border-white/5">
                  <span className="text-slate-400">Bank Accounts:</span>
                  <p className="font-bold text-white">40 Bank Accounts Reconciled</p>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-navy-950/80 border border-emerald-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300 text-[11px]">Operational Focus: End-to-end finance management, process migration, and team leadership.</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: AR Workflow Health */}
        {activeTab === 'ar_health' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3.5"
          >
            <div className="bg-navy-900/70 p-3 rounded-xl border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" /> DSO & Aging Trajectory
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Illustrative View
                </span>
              </div>

              {/* Area Chart */}
              <div className="h-28 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dsoTrendData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="dsoGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="period" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={10} domain={[25, 50]} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#07111F',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        fontSize: '11px',
                        color: '#F8FAFC'
                      }}
                      formatter={(val: any) => [`${val} Days`, 'Illustrative DSO']}
                    />
                    <Area
                      type="monotone"
                      dataKey="dso"
                      stroke="#22C55E"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#dsoGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-slate-400">Cash Application</p>
                  <p className="font-bold text-white">Automated Workflows</p>
                </div>
              </div>
              <div className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <p className="text-slate-400">Aging Buckets</p>
                  <p className="font-bold text-white">HighRadius Cloud</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Team Performance */}
        {activeTab === 'team_performance' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-navy-900/70 p-3 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" /> CrowdStrike Team Leadership
                </span>
                <span className="text-emerald-400 font-bold">15 Members</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Recruitment, interviews, onboarding, performance reviews, and management discussions.
              </p>
              <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[100%]"></div>
              </div>
            </div>

            <div className="bg-navy-900/70 p-3 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-400" /> Katalyst Operations Scale
                </span>
                <span className="text-blue-400 font-bold">30 Members</span>
              </div>
              <p className="text-[11px] text-slate-300">
                End-to-end US finance operations: GL, AP, AR, US Payroll 941/401K, direct CFO reporting.
              </p>
              <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full w-[100%]"></div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Automation & AI */}
        {activeTab === 'ai_automation' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div className="bg-navy-900/80 p-3.5 rounded-xl border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Claude GenAI Invoicing & Recs
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  60+ Invoices
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Automated customer allocation and credit knock-off matching reducing manual touchpoints.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 text-[11px] text-slate-400">
                <span>Customer Allocation: <strong className="text-white">Automated Workflow</strong></span>
                <span>Suspense Review: <strong className="text-emerald-400">Automated Monitoring</strong></span>
              </div>
            </div>

            <div className="bg-navy-900/60 p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-300">AI KPI Real-Time Intelligence</span>
              <span className="text-emerald-400 font-bold">On-Demand Management Visibility</span>
            </div>
          </motion.div>
        )}

        {/* Bottom Disclaimer */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Illustrative UI Demonstration
          </span>
          <span className="font-mono text-slate-400">Abstract Metrics</span>
        </div>
      </div>
    </div>
  );
};
