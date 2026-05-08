import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    tagline: "A modern web application",
    description:
      "A cutting-edge web application built with modern technologies. Focused on delivering seamless user experience and clean, scalable architecture.",
    client: "John Doe",
    company: "Company One",
    projectType: "Web Design, Branding",
    year: "2024",
    websiteUrl: "https://example.com",
    avatarColor: "bg-purple-600",
    avatarLabel: "P",
    mockupImage: "/projects/project-one/mockup.png",
    tags: ["Web Design", "Branding"],
  },
  {
    slug: "project-two",
    name: "Project Two",
    tagline: "A mobile-first product",
    description:
      "A mobile-first product design focused on intuitive interfaces and delightful interactions. Built to scale across all screen sizes.",
    client: "Jane Smith",
    company: "Company Two",
    projectType: "Product Design, UI/UX",
    year: "2025",
    websiteUrl: "https://example.com",
    avatarColor: "bg-orange-500",
    avatarLabel: "P",
    mockupImage: "/projects/project-two/mockup.png",
    tags: ["Product Design", "UI/UX"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string): Project[] {
  return projects.filter((p) => p.slug !== slug);
}