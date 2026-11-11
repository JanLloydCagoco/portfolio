import { TimelineItem, ExperienceRecord } from "@/types";

export const detailedExperiences: ExperienceRecord[] = [
  {
    id: "exp-lgu-baggao",
    company: "LGU Baggao",
    initial: "LB",
    employmentType: "Full-time",
    duration: "1 yr",
    location: "Baggao, Cagayan, Philippines · On-site",
    roles: [
      {
        title: "Associate Developer",
        period: "JAN 2025 — PRESENT",
        duration: "1 YR",
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
    duration: "1 yr",
    location: "Tuguegarao, Cagayan, Philippines · Hybrid",
    roles: [
      {
        title: "Software Developer Intern",
        period: "JAN 2025 — 2026",
        duration: "1 YR",
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
    company: "Cagayan State University — Andrews",
    initial: "CU",
    employmentType: "Undergraduate Degree",
    duration: "4 yrs",
    location: "Tuguegarao, Cagayan, Philippines",
    roles: [
      {
        title: "BS Information Technology",
        period: "2022 — 2026",
        duration: "4 YRS",
        description: [
          "Focused on software engineering, web application development, database management systems, and technical systems design.",
          "Maintained strong academic standing with emphasis on municipal application development and real-world software architecture.",
        ],
        operations: [
          "Software Engineering",
          "Database Architecture",
          "Systems Analysis",
          "UI/UX Design",
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
    period: "2025 — Present",
    type: "work",
  },
  {
    id: "exp-2",
    title: "Software Developer Intern",
    subtitle: "CSU Andrews",
    period: "2025 — 2026",
    type: "work",
  },
];

export const educationRecords: TimelineItem[] = [
  {
    id: "edu-1",
    title: "BS Information Technology",
    subtitle: "Cagayan State University — Andrews",
    period: "2022 — 2026",
    type: "education",
  },
];

export const awardRecords: TimelineItem[] = [
  {
    id: "award-1",
    title: "Best Capstone Project",
    subtitle: "CSU CCIT",
    period: "2025",
    type: "awards",
  },
  {
    id: "award-2",
    title: "Regional Hackathon Finalist",
    subtitle: "DICT Region 02",
    period: "2024",
    type: "awards",
  },
];

export const archivedPlaceholderRecords: TimelineItem[] = [
  {
    id: "arch-1",
    title: "Senior Product Designer",
    subtitle: "Rectangle Inc.",
    period: "2023 — Present",
    type: "work",
  },
  {
    id: "arch-2",
    title: "UI/UX Designer",
    subtitle: "Freelance",
    period: "2021 — 2023",
    type: "work",
  },
];
