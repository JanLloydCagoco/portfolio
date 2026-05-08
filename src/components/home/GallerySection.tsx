"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SectionCard from "@/components/ui/SectionCard";
import SectionLabel from "@/components/ui/SectionLabel";

const galleryImages = [
  { src: "/gallery/photo-1.jpg", alt: "Gallery photo 1" },
];

const hasImages = galleryImages.length > 0;

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SectionLabel text="Gallery" />

      {!hasImages ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 18h16.5M3.75 6h16.5A1.5 1.5 0 0121.75 7.5v9A1.5 1.5 0 0120.25 18H3.75A1.5 1.5 0 012.25 16.5v-9A1.5 1.5 0 013.75 6z"
            />
          </svg>
          <p className="text-sm font-medium text-primary">No photos yet</p>
          <p className="text-xs text-secondary text-center">
            Photos will appear here once they&apos;re added.
          </p>
        </div>
      ) : (
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 p-2 flex items-center justify-center transition-all duration-300 text-secondary hover:text-primary ${
                isHovering ? "opacity-100" : "animate-hint-left"
              }`}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          )}

          {/* Scrollable Images */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-1"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden bg-input"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={112}
                  height={112}
                  className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-input hover-outline transition-all duration-200"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 p-2 flex items-center justify-center transition-all duration-300 text-secondary hover:text-primary ${
                isHovering ? "opacity-100" : "animate-hint-right"
              }`}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          )}
        </div>
      )}
    </>
  );
}