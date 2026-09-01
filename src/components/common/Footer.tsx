import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { personalInfo } from '../../data/personal';
import { NAV_LINKS } from '../../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/[0.08] pt-14 pb-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Left branding */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-extrabold text-white tracking-wider">
                HASAN ABDUL SHAIKH
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-xs text-emerald-400 font-semibold">
              {personalInfo.title}
            </p>
            <p className="text-[11px] text-slate-400">
              18+ Years Global US & UK Financial Operations • Process Transformation • AI Innovation
            </p>
          </div>

          {/* Quick nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright, portfolio status & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Executive Finance Portfolio</span>
            </div>
            {personalInfo.linkedin && (
              <>
                <span>•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-slate-400">
            <p>© 2026 {personalInfo.name}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-[10.5px] text-slate-500">
              Designed &amp; Developed by <span className="text-slate-300 font-semibold">Arsalaan Shaikh</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
