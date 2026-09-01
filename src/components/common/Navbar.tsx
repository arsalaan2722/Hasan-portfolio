import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { LinkedinIcon } from './LinkedinIcon';
import { personalInfo } from '../../data/personal';
import { NAV_LINKS } from '../../utils/constants';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-navy-950/85 backdrop-blur-xl border-b border-white/[0.08] shadow-glass py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Link */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-navy-950 font-black text-sm shadow-[0_0_15px_rgba(34,197,94,0.35)] group-hover:scale-105 transition-transform">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-wider text-white group-hover:text-emerald-400 transition-colors">
                  HASAN<span className="text-emerald-400">.</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest -mt-1 hidden sm:inline">
                  Finance Leader
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-navy-800/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-navy-800/80 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-all shadow-sm"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}

              <Button
                variant="primary"
                size="sm"
                icon={<FileText className="w-3.5 h-3.5" />}
                onClick={onOpenResume}
                className="hidden sm:inline-flex"
              >
                View Resume
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-navy-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer Body */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-900 border-l border-white/10 p-6 pt-24 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <p className="text-xs uppercase font-bold text-slate-400 tracking-widest px-3 mb-4">
                Executive Portfolio Navigation
              </p>
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button
                variant="primary"
                size="md"
                icon={<FileText className="w-4 h-4" />}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full justify-center"
              >
                View Resume
              </Button>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 border border-white/10 text-xs font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  18+ Years Global Finance Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
