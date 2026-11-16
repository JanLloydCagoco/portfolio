import React from "react";
import { Project } from "@/types";
import { ArrowUpRight01Icon } from "@/frontend/components/icons/NavIcons";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <a
      href={project.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-5 sm:py-6 transition-colors hover:bg-[var(--bg-elevated)]/25 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-[3px]"
    >
      <div className="flex items-center justify-between gap-4 sm:gap-6">
        <div className="shrink-0">
          <h2 className="text-[18px] sm:text-[20px] font-bold text-primary font-grotesk tracking-tight group-hover:underline">
            {project.name}
          </h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 max-w-[380px] sm:max-w-[440px] min-w-0">
          <div className="flex flex-col items-end text-right min-w-0">
            <div className="inline-flex items-center gap-1.5 text-secondary">
              <span className="text-[12px] font-mono text-muted tabular-nums">
                {project.year}
              </span>
              <span className="text-muted/60 text-[11px]">|</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[var(--bg-elevated)] border border-[var(--border)] text-secondary">
                {project.projectType}
              </span>
            </div>
            <p className="text-[13px] sm:text-[14px] text-secondary leading-snug mt-1.5 line-clamp-2 sm:line-clamp-none">
              {project.description}
            </p>
          </div>

          <div className="shrink-0 text-muted group-hover:text-primary transition-colors flex items-center">
            <ArrowUpRight01Icon
              size={16}
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
