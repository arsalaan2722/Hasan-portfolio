import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../../data/education';
import { SectionHeader } from '../common/SectionHeader';
import { GraduationCap, Award, Building, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="EDUCATION"
          heading="Education"
          subheading="Academic qualifications in Commerce and Finance from Pune University and Maharashtra Board."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-navy-900 border border-white/5 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-300 bg-navy-950 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mt-2">
                  <Building className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {edu.university}
                </p>

                {edu.score && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-300">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{edu.score}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] text-slate-500 font-medium">
                Academic Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
