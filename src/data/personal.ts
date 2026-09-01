import type { PersonalInfo, TrustHighlight } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Hasan Abdul Shaikh",
  title: "Finance & Accounting Leader",
  subtitle: "Driving Financial Excellence, Operational Transformation & Intelligent Automation",
  summary: "Seasoned Finance and Accounting professional with over 18 years of comprehensive experience managing end-to-end financial operations across Accounts Receivable, Accounts Payable, General Ledger, US GAAP compliance, financial reporting, budgeting, forecasting, reconciliation, payroll management, and team leadership.",
  extendedSummary: [
    "Hasan Abdul Shaikh is a seasoned Finance and Accounting professional with over 18 years of experience managing complex financial operations across global organizations.",
    "His expertise spans Accounts Receivable, Accounts Payable, General Ledger, US GAAP compliance, budgeting, forecasting, financial reporting, reconciliation, payroll operations, credit management, collections, bad debt analysis, and month-end and year-end closing.",
    "Throughout his career, he has successfully led finance teams, managed large customer portfolios, supported global process migrations, implemented financial technology solutions, and introduced automation initiatives that improve operational efficiency and financial accuracy.",
    "In recent years, he has also explored the use of Generative AI to improve finance operations, KPI reporting, invoice tracking, reconciliation workflows, and management decision-making."
  ],
  location: "Pune, Maharashtra, India",
  email: "hasan2722@gmail.com",
  phone: "07276353058",
  linkedin: "https://www.linkedin.com/in/hasan-shaikh-7a2698b2/",
  yearsOfExperience: 18
};

export const trustHighlights: TrustHighlight[] = [
  {
    id: "exp",
    value: "18+ Years",
    label: "Finance & Accounting Experience",
    sublabel: "Global US & UK operations track record",
    iconName: "TrendingUp"
  },
  {
    id: "team-curr",
    value: "15 Members",
    label: "Current Team Leadership",
    sublabel: "Active leadership at CrowdStrike",
    iconName: "Users"
  },
  {
    id: "team-max",
    value: "30 Members",
    label: "Largest Team Managed",
    sublabel: "End-to-end US finance operations",
    iconName: "ShieldCheck"
  },
  {
    id: "accounts",
    value: "3,000+",
    label: "Customer Accounts Managed",
    sublabel: "Cash application & portfolio risk",
    iconName: "Briefcase"
  },
  {
    id: "gaap",
    value: "US GAAP",
    label: "Financial Operations Expertise",
    sublabel: "GL, AR/AP, Audit & Compliance",
    iconName: "FileCheck2"
  }
];
