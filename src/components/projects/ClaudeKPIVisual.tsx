import { useState } from 'react';
import { Bot, Info } from 'lucide-react';

export const ClaudeKPIVisual: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);

  const prompts = [
    {
      query: "Analyze current AR aging trends and highlight potential areas requiring review.",
      response: "The AI assistant can help identify aging trends, highlight high-risk accounts, and summarize areas requiring management attention. This demonstration uses illustrative data only and does not represent actual company or customer financial information."
    },
    {
      query: "Generate an executive summary of team KPI reporting and operational visibility.",
      response: "The AI assistant can synthesize operational reporting data across finance streams to provide leadership with actionable insights and reduce manual compilation time."
    },
    {
      query: "Summarize team workflow capacity and process automation opportunities.",
      response: "The solution enables management to monitor workflow allocation, track repetitive touchpoints, and identify candidates for process automation and credit knock-off workflows."
    }
  ];

  return (
    <div className="bg-navy-950/90 rounded-2xl border border-white/10 p-4 sm:p-5 space-y-3.5">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-navy-950 font-bold text-[10px]">
            AI
          </div>
          <span className="text-xs font-bold text-white">Claude GenAI Executive Query Engine</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          DEMO
        </span>
      </div>

      {/* Query Selector Tabs */}
      <div className="flex flex-col sm:flex-row gap-1.5">
        {prompts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPrompt(idx)}
            className={`flex-1 text-left p-2 rounded-lg text-[11px] font-medium transition-all ${
              selectedPrompt === idx
                ? 'bg-navy-800 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-navy-900/60 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            Query 0{idx + 1}
          </button>
        ))}
      </div>

      {/* Active Simulated Chat Query */}
      <div className="space-y-2.5 pt-1 text-xs">
        <div className="bg-navy-900/90 p-3 rounded-xl border border-white/5 flex items-start gap-2.5">
          <span className="text-slate-400 font-bold shrink-0 text-[10px] uppercase bg-navy-950 px-1.5 py-0.5 rounded">Prompt</span>
          <p className="text-slate-200">{prompts[selectedPrompt].query}</p>
        </div>

        <div className="bg-gradient-to-br from-navy-850 to-navy-900 p-3 rounded-xl border border-emerald-500/30 flex items-start gap-2.5 shadow-[0_0_20px_rgba(34,197,94,0.08)]">
          <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Illustrative AI Demo Output</span>
            <p className="text-slate-300 leading-relaxed">{prompts[selectedPrompt].response}</p>
          </div>
        </div>
      </div>

      {/* Required Disclaimer */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] text-slate-400">
        <Info className="w-3 h-3 text-slate-500 shrink-0" />
        <span>Interactive demonstration based on described project functionality. No confidential company, customer, or financial data is displayed.</span>
      </div>
    </div>
  );
};
