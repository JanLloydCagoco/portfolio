import type { Metadata } from "next";
import InquiryView from "@/frontend/features/inquiry/InquiryView";

export const metadata: Metadata = {
  title: "Inquiry — Jan Lloyd Cagoco",
  description: "Contact and project inquiries for Jan Lloyd Cagoco.",
};

export default function InquiryPage() {
  return <InquiryView />;
}
