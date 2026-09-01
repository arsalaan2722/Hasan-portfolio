import { Cloud, Info } from 'lucide-react';

export const CloudBillingVisual: React.FC = () => {
  const serviceBreakdown = [
    { service: 'Compute Services', description: 'Usage Monitoring', status: 'Active' },
    { service: 'Storage Services', description: 'Consumption Visibility', status: 'Active' },
    { service: 'Database Services', description: 'Cost Tracking', status: 'Active' },
    { service: 'Network Services', description: 'Operational Monitoring', status: 'Active' },
  ];

  return (
    <div className="bg-navy-950/90 rounded-2xl border border-white/10 p-4 sm:p-5 space-y-3.5">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <Cloud className="w-3.5 h-3.5 text-blue-400" /> AWS Billing & Usage Dashboard
        </span>
        <span className="text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
          Illustrative Overview
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {serviceBreakdown.map((item, idx) => (
          <div key={idx} className="bg-navy-900 p-3 rounded-xl border border-white/5 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-white">{item.service}</p>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                {item.status}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="p-2.5 rounded-xl bg-navy-900/60 border border-white/5 text-xs text-slate-300">
        <p className="text-[11px] text-emerald-400 font-medium">
          Improved visibility into AWS billing, usage, and consumption patterns.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="pt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
        <Info className="w-3 h-3 text-slate-500 shrink-0" />
        <span>Illustrative cloud dashboard demonstration. No proprietary cloud billing data displayed.</span>
      </div>
    </div>
  );
};
