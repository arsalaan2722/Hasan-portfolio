import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, Building, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { personalInfo } from '../../data/personal';
import { experienceList } from '../../data/experience';
import { educationList } from '../../data/education';
import { developmentPrograms } from '../../data/development';
import { skillCategories } from '../../data/skills';
import { RESUME_PDF_PATH } from '../../utils/constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-navy-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header actions */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-900/90 backdrop-blur-sm sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm font-semibold text-white tracking-wide">Executive Curriculum Vitae</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• Hasan Abdul Shaikh</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={RESUME_PDF_PATH}
                  download="Hasan_Abdul_Shaikh_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-navy-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-navy-700 hover:bg-navy-600 border border-white/10 rounded-lg transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-emerald-400" />
                  Print
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body (Printable Area) */}
            <div id="resume-print-area" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-navy-900/50 text-slate-200">
              {/* Header Profile */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-emerald-400 font-semibold text-base sm:text-lg mt-0.5">
                      {personalInfo.title}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      {personalInfo.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    {personalInfo.linkedin && (
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <a
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-400 transition-colors"
                        >
                          linkedin.com/in/hasan-shaikh-7a2698b2
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Executive Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Core Competencies Matrix */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Core Competencies & Financial Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {skillCategories.map((category) => (
                    <div key={category.id} className="bg-navy-800/80 p-3 rounded-lg border border-white/5">
                      <p className="text-xs font-bold text-white mb-1.5">{category.title}</p>
                      <ul className="space-y-1">
                        {category.skills.slice(0, 4).map((skill, idx) => (
                          <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4" /> Professional Experience (18+ Years)
                </h2>
                <div className="space-y-6">
                  {experienceList.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-emerald-500/30 pl-4 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                          <p className="text-xs text-emerald-400 font-medium">{exp.company} {exp.location ? `• ${exp.location}` : ''}</p>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 mt-1 sm:mt-0 px-2 py-0.5 rounded bg-navy-800 border border-white/5 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {exp.responsibilities.slice(0, 5).map((resp, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 bg-navy-950/60 text-slate-400 rounded border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Leadership Development */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/10">
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-3">
                    Education
                  </h2>
                  <div className="space-y-3">
                    {educationList.map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <p className="font-bold text-white">{edu.degree}</p>
                        <p className="text-slate-300">{edu.institution}, {edu.university}</p>
                        <p className="text-slate-400 text-[11px]">{edu.year} {edu.score ? `• ${edu.score}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-3">
                    Leadership & Executive Development
                  </h2>
                  <div className="space-y-3">
                    {developmentPrograms.map((dev) => (
                      <div key={dev.id} className="text-xs">
                        <p className="font-bold text-white">{dev.title}</p>
                        <p className="text-emerald-400 text-[11px]">{dev.subtitle}</p>
                        {dev.items && (
                          <p className="text-slate-400 text-[11px] mt-0.5">{dev.items.join(' • ')}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 bg-navy-900 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">© 2026 Hasan Abdul Shaikh. Professional Profile.</span>
              <a
                href={RESUME_PDF_PATH}
                download="Hasan_Abdul_Shaikh_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-navy-950 text-xs font-bold rounded-lg shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
