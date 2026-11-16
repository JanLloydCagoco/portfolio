"use client";

import React, { useState } from "react";
import { certifications } from "@/data/certifications";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@/frontend/components/icons/NavIcons";
import CertificationCard from "./CertificationCard";

export default function CertificationCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = certifications.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative w-full ${
          total > 1 ? "h-[240px] sm:h-[265px]" : "h-[225px] sm:h-[250px]"
        } flex items-center justify-center overflow-hidden py-2 select-none`}
      >
        {certifications.map((cert, index) => {
          const diff = (index - currentIndex + total) % total;

          let position: "center" | "right" | "left" | "hidden" = "hidden";
          if (diff === 0) position = "center";
          else if (diff === 1 || (total === 2 && diff === 1)) position = "right";
          else if (diff === total - 1) position = "left";

          if (position === "hidden") return null;

          const isCenter = position === "center";

          let transform = "translate3d(0, 0, 0) scale(1) rotate(0deg)";
          let opacity = 1;
          let zIndex = 20;

          if (position === "left") {
            transform = "translate3d(-42%, 0, 0) scale(0.92) rotate(-3.5deg)";
            opacity = 0.35;
            zIndex = 10;
          } else if (position === "right") {
            transform = "translate3d(42%, 0, 0) scale(0.92) rotate(3.5deg)";
            opacity = 0.35;
            zIndex = 10;
          }

          return (
            <CertificationCard
              key={cert.id}
              cert={cert}
              variant="stack"
              isCenter={isCenter}
              position={position}
              style={{ transform, opacity, zIndex }}
              onClick={() => {
                if (position === "left") handlePrev();
                if (position === "right") handleNext();
              }}
            />
          );
        })}
      </div>

      {total > 1 && (
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to certification ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-[var(--border-strong)] hover:bg-secondary"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Previous certification"
              onClick={handlePrev}
              className="w-7 h-7 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg)] text-secondary hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft01Icon size={14} />
            </button>
            <button
              type="button"
              aria-label="Next certification"
              onClick={handleNext}
              className="w-7 h-7 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg)] text-secondary hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowRight01Icon size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
