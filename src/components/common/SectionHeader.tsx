import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badgeText: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  badgeVariant?: 'emerald' | 'blue' | 'slate' | 'glow';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  heading,
  subheading,
  align = 'center',
  badgeVariant = 'emerald',
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      <Badge variant={badgeVariant} dot className="mb-4">
        {badgeText}
      </Badge>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
};
