import type { Metadata } from "next";
import {
  detailedExperiences,
  detailedEducation,
  awardRecords,
} from "@/lib/records";
import OperationsBadgeList from "@/components/experiences/OperationsBadgeList";

export const metadata: Metadata = {
  title: "Experiences — Jan Lloyd Cagoco",
  description: "Work history, engineering internships, and academic background of Jan Lloyd Cagoco.",
};

export default function ExperiencesPage() {
  return (
    <div className="w-full space-y-14 sm:space-y-16">
      {/* Page Header */}
      <div className="space-y-8">
        <h1 className="font-pixel text-[26px] sm:text-[28px] leading-none text-primary lowercase">
          experiences
        </h1>
        <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed">
          A comprehensive record of my professional work history, public sector engineering initiatives, and academic background.
        </p>
      </div>

      {/* 1. Employment & Internships Section */}
      <section aria-label="Employment & Internships" className="space-y-6">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Employment &amp; Internships
        </h2>

        <div className="relative pl-14 sm:pl-16 space-y-12">
          {/* Vertical Spine Hairline */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-[21px] top-5 bottom-2 w-[1px] bg-[var(--border)]"
          />

          {detailedExperiences.map((exp) => (
            <div key={exp.id} className="relative space-y-3.5">
              {/* 40x40 Monogram Badge centered on the left spine */}
              <div
                aria-hidden="true"
                className="absolute -left-14 sm:-left-16 top-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center font-pixel text-[13px] sm:text-[14px] text-primary select-none z-10"
              >
                {exp.initial}
              </div>

              {/* Company Header */}
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-primary font-grotesk tracking-tight leading-snug">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] font-mono text-muted flex-wrap mt-0.5">
                  <span>{exp.employmentType}</span>
                  {exp.duration && (
                    <>
                      <span className="text-muted/60">·</span>
                      <span className="tabular-nums">{exp.duration}</span>
                    </>
                  )}
                  {exp.location && (
                    <>
                      <span className="text-muted/60">·</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Roles Under Company */}
              <div className="space-y-5 pt-0.5">
                {exp.roles.map((role, rIdx) => (
                  <div key={rIdx} className="space-y-3">
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-semibold text-primary font-grotesk tracking-tight">
                        {role.title}
                      </h4>
                      <div className="text-[11px] font-mono text-muted tracking-wider uppercase tabular-nums mt-0.5">
                        {role.period}
                        {role.duration && (
                          <span className="mx-1.5 text-muted/60">·</span>
                        )}
                        {role.duration && <span>{role.duration}</span>}
                      </div>
                    </div>

                    {/* Impact Narrative */}
                    <div className="space-y-2 text-[13px] sm:text-[14px] text-secondary leading-relaxed">
                      {role.description.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Main Task Operations Chips (+2 / +3 overflow) */}
                    <OperationsBadgeList operations={role.operations} initialVisibleCount={2} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Education Section */}
      <section aria-label="Education" className="space-y-6 pt-2">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Education
        </h2>

        <div className="relative pl-14 sm:pl-16 space-y-12">
          {/* Vertical Spine Hairline */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-[21px] top-5 bottom-2 w-[1px] bg-[var(--border)]"
          />

          {detailedEducation.map((edu) => (
            <div key={edu.id} className="relative space-y-3.5">
              {/* Monogram Badge */}
              <div
                aria-hidden="true"
                className="absolute -left-14 sm:-left-16 top-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center font-pixel text-[13px] sm:text-[14px] text-primary select-none z-10"
              >
                {edu.initial}
              </div>

              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-primary font-grotesk tracking-tight leading-snug">
                  {edu.company}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] font-mono text-muted flex-wrap mt-0.5">
                  <span>{edu.employmentType}</span>
                  {edu.duration && (
                    <>
                      <span className="text-muted/60">·</span>
                      <span className="tabular-nums">{edu.duration}</span>
                    </>
                  )}
                  {edu.location && (
                    <>
                      <span className="text-muted/60">·</span>
                      <span>{edu.location}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-5 pt-0.5">
                {edu.roles.map((role, rIdx) => (
                  <div key={rIdx} className="space-y-3">
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-semibold text-primary font-grotesk tracking-tight">
                        {role.title}
                      </h4>
                      <div className="text-[11px] font-mono text-muted tracking-wider uppercase tabular-nums mt-0.5">
                        {role.period}
                        {role.duration && (
                          <span className="mx-1.5 text-muted/60">·</span>
                        )}
                        {role.duration && <span>{role.duration}</span>}
                      </div>
                    </div>

                    <div className="space-y-2 text-[13px] sm:text-[14px] text-secondary leading-relaxed">
                      {role.description.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Main Task Operations Chips (+2 / +3 overflow) */}
                    <OperationsBadgeList operations={role.operations} initialVisibleCount={2} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Honors & Awards Section */}
      <section aria-label="Honors & Awards" className="space-y-6 pt-2">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Honors &amp; Awards
        </h2>

        <div className="relative pl-14 sm:pl-16 space-y-8">
          {/* Vertical Spine Hairline */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-[21px] top-5 bottom-2 w-[1px] bg-[var(--border)]"
          />

          {awardRecords.map((award, aIdx) => {
            const initial = aIdx === 0 ? "CC" : "D2";
            const org = aIdx === 0 ? "College of Information & Communications Technology" : "Department of Information and Communications Technology";
            const ops = aIdx === 0 ? ["Software Architecture", "Public Innovation"] : ["Civic Tech", "Rapid Prototyping"];

            return (
              <div key={award.id} className="relative space-y-2.5">
                <div
                  aria-hidden="true"
                  className="absolute -left-14 sm:-left-16 top-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center font-pixel text-[13px] sm:text-[14px] text-primary select-none z-10"
                >
                  {initial}
                </div>

                <div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-primary font-grotesk tracking-tight leading-snug">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] font-mono text-muted flex-wrap mt-0.5">
                    <span>{award.subtitle}</span>
                    <span className="text-muted/60">·</span>
                    <span className="tabular-nums">{award.period}</span>
                    <span className="text-muted/60">·</span>
                    <span className="text-muted">{org}</span>
                  </div>
                </div>

                <OperationsBadgeList operations={ops} initialVisibleCount={2} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
