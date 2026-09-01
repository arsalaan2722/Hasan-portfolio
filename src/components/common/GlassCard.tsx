import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'emerald' | 'blue' | 'none';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
  onClick
}) => {
  const glowClasses = {
    emerald: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.18)] hover:border-emerald-500/40',
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] hover:border-blue-500/40',
    none: ''
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-gradient-to-br from-navy-700/90 via-navy-800/80 to-navy-900/90 backdrop-blur-xl border border-white/[0.08] shadow-card transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-white/20' : ''
      } ${glowClasses[glow]} ${className}`}
    >
      {children}
    </div>
  );
};
