const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Page 1
  let page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const darkNavy = rgb(0.03, 0.07, 0.12);
  const emerald = rgb(0.06, 0.72, 0.5);
  const slateText = rgb(0.3, 0.35, 0.42);
  const blackText = rgb(0.1, 0.12, 0.15);

  // Header Bar
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    fill: darkNavy,
  });

  page.drawText('HASAN ABDUL SHAIKH', {
    x: 40,
    y: height - 45,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Finance & Accounting Leader', {
    x: 40,
    y: height - 65,
    size: 11,
    font: fontBold,
    color: emerald,
  });

  page.drawText('Driving Financial Excellence, Operational Transformation & Intelligent Automation', {
    x: 40,
    y: height - 80,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.7, 0.75, 0.82),
  });

  // Contact header right
  page.drawText('Location: Pune, Maharashtra, India', { x: 370, y: height - 42, size: 7.5, font: fontRegular, color: rgb(0.85, 0.88, 0.92) });
  page.drawText('Email: hasan2722@gmail.com', { x: 370, y: height - 54, size: 7.5, font: fontRegular, color: rgb(0.85, 0.88, 0.92) });
  page.drawText('Phone: 07276353058 | Exp: 18+ Years', { x: 370, y: height - 66, size: 7.5, font: fontRegular, color: rgb(0.85, 0.88, 0.92) });
  page.drawText('LinkedIn: linkedin.com/in/hasan-shaikh-7a2698b2', { x: 370, y: height - 78, size: 7.5, font: fontRegular, color: rgb(0.85, 0.88, 0.92) });

  let y = height - 120;

  // Summary
  page.drawText('EXECUTIVE SUMMARY', { x: 40, y, size: 10, font: fontBold, color: darkNavy });
  page.drawLine({ start: { x: 40, y: y - 3 }, end: { x: width - 40, y: y - 3 }, thickness: 1, color: emerald });
  y -= 16;

  const summary = [
    'Seasoned Finance and Accounting professional with over 18 years of comprehensive experience managing end-to-end',
    'financial operations across Accounts Receivable, Accounts Payable, General Ledger, US GAAP compliance, financial',
    'reporting, budgeting, forecasting, reconciliation, payroll management, and team leadership.',
    'Experienced in leading high-performing finance teams, managing complex US and UK financial operations, driving process',
    'migrations, improving internal controls, developing executive dashboards, implementing finance technology platforms,',
    'and building AI-powered solutions to improve efficiency, accuracy, and management visibility.'
  ];

  for (const line of summary) {
    page.drawText(line, { x: 40, y, size: 8.5, font: fontRegular, color: blackText });
    y -= 11;
  }

  y -= 8;

  // Core Competencies
  page.drawText('CORE FINANCIAL COMPETENCIES', { x: 40, y, size: 10, font: fontBold, color: darkNavy });
  page.drawLine({ start: { x: 40, y: y - 3 }, end: { x: width - 40, y: y - 3 }, thickness: 1, color: emerald });
  y -= 16;

  const skills = [
    '• Financial Management: US GAAP Compliance, General Ledger, Budgeting, Forecasting, P&L & Balance Sheet Analysis',
    '• Accounts Receivable: Aging Analysis, DSO Monitoring & Reduction, Cash Application, Credit Assessment, Bad Debt',
    '• Accounts Payable: End-to-End Invoice Processing, Payment Management, Vendor Statement Reconciliation, Internal Controls',
    '• Financial Operations: Month/Quarter/Year-End Close, Multi-Currency Bank Recs, US Payroll 941/401K, Journal Entries',
    '• Finance Transformation & AI: Process Migration (US/UK), Fix and Shift, Claude AI Automations, HighRadius, BI Dashboards',
    '• Team Leadership: Led teams of up to 30 members, Recruitment, KPI & Performance Goals, Coaching, Stakeholder Reporting'
  ];

  for (const skill of skills) {
    page.drawText(skill, { x: 40, y, size: 8, font: fontRegular, color: blackText });
    y -= 11;
  }

  y -= 8;

  // Experience
  page.drawText('PROFESSIONAL EXPERIENCE (18+ YEARS)', { x: 40, y, size: 10, font: fontBold, color: darkNavy });
  page.drawLine({ start: { x: 40, y: y - 3 }, end: { x: width - 40, y: y - 3 }, thickness: 1, color: emerald });
  y -= 18;

  // CrowdStrike
  page.drawText('CrowdStrike India Private Limited', { x: 40, y, size: 9.5, font: fontBold, color: darkNavy });
  page.drawText('April 2022 – Present | Pune, India', { x: 380, y, size: 8.5, font: fontBold, color: emerald });
  y -= 11;
  page.drawText('Assistant Manager – US Accounts & Finance (Accounts Receivable) [15-Member Team]', { x: 40, y, size: 8.5, font: fontOblique, color: slateText });
  y -= 12;

  const csBullets = [
    '• Lead a 15-member team focused on Accounts Receivable operations and financial reporting.',
    '• Manage recruitment, interviews, onboarding, performance management, and employee development.',
    '• Work with NetSuite, Salesforce, ServiceNow, Tableau, HighRadius, and Domo.',
    '• Lead strategic initiatives including HighRadius implementation, forecast dashboard development, and collection automation.',
    '• Develop and present KPI dashboards and process reports to the CFO and executive leadership.',
    '• Oversee AR operations including aging analysis, DSO monitoring, credit assessments, collections, and bad debt management.'
  ];
  for (const b of csBullets) {
    page.drawText(b, { x: 45, y, size: 8, font: fontRegular, color: blackText });
    y -= 10.5;
  }

  y -= 6;

  // Katalyst
  page.drawText('Katalyst Software Services Ltd.', { x: 40, y, size: 9.5, font: fontBold, color: darkNavy });
  page.drawText('March 2016 – March 2022 | Pune, India', { x: 380, y, size: 8.5, font: fontBold, color: emerald });
  y -= 11;
  page.drawText('Manager – US Accounts & Finance [30-Member Team | Direct CFO Reporting]', { x: 40, y, size: 8.5, font: fontOblique, color: slateText });
  y -= 12;

  const katBullets = [
    '• Directed a 30-member finance team managing end-to-end US finance operations.',
    '• Managed timesheets, invoicing, AR, AP, General Ledger, US payroll, reconciliations, and reporting.',
    '• Utilized QuickBooks, SAP, EnrolleZ, and internal finance platforms for quarter/year-end close.',
    '• Managed complete US payroll operations including calculations, tax compliance, 401K, and 941 forms.',
    '• Delivered monthly invoicing summaries, cash position reports, AR/AP aging reports, and bank reconciliations directly to CFO.'
  ];
  for (const b of katBullets) {
    page.drawText(b, { x: 45, y, size: 8, font: fontRegular, color: blackText });
    y -= 10.5;
  }

  // Page 2
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  let y2 = height - 40;

  // Header small
  page2.drawText('HASAN ABDUL SHAIKH — CURRICULUM VITAE (PAGE 2)', { x: 40, y: y2, size: 8.5, font: fontBold, color: slateText });
  y2 -= 15;
  page2.drawLine({ start: { x: 40, y: y2 }, end: { x: width - 40, y: y2 }, thickness: 0.5, color: emerald });
  y2 -= 20;

  // Wipro
  page2.drawText('Wipro, Pune', { x: 40, y: y2, size: 9.5, font: fontBold, color: darkNavy });
  page2.drawText('April 2014 – March 2016', { x: 420, y: y2, size: 8.5, font: fontBold, color: emerald });
  y2 -= 11;
  page2.drawText('Senior Executive [US Process Migration | 3,000+ Customer Accounts Managed]', { x: 40, y: y2, size: 8.5, font: fontOblique, color: slateText });
  y2 -= 12;

  const wiproBullets = [
    '• Successfully led migration of Accounts Receivable processes from US operations.',
    '• Supervised a two-member finance team and managed cash application for 3,000+ customer accounts.',
    '• Conducted collections, payment follow-ups, final demand communication, and third-party collection referrals.',
    '• Researched price claims, processed bad debt write-offs, completed journal entries and month-end close activities.',
    '• Systems: SAP, HULK, Canper, Vista Plus, PMwin, Filenet WorkplaceXT.'
  ];
  for (const b of wiproBullets) {
    page2.drawText(b, { x: 45, y: y2, size: 8, font: fontRegular, color: blackText });
    y2 -= 10.5;
  }

  y2 -= 6;

  // KT Electronics
  page2.drawText('KT Electronics', { x: 40, y: y2, size: 9.5, font: fontBold, color: darkNavy });
  page2.drawText('December 2011 – December 2013', { x: 380, y: y2, size: 8.5, font: fontBold, color: emerald });
  y2 -= 11;
  page2.drawText('Sole Proprietor [Entrepreneurship & Business Operations]', { x: 40, y: y2, size: 8.5, font: fontOblique, color: slateText });
  y2 -= 12;
  const ktBullets = [
    '• Managed all commercial operations, financial accounting, bookkeeping, vendor procurement, and cash flow management.',
    '• Directed customer relations, credit management, and end-to-end business operations.'
  ];
  for (const b of ktBullets) {
    page2.drawText(b, { x: 45, y: y2, size: 8, font: fontRegular, color: blackText });
    y2 -= 10.5;
  }

  y2 -= 6;

  // WNS Global
  page2.drawText('WNS Global Service Centre Pvt. Ltd., Pune', { x: 40, y: y2, size: 9.5, font: fontBold, color: darkNavy });
  page2.drawText('December 2007 – November 2011', { x: 380, y: y2, size: 8.5, font: fontBold, color: emerald });
  y2 -= 11;
  page2.drawText('Senior Customer Service Associate [UK Process Migration | 40 Bank Accounts]', { x: 40, y: y2, size: 8.5, font: fontOblique, color: slateText });
  y2 -= 12;
  const wnsBullets = [
    '• Worked with SAP R/3, Oracle, and Microsoft Navision.',
    '• Successfully migrated bank reconciliation processes from UK operations; supervised a team of 4 members.',
    '• Retrieved daily bank statements for 40 accounts across multiple financial institutions.',
    '• Performed daily bank & credit card reconciliation, investigated discrepancies, and prepared monthly statements.'
  ];
  for (const b of wnsBullets) {
    page2.drawText(b, { x: 45, y: y2, size: 8, font: fontRegular, color: blackText });
    y2 -= 10.5;
  }

  y2 -= 12;

  // Featured AI & Tech Initiatives
  page2.drawText('FEATURED INITIATIVES & AI INNOVATIONS', { x: 40, y: y2, size: 10, font: fontBold, color: darkNavy });
  page2.drawLine({ start: { x: 40, y: y2 - 3 }, end: { x: width - 40, y: y2 - 3 }, thickness: 1, color: emerald });
  y2 -= 16;

  const projBullets = [
    '• AI-Powered Manager Dashboard: Built live management dashboard using GenAI & Claude to track & report KPIs in real time.',
    '• AI Invoice & Credit Reconciliation Tracker: Developed Claude-powered tracker managing 60+ invoices with auto customer allocation & credit knock-offs.',
    '• Integrated Financial Forecasting: Centralized forecasting module consolidating financial data across Salesforce, NetSuite, and HighRadius.',
    '• AWS Billing & Usage Dashboard: Improved visibility into AWS billing, usage, and consumption patterns.',
    '• Finance Process Optimization: Standardized sales tax, portal/non-portal invoicing, and transaction-level reconciliation.'
  ];
  for (const b of projBullets) {
    page2.drawText(b, { x: 45, y: y2, size: 8, font: fontRegular, color: blackText });
    y2 -= 11;
  }

  y2 -= 12;

  // Education & Development
  page2.drawText('EDUCATION & PROFESSIONAL DEVELOPMENT', { x: 40, y: y2, size: 10, font: fontBold, color: darkNavy });
  page2.drawLine({ start: { x: 40, y: y2 - 3 }, end: { x: width - 40, y: y2 - 3 }, thickness: 1, color: emerald });
  y2 -= 16;

  page2.drawText('• Master of Business Administration – Finance | Institute of Management and Career Development College, Pune University | 2007 (69%)', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });
  y2 -= 11;
  page2.drawText('• Bachelor of Commerce | Appasaheb Jedhe College, Pune University | 2005 (68%)', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });
  y2 -= 11;
  page2.drawText('• Higher Secondary Certificate | Poona College, Maharashtra Board | 2002', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });
  y2 -= 11;
  page2.drawText('• Leadership Programs: Falcon Ignite (Leadership Development Program), Falcon Forward (Leadership Development Program)', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });
  y2 -= 11;
  page2.drawText('• 40+ hours of dedicated leadership training completed across leadership development programs.', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });
  y2 -= 11;
  page2.drawText('• Governance & Toolsets: SOPs, SOWs, MSAs, Advanced Excel, Microsoft Visio, Business Process Mapping', { x: 45, y: y2, size: 7.5, font: fontRegular, color: blackText });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, '../public/Hasan_Abdul_Shaikh_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('PDF generated successfully at: ' + outputPath);
}

createResume().catch(console.error);
