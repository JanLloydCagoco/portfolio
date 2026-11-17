import type { Metadata } from "next";
import CertificationsView from "@/frontend/features/certifications/CertificationsView";

export const metadata: Metadata = {
  title: "Certifications — Jan Lloyd Cagoco",
  description: "Verified credentials, professional certifications, and technical accreditations of Jan Lloyd Cagoco.",
};

export default function CertificationsPage() {
  return <CertificationsView />;
}
