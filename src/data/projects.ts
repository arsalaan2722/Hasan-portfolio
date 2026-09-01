import type { ProjectItem } from '../types/portfolio';

export const featuredProjects: ProjectItem[] = [
  {
    id: "ai-manager-dashboard",
    projectNumber: "PROJECT 01",
    category: "Generative AI | KPI Intelligence",
    title: "AI-Powered Manager Dashboard",
    description: "Built a live management dashboard using Generative AI and Claude to track, analyze, and report team KPIs in real time. The solution provides leadership with on-demand visibility into team performance and reduces dependency on manual reporting processes.",
    impact: [
      "Real-time KPI visibility for leadership",
      "Reduced manual reporting processes",
      "Faster management insights",
      "Improved leadership decision-making"
    ],
    technologies: ["Claude AI", "GenAI", "KPI Analytics", "Executive Dashboard", "Real-time Metrics"],
    visualType: "claude-kpi",
    featuredMetric: "Real-time KPI Visibility"
  },
  {
    id: "ai-invoice-reconciliation",
    projectNumber: "PROJECT 02",
    category: "Finance Automation | Generative AI",
    title: "AI-Powered Invoice & Credit Reconciliation Tracker",
    description: "Developed a Claude-powered tracker managing 60+ invoices with automated customer allocation and automated credit knock-off functionality, reducing manual touchpoints and improving reconciliation accuracy.",
    impact: [
      "60+ invoices managed with AI-powered tracking",
      "Automated customer allocation",
      "Automated credit knock-off",
      "Improved reconciliation accuracy",
      "Reduced manual intervention"
    ],
    technologies: ["Claude AI", "Finance Automation", "Reconciliation Engine", "Credit Matching", "Allocation Rules"],
    visualType: "reconciliation-flow",
    featuredMetric: "60+ Invoices Managed with AI-Powered Tracking"
  },
  {
    id: "forecasting-module",
    projectNumber: "PROJECT 03",
    category: "Financial Analytics | System Integration",
    title: "Integrated Financial Forecasting Module",
    description: "Created a centralized forecasting module by integrating Salesforce, NetSuite, and HighRadius, consolidating financial data into a single reliable forecasting view.",
    impact: [
      "Consolidated forecasting data from multiple financial systems",
      "Improved financial data visibility",
      "Reduced dependency on disconnected systems",
      "Better financial planning"
    ],
    technologies: ["Salesforce", "NetSuite", "HighRadius", "FP&A Integration", "Unified Forecasting"],
    visualType: "forecasting-pipeline",
    featuredMetric: "3-System Unified Pipeline"
  },
  {
    id: "aws-billing-intelligence",
    projectNumber: "PROJECT 04",
    category: "Cloud Financial Management",
    title: "AWS Billing & Usage Intelligence Dashboard",
    description: "Built an AWS billing and usage dashboard to improve visibility into cloud costs and consumption patterns.",
    impact: [
      "Improved visibility into AWS billing, usage, and consumption patterns",
      "Continuous cost and usage tracking",
      "Consumption pattern analysis",
      "Improved financial awareness"
    ],
    technologies: ["Cloud Financial Management", "Cost Visibility", "Usage Analytics", "Trend Monitoring"],
    visualType: "cloud-billing",
    featuredMetric: "Cloud Cost Visibility"
  },
  {
    id: "finance-process-optimization",
    projectNumber: "PROJECT 05",
    category: "Process Improvement",
    title: "Finance Process Optimization",
    description: "Improved and standardized critical enterprise finance workflows including sales tax processes, portal invoicing, non-portal invoicing, and transaction-level reconciliation.",
    impact: [
      "Improved process consistency",
      "Improved invoicing workflow efficiency",
      "Better transaction-level reconciliation",
      "Significant reduction in suspense items"
    ],
    technologies: ["Sales Tax Process", "Portal Invoicing", "Non-Portal Invoicing", "Transaction Reconciliation", "Process Improvement"],
    visualType: "process-matrix",
    featuredMetric: "Process Standardization"
  }
];
