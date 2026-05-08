export interface Project {
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
  type: "work" | "education" | "achievements";
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