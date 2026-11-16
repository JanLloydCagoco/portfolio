import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      <h1 className="font-pixel text-[26px] sm:text-[28px] leading-none text-primary lowercase">
        {title}
      </h1>
      <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default PageHeader;
