import Link from "next/link";
import SectionCard from "@/components/ui/SectionCard";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectRow from "@/components/projects/ProjectRow";
import { projects } from "@/lib/projects";

export default function ProjectsPreview() {
  const preview = projects.slice(0, 3);

  return (
    <>
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <SectionLabel text="Projects" />
        <Link
          href="/projects"
          className="flex glass-btn items-center gap-1.5 text-sm font-medium text-primary dark:text-white px-3 py-1.5 rounded-lg hover-outline transition-all duration-200"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>

      {/* Project Rows */}
      <div className="flex flex-col gap-2">
        {preview.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}