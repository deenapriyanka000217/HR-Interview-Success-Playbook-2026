import { ModuleItem, QuestionItem, HrDocument, FaqItem, AudiencePersona } from '../types';

export const HERO_BENEFITS = [
  '50 Important HR Interview Questions with Model Answers',
  'Practical HR Concepts for Freshers (Recruitment, Docs, Payroll)',
  'Interview + 90-Day Career Preparation Roadmap'
];

export const PAIN_POINTS = [
  {
    quote: "I don't know what HR interview questions to prepare.",
    detail: "Standard online interview lists are too generic or lack real-world corporate context for entry-level roles."
  },
  {
    quote: "I understand theory, but struggle to explain HR concepts clearly.",
    detail: "Knowing academic definitions isn't enough when recruiters ask situational and process-driven questions."
  },
  {
    quote: "I'm confused about recruitment, payroll and HR operations.",
    detail: "CTC vs In-hand salary calculations, PF/ESI deductions, and ATS resume screening feel overwhelming without practical guidance."
  },
  {
    quote: "I don't know how to present myself as an HR fresher.",
    detail: "Lacking confidence in pitching transferable skills, MBA/BBA projects, or HR internship experiences to panel members."
  },
  {
    quote: "I need one structured resource instead of searching everywhere.",
    detail: "Scattered YouTube videos and blogs create confusion. You need an all-in-one authoritative PDF guide."
  }
];

export const MODULES: ModuleItem[] = [
  {
    id: 'm1',
    number: '01',
    title: 'HR Career Fundamentals',
    description: 'Understand common HR roles, responsibilities and career paths in modern Indian organizations.',
    iconName: 'Building2',
    keyTakeaways: ['HR Generalist vs Specialist roles', 'HR Business Partner (HRBP) model overview', 'Organisational hierarchy & reporting lines', 'Day-in-the-life of an Entry-level HR Exec']
  },
  {
    id: 'm2',
    number: '02',
    title: 'HR Fresher Skills',
    description: 'Learn the core skills employers commonly expect from entry-level HR candidates.',
    iconName: 'Award',
    keyTakeaways: ['Active listening & empathetic communication', 'Discretion & confidentiality management', 'Basic analytical & reporting mindset', 'Problem-solving under HR policy guidelines']
  },
  {
    id: 'm3',
    number: '03',
    title: 'HR Resume Preparation',
    description: 'Learn how to structure, format and improve an HR fresher resume to pass ATS screeners.',
    iconName: 'FileText',
    keyTakeaways: ['ATS-friendly resume layout & typography', 'HR action verbs & quantifiable achievements', 'Highlighting academic HR projects & case studies', 'Crafting a high-impact HR objective statement']
  },
  {
    id: 'm4',
    number: '04',
    title: '50 HR Interview Questions',
    description: 'Prepare for important HR interview questions with structured guidance and sample responses.',
    iconName: 'HelpCircle',
    keyTakeaways: ['STAR method framework for behavioral questions', 'Model answers for "Tell me about yourself"', 'Salary negotiation tactics for freshers', 'Handling tricky scenario-based questions']
  },
  {
    id: 'm5',
    number: '05',
    title: 'Recruitment Process',
    description: 'Understand the end-to-end recruitment workflow from job requirements to onboarding.',
    iconName: 'Users',
    keyTakeaways: ['Drafting effective Job Descriptions (JD)', 'Sourcing candidates via LinkedIn & Job Portals (Naukri/Indeed)', 'Boolean search strings basics', 'Conducting initial telephonic screening rounds']
  },
  {
    id: 'm6',
    number: '06',
    title: 'Essential HR Documents',
    description: 'Learn the purpose, structure and standard clauses of common HR letters and documents.',
    iconName: 'FileSpreadsheet',
    keyTakeaways: ['Offer Letter vs Appointment Letter key differences', 'Relieving & Experience Letter compliance', 'Drafting formal Warning & Increment letters', 'Statutory compliance references']
  },
  {
    id: 'm7',
    number: '07',
    title: 'Payroll Fundamentals',
    description: 'Understand CTC, gross salary, net salary, PF, ESI and common payroll terminology.',
    iconName: 'Calculator',
    keyTakeaways: ['CTC (Cost to Company) components breakdown', 'Basic Salary, HRA, Special Allowance math', 'PF (Provident Fund) 12% calculation rules', 'ESI (Employee State Insurance) applicability']
  },
  {
    id: 'm8',
    number: '08',
    title: 'Excel Skills for HR',
    description: 'Master essential Excel functions and reporting tools commonly useful in daily HR work.',
    iconName: 'FileSpreadsheet',
    keyTakeaways: ['VLOOKUP & XLOOKUP for employee data matching', 'Pivot tables for headcount & turnover analytics', 'COUNTIF/SUMIF for attendance & leave tracking', 'Data validation for error-free HR data entry']
  },
  {
    id: 'm9',
    number: '09',
    title: 'Professional HR Communication',
    description: 'Learn practical approaches to candidate and employee communication.',
    iconName: 'Mail',
    keyTakeaways: ['Writing professional email templates for interview invites', 'Handling candidate rejection emails gracefully', 'Employee query resolution etiquette', 'Internal memo & policy announcement formats']
  },
  {
    id: 'm10',
    number: '10',
    title: 'First 30 Days in HR',
    description: 'Follow a beginner-friendly roadmap for entering and excelling in your first HR role.',
    iconName: 'Zap',
    keyTakeaways: ['Understanding company policies & employee handbook', 'Building rapport with department heads', 'Setting up daily HR operational trackers', 'Fast-tracking domain learning']
  },
  {
    id: 'm11',
    number: '11',
    title: '90-Day HR Career Roadmap',
    description: 'Build a structured learning and long-term career-development plan.',
    iconName: 'TrendingUp',
    keyTakeaways: ['Identifying specialization areas (Talent Acquisition, L&D, Compensation)', 'Building a professional personal brand on LinkedIn', 'Recommended HR certifications in India', 'Setting 1-year and 3-year career milestones']
  }
];

export const TOPIC_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "Tell me about yourself and why you chose a career in HR?",
    category: "Personal",
    frequency: "Must Know",
    modelAnswer: "Start with a brief academic overview (e.g., MBA/BBA in HR or relevant degree). Focus on your passion for people development, organizational culture, and business operations. Highlight 1-2 key skills such as interpersonal communication, active listening, or process management, and conclude with why this specific company's HR team excites you.",
    keyTips: ["Keep it under 90 seconds", "Link your personal background to HR value creation", "Avoid reciting your resume line-by-line"]
  },
  {
    id: 2,
    question: "What is the difference between Recruitment and Selection?",
    category: "Recruitment",
    frequency: "Top Rated",
    modelAnswer: "Recruitment is a positive process of attracting and encouraging maximum candidates to apply for job openings (e.g., job postings, campus drives, sourcing). Selection is a negative process of screening, interviewing, and choosing the most suitable candidate while rejecting others.",
    keyTips: ["Mention recruitment is 'positive' and selection is 'negative'", "Provide real examples of candidate sourcing platforms"]
  },
  {
    id: 3,
    question: "Can you explain the difference between CTC, Gross Salary, and Net (Take-Home) Salary?",
    category: "Payroll & Legal",
    frequency: "Must Know",
    modelAnswer: "CTC (Cost to Company) is the total annual expenditure a company incurs on an employee, including direct benefits, indirect benefits, and statutory contributions like employer PF/Gratuity. Gross Salary is the salary before mandatory employee deductions like Employee PF, Professional Tax, and Income Tax (TDS). Net (Take-Home) Salary is the actual amount credited to the employee's bank account after all deductions.",
    keyTips: ["Formula: Net = Gross - Employee Deductions (PF + PT + TDS)", "Mention CTC includes employer contributions which do not go into monthly in-hand"]
  },
  {
    id: 4,
    question: "What are KRA and KPI? How do they differ?",
    category: "HR Operations",
    frequency: "High",
    modelAnswer: "KRA (Key Result Area) defines the broad scope of responsibilities assigned to an employee's role (e.g., 'Candidate Sourcing & Screening'). KPI (Key Performance Indicator) is a quantifiable metric used to evaluate success in achieving that KRA (e.g., 'Fill 5 open requisitions within 30 days with a offer-acceptance rate > 85%').",
    keyTips: ["KRA is the qualitative domain; KPI is the quantitative measurement"]
  },
  {
    id: 5,
    question: "How would you handle a situation where a candidate accepts an offer but fails to join on the expected date?",
    category: "Situational",
    frequency: "Top Rated",
    modelAnswer: "First, I would immediately reach out via phone and email to politely inquire if they encountered any urgent personal or travel emergency. If unreachable, I would inform the hiring manager. Simultaneously, I would activate our backup talent pipeline (Waitlisted/Tier-2 candidates from interview rounds) to minimize operational delay, and review our offer-to-joining engagement cadence to improve future retention.",
    keyTips: ["Show empathy first", "Always maintain a backup candidate pipeline", "Demonstrate proactive risk management"]
  },
  {
    id: 6,
    question: "What is Employee Attrition and how can HR help reduce it?",
    category: "HR Operations",
    frequency: "High",
    modelAnswer: "Attrition is the gradual reduction in workforce through resignations, retirements, or departures. HR reduces attrition by conducting thorough Stay & Exit interviews, ensuring fair compensation benchmarking, fostering a positive workplace culture, encouraging regular feedback, and enabling clear career growth pathways.",
    keyTips: ["Distinguish voluntary vs involuntary attrition", "Mention exit interview insights and employee engagement programs"]
  },
  {
    id: 7,
    question: "What are the essential components of an Employee Offer Letter?",
    category: "HR Operations",
    frequency: "Must Know",
    modelAnswer: "An offer letter includes: Job Title & Department, Date of Joining, Work Location & Mode, Annual CTC and Salary Breakup, Probationary Period details, Leaves entitlement, Terms of Acceptance, and List of required onboarding documents.",
    keyTips: ["Differentiate Offer Letter (pre-joining agreement) from Appointment Letter (issued on joining day)"]
  },
  {
    id: 8,
    question: "What is Statutory Provident Fund (PF) and Employee State Insurance (ESI) in India?",
    category: "Payroll & Legal",
    frequency: "High",
    modelAnswer: "PF is a retirement savings scheme under EPF Act 1952. Typically, 12% of Basic + DA is contributed by employee and 12% by employer. ESI is health insurance cover under ESI Act 1948 applicable to establishments with 10+ employees where monthly gross salary is up to ₹21,000 (Employee rate: 0.75%, Employer rate: 3.25%).",
    keyTips: ["Memorize basic percentages (12% PF, 0.75% / 3.25% ESI)", "Mention statutory wage ceiling limits"]
  },
  {
    id: 9,
    question: "How do you use VLOOKUP or XLOOKUP in Excel for HR reporting?",
    category: "HR Operations",
    frequency: "Top Rated",
    modelAnswer: "VLOOKUP or XLOOKUP is used to merge data across multiple sheets—for instance, mapping Employee IDs from an attendance log sheet to the master payroll database to pull Employee Names, Department, or Basic Salary instantly without manual copy-pasting.",
    keyTips: ["Explain practical HR use case like attendance-to-payroll mapping", "Highlight XLOOKUP as the modern, more flexible upgrade"]
  },
  {
    id: 10,
    question: "Why should we hire you as an HR Fresher over other candidates with experience?",
    category: "Personal",
    frequency: "Must Know",
    modelAnswer: "As an HR fresher, I bring up-to-date theoretical knowledge, high adaptability, and enthusiasm without any ingrained legacy habits. I have invested time mastering practical tools like Excel, HR document drafting, and core recruitment workflows through focused learning like this playbook. I am eager to learn your processes quickly and contribute with high energy.",
    keyTips: ["Highlight eagerness to learn", "Emphasize structured self-preparation", "Focus on adaptability and positive attitude"]
  }
];

export const RECRUITMENT_STEPS = [
  { step: '01', title: 'Job Requirement', desc: 'Hiring manager identifies headcount need & budget approval.' },
  { step: '02', title: 'Job Description', desc: 'HR drafts role responsibilities, required skills, and qualification guidelines.' },
  { step: '03', title: 'Candidate Sourcing', desc: 'Publish job ads on LinkedIn, Naukri, Indeed, or conduct campus drives.' },
  { step: '04', title: 'Resume Screening', desc: 'Filter resumes using keyword criteria & ATS match factors.' },
  { step: '05', title: 'Initial Screening', desc: '10-minute telephonic call to check communication, availability & CTC expectation.' },
  { step: '06', title: 'Interview Scheduling', desc: 'Coordinate interview slots between hiring panel and shortlist.' },
  { step: '07', title: 'Interview Rounds', desc: 'Technical assessment, managerial interview, and culture-fit evaluation.' },
  { step: '08', title: 'Selection', desc: 'Panel consensus, background verification check, and compensation approval.' },
  { step: '09', title: 'Offer Letter', desc: 'Issue formal job offer detailing CTC, designation, and target joining date.' },
  { step: '10', title: 'Joining & Onboarding', desc: 'Document verification, HR orientation, system setup, and team introduction.' }
];

export const HR_DOCUMENTS: HrDocument[] = [
  {
    id: 'doc1',
    title: 'Offer Letter',
    purpose: 'Issued to prospective employee after selection to express intent to hire and detail preliminary CTC.',
    components: ['Designation & Department', 'Proposed CTC Breakup', 'Expected Joining Date', 'Validity Date of Offer', 'List of Pre-joining Documents'],
    samplePreviewText: 'We are pleased to offer you the position of HR Executive at [Company Name]. Your annual Cost to Company (CTC) will be ₹[Amount]. Please sign and return a copy within 3 days as acceptance...'
  },
  {
    id: 'doc2',
    title: 'Appointment Letter',
    purpose: 'Legally binding employment contract handed over on or right after the employee joining date.',
    components: ['Detailed Duties & Reporting Manager', 'Probation Period Rules (e.g. 3-6 Months)', 'Notice Period Clause (e.g. 30-90 Days)', 'Confidentiality & Non-Disclosure (NDA)', 'Code of Conduct & Termination Conditions'],
    samplePreviewText: 'This Appointment Letter is issued on [Date] following your joining on [Joining Date]. You will be on probation for a period of 6 months. During probation, either party may terminate service with 15 days notice...'
  },
  {
    id: 'doc3',
    title: 'Experience Letter',
    purpose: 'Certifies the employee tenure, final designation, and performance conduct upon exiting.',
    components: ['Employee Full Name & ID', 'Date of Joining & Date of Relieving', 'Designation Held', 'Conduct & Performance Remarks', 'Authorized HR Signatory'],
    samplePreviewText: 'This is to certify that [Employee Name] was employed with us from [Date] to [Date] as [Designation]. During their tenure, we found them to be diligent, honest and hardworking...'
  },
  {
    id: 'doc4',
    title: 'Relieving Letter',
    purpose: 'Official confirmation that employee has completed notice period and handed over company assets.',
    components: ['Acceptance of Resignation Reference', 'Last Working Day (LWD)', 'No-Dues Clearance Acknowledgment', 'Formal Release from Employment Obligations'],
    samplePreviewText: 'With reference to your resignation letter dated [Date], we hereby accept your resignation and release you from your duties as [Designation] effective from close of business hours on [LWD]...'
  },
  {
    id: 'doc5',
    title: 'Warning Letter',
    purpose: 'Formal disciplinary document issued regarding breach of code of conduct, absenteeism, or performance gaps.',
    components: ['Specific Incident / Breach Details', 'Prior Verbal Warning References', 'Required Corrective Action Plan', 'Timeline for Improvement', 'Consequences of Non-compliance'],
    samplePreviewText: 'This letter serves as a formal written warning regarding your unauthorized absence on [Dates]. You are requested to submit a written explanation within 24 hours...'
  },
  {
    id: 'doc6',
    title: 'Increment Letter',
    purpose: 'Communicates annual salary revision, performance appraisal results, or internal promotion.',
    components: ['Appraisal Period & Rating', 'New Revised Annual CTC', 'Effective Date of Revision', 'Revised Component Breakup Table'],
    samplePreviewText: 'In recognition of your performance during the financial year [Year], we are pleased to revise your salary to ₹[New CTC] per annum effective from [Date]...'
  }
];

export const PAYROLL_BASICS = [
  { name: 'CTC (Cost to Company)', desc: 'Total monetary & statutory investment by employer per year.' },
  { name: 'Basic Salary', desc: 'Core fixed component (typically 40%-50% of CTC). Fully taxable.' },
  { name: 'HRA (House Rent Allowance)', desc: 'Allowance provided for rented accommodation. Tax-exempt under Section 10(13A) rules.' },
  { name: 'Special Allowance', desc: 'Balancing figure in CTC calculation. Fully taxable.' },
  { name: 'Gross Salary', desc: 'Total earnings before employee deductions (Basic + HRA + Allowances).' },
  { name: 'Net / Take-Home Salary', desc: 'Final amount credited to employee bank account (Gross minus Employee PF, PT, TDS).' },
  { name: 'PF (Provident Fund)', desc: '12% of (Basic + DA) capped at statutory limits, contributed equally by employee and employer.' },
  { name: 'ESI (Employee State Insurance)', desc: '0.75% employee & 3.25% employer healthcare contribution for gross salary ≤ ₹21,000/mo.' },
  { name: 'Professional Tax (PT)', desc: 'State-level tax on income, typically ₹200/month in most Indian states.' },
  { name: 'TDS (Tax Deducted at Source)', desc: 'Income tax deducted as per chosen Tax Regime (Old vs New).' }
];

export const EXCEL_SKILLS = [
  { name: 'VLOOKUP & XLOOKUP', desc: 'Quickly cross-reference employee IDs across attendance, payroll, and appraisal master sheets.' },
  { name: 'IF & Nested IF', desc: 'Automate conditional categorization (e.g. Pass/Fail in screening, probation status, overtime eligibility).' },
  { name: 'COUNTIF & SUMIF', desc: 'Calculate present days, leave counts, and total department salary spend with zero manual error.' },
  { name: 'Pivot Tables', desc: 'Create instant executive summary reports on headcount, attrition rates, and recruitment channels.' },
  { name: 'Data Validation', desc: 'Restrict inputs in HR forms (dropdown menus for Department, Gender, Work Location).' },
  { name: 'Conditional Formatting', desc: 'Highlight expiring contracts, pending onboarding steps, or absenteeism alerts visually.' },
  { name: 'Basic HR Dashboards', desc: 'Build clean visual summaries using charts for hiring pipeline efficiency and monthly payroll trends.' }
];

export const AUDIENCE_PERSONAS: AudiencePersona[] = [
  {
    title: 'HR Freshers',
    description: 'Starting their first HR role and needing a practical cheat-sheet to perform confidently from Day 1.',
    iconName: 'UserCheck',
    badge: 'Job Ready'
  },
  {
    title: 'MBA HR Students',
    description: 'Preparing for campus placement drives, summer internships, and core HR interview panels.',
    iconName: 'GraduationCap',
    badge: 'Campus Placement'
  },
  {
    title: 'Final-Year Students',
    description: 'Graduating soon and wanting to build job-oriented HR operational knowledge beyond college textbooks.',
    iconName: 'BookOpen',
    badge: 'Career Starter'
  },
  {
    title: 'Fresh Graduates',
    description: 'BBA, B.Com, BA, or B.Tech graduates actively searching for entry-level HR Trainee or Executive roles.',
    iconName: 'Award',
    badge: 'Job Seeker'
  },
  {
    title: 'Career Switchers',
    description: 'Transitioning from non-HR roles (Customer Support, Sales, Ops) into Human Resources.',
    iconName: 'TrendingUp',
    badge: 'Skill Switch'
  },
  {
    title: 'Junior HR Professionals',
    description: 'Currently working in entry-level HR roles wanting to refresh fundamentals and understand payroll/docs.',
    iconName: 'Briefcase',
    badge: 'Skill Upgrade'
  }
];

export const VALUE_STACK = [
  'Digital HR Interview & Career Guide (Comprehensive 2026 PDF Edition)',
  '50 Important Interview Questions with Practical Model Answers',
  'Sample / Model Answer Guidance for Freshers & MBA Students',
  'HR Resume Structure & ATS Optimization Checklist',
  'End-to-End Recruitment Fundamentals & Sourcing Workflow',
  'Essential HR Documentation Guidance & Standard Letter Structures',
  'Payroll Fundamentals (CTC, Gross, Net, PF, ESI, PT Breakdown)',
  'HR Excel Formula Cheatsheet (VLOOKUP, Pivot, Dashboards)',
  'Professional Candidate Email & Phone Communication Examples',
  '30-Day HR Starter Action Roadmap for New Joinees',
  '90-Day Career Growth & Skill Development Strategy',
  'Interview-Day Preparation Checklist & Self-Confidence Tips'
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is this a physical book?",
    answer: "No. This is a digital PDF product that can be accessed electronically immediately after purchase on any smartphone, tablet, or computer."
  },
  {
    question: "Who is this guide designed for?",
    answer: "It is primarily designed for HR freshers, MBA HR students, fresh graduates, entry-level HR candidates, career switchers, and people building foundational HR interview knowledge."
  },
  {
    question: "Does purchasing this guarantee me a job?",
    answer: "No. The playbook is an educational and interview-preparation resource. Job or interview outcomes depend on multiple factors including personal skills, qualifications, experience, preparation and individual employer requirements."
  },
  {
    question: "What topics are covered?",
    answer: "The guide covers HR interview preparation, 50 important Q&As with sample answers, recruitment workflows, resume optimization, HR documentation structures, payroll fundamentals, Excel skills for HR, professional communication, and 30/90-day career roadmaps."
  },
  {
    question: "How will I receive the product?",
    answer: "Immediately after successful payment of ₹299 via UPI, GPay, PhonePe, Cards, or NetBanking, you will be redirected to an instant download screen and receive an email with your direct PDF download link."
  }
];

export const WHY_DIFFERENT_POINTS = [
  {
    title: "Beginner-Friendly Explanations",
    desc: "Complex corporate jargon simplified into straightforward, easy-to-digest concepts with practical examples."
  },
  {
    title: "Interview-Focused Preparation",
    desc: "Every topic is tailored specifically toward what recruiters and HR managers ask in real-world interviews."
  },
  {
    title: "Practical HR Fundamentals",
    desc: "Covers actual operational tasks—payroll calculations, letter drafting, and Excel functions—not just textbook theory."
  },
  {
    title: "Structured Learning Roadmap",
    desc: "Step-by-step guidance from resume building to acing the interview and excelling in your first 90 days."
  },
  {
    title: "One Focused Resource",
    desc: "Saves dozens of hours spent watching fragmented videos or reading outdated blog articles online."
  }
];
