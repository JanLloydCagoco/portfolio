import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectRow from "@/components/projects/ProjectRow";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Jan Lloyd Cagoco",
  description:
    "Discover my portfolio, where purposeful interfaces meet captivating design.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] dark:border dark:border-[#2a2a2a] shadow-sm min-h-[calc(100vh-120px)] p-2 flex flex-col gap-2 rounded-xl">
      {/* Header */}
      <div className="p-6">
        <SectionLabel text="Projects" />
        <h1 className="text-3xl font-bold text-primary mt-7">My Works</h1>
        <p className="text-lg text-secondary">
          Discover my portfolio, where purposeful interfaces meet captivating
          design. My work strives to enhance experiences and inspire.
        </p>
      </div>

      {/* Project List */}
      <div className="bg-card rounded-xl p-4 flex flex-col gap-2">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
      <div className="bg-card rounded-xl p-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}