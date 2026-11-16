"use client";

import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import CertificationCard from "./CertificationCard";
import { certificationCategories } from "@/data/certifications";

export default function CertificationsView() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="certifications"
        description="A curated directory of verified credentials, professional certifications, and technical accreditations issued by industry organizations."
      />

      <div className="space-y-8">
        {certificationCategories.map((category) => (
          <section key={category.name} aria-label={category.name} className="space-y-3">
            <h2 className="text-[13px] font-medium text-secondary uppercase tracking-wider">
              {category.name}
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 max-w-[540px]">
              {category.certifications.map((cert) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  variant="standalone"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
