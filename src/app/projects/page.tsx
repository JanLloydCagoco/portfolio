import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import AvailableBadge from "@/components/ui/AvailableBadge";
import ProjectRow from "@/components/projects/ProjectRow";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Projects — Jan Lloyd Cagoco",
  description:
    "Discover my portfolio, where purposeful interfaces meet captivating design.",
};

export default function ProjectsPage() {
  return (
    <div className="glass shadow-sm min-h-[calc(100vh-100px)] p-2 flex flex-col gap-2 rounded-3xl">
      {/* Header */}
      <FadeIn delay={0.1}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <SectionLabel text="Projects" />
            <div className="opacity-0 pointer-events-none select-none">
              <AvailableBadge />
            </div>
          </div>
          <h1 className="text-[32px] sm:text-[36px] font-bold text-primary mb-1 tracking-tight">My Works</h1>
          <p className="text-[16px] sm:text-[17px] text-secondary leading-relaxed mt-1">
            Discover my portfolio, where purposeful interfaces meet captivating
            design. My work strives to enhance experiences and inspire.
          </p>
        </div>
      </FadeIn>

      {/* Project List */}
      <FadeIn delay={0.2}>
        <div className="bg-card rounded-2xl p-4 flex flex-col gap-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.2 + index * 0.1} direction="up">
              <ProjectRow project={project} />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
      <div className="glass-sm rounded-2xl py-3 px-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}