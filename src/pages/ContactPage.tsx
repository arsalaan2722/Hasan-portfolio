import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon } from '../components/common/LinkedinIcon';

interface ContactPageProps {
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedUrls, setSubmittedUrls] = useState<{ gmail: string; mailto: string } | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid corporate email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a message regarding your inquiry.');
      return;
    }

    setErrorMessage('');

    const subjectEncoded = encodeURIComponent(
      formData.subject || `Professional Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Direct Gmail Web Compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${subjectEncoded}&body=${bodyEncoded}`;

    // Standard mailto link fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmittedUrls({ gmail: gmailUrl, mailto: mailtoUrl });

    // Open Gmail directly in a new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <SectionHeader
          badgeText="GET IN TOUCH"
          heading="Let's Connect"
          subheading="Open to professional conversations, finance leadership opportunities, transformation initiatives, and collaboration."
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Executive Contact Details & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="rounded-3xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Executive Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct channels for senior leadership discussions and career opportunities.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Location */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</p>
                    <p className="text-sm font-bold text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</p>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-navy-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-navy-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              {personalInfo.linkedin && (
                <div className="p-4 rounded-2xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">LinkedIn Profile</p>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1"
                      >
                        <span>Hasan Shaikh</span>
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.linkedin!, 'linkedin')}
                    className="p-2 rounded-lg bg-navy-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy LinkedIn URL"
                    aria-label="Copy LinkedIn URL"
                  >
                    {copiedField === 'linkedin' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=Executive%20Opportunity%20-%20Hasan%20Abdul%20Shaikh`}
                className="flex-1 justify-center"
                onClick={() => {
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=Executive%20Opportunity%20-%20Hasan%20Abdul%20Shaikh`,
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
              >
                Send Email
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={<FileText className="w-4 h-4 text-emerald-400" />}
                onClick={onOpenResume}
                className="flex-1 justify-center"
              >
                View Resume
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl bg-gradient-to-br from-navy-800/90 via-navy-850/80 to-navy-900/90 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Please fill out your inquiry below to initiate a conversation.
            </p>

            {isSuccess && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 mb-4 space-y-2.5">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Gmail compose opened with your pre-filled message!</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  If Gmail didn't launch automatically, use one of the direct links below:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {submittedUrls?.gmail && (
                    <a
                      href={submittedUrls.gmail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-navy-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open in Gmail Web
                    </a>
                  )}
                  {submittedUrls?.mailto && (
                    <a
                      href={submittedUrls.mailto}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 text-slate-200 border border-white/10 font-semibold text-xs hover:bg-navy-700 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      Open in Mail App
                    </a>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Executive Finance Role / Transformation Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Provide context on your role, project, or organizational inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900/80 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                iconPosition="right"
                className="w-full justify-center"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
