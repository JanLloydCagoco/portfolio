import type { Metadata } from "next";
import ExperiencesView from "@/frontend/features/experiences/ExperiencesView";

export const metadata: Metadata = {
  title: "Experiences — Jan Lloyd Cagoco",
  description: "Work history, engineering internships, and academic background of Jan Lloyd Cagoco.",
};

export default function ExperiencesPage() {
  return <ExperiencesView />;
}
