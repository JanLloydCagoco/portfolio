import React from "react";

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
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  type: "work" | "education" | "awards";
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

export interface AwardRecord {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  initial: string;
  organization: string;
  operations: string[];
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
  color?: string;
  icon: React.ReactNode;
}

export interface TechCategory {
  name: string;
  stacks: TechStack[];
}

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4 | -1;
}

export interface GitHubContributionData {
  username: string;
  year: number;
  totalContributions: number;
  weeks: GitHubContributionDay[][];
  updatedAt: string;
}
