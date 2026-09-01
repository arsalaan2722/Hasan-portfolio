import { Database, TrendingUp, Info } from 'lucide-react';

export const ForecastingPipelineVisual: React.FC = () => {
  return (
    <div className="bg-navy-950/90 rounded-2xl border border-white/10 p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-blue-400" /> Integrated Forecasting Data Pipeline
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
          Unified Stream
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="w-full sm:w-1/3 bg-navy-900 p-3 rounded-xl border border-blue-500/20 text-center space-y-1">
          <span className="text-[10px] font-bold uppercase text-blue-400">01. Pipeline</span>
          <p className="font-bold text-white">Salesforce CRM</p>
          <p className="text-[10px] text-slate-400">Opportunity & Contract Stages</p>
        </div>

        <span className="text-slate-500 rotate-90 sm:rotate-0 text-sm">→</span>

        <div className="w-full sm:w-1/3 bg-navy-900 p-3 rounded-xl border border-teal-500/20 text-center space-y-1">
          <span className="text-[10px] font-bold uppercase text-teal-400">02. Ledger</span>
          <p className="font-bold text-white">NetSuite ERP</p>
          <p className="text-[10px] text-slate-400">Financial & Billing Data</p>
        </div>

        <span className="text-slate-500 rotate-90 sm:rotate-0 text-sm">→</span>

        <div className="w-full sm:w-1/3 bg-navy-900 p-3 rounded-xl border border-emerald-500/20 text-center space-y-1">
          <span className="text-[10px] font-bold uppercase text-emerald-400">03. AR Engine</span>
          <p className="font-bold text-white">HighRadius</p>
          <p className="text-[10px] text-slate-400">AR & Collections Data</p>
        </div>
      </div>

      {/* Unified Output */}
      <div className="bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 p-3 rounded-xl border border-emerald-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Unified Financial Forecasting View</p>
            <p className="text-[10px] text-slate-400">Consolidated visibility across integrated financial systems.</p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Sync Active
        </span>
      </div>

      {/* Required Disclaimer */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] text-slate-400">
        <Info className="w-3 h-3 text-slate-500 shrink-0" />
        <span>Illustrative architecture diagram. No proprietary financial data is displayed.</span>
      </div>
    </div>
  );
};
