import type { Metadata } from "next";
import ProjectsView from "@/frontend/features/projects/ProjectsView";

export const metadata: Metadata = {
  title: "Projects — Jan Lloyd Cagoco",
  description: "Selected web applications, mobile platforms, and design systems by Jan Lloyd Cagoco.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
