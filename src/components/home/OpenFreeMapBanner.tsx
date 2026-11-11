"use client";

import React, { useEffect, useRef, useState } from "react";

export default function OpenFreeMapBanner() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!mapContainerRef.current) return;

    // Dynamically import maplibre-gl on the client to avoid SSR issues
    import("maplibre-gl")
      .then((maplibreglModule: any) => {
        if (!isMounted || !mapContainerRef.current) return;
        const maplibregl = maplibreglModule.default || maplibreglModule;

        const map = new maplibregl.Map({
          container: mapContainerRef.current,
          style: "https://tiles.openfreemap.org/styles/positron",
          center: [121.8700, 17.8967],
          zoom: 11.5,
          scrollZoom: false,
          dragRotate: false,
          touchPitch: false,
          attributionControl: false,
        });

        mapInstanceRef.current = map;

        map.on("load", () => {
          if (!isMounted) return;
          setIsLoaded(true);

          // Add animated radar beacon marker at Baggao
          const markerEl = document.createElement("div");
          markerEl.className = "relative flex items-center justify-center cursor-default pointer-events-none";
          markerEl.style.width = "28px";
          markerEl.style.height = "28px";
          markerEl.innerHTML = `
            <span style="position: absolute; width: 28px; height: 28px; border-radius: 9999px; background-color: rgba(37, 99, 235, 0.25); animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
            <span style="position: absolute; width: 14px; height: 14px; border-radius: 9999px; border: 1px solid rgba(37, 99, 235, 0.5); background-color: rgba(37, 99, 235, 0.2);"></span>
            <span style="position: relative; width: 8px; height: 8px; border-radius: 9999px; background-color: #2563EB; box-shadow: 0 0 0 2px white;"></span>
          `;

          new maplibregl.Marker({ element: markerEl, anchor: "center" })
            .setLngLat([121.8700, 17.8967])
            .addTo(map);

          // Resize map to fit container
          map.resize();
        });

        map.on("error", () => {
          if (!isMounted) return;
          // Fallback gracefully without breaking page
          setHasError(true);
        });
      })
      .catch(() => {
        if (!isMounted) return;
        setHasError(true);
      });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch {
          // ignore cleanup error
        }
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full relative rounded-[6px] overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] select-none">
      {/* Downward CSS Gradient Mask Container */}
      <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] relative [mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Loading / Offline Fallback */}
        {(!isLoaded || hasError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg-elevated)] text-[11px] font-mono text-muted space-y-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping mb-1" />
            <span>Baggao, Cagayan, Philippines</span>
            <span className="text-[10px] text-muted/70">17.8967° N, 121.8700° E</span>
          </div>
        )}
      </div>

      {/* Top-Right Geo Badge Plaque */}
      <div className="absolute top-3 right-3 px-2 py-1 rounded-[3px] bg-[var(--bg)]/90 border border-[var(--border)] text-[10px] font-mono text-secondary tabular-nums backdrop-blur-sm select-none z-10 flex items-center gap-1.5 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>17.8967° N, 121.8700° E</span>
      </div>

      {/* Top-Left Location Tag */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-[3px] bg-[var(--bg)]/85 border border-[var(--border)] text-[10px] font-mono font-medium text-primary backdrop-blur-sm select-none z-10 shadow-xs">
        LGU Baggao, PH
      </div>
    </div>
  );
}
