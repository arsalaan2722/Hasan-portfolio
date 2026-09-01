import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/common/SectionHeader';
import {
  Layers,
  Network,
  BarChart3,
  Sparkles,
  Database,
  Search
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  isKey?: boolean;
}

interface TechGroup {
  id: string;
  category: string;
  iconName: string;
  description: string;
  technologies: TechItem[];
}

export const TechnologyPage: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const techGroups: TechGroup[] = [
    {
      id: "erp",
      category: "ERP & Accounting Systems",
      iconName: "Layers",
      description: "Core enterprise financial platforms utilized for general ledger management, month-end closing, and statutory compliance.",
      technologies: [
        { name: "NetSuite", category: "Cloud ERP & Financial Management", isKey: true },
        { name: "SAP / SAP R/3", category: "Enterprise ERP & Financial Operations", isKey: true },
        { name: "Oracle", category: "Enterprise Financial Systems", isKey: true },
        { name: "QuickBooks", category: "Financial Accounting & Reporting", isKey: false },
        { name: "Microsoft Navision", category: "Financial Operations & Reconciliation", isKey: false }
      ]
    },
    {
      id: "crm",
      category: "CRM & Enterprise Platforms",
      iconName: "Network",
      description: "Enterprise workflow platforms integrated with billing, contract workflows, and customer accounts.",
      technologies: [
        { name: "Salesforce", category: "CRM & Billing Integration", isKey: true },
        { name: "ServiceNow", category: "Enterprise Operations & Workflow Management", isKey: true }
      ]
    },
    {
      id: "analytics",
      category: "Analytics & Business Intelligence",
      iconName: "BarChart3",
      description: "Visualization tools and modeling frameworks used for executive KPI reporting and FP&A collaboration.",
      technologies: [
        { name: "Tableau", category: "Data Visualization & KPI Reporting", isKey: true },
        { name: "Domo", category: "Business Intelligence & Metrics Reporting", isKey: true },
        { name: "Microsoft Excel", category: "Advanced Financial Modeling & Reconciliation", isKey: true },
        { name: "Microsoft Visio", category: "Business Process Mapping & Workflows", isKey: false }
      ]
    },
    {
      id: "automation-ai",
      category: "Finance Automation & AI",
      iconName: "Sparkles",
      description: "Modern automation platforms and Generative AI frameworks used to accelerate reconciliations and management reporting.",
      technologies: [
        { name: "HighRadius", category: "AR Automation & Credit Governance", isKey: true },
        { name: "Claude AI", category: "Generative AI for Finance Operations & Query Engines", isKey: true },
        { name: "GenAI Dashboards", category: "Executive KPI Tracking & Reporting", isKey: true }
      ]
    },
    {
      id: "specialized",
      category: "Specialized Financial Tools",
      iconName: "Database",
      description: "Dedicated enterprise software, transaction clearing systems, and document repositories.",
      technologies: [
        { name: "EnrolleZ", category: "US Payroll & Benefits Administration", isKey: false },
        { name: "Filenet WorkplaceXT", category: "Document Management & Audit Records", isKey: false },
        { name: "HULK", category: "Transaction Clearing & Dispute Management", isKey: false },
        { name: "Canper", category: "Customer Account Reconciliation", isKey: false },
        { name: "Vista Plus", category: "Financial Output Management", isKey: false },
        { name: "PMwin", category: "Accounting Process Records", isKey: false }
      ]
    }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
      case 'Database':
        return <Database className="w-5 h-5 text-slate-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredGroups = techGroups
    .filter((group) => selectedCatId === 'all' || group.id === selectedCatId)
    .map((group) => {
      if (!searchQuery.trim()) return group;
      const matchingTechs = group.technologies.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...group, technologies: matchingTechs };
    })
    .filter((group) => group.technologies.length > 0);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <SectionHeader
          badgeText="SYSTEMS & TOOLS"
          heading="Finance Technology Ecosystem"
          subheading="A broad toolkit of ERPs, CRMs, BI analytics suites, specialized financial systems, and Generative AI platforms utilized across 18+ years of global finance operations."
          align="center"
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto -mt-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-navy-800/80 rounded-2xl border border-white/5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCatId('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCatId === 'all'
                  ? 'bg-emerald-500 text-navy-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Systems
            </button>
            {techGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedCatId(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCatId === g.id
                    ? 'bg-emerald-500 text-navy-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {g.category.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search software / tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-navy-800/90 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Tech Group Cards */}
      <div className="space-y-8">
        {filteredGroups.map((group, groupIdx) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
            className="rounded-3xl bg-gradient-to-br from-navy-800/80 via-navy-850/70 to-navy-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10">
                  {getCategoryIcon(group.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  <p className="text-xs text-slate-400">{group.description}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 self-start sm:self-center bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {group.technologies.length} Tools
              </span>
            </div>

            {/* Tech Chips Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {group.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-navy-900/90 border border-white/5 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-sm sm:text-base text-white group-hover:text-emerald-400 transition-colors">
                        {tech.name}
                      </span>
                      {tech.isKey && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                          Core
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
