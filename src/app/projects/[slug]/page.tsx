import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectMeta from "@/components/projects/ProjectMeta";
import ProjectRow from "@/components/projects/ProjectRow";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, getOtherProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Jan Lloyd Cagoco`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const otherProjects = getOtherProjects(slug);

  return (
    <div className="glass dark:bg-[#1a1a1a] dark:border dark:border-[#2a2a2a] shadow-sm min-h-screen p-2 flex flex-col gap-2 rounded-xl">
      {/* Meta Table */}
      <div className="bg-card rounded-xl overflow-hidden">
        <ProjectMeta project={project} />
      </div>

      {/* Project Detail — plain, no card bg */}
      <div className="px-6 py-4">
        {/* Avatar */}
        <div
          className={`w-14 h-14 rounded-full ${project.avatarColor} flex items-center justify-center mb-4`}
        >
          <span className="text-lg font-bold text-white">
            {project.avatarLabel}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[28px] font-bold text-primary mb-3 tracking-tight">{project.name}</h1>

        {/* Description */}
        <p className="text-[15px] text-secondary mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Visit Website */}
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black dark:bg-[#2b2b2b] text-white dark:text-white text-sm font-semibold px-5 py-3 rounded-xl hover-outline transition-all duration-200 mb-6"
        >
          Visit Website
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
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>

        {/* Mockup Image */}
        <div className="w-full rounded-2xl overflow-hidden bg-input">
          <Image
            src={project.mockupImage}
            alt={`${project.name} mockup`}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="bg-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <SectionLabel text="Other Projects" />
            <Link
              href="/projects"
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
          <div className="flex flex-col gap-2">
            {otherProjects.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-card rounded-xl p-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}