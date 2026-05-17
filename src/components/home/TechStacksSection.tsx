import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { allTechStacks } from "@/lib/tech";

export default function TechStacksSection() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <SectionLabel text="Tech Stacks" />
        <Link
          href="/tech"
          className="flex glass-btn items-center gap-1.5 text-sm font-medium text-primary px-3 py-1.5 rounded-lg hover-outline"
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
      <div className="grid grid-cols-6 gap-3">
        {allTechStacks.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-12 h-12 rounded-xl glass-btn flex items-center justify-center transition-all duration-200 cursor-default`}
            >
              {tech.icon}
            </div>
            <span className="text-sm text-secondary text-center leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}