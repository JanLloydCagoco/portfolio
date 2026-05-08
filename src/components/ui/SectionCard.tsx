import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function SectionCard({
  children,
  className = "",
  alt = false,
}: SectionCardProps) {
  return (
    <div
      className={`px-6 py-6 border-b border-default last:border-b-0 transition-colors duration-300 ${
        alt ? "bg-card-alt" : "bg-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}