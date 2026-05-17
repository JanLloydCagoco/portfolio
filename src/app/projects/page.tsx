import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import AvailableBadge from "@/components/ui/AvailableBadge";
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
    <div className="glass shadow-sm min-h-[calc(100vh-120px)] p-2 flex flex-col gap-2 rounded-xl">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <SectionLabel text="Projects" />
          <div className="opacity-0 pointer-events-none select-none">
            <AvailableBadge />
          </div>
        </div>
        <h1 className="text-[28px] font-bold text-primary mb-1 tracking-tight">My Works</h1>
        <p className="text-[15px] text-secondary leading-relaxed mt-1">
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