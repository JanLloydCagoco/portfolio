"use client";

import React, { useRef, useState } from "react";
import { certifications } from "@/data/certifications";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@/frontend/components/icons/NavIcons";
import CertificationCard from "./CertificationCard";

export default function CertificationCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = certifications.length;

  if (total <= 1) {
    const cert = certifications[0];
    if (!cert) return null;
    return (
      <div className="w-full flex justify-center py-4 select-none">
        <CertificationCard
          cert={cert}
          variant="stack"
          isCenter={true}
          position="center"
        />
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="space-y-4">
      <div
        className="relative w-full h-[255px] sm:h-[280px] flex items-center justify-center overflow-x-clip overflow-y-visible py-4 select-none touch-pan-y"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (dx <= -40) handleNext();
          if (dx >= 40) handlePrev();
        }}
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
          <div className="flex items-center gap-0.5 -ml-0.5">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to certification ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className="group h-7 max-xl:h-10 px-0.5 max-xl:px-1.5 flex items-center cursor-pointer"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-5 bg-primary"
                      : "w-1.5 bg-[var(--border-strong)] group-hover:bg-secondary"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Previous certification"
              onClick={handlePrev}
              className="w-7 h-7 max-xl:w-10 max-xl:h-10 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg)] text-secondary hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft01Icon size={14} />
            </button>
            <button
              type="button"
              aria-label="Next certification"
              onClick={handleNext}
              className="w-7 h-7 max-xl:w-10 max-xl:h-10 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:bg-[var(--bg)] text-secondary hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <ArrowRight01Icon size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
