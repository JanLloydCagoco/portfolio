"use client";

import React, { useEffect, useRef, useCallback } from "react";

type Direction =
  | "Normal"
  | "North"
  | "North-East"
  | "East"
  | "South-East"
  | "South"
  | "South-West"
  | "West"
  | "North-West";

const AVATAR_FILES: Record<Direction, string> = {
  Normal: "/avatar/Normal.png",
  North: "/avatar/North.png",
  "North-East": "/avatar/North-East.png",
  East: "/avatar/East.png",
  "South-East": "/avatar/South-East.png",
  South: "/avatar/South.png",
  "South-West": "/avatar/South-West.png",
  West: "/avatar/West.png",
  "North-West": "/avatar/North-West.png",
};

export default function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});
  const activeDirRef = useRef<Direction>("Normal");
  const rafRef = useRef<number | null>(null);

  const renderFrame = useCallback((dir: Direction) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[dir] || imagesRef.current["Normal"];
    if (!img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(img, 0, 0, 500, 500);
    activeDirRef.current = dir;
  }, []);

  useEffect(() => {
    Object.entries(AVATAR_FILES).forEach(([dir, src]) => {
      const img = new window.Image();
      img.src = src;

      const onReady = () => {
        imagesRef.current[dir] = img;
        if (dir === activeDirRef.current) {
          renderFrame(dir as Direction);
        }
      };

      if (img.complete) {
        onReady();
      } else {
        img.onload = onReady;
      }

      if (img.decode) {
        img.decode().then(onReady).catch(() => {});
      }
    });
  }, [renderFrame]);

  const handlePointerMove = useCallback(
    (e: MouseEvent | Touch) => {
      if (!containerRef.current) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height * 0.42;

        const dx = e.clientX - anchorX;
        const dy = e.clientY - anchorY;
        const dist = Math.hypot(dx, dy);

        const deadzone = 65;
        if (dist < deadzone) {
          if (activeDirRef.current !== "Normal") {
            renderFrame("Normal");
          }
          if (containerRef.current) {
            containerRef.current.style.transform =
              "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
          }
          return;
        }

        const deg = (Math.atan2(dy, dx) * (180 / Math.PI) + 360) % 360;

        let nextDir: Direction = "Normal";
        if (deg >= 337.5 || deg < 22.5) {
          nextDir = "East";
        } else if (deg >= 22.5 && deg < 67.5) {
          nextDir = "South-East";
        } else if (deg >= 67.5 && deg < 112.5) {
          nextDir = "South";
        } else if (deg >= 112.5 && deg < 157.5) {
          nextDir = "South-West";
        } else if (deg >= 157.5 && deg < 202.5) {
          nextDir = "West";
        } else if (deg >= 202.5 && deg < 247.5) {
          nextDir = "North-West";
        } else if (deg >= 247.5 && deg < 292.5) {
          nextDir = "North";
        } else {
          nextDir = "North-East";
        }

        if (nextDir !== activeDirRef.current && imagesRef.current[nextDir]) {
          renderFrame(nextDir);
        }

        const maxDistX = Math.max(anchorX, window.innerWidth - anchorX) || 1;
        const maxDistY = Math.max(anchorY, window.innerHeight - anchorY) || 1;
        const normX = Math.max(-1, Math.min(1, dx / maxDistX));
        const normY = Math.max(-1, Math.min(1, dy / maxDistY));

        const maxTilt = 7;
        const maxShift = 4;
        const rotateY = normX * maxTilt;
        const rotateX = -normY * maxTilt;
        const shiftX = normX * maxShift;
        const shiftY = normY * maxShift;

        if (containerRef.current) {
          containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
            2
          )}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${shiftX.toFixed(
            1
          )}px, ${shiftY.toFixed(1)}px, 0)`;
        }
      });
    },
    [renderFrame]
  );

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (activeDirRef.current !== "Normal") {
      renderFrame("Normal");
    }
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
    }
  }, [renderFrame]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0]);
      }
    };
    const onTouchEnd = () => handlePointerLeave();

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handlePointerMove, handlePointerLeave]);

  return (
    <div
      ref={containerRef}
      className="relative shrink-0 w-36 h-36 sm:w-48 sm:h-48 select-none pointer-events-auto transition-transform duration-100 ease-out"
      aria-label="Jan Lloyd Cagoco - interactive portrait tracking cursor direction"
    >
      <div className="relative w-full h-full filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_12px_26px_rgba(0,0,0,0.45)]">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className="w-full h-full object-contain object-bottom pointer-events-none"
          role="img"
          aria-label="Jan Lloyd Cagoco"
        />
      </div>
    </div>
  );
}
