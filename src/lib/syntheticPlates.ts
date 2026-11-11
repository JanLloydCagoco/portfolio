import { Project } from "@/types";

export type SyntheticPlateVariant = "primary" | "detail-a" | "detail-b";

const CANVAS_WIDTH = 1600;
const CANVAS_HEIGHT = 1000;
const FONT_STACK =
  '"PP Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawProvenanceStamp(ctx: CanvasRenderingContext2D, project: Project, isLight: boolean) {
  const label = `SYNTHETIC STAND-IN · LOT ${project.lotNumber}`;
  ctx.save();
  ctx.font = `600 13px ${FONT_STACK}`;
  const textMetrics = ctx.measureText(label);
  const padX = 16;
  const pillW = Math.ceil(textMetrics.width + padX * 2 + 16);
  const pillH = 34;
  const x = CANVAS_WIDTH - pillW - 28;
  const y = CANVAS_HEIGHT - pillH - 24;

  drawRoundedRect(ctx, x, y, pillW, pillH, 3);
  ctx.fillStyle = isLight ? "rgba(14, 14, 14, 0.88)" : "rgba(236, 235, 231, 0.92)";
  ctx.fill();

  // Status dot
  ctx.beginPath();
  ctx.arc(x + 16, y + pillH / 2, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = isLight ? "#ECEBE7" : "#0E0F12";
  ctx.fill();

  ctx.fillStyle = isLight ? "#ECEBE7" : "#0E0F12";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + 28, y + pillH / 2 + 0.5);
  ctx.restore();
}

function drawSubtleGrid(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  step: number,
  strokeStyle: string
) {
  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = x; gx <= x + w; gx += step) {
    ctx.moveTo(gx + 0.5, y);
    ctx.lineTo(gx + 0.5, y + h);
  }
  for (let gy = y; gy <= y + h; gy += step) {
    ctx.moveTo(x, gy + 0.5);
    ctx.lineTo(x + w, gy + 0.5);
  }
  ctx.stroke();
  ctx.restore();
}

function drawWorkspacePrimary(ctx: CanvasRenderingContext2D, project: Project) {
  const surface = project.screenTheme.surface || "#F4F4F1";
  const ink = "#111215";
  const muted = "#666863";
  const rule = "rgba(17, 18, 21, 0.11)";
  const panelBg = "#EAEBE6";

  // Base fill
  ctx.fillStyle = surface;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Top command bar
  const topBarH = 60;
  ctx.fillStyle = "#EDEDEA";
  ctx.fillRect(0, 0, CANVAS_WIDTH, topBarH);
  ctx.strokeStyle = rule;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, topBarH + 0.5);
  ctx.lineTo(CANVAS_WIDTH, topBarH + 0.5);
  ctx.stroke();

  // Window traffic dots (monochrome architectural)
  [28, 46, 64].forEach((cx, i) => {
    ctx.beginPath();
    ctx.arc(cx, topBarH / 2, 5, 0, Math.PI * 2);
    ctx.fillStyle = i === 0 ? ink : "rgba(17, 18, 21, 0.22)";
    ctx.fill();
  });

  // Top command bar title & breadcrumbs
  ctx.fillStyle = ink;
  ctx.font = `500 15px ${FONT_STACK}`;
  ctx.textBaseline = "middle";
  ctx.fillText(`${project.company}  /  ${project.name}  /  Canvas 01`, 96, topBarH / 2);

  // Center segmented mode pill
  const modes = ["Layout", "Vector Grid", "Tokens", "Inspect"];
  let modeX = 630;
  modes.forEach((m, idx) => {
    const w = 96;
    if (idx === 1) {
      drawRoundedRect(ctx, modeX, 14, w, 32, 4);
      ctx.fillStyle = ink;
      ctx.fill();
      ctx.fillStyle = surface;
    } else {
      ctx.fillStyle = muted;
    }
    ctx.font = `500 13px ${FONT_STACK}`;
    ctx.textAlign = "center";
    ctx.fillText(m, modeX + w / 2, topBarH / 2);
    modeX += w + 6;
  });
  ctx.textAlign = "left";

  // Right zoom readout
  ctx.fillStyle = muted;
  ctx.font = `500 13px ${FONT_STACK}`;
  ctx.fillText("100.0%  ·  1600 × 1000 px", CANVAS_WIDTH - 210, topBarH / 2);

  // Left spatial layer tree rail
  const leftRailW = 280;
  const rightRailW = 320;
  const bodyY = topBarH;
  const bodyH = CANVAS_HEIGHT - topBarH;

  ctx.fillStyle = panelBg;
  ctx.fillRect(0, bodyY, leftRailW, bodyH);
  ctx.fillRect(CANVAS_WIDTH - rightRailW, bodyY, rightRailW, bodyH);

  // Vertical hairlines
  ctx.strokeStyle = rule;
  ctx.beginPath();
  ctx.moveTo(leftRailW + 0.5, bodyY);
  ctx.lineTo(leftRailW + 0.5, CANVAS_HEIGHT);
  ctx.moveTo(CANVAS_WIDTH - rightRailW - 0.5, bodyY);
  ctx.lineTo(CANVAS_WIDTH - rightRailW - 0.5, CANVAS_HEIGHT);
  ctx.stroke();

  // Left rail content: structural tree
  ctx.fillStyle = ink;
  ctx.font = `600 13px ${FONT_STACK}`;
  ctx.fillText("Structural Nodes", 24, bodyY + 34);

  const layers = [
    { depth: 0, name: "00  Root Viewport", meta: "1440×900", active: false },
    { depth: 1, name: "01  Header Bar", meta: "Flex · H", active: false },
    { depth: 1, name: "02  Primary Stage", meta: "Grid · 12c", active: true },
    { depth: 2, name: "02.1  Bezier Surface", meta: "Mesh", active: false },
    { depth: 2, name: "02.2  AxisReadout", meta: "Tabular", active: false },
    { depth: 2, name: "02.3  FocalFrame", meta: "Locked", active: false },
    { depth: 1, name: "03  Specification Rail", meta: "320px", active: false },
    { depth: 1, name: "04  Ledger Rows", meta: "Auto", active: false },
    { depth: 2, name: "04.1  RowItem [01]", meta: "Instance", active: false },
    { depth: 2, name: "04.2  RowItem [02]", meta: "Instance", active: false },
  ];

  layers.forEach((layer, idx) => {
    const rowY = bodyY + 62 + idx * 42;
    if (layer.active) {
      drawRoundedRect(ctx, 12, rowY - 14, leftRailW - 24, 34, 4);
      ctx.fillStyle = ink;
      ctx.fill();
    }
    ctx.fillStyle = layer.active ? surface : ink;
    ctx.font = `500 13px ${FONT_STACK}`;
    ctx.fillText(layer.name, 24 + layer.depth * 16, rowY + 3);

    ctx.fillStyle = layer.active ? "rgba(244,244,241,0.7)" : muted;
    ctx.font = `400 12px ${FONT_STACK}`;
    ctx.textAlign = "right";
    ctx.fillText(layer.meta, leftRailW - 24, rowY + 3);
    ctx.textAlign = "left";
  });

  // Central canvas area with precision grid & architectural geometry
  const stageX = leftRailW;
  const stageW = CANVAS_WIDTH - leftRailW - rightRailW;
  drawSubtleGrid(ctx, stageX, bodyY, stageW, bodyH, 40, "rgba(17, 18, 21, 0.055)");

  // Artboard card inside central stage
  const artX = stageX + 76;
  const artY = bodyY + 72;
  const artW = stageW - 152;
  const artH = bodyH - 144;

  // Artboard shadow & surface
  ctx.save();
  ctx.shadowColor = "rgba(14, 14, 14, 0.08)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 12;
  drawRoundedRect(ctx, artX, artY, artW, artH, 6);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.restore();

  drawRoundedRect(ctx, artX, artY, artW, artH, 6);
  ctx.strokeStyle = "rgba(17, 18, 21, 0.18)";
  ctx.lineWidth = 1.25;
  ctx.stroke();

  // Artboard header metadata
  ctx.fillStyle = muted;
  ctx.font = `500 12px ${FONT_STACK}`;
  ctx.fillText(`FRAME 01 · ${project.name.toUpperCase()}`, artX + 4, artY - 14);
  ctx.textAlign = "right";
  ctx.fillText("848 × 796", artX + artW - 4, artY - 14);
  ctx.textAlign = "left";

  // Inside artboard: editorial layout + precision bezier curve graph
  ctx.fillStyle = ink;
  ctx.font = `500 44px ${FONT_STACK}`;
  ctx.fillText(project.name, artX + 48, artY + 76);

  ctx.fillStyle = muted;
  ctx.font = `400 17px ${FONT_STACK}`;
  ctx.fillText(project.tagline, artX + 48, artY + 118);

  // Horizontal rule inside artboard
  ctx.strokeStyle = rule;
  ctx.beginPath();
  ctx.moveTo(artX + 48, artY + 152);
  ctx.lineTo(artX + artW - 48, artY + 152);
  ctx.stroke();

  // Geometric spline & coordinate box inside artboard
  const graphX = artX + 48;
  const graphY = artY + 184;
  const graphW = artW - 96;
  const graphH = 340;

  drawRoundedRect(ctx, graphX, graphY, graphW, graphH, 4);
  ctx.fillStyle = "#F6F6F3";
  ctx.fill();
  ctx.strokeStyle = rule;
  ctx.stroke();

  drawSubtleGrid(ctx, graphX, graphY, graphW, graphH, 32, "rgba(17, 18, 21, 0.05)");

  // Bezier curve
  const p0 = { x: graphX + 48, y: graphY + graphH - 52 };
  const p1 = { x: graphX + graphW * 0.36, y: graphY + 38 };
  const p2 = { x: graphX + graphW * 0.64, y: graphY + graphH - 42 };
  const p3 = { x: graphX + graphW - 48, y: graphY + 64 };

  // Handle lines
  ctx.strokeStyle = "rgba(17, 18, 21, 0.35)";
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.moveTo(p3.x, p3.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  ctx.setLineDash([]);

  // Main spline curve
  ctx.strokeStyle = ink;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  ctx.stroke();

  // Control nodes
  [p0, p1, p2, p3].forEach((pt, idx) => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = idx === 0 || idx === 3 ? ink : "#FFFFFF";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = ink;
    ctx.stroke();
  });

  // Bottom 3-column architectural readout cards in artboard
  const colW = (graphW - 32) / 3;
  const cardY = graphY + graphH + 28;
  const specs = [
    { label: "Grid Module", value: "8.00 px" },
    { label: "Column Rhythm", value: "12 Col / 24g" },
    { label: "Release Year", value: project.year },
  ];
  specs.forEach((s, idx) => {
    const cx = graphX + idx * (colW + 16);
    drawRoundedRect(ctx, cx, cardY, colW, 108, 4);
    ctx.fillStyle = "#F9F9F7";
    ctx.fill();
    ctx.strokeStyle = rule;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = muted;
    ctx.font = `400 13px ${FONT_STACK}`;
    ctx.fillText(s.label, cx + 20, cardY + 34);

    ctx.fillStyle = ink;
    ctx.font = `500 24px ${FONT_STACK}`;
    ctx.fillText(s.value, cx + 20, cardY + 74);
  });

  // Right inspector rail
  const rx = CANVAS_WIDTH - rightRailW + 24;
  const rw = rightRailW - 48;
  ctx.fillStyle = ink;
  ctx.font = `600 13px ${FONT_STACK}`;
  ctx.fillText("Geometry & Tokens", rx, bodyY + 34);

  const inspectorRows = [
    ["Position X", "356.00 px"],
    ["Position Y", "132.00 px"],
    ["Width", "848.00 px"],
    ["Height", "796.00 px"],
    ["Corner Radius", "6.00 px"],
    ["Surface Token", surface],
    ["Ink Token", ink],
    ["Client", project.client],
    ["Sector", project.projectType],
  ];

  inspectorRows.forEach(([k, v], i) => {
    const ry = bodyY + 76 + i * 48;
    ctx.strokeStyle = rule;
    ctx.beginPath();
    ctx.moveTo(rx, ry + 24);
    ctx.lineTo(rx + rw, ry + 24);
    ctx.stroke();

    ctx.fillStyle = muted;
    ctx.font = `400 13px ${FONT_STACK}`;
    ctx.fillText(k, rx, ry);

    ctx.fillStyle = ink;
    ctx.font = `500 13px ${FONT_STACK}`;
    ctx.textAlign = "right";
    ctx.fillText(v, rx + rw, ry);
    ctx.textAlign = "left";
  });

  drawProvenanceStamp(ctx, project, true);
}

function drawMobileInstrumentPrimary(ctx: CanvasRenderingContext2D, project: Project) {
  const bg = project.screenTheme.surface || "#15181F";
  const ink = "#ECEBE7";
  const muted = "#8A8D93";
  const rule = "rgba(236, 235, 231, 0.12)";

  // Deep matte obsidian studio backing
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  drawSubtleGrid(ctx, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 40, "rgba(236, 235, 231, 0.035)");

  // Top plate bar
  ctx.fillStyle = muted;
  ctx.font = `500 13px ${FONT_STACK}`;
  ctx.fillText(`${project.company}  ·  ${project.name}  ·  Mobile Instrument Triptych`, 64, 52);
  ctx.textAlign = "right";
  ctx.fillText(`LOT ${project.lotNumber}  ·  ${project.year}`, CANVAS_WIDTH - 64, 52);
  ctx.textAlign = "left";

  // Three sleek mobile screens side-by-side
  const phoneW = 390;
  const phoneH = 770;
  const gap = 64;
  const startX = (CANVAS_WIDTH - (phoneW * 3 + gap * 2)) / 2;
  const startY = 104;

  const titles = ["01 / Telemetry Dial", "02 / Ledger Stack", "03 / Control Sheet"];

  for (let i = 0; i < 3; i++) {
    const px = startX + i * (phoneW + gap);
    const py = startY;

    // Phone bezel shadow
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctx.shadowBlur = 36;
    ctx.shadowOffsetY = 18;
    drawRoundedRect(ctx, px, py, phoneW, phoneH, 42);
    ctx.fillStyle = "#1D212A";
    ctx.fill();
    ctx.restore();

    // Inner screen
    drawRoundedRect(ctx, px + 10, py + 10, phoneW - 20, phoneH - 20, 34);
    ctx.fillStyle = "#101217";
    ctx.fill();
    ctx.strokeStyle = "rgba(236, 235, 231, 0.16)";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Speaker pill
    drawRoundedRect(ctx, px + phoneW / 2 - 36, py + 26, 72, 14, 7);
    ctx.fillStyle = "#08090C";
    ctx.fill();

    // Screen content header
    const sx = px + 34;
    const sw = phoneW - 68;
    ctx.fillStyle = muted;
    ctx.font = `500 12px ${FONT_STACK}`;
    ctx.fillText(titles[i], sx, py + 76);

    if (i === 0) {
      // Screen 1: Radial precision dial + readout
      ctx.fillStyle = ink;
      ctx.font = `500 28px ${FONT_STACK}`;
      ctx.fillText("Field Calibration", sx, py + 118);

      const cx = px + phoneW / 2;
      const cy = py + 310;
      const r = 118;

      // Tick ring
      for (let t = 0; t < 48; t++) {
        const angle = (t / 48) * Math.PI * 2 - Math.PI / 2;
        const inner = t % 4 === 0 ? r - 14 : r - 7;
        ctx.strokeStyle = t < 34 ? ink : "rgba(236, 235, 231, 0.2)";
        ctx.lineWidth = t % 4 === 0 ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
        ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
        ctx.stroke();
      }

      ctx.fillStyle = ink;
      ctx.font = `500 44px ${FONT_STACK}`;
      ctx.textAlign = "center";
      ctx.fillText("70.8°", cx, cy + 8);
      ctx.fillStyle = muted;
      ctx.font = `400 13px ${FONT_STACK}`;
      ctx.fillText("NOMINAL PHASE", cx, cy + 38);
      ctx.textAlign = "left";

      // Bottom rows
      const rows = [
        ["Frequency", "60.0 Hz"],
        ["Latency", "4.2 ms"],
        ["Frame Sync", "Locked"],
      ];
      rows.forEach(([k, v], rIdx) => {
        const ry = py + 495 + rIdx * 68;
        drawRoundedRect(ctx, sx, ry, sw, 54, 12);
        ctx.fillStyle = "#171A22";
        ctx.fill();
        ctx.strokeStyle = rule;
        ctx.stroke();

        ctx.fillStyle = muted;
        ctx.font = `400 14px ${FONT_STACK}`;
        ctx.fillText(k, sx + 18, ry + 31);

        ctx.fillStyle = ink;
        ctx.font = `500 15px ${FONT_STACK}`;
        ctx.textAlign = "right";
        ctx.fillText(v, sx + sw - 18, ry + 31);
        ctx.textAlign = "left";
      });
    } else if (i === 1) {
      // Screen 2: Typographic card stack
      ctx.fillStyle = ink;
      ctx.font = `500 28px ${FONT_STACK}`;
      ctx.fillText("Architecture Index", sx, py + 118);

      const cards = [
        { code: "MOD-01", title: "Navigation Shell", state: "v2.4" },
        { code: "MOD-02", title: "Gesture Sheet", state: "v2.4" },
        { code: "MOD-03", title: "Typography Scale", state: "v2.4" },
        { code: "MOD-04", title: "Haptic Feedback", state: "v2.4" },
      ];
      cards.forEach((c, cIdx) => {
        const cy = py + 154 + cIdx * 136;
        drawRoundedRect(ctx, sx, cy, sw, 118, 16);
        ctx.fillStyle = cIdx === 0 ? "#222733" : "#161921";
        ctx.fill();
        ctx.strokeStyle = cIdx === 0 ? "rgba(236,235,231,0.3)" : rule;
        ctx.stroke();

        ctx.fillStyle = muted;
        ctx.font = `500 12px ${FONT_STACK}`;
        ctx.fillText(c.code, sx + 20, cy + 32);

        ctx.textAlign = "right";
        ctx.fillText(c.state, sx + sw - 20, cy + 32);
        ctx.textAlign = "left";

        ctx.fillStyle = ink;
        ctx.font = `500 20px ${FONT_STACK}`;
        ctx.fillText(c.title, sx + 20, cy + 74);
      });
    } else {
      // Screen 3: Precision interaction sheet & waveform bars
      ctx.fillStyle = ink;
      ctx.font = `500 28px ${FONT_STACK}`;
      ctx.fillText("Response Curve", sx, py + 118);

      // Bar equalizer / distribution
      const barCount = 18;
      const barGap = 6;
      const barW = (sw - (barCount - 1) * barGap) / barCount;
      const chartBottom = py + 340;
      for (let b = 0; b < barCount; b++) {
        const norm = Math.sin((b / barCount) * Math.PI) * 0.75 + 0.2;
        const bh = Math.round(norm * 160);
        const bx = sx + b * (barW + barGap);
        drawRoundedRect(ctx, bx, chartBottom - bh, barW, bh, 4);
        ctx.fillStyle = b === 9 ? ink : "rgba(236, 235, 231, 0.25)";
        ctx.fill();
      }

      // Bottom modal sheet
      const sheetY = py + 388;
      const sheetH = 342;
      drawRoundedRect(ctx, sx - 8, sheetY, sw + 16, sheetH, 24);
      ctx.fillStyle = "#191D26";
      ctx.fill();
      ctx.strokeStyle = rule;
      ctx.stroke();

      // Sliders inside sheet
      const sliders = [
        { label: "Damping Ratio", val: 0.78 },
        { label: "Spring Stiffness", val: 0.62 },
        { label: "Mass Constant", val: 0.44 },
      ];
      sliders.forEach((sl, sIdx) => {
        const sy = sheetY + 56 + sIdx * 92;
        ctx.fillStyle = muted;
        ctx.font = `400 13px ${FONT_STACK}`;
        ctx.fillText(sl.label, sx + 14, sy);
        ctx.fillStyle = ink;
        ctx.textAlign = "right";
        ctx.fillText(sl.val.toFixed(2), sx + sw - 14, sy);
        ctx.textAlign = "left";

        // Track
        drawRoundedRect(ctx, sx + 14, sy + 18, sw - 28, 6, 3);
        ctx.fillStyle = "rgba(236,235,231,0.14)";
        ctx.fill();

        // Active track
        drawRoundedRect(ctx, sx + 14, sy + 18, (sw - 28) * sl.val, 6, 3);
        ctx.fillStyle = ink;
        ctx.fill();

        // Knob
        ctx.beginPath();
        ctx.arc(sx + 14 + (sw - 28) * sl.val, sy + 21, 9, 0, Math.PI * 2);
        ctx.fillStyle = ink;
        ctx.fill();
      });
    }
  }

  drawProvenanceStamp(ctx, project, false);
}

function drawDetailPlate(
  ctx: CanvasRenderingContext2D,
  project: Project,
  variant: "detail-a" | "detail-b"
) {
  const isLight = project.screenTheme.layout === "workspace";
  const bg = isLight ? "#F2F2EE" : "#13161C";
  const ink = isLight ? "#111215" : "#ECEBE7";
  const muted = isLight ? "#62645F" : "#8A8D93";
  const rule = isLight ? "rgba(17, 18, 21, 0.12)" : "rgba(236, 235, 231, 0.12)";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawSubtleGrid(
    ctx,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    40,
    isLight ? "rgba(17, 18, 21, 0.04)" : "rgba(236, 235, 231, 0.035)"
  );

  // Header
  ctx.fillStyle = muted;
  ctx.font = `500 14px ${FONT_STACK}`;
  const plateTitle =
    variant === "detail-a"
      ? `PLATE A  ·  TYPOGRAPHIC & SPATIAL SYSTEM  ·  ${project.name.toUpperCase()}`
      : `PLATE B  ·  COMPONENT ANATOMY & STATES  ·  ${project.name.toUpperCase()}`;
  ctx.fillText(plateTitle, 72, 64);

  ctx.strokeStyle = rule;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(72, 92);
  ctx.lineTo(CANVAS_WIDTH - 72, 92);
  ctx.stroke();

  if (variant === "detail-a") {
    // Typographic & grid proportion specimen
    ctx.fillStyle = ink;
    ctx.font = `500 132px ${FONT_STACK}`;
    ctx.fillText("Aa 01", 72, 260);

    ctx.fillStyle = muted;
    ctx.font = `400 22px ${FONT_STACK}`;
    ctx.fillText("PP Neue Montreal  ·  Tabular Numerals  ·  -0.025em Tracking", 76, 320);

    // Scale rows
    const scaleRows = [
      { role: "Display Lot Title", size: "56 px / 1.04", sample: project.name },
      { role: "Section Statement", size: "32 px / 1.12", sample: project.tagline },
      { role: "Catalog Body", size: "16 px / 1.55", sample: project.projectType },
      { role: "Tabular Metadata", size: "13 px / 1.40", sample: `LOT ${project.lotNumber} · ${project.year}` },
    ];

    scaleRows.forEach((row, idx) => {
      const y = 410 + idx * 120;
      ctx.strokeStyle = rule;
      ctx.beginPath();
      ctx.moveTo(72, y);
      ctx.lineTo(CANVAS_WIDTH - 72, y);
      ctx.stroke();

      ctx.fillStyle = muted;
      ctx.font = `500 14px ${FONT_STACK}`;
      ctx.fillText(row.role, 72, y + 48);
      ctx.fillText(row.size, 360, y + 48);

      ctx.fillStyle = ink;
      ctx.font = `500 ${idx === 0 ? 38 : idx === 1 ? 28 : 20}px ${FONT_STACK}`;
      ctx.fillText(row.sample, 620, y + 52);
    });
  } else {
    // Component anatomy & elevation spacing grid
    const boxW = (CANVAS_WIDTH - 144 - 48) / 2;
    const boxH = 740;
    [0, 1].forEach((col) => {
      const bx = 72 + col * (boxW + 48);
      const by = 136;
      drawRoundedRect(ctx, bx, by, boxW, boxH, 8);
      ctx.fillStyle = isLight ? "#FFFFFF" : "#181C24";
      ctx.fill();
      ctx.strokeStyle = rule;
      ctx.stroke();

      ctx.fillStyle = muted;
      ctx.font = `500 13px ${FONT_STACK}`;
      ctx.fillText(
        col === 0 ? "01 / INTERACTIVE STATE MATRIX" : "02 / SPATIAL PADDING & AXES",
        bx + 36,
        by + 48
      );

      // Draw schematic wireframes inside each box
      for (let r = 0; r < 4; r++) {
        const ry = by + 96 + r * 148;
        drawRoundedRect(ctx, bx + 36, ry, boxW - 72, 116, 6);
        ctx.fillStyle = isLight ? "#F6F6F3" : "#12151B";
        ctx.fill();
        ctx.strokeStyle = rule;
        ctx.stroke();

        ctx.fillStyle = ink;
        ctx.font = `500 18px ${FONT_STACK}`;
        ctx.fillText(
          col === 0
            ? `State 0${r + 1}  ·  ${["Resting", "Hover Focus", "Active Drag", "Committed"][r]}`
            : `Module 0${r + 1}  ·  ${["24px Outer Inset", "16px Inner Rhythm", "1px Hairline Rule", "Tabular Alignment"][r]}`,
          bx + 64,
          ry + 48
        );

        ctx.fillStyle = muted;
        ctx.font = `400 14px ${FONT_STACK}`;
        ctx.fillText(
          `Lot ${project.lotNumber} Specification · ${project.company}`,
          bx + 64,
          ry + 80
        );
      }
    });
  }

  drawProvenanceStamp(ctx, project, isLight);
}

export function createSyntheticScreenCanvas(
  project: Project,
  variant: SyntheticPlateVariant = "primary"
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  if (variant !== "primary") {
    drawDetailPlate(ctx, project, variant);
    return canvas;
  }

  if (project.screenTheme.layout === "workspace") {
    drawWorkspacePrimary(ctx, project);
  } else {
    drawMobileInstrumentPrimary(ctx, project);
  }

  return canvas;
}

export function createSyntheticScreenDataUrl(
  project: Project,
  variant: SyntheticPlateVariant = "primary"
): string {
  if (typeof document === "undefined") return "";
  const canvas = createSyntheticScreenCanvas(project, variant);
  return canvas.toDataURL("image/png");
}
