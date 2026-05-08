"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/types";

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

type TabType = "work" | "education" | "achievements";

const tabs: { label: string; value: TabType }[] = [
  { label: "Work", value: "work" },
  { label: "Education", value: "education" },
  { label: "Achievements", value: "achievements" },
];

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  const filtered = timelineData.filter((item) => item.type === activeTab);

  return (
    <>
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <SectionLabel text="Timeline" />
        <div className="flex items-center gap-1 bg-white dark:bg-[#1a1a1a] rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                activeTab === tab.value
                  ? "bg-white dark:bg-[#2b2b2b] text-primary dark:text-white shadow-sm"
                  : "text-secondary dark:text-secondary hover:text-primary dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col">
        {filtered.map((item, index) => (
          <div key={item.id} className="flex gap-3">
            {/* Left — Dot + Line */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-input border border-default flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
              {index < filtered.length - 1 && (
                <div
                  className="w-px bg-gray-200 dark:bg-[#2a2a2a] flex-1"
                  style={{ minHeight: "24px" }}
                />
              )}
            </div>

            {/* Right — Content */}
            <div className="pb-5">
              <p className="text-sm font-semibold text-primary leading-tight">
                {item.title}
              </p>
              <p className="text-sm text-secondary mt-0.5">{item.subtitle}</p>
              <p className="text-sm text-secondary mt-0.5">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}