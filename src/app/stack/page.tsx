import type { Metadata } from "next";
import { techCategories } from "@/lib/tech";

export const metadata: Metadata = {
  title: "Stack — Jan Lloyd Cagoco",
  description: "Design, frontend, and infrastructure tools used by Jan Lloyd Cagoco.",
};

export default function StackPage() {
  return (
    <div className="w-full space-y-10">
      {/* Page Header */}
      <div className="space-y-8">
        <h1 className="font-pixel text-[26px] sm:text-[28px] leading-none text-primary lowercase">
          stack
        </h1>
        <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed">
          A curated directory of the programming languages, frontend frameworks, design tools, and infrastructure technologies I work with daily.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {techCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
              {category.name}
            </h2>

            <div className="flex flex-wrap gap-2">
              {category.stacks.map((tech) => (
                <div
                  key={tech.name}
                  className="px-3.5 py-2 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 text-[13px] font-medium text-primary flex items-center gap-2.5 select-none"
                >
                  <span className="w-4 h-4 text-secondary flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
