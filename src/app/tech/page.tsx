import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { techCategories } from "@/lib/tech";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Tech Stacks — Jan Lloyd Cagoco",
  description: "A comprehensive view of my tech stacks and tools.",
};

export default function TechStacksPage() {
  return (
    <div className="glass shadow-sm min-h-[calc(100vh-100px)] p-2 flex flex-col gap-2 rounded-3xl">
      {/* Header */}
      <FadeIn delay={0.1}>
        <div className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors mb-6 glass-btn px-3 py-1.5 rounded-lg w-fit hover-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Return
          </Link>

          <h1 className="text-[32px] sm:text-[36px] font-bold text-primary mt-2 tracking-tight">
            Tech Stacks
          </h1>
          <p className="text-[16px] sm:text-[17px] text-secondary leading-relaxed mt-1">
            A comprehensive overview of the languages, frameworks, and tools I use
            to build digital experiences.
          </p>
        </div>
      </FadeIn>

      {/* Categories */}
      {techCategories.map((category, categoryIndex) => (
        <FadeIn key={category.name} delay={0.2 + categoryIndex * 0.15}>
          <div className="bg-card rounded-2xl p-6 flex flex-col gap-4">
            <SectionLabel text={category.name} />

            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {category.stacks.map((tech, techIndex) => (
                <FadeIn key={tech.name} delay={0.2 + categoryIndex * 0.15 + techIndex * 0.05} direction="up">
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="w-12 h-12 rounded-xl glass-btn flex items-center justify-center transition-all duration-200 cursor-default">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-secondary text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}

      <div className="glass-sm rounded-2xl py-3 px-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
