import { Project } from "@/types";

interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const rows = [
    { label: "Client", value: project.client },
    { label: "Company", value: project.company },
    { label: "Project Type", value: project.projectType },
    { label: "Year", value: project.year },
  ];

  return (
    <div className="p-5 flex flex-col gap-3">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center">
          <span className="text-sm text-secondary w-36 flex-shrink-0">
            {row.label}
          </span>
          <span className="text-sm text-primary">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
