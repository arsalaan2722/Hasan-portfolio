import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: "financial-management",
    title: "Financial Management",
    iconName: "PieChart",
    skills: [
      "US GAAP Compliance",
      "General Ledger (GL)",
      "Budgeting & Planning",
      "Financial Forecasting",
      "P&L Analysis",
      "Balance Sheet Analysis",
      "Management Reporting",
      "Internal Financial Controls"
    ]
  },
  {
    id: "accounts-receivable",
    title: "Accounts Receivable",
    iconName: "TrendingUp",
    skills: [
      "Aging Analysis",
      "DSO Monitoring & Reduction",
      "Strategic Collections",
      "Cash Application",
      "Credit Risk Assessment",
      "Customer Account Reconciliation",
      "Bad Debt Management & Write-offs",
      "Dispute & Claims Resolution"
    ]
  },
  {
    id: "accounts-payable",
    title: "Accounts Payable",
    iconName: "Receipt",
    skills: [
      "End-to-End Invoice Processing",
      "Disbursement & Payment Management",
      "Vendor Statement Reconciliation",
      "3-Way Matching & Controls",
      "Financial & Statutory Audit Support",
      "Procure-to-Pay (P2P) Governance"
    ]
  },
  {
    id: "financial-operations",
    title: "Financial Operations",
    iconName: "Activity",
    skills: [
      "Month-End Close Management",
      "Quarter-End & Year-End Close",
      "Multi-Currency Bank Reconciliation",
      "US Payroll & Tax Compliance (941/401K)",
      "Journal Entries & Accruals",
      "Suspense Account Clearance"
    ]
  },
  {
    id: "finance-transformation",
    title: "Finance Transformation & AI",
    iconName: "Cpu",
    skills: [
      "Global Process Migration (US & UK)",
      "'Fix and Shift' Methodology",
      "AI & GenAI Automation (Claude)",
      "Executive Dashboard Development",
      "Cross-System ERP Integrations",
      "Continuous Process Improvement"
    ]
  },
  {
    id: "leadership-governance",
    title: "Leadership & Governance",
    iconName: "Users",
    skills: [
      "Large-Scale Team Management (up to 30)",
      "Talent Recruitment & Onboarding",
      "Performance Management & Coaching",
      "KPI & Performance Goal Setting",
      "Cross-Functional Collaboration (FP&A, Sales)",
      "Executive & CFO Stakeholder Presentation"
    ]
  }
];
