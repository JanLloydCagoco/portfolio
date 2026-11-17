import { ImageResponse } from "next/og";

export const alt = "Jan Lloyd Cagoco — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// shortcut: uses the built-in sans, not Departure Mono (the renderer cannot read .woff2); add a .ttf to match the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#FAF8F5",
          color: "#141413",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#585753" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
            Jan Lloyd Cagoco
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#585753", marginTop: 12 }}>
            Full-Stack Developer · Web &amp; mobile apps
          </div>
        </div>
      </div>
    ),
    size
  );
}
