import { Project } from "@/types";
import { timelineRecords } from "@/lib/records";

export { timelineRecords };

export const projects: Project[] = [
  {
    lotNumber: "01",
    slug: "csm",
    name: "CSM",
    tagline: "Municipal Services & Public Operations Portal",
    description:
      "Municipal portal for administrative workflows and citizen service requests.",
    client: "LGU Baggao",
    company: "Municipal Government",
    projectType: "Website",
    year: "2025",
    websiteUrl: "https://example.com/csm",
    avatarColor: "bg-blue-600",
    avatarLabel: "C",
    mockupImage: "/projects/project-one/mockup.png",
    tags: ["Website", "Next.js", "Design System", "TypeScript"],
    isSynthetic: true,
    sweepLight: "#E8EEF5",
    sweepDark: "#101620",
    chassisFinish: "silver",
    screenTheme: {
      accent: "#2563EB",
      surface: "#F4F7FB",
      layout: "workspace",
    },
  },
  {
    lotNumber: "02",
    slug: "sari",
    name: "Sari",
    tagline: "Micro-Retail Point-of-Sale & Inventory Mobile Application",
    description:
      "Offline-first mobile POS and inventory system for neighborhood micro-retailers.",
    client: "Independent / Community",
    company: "Sari Retail Lab",
    projectType: "Mobile App",
    year: "2025",
    websiteUrl: "https://example.com/sari",
    avatarColor: "bg-amber-600",
    avatarLabel: "S",
    mockupImage: "/projects/project-two/mockup.png",
    tags: ["Mobile App", "React Native", "UI/UX", "Offline-First"],
    isSynthetic: true,
    sweepLight: "#F5EFE6",
    sweepDark: "#191512",
    chassisFinish: "obsidian",
    screenTheme: {
      accent: "#D97706",
      surface: "#1A1714",
      layout: "mobile-instrument",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string): Project[] {
  return projects.filter((p) => p.slug !== slug);
}
