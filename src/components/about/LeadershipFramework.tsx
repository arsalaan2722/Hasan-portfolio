import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Users,
  Cpu,
  Sparkles,
  BarChart3,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FrameworkNode {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  details: string;
}

export const LeadershipFramework: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ops');

  const nodes: FrameworkNode[] = [
    {
      id: 'ops',
      title: 'Financial Operations',
      subtitle: 'AR, AP, GL, Month-End Close',
      icon: Activity,
      color: 'from-emerald-500 to-teal-600',
      details: 'End-to-end management of General Ledger, Accounts Receivable, Accounts Payable, US payroll, bank reconciliations, and financial close processes.'
    },
    {
      id: 'leadership',
      title: 'Leadership',
      subtitle: 'Teams up to 30 Members',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      details: 'Building high-performing finance teams, conducting regular one-on-one meetings, recruitment, performance management, and KPI goal setting.'
    },
    {
      id: 'tech',
      title: 'Technology',
      subtitle: 'NetSuite, SAP, HighRadius',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      details: 'Hands-on experience with NetSuite, SAP, Salesforce, Domo, Tableau, and automated finance platforms.'
    },
    {
      id: 'auto',
      title: 'Automation',
      subtitle: 'GenAI & Claude Solutions',
      icon: Sparkles,
      color: 'from-emerald-400 to-green-600',
      details: 'Using Generative AI and automation to streamline invoice tracking, customer allocation, credit knock-off matching, and real-time KPI reporting.'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Forecasting & Reporting',
      icon: BarChart3,
      color: 'from-blue-400 to-teal-500',
      details: 'Delivering executive dashboards, AR aging analysis, DSO monitoring, and consolidated financial forecasting.'
    },
    {
      id: 'compliance',
      title: 'Compliance',
      subtitle: 'US GAAP & Internal Controls',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-blue-600',
      details: 'Adherence to US GAAP standards, internal controls, audit-ready documentation, and SOP governance.'
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  return (
    <div className="rounded-3xl bg-gradient-to-b from-navy-800/90 to-navy-900/90 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
        <div>
          <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest">Leadership Framework</span>
          <h3 className="text-lg font-bold text-white">Finance Leadership Framework</h3>
        </div>
        <span className="text-xs text-slate-400 font-mono">Click node to inspect</span>
      </div>

      {/* Interactive Center Hub */}
      <div className="relative py-4 sm:py-6 flex items-center justify-center">
        <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 border-2 border-emerald-500/50 shadow-[0_0_35px_rgba(34,197,94,0.3)] flex flex-col items-center justify-center text-center p-2">
          <span className="text-2xl sm:text-3xl font-black text-white font-numeric tracking-tight">18+</span>
          <span className="text-[9px] uppercase font-bold text-emerald-400 tracking-wider">YEARS EXPERIENCE</span>
          <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider mt-0.5">FINANCE LEADERSHIP</span>
        </div>
      </div>

      {/* Six Clickable Pillar Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-4">
        {nodes.map((node) => {
          const isSelected = activeNodeId === node.id;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-navy-700 border-emerald-500/60 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                  : 'bg-navy-900/70 border-white/5 hover:border-white/20 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`p-1.5 rounded-lg bg-gradient-to-br ${node.color} text-navy-950 font-bold`}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
              </div>
              <p className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                {node.title}
              </p>
              <p className="text-[10px] text-slate-400 truncate mt-0.5">{node.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card of Selected Node */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-xl bg-navy-950/80 border border-emerald-500/20 text-xs text-slate-300 space-y-2 mt-2"
        >
          <div className="flex items-center gap-2 text-white font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{activeNode.title} Capability</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{activeNode.details}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
