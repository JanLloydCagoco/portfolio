import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import TechBadge from "@/frontend/components/ui/TechBadge";
import { techCategories } from "@/data/tech";

export default function StackView() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="stack"
        description="A curated directory of the programming languages, frameworks, developer tools, and AI platforms I work with daily."
      />

      <div className="space-y-8">
        {techCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
              {category.name}
            </h2>

            <div className="flex flex-wrap gap-2">
              {category.stacks.map((tech) => (
                <TechBadge key={tech.name} tech={tech} size="md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
