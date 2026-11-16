import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import TimelineSpine from "./TimelineSpine";
import ExperienceCard from "./ExperienceCard";
import AwardCard from "./AwardCard";
import {
  detailedExperiences,
  detailedEducation,
  awardRecords,
} from "@/data/records";

export default function ExperiencesView() {
  return (
    <div className="w-full space-y-14 sm:space-y-16">
      <PageHeader
        title="experiences"
        description="A comprehensive record of my professional work history, public sector engineering initiatives, and academic background."
      />

      <section aria-label="Employment & Internships" className="space-y-6">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Employment &amp; Internships
        </h2>
        <TimelineSpine>
          {detailedExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </TimelineSpine>
      </section>

      <section aria-label="Education" className="space-y-6 pt-2">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Education
        </h2>
        <TimelineSpine>
          {detailedEducation.map((edu) => (
            <ExperienceCard key={edu.id} experience={edu} />
          ))}
        </TimelineSpine>
      </section>

      <section aria-label="Honors & Awards" className="space-y-6 pt-2">
        <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
          Honors &amp; Awards
        </h2>
        <TimelineSpine className="space-y-8">
          {awardRecords.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </TimelineSpine>
      </section>
    </div>
  );
}
