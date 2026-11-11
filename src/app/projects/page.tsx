import type { Metadata } from "next";
import CatalogIndex from "@/components/projects/CatalogIndex";

export const metadata: Metadata = {
  title: "Projects — Jan Lloyd Cagoco",
  description: "Selected web applications, mobile platforms, and design systems by Jan Lloyd Cagoco.",
};

export default function ProjectsPage() {
  return <CatalogIndex />;
}
