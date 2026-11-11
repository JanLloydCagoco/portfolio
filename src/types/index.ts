export interface Project {
  lotNumber: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  client: string;
  company: string;
  projectType: string;
  year: string;
  websiteUrl: string;
  avatarColor: string;
  avatarLabel: string;
  mockupImage: string;
  tags: string[];
  isSynthetic: boolean;
  sweepLight: string;
  sweepDark: string;
  chassisFinish: "silver" | "obsidian" | "titanium";
  screenTheme: {
    accent: string;
    surface: string;
    layout: "workspace" | "mobile-instrument";
  };
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  type: "work" | "education" | "achievements" | "awards";
}

export interface ExperienceRole {
  title: string;
  period: string;
  duration?: string;
  description: string[];
  operations: string[];
}

export interface ExperienceRecord {
  id: string;
  company: string;
  initial: string;
  employmentType: string;
  duration?: string;
  location: string;
  roles: ExperienceRole[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  verifyUrl: string;
  isPlaceholder?: boolean;
  description?: string;
  category?: string;
}

export interface CertificationCategory {
  name: string;
  certifications: CertificationItem[];
}

export interface TechStack {
  name: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
