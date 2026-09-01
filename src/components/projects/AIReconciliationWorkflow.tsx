import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  UserCheck,
  Split,
  CheckCircle,
  Play,
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';

export const AIReconciliationWorkflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      title: "Invoice Ingestion",
      icon: FileText,
      status: "60+ Invoices Queued",
      detail: "Claude AI processes invoice data, line items, and transaction details.",
      accent: "border-blue-500/40 text-blue-400 bg-blue-500/10"
    },
    {
      title: "Customer Allocation",
      icon: UserCheck,
      status: "Account Matching",
      detail: "Automated routing to corresponding customer master records without manual lookup.",
      accent: "border-teal-500/40 text-teal-400 bg-teal-500/10"
    },
    {
      title: "Credit Matching",
      icon: Split,
      status: "Credit Line Sync",
      detail: "Intelligent matching of available credit memos and discount balances.",
      accent: "border-amber-500/40 text-amber-400 bg-amber-500/10"
    },
    {
      title: "Credit Knock-Off",
      icon: Sparkles,
      status: "Automated Clearing",
      detail: "Automated credit knock-off and balance application.",
      accent: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
    },
    {
      title: "Reconciliation Done",
      icon: CheckCircle,
      status: "Workflow Complete",
      detail: "Automated reconciliation finalized with audit trail and reduced suspense balances.",
      accent: "border-emerald-400 text-emerald-300 bg-emerald-400/20"
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="bg-navy-950/90 rounded-2xl border border-white/10 p-4 sm:p-6 space-y-5">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-white tracking-wide">Interactive AI Reconciliation Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-all"
          >
            <Play className="w-3 h-3" /> Step Next
          </button>
          <button
            onClick={handleReset}
            className="p-1 rounded-lg bg-navy-800 text-slate-400 hover:text-white transition-colors"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5-Step Visual Nodes Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === currentStep;
          const isPassed = idx < currentStep;

          return (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-navy-850 border-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] ring-1 ring-emerald-400'
                  : isPassed
                  ? 'bg-navy-900/90 border-emerald-500/40 text-slate-300'
                  : 'bg-navy-900/40 border-white/5 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`p-1.5 rounded-lg ${isActive ? step.accent : 'bg-navy-950 text-slate-400'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-400">0{idx + 1}</span>
              </div>
              <p className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {step.title}
              </p>
              <span className={`text-[9px] mt-0.5 ${isActive ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                {step.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Step Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-3.5 rounded-xl bg-navy-900/80 border border-emerald-500/20 text-xs flex items-center justify-between gap-4"
        >
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              Step 0{currentStep + 1} Active Process
            </span>
            <p className="text-slate-200 font-medium">{steps[currentStep].detail}</p>
          </div>
          <span className="shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Processed
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Required Disclaimer */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] text-slate-400">
        <Info className="w-3 h-3 text-slate-500 shrink-0" />
        <span>Interactive demonstration based on described project functionality. No confidential company, customer, or financial data is displayed.</span>
      </div>
    </div>
  );
};
