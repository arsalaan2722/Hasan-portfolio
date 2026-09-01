import { Layers } from 'lucide-react';

export const ProcessMatrixVisual: React.FC = () => {
  const workflows = [
    { name: 'Sales Tax Workflows', metric: 'Standardized Processes', status: 'Standardized' },
    { name: 'Portal Invoicing', metric: 'Vendor & Customer Portals', status: 'Improved Workflow' },
    { name: 'Non-Portal Invoicing', metric: 'Invoicing Process Flow', status: 'Improved Workflow' },
    { name: 'Transaction Reconciliation', metric: 'Transaction-Level Matching', status: 'Reduced Suspense Items' },
  ];

  return (
    <div className="bg-navy-950/90 rounded-2xl border border-white/10 p-4 sm:p-5 space-y-3.5">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-400" /> Operational Standardization Matrix
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Process Standardization
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {workflows.map((wf, idx) => (
          <div key={idx} className="bg-navy-900/80 p-2.5 rounded-xl border border-white/5 flex items-center justify-between">
            <div>
              <p className="font-bold text-white text-xs">{wf.name}</p>
              <p className="text-[10px] text-slate-400">{wf.metric}</p>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {wf.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
