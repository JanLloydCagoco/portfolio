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
      target={project.websiteUrl.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group block py-5 sm:py-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex-1 min-w-0 flex flex-col gap-1.5 @xl:flex-row @xl:items-center @xl:justify-between @xl:gap-6">
          <h2 className="@xl:shrink-0 text-[20px] font-bold text-primary font-grotesk tracking-tight group-hover:underline">
            {project.name}
          </h2>

          <div className="flex flex-col @xl:items-end @xl:text-right min-w-0 @xl:max-w-[408px]">
            <div className="inline-flex items-center gap-1.5 text-secondary">
              <span className="text-[12px] font-mono text-muted tabular-nums">
                {project.year}
              </span>
              <span className="text-muted/60 text-[12px]">|</span>
              <span className="text-[12px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--bg-elevated)] border border-[var(--border)] text-secondary">
                {project.projectType}
              </span>
            </div>
            <p className="text-[14px] text-secondary leading-snug mt-1.5 line-clamp-2 sm:line-clamp-none">
              {project.description}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-muted group-hover:text-primary transition-colors flex items-center">
          <ArrowUpRight01Icon
            size={16}
            className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </a>
  );
}
