import SectionLabel from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/types";

interface TimelineSectionProps {
  title: string;
  type: "work" | "education" | "achievements";
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Senior Product Designer",
    subtitle: "Rectangle Inc.",
    period: "2023 — Present",
    type: "work",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    subtitle: "Freelance",
    period: "2021 — 2023",
    type: "work",
  },
  {
    id: "3",
    title: "BS Computer Science",
    subtitle: "XYZ University",
    period: "2018 — 2022",
    type: "education",
  },
  {
    id: "4",
    title: "Design Bootcamp",
    subtitle: "Online Academy",
    period: "2019 — 2020",
    type: "education",
  },
  {
    id: "5",
    title: "Best UI Design Award",
    subtitle: "Design Conference PH",
    period: "2022",
    type: "achievements",
  },
  {
    id: "6",
    title: "Top Freelancer",
    subtitle: "Upwork",
    period: "2021",
    type: "achievements",
  },
];

export default function TimelineSection({ title, type }: TimelineSectionProps) {
  const filtered = timelineData.filter((item) => item.type === type);

  return (
    <>
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <SectionLabel text={title} />
      </div>

      {/* Timeline List */}
      <div className="flex flex-col mt-4">
        {filtered.map((item, index) => (
          <div key={item.id} className="group relative flex gap-3 sm:gap-4 pb-3">
            
            {/* Left - Glass Node & Line */}
            <div className="flex flex-col items-center pt-3.5">
              <div className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 glass-sm z-10 flex items-center justify-center transition-all duration-300 group-hover:border-black/20 dark:group-hover:border-white/30">
                <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/40 group-hover:bg-black/80 dark:group-hover:bg-white/90 transition-colors duration-300" />
              </div>
              {index < filtered.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-black/10 dark:from-white/10 via-black/5 dark:via-white/5 to-transparent mt-1.5 mb-1" style={{ minHeight: "2rem" }} />
              )}
            </div>

            {/* Right - Clean Glass Card */}
            <div className="flex-1">
              <div className="glass-sm p-3.5 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/10 hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                  <h3 className="text-sm font-semibold text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-medium text-secondary bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded border border-black/5 dark:border-white/5">
                    {item.period}
                  </span>
                </div>
                <p className="text-[13px] text-secondary/80 leading-snug">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}