import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'blue' | 'slate' | 'glow' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  className = '',
  dot = false
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-3 py-1 font-semibold tracking-wider',
    lg: 'text-sm px-4 py-1.5 font-semibold tracking-wider'
  };

  const variantClasses = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
    slate: 'bg-slate-800/80 text-slate-300 border border-white/10',
    glow: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/40 shadow-[0_0_15px_rgba(34,197,94,0.25)]',
    outline: 'bg-transparent text-slate-400 border border-white/15 hover:border-slate-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
