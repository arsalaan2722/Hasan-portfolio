import type { TechCategory } from '../types/portfolio';

export const techCategories: TechCategory[] = [
  {
    id: "erp",
    category: "ERP & Accounting Systems",
    iconName: "Layers",
    description: "Core financial systems for general ledger management, financial reporting, and operational accounting.",
    technologies: [
      { name: "NetSuite", description: "Cloud ERP & Financial Management", isKey: true },
      { name: "SAP / SAP R/3", description: "Enterprise ERP & Financial Operations", isKey: true },
      { name: "Oracle", description: "Enterprise Financial Systems", isKey: true },
      { name: "QuickBooks", description: "Financial Accounting & Reporting", isKey: false },
      { name: "Microsoft Navision", description: "Financial Operations & Reconciliation", isKey: false }
    ]
  },
  {
    id: "crm",
    category: "CRM & Enterprise Platforms",
    iconName: "Network",
    description: "Enterprise CRM and workflow orchestration platforms integrated with financial workflows.",
    technologies: [
      { name: "Salesforce", description: "CRM & Financial Process Integration", isKey: true },
      { name: "ServiceNow", description: "Enterprise Workflow & Service Management", isKey: true }
    ]
  },
  {
    id: "analytics",
    category: "Analytics & Reporting",
    iconName: "BarChart3",
    description: "Data visualization and reporting platforms used to deliver executive KPI dashboards.",
    technologies: [
      { name: "Tableau", description: "KPI Reporting & Data Visualization", isKey: true },
      { name: "Domo", description: "Business Intelligence & Reporting", isKey: true },
      { name: "Microsoft Excel", description: "Financial Modeling & Analysis", isKey: true }
    ]
  },
  {
    id: "automation-ai",
    category: "Finance Automation & AI",
    iconName: "Sparkles",
    description: "Finance automation tools and Generative AI solutions used to improve operational efficiency.",
    technologies: [
      { name: "HighRadius", description: "AR Automation & Credit Management", isKey: true },
      { name: "Claude AI", description: "Generative AI for Finance Operations & KPI Reporting", isKey: true },
      { name: "Generative AI", description: "AI-Driven KPI Tracking & Analytics", isKey: true }
    ]
  },
  {
    id: "legacy-specialized",
    category: "Specialized Systems",
    iconName: "Database",
    description: "Enterprise applications and financial document management tools.",
    technologies: [
      { name: "EnrolleZ", description: "US Payroll & Benefit Administration", isKey: false },
      { name: "Filenet WorkplaceXT", description: "Document Management & Audit Records", isKey: false },
      { name: "HULK & Canper", description: "Transaction Clearing & Claims Management", isKey: false },
      { name: "Vista Plus & PMwin", description: "Financial Output Management & Reporting", isKey: false }
    ]
  }
];
