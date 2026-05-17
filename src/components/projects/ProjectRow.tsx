import Link from "next/link";
import { Project } from "@/types";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex items-center gap-4 p-4 rounded-2xl glass-sm shadow-sm hover-outline group transition-all duration-200"
    >
      {/* Avatar */}
      <div
        className={`w-11 h-11 rounded-full ${project.avatarColor} flex items-center justify-center flex-shrink-0 ring-3 ring-white/40 dark:ring-white/10`}
      >
        <span className="text-sm font-bold text-white">
          {project.avatarLabel}
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-primary truncate">
          {project.name}
        </p>
        <p className="text-[13px] text-secondary truncate mt-0.5">
          {project.tags.join(", ")}
        </p>
      </div>

      {/* Chevron — nudges on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-secondary dark:text-gray-600 group-hover:translate-x-1 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
}