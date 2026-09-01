import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Bot, Info } from 'lucide-react';

interface ClaudeKPIDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaudeKPIDemoModal: React.FC<ClaudeKPIDemoModalProps> = ({ isOpen, onClose }) => {
  const queryExamples = [
    {
      role: 'Management Query',
      text: 'Analyze current AR aging trends and highlight potential areas requiring review.',
      response: 'The AI assistant can help identify aging trends, highlight high-risk accounts, and summarize areas requiring management attention. This demonstration uses illustrative data only and does not represent actual company or customer financial information.'
    },
    {
      role: 'Operational Invoicing Query',
      text: 'Summarize the workflow impact of automated invoice and credit reconciliation.',
      response: 'The solution manages 60+ invoices with automated customer allocation and automated credit knock-off functionality, reducing manual touchpoints and improving reconciliation accuracy.'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-navy-800 border border-white/10 rounded-2xl shadow-2xl p-6 z-10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Claude AI Executive Query Interface</h3>
                  <p className="text-xs text-slate-400">Illustrative Demonstration of Real-Time KPI Inquiries</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {queryExamples.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-900 border border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-blue-400">{item.role}</span>
                    <span className="text-[10px] text-slate-400 font-mono">Illustrative Demo</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium bg-navy-950/80 p-2.5 rounded-lg border border-white/5">
                    "{item.text}"
                  </p>
                  <div className="flex items-start gap-2 pt-1">
                    <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 text-xs">
              <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                Interactive demonstration based on described project functionality. No confidential company, customer, or financial data is displayed.
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-navy-700 hover:bg-navy-600 text-white rounded-lg transition-colors font-medium text-xs self-end sm:self-auto shrink-0"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
