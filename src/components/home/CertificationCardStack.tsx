"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/certifications";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  CourseraLogo,
  GoogleLogo,
  MetaLogo,
  AwsLogo,
  MicrosoftLogo,
} from "@/lib/icons";

export default function CertificationCardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const total = certifications.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const getIssuerIcon = (issuer: string) => {
    if (issuer.includes("Google")) {
      return <GoogleLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" />;
    }
    if (issuer.includes("Meta")) {
      return <MetaLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 text-primary" />;
    }
    if (issuer.includes("Amazon") || issuer.includes("AWS")) {
      return <AwsLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 text-primary" />;
    }
    if (issuer.includes("Microsoft") || issuer.includes("Azure")) {
      return <MicrosoftLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" />;
    }
    return <CourseraLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" />;
  };

  return (
    <div className="space-y-4">
      {/* Clean Architectural 3-Card Stage (Compact card, large contents, spring motion) */}
      <div className="relative w-full h-[240px] sm:h-[265px] flex items-center justify-center overflow-hidden py-2 select-none">
        {certifications.map((cert, index) => {
          const diff = (index - currentIndex + total) % total;

          let position: "center" | "right" | "left" | "hidden" = "hidden";
          if (diff === 0) position = "center";
          else if (diff === 1 || (total === 2 && diff === 1)) position = "right";
          else if (diff === total - 1) position = "left";

          if (position === "hidden") return null;

          let targetX = "0%";
          let targetScale = 1;
          let targetRotate = 0;
          let targetZ = 20;
          let targetOpacity = 1;

          if (!shouldReduceMotion) {
            if (position === "left") {
              targetX = "-42%";
              targetScale = 0.92;
              targetRotate = -3.5;
              targetZ = 10;
              targetOpacity = 0.35;
            } else if (position === "right") {
              targetX = "42%";
              targetScale = 0.92;
              targetRotate = 3.5;
              targetZ = 10;
              targetOpacity = 0.35;
            }
          } else {
            if (position !== "center") {
              targetOpacity = 0;
              targetZ = 0;
            }
          }

          const isCenter = position === "center";

          const hoverAnimation = !shouldReduceMotion
            ? isCenter
              ? { y: -6, scale: 1.025 }
              : position === "left"
              ? { x: "-46%", scale: 0.95, opacity: 0.65 }
              : position === "right"
              ? { x: "46%", scale: 0.95, opacity: 0.65 }
              : undefined
            : undefined;

          return (
            <motion.div
              key={cert.id}
              onClick={() => {
                if (position === "left") handlePrev();
                if (position === "right") handleNext();
              }}
              initial={false}
              animate={{
                x: targetX,
                scale: targetScale,
                rotate: targetRotate,
                zIndex: targetZ,
                opacity: targetOpacity,
              }}
              whileHover={hoverAnimation}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.6,
              }}
              className={`absolute w-[210px] h-[210px] sm:w-[235px] sm:h-[235px] aspect-square rounded-[8px] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center p-4 sm:p-5 gap-2.5 sm:gap-3 transition-colors duration-150 hover:border-[var(--border-strong)] ${
                isCenter ? "cursor-default" : "cursor-pointer"
              }`}
            >
              {/* 1. Large Platform Logo (Middle Center) */}
              <div className="flex items-center justify-center">
                {getIssuerIcon(cert.issuer)}
              </div>

              {/* 2. Cert Name Below Logo (Preserved font size) */}
              <h3 className="text-[16px] sm:text-[18px] font-bold text-primary font-grotesk tracking-tight leading-snug max-w-[195px] sm:max-w-[215px] line-clamp-3">
                {cert.title}
              </h3>

              {/* 3. Below is Verify (Clean link without button container) */}
              <div className="pt-0.5">
                {isCenter ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-primary hover:underline underline-offset-4 decoration-[var(--border-strong)] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Verify</span>
                    <ArrowUpRight01Icon
                      size={12}
                      className="shrink-0 text-primary"
                    />
                  </a>
                ) : (
                  <span className="text-[12px] text-muted">Click to view</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrow Controls & Position Dots */}
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
    </div>
  );
}
