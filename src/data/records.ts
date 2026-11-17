import { TimelineItem, ExperienceRecord, AwardRecord } from "@/types";

export const detailedExperiences: ExperienceRecord[] = [
  {
    id: "exp-lgu-baggao",
    company: "LGU Baggao",
    initial: "LB",
    employmentType: "Full-time",
    duration: "5 mos",
    location: "Baggao, Cagayan, Philippines · On-site",
    roles: [
      {
        title: "Associate Developer",
        period: "JUL 2026 — PRESENT",
        duration: "5 MOS",
        description: [
          "Driving municipal public service digitization and administrative operational workflows across local government units.",
          "Spearheading portal architectures, internal digital records, and citizen-facing operations for improved municipal efficiency.",
          "Integrating AI-assisted processing workflows and streamlining civil operations, document tracking, and inter-departmental inquiries.",
        ],
        operations: [
          "Web Development",
          "AI Implementation",
          "Digital Operations",
          "Workflow Automation",
          "UI/UX Architecture",
        ],
      },
    ],
  },
  {
    id: "exp-csu-andrews",
    company: "Cagayan State University — Andrews",
    initial: "CA",
    employmentType: "Internship",
    duration: "3 mos",
    location: "Tuguegarao, Cagayan, Philippines · On-site",
    roles: [
      {
        title: "Software Developer Intern",
        period: "DEC 2025 — FEB 2026",
        duration: "3 MOS",
        description: [
          "Developed institutional web applications and internal administrative systems supporting university academic workflows.",
          "Engineered modular frontend interfaces, tested responsive interaction flows, and conducted rigorous system usability assessments.",
        ],
        operations: [
          "Web Development",
          "Software Engineering",
          "System Analysis",
          "Usability Assessment",
        ],
      },
    ],
  },
];

export const detailedEducation: ExperienceRecord[] = [
  {
    id: "edu-csu",
    company: "Cagayan State University — Carig",
    initial: "CC",
    employmentType: "Undergraduate Degree",
    duration: "4 yrs",
    location: "Tuguegarao, Cagayan, Philippines",
    roles: [
      {
        title: "BS Computer Science",
        period: "2022 — 2026",
        duration: "4 YRS",
        description: [
          "Focused on computer science fundamentals, software engineering, algorithms, data structures, and distributed systems architecture.",
          "Maintained strong academic standing with emphasis on municipal application development and real-world software architecture.",
        ],
        operations: [
          "Algorithms & Data Structures",
          "Software Engineering",
          "Database Architecture",
          "Systems Analysis",
        ],
      },
    ],
  },
];

export const timelineRecords: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Associate Developer",
    subtitle: "LGU Baggao",
    period: "Jul 2026 — Present",
    type: "work",
  },
  {
    id: "exp-2",
    title: "Software Developer Intern",
    subtitle: "CSU Andrews",
    period: "Dec 2025 — Feb 2026",
    type: "work",
  },
];

export const awardRecords: AwardRecord[] = [
  {
    id: "award-1",
    title: "Cum Laude",
    subtitle: "CSU Carig",
    period: "2026",
    initial: "CL",
    organization: "College of Information and Computing Sciences (CICS)",
    operations: ["Academic Honors", "Computer Science"],
  },
  {
    id: "award-2",
    title: "Civil Service Professional",
    subtitle: "Civil Service Commission",
    period: "2026",
    initial: "CS",
    organization: "Civil Service Commission (CSC Philippines)",
    operations: ["Professional Eligibility", "Government Career Service"],
  },
];
