import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import ProjectRow from "./ProjectRow";
import { projects } from "@/data/projects";

export default function ProjectsView() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="projects"
        description="A complete collection of municipal web systems, mobile applications, and digital tools I have designed and engineered."
      />

      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
