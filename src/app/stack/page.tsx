import type { Metadata } from "next";
import StackView from "@/frontend/features/stack/StackView";

export const metadata: Metadata = {
  title: "Stack — Jan Lloyd Cagoco",
  description: "Design, frontend, and infrastructure tools used by Jan Lloyd Cagoco.",
};

export default function StackPage() {
  return <StackView />;
}
