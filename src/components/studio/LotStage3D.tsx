"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Project } from "@/types";
import { useTheme } from "@/providers/ThemeProvider";
import {
  createSyntheticScreenCanvas,
  createSyntheticScreenDataUrl,
} from "@/lib/syntheticPlates";

export interface LotStage3DProps {
  project: Project;
  interactiveOrbit?: boolean;
  className?: string;
}

const CHASSIS_COLORS: Record<Project["chassisFinish"], string> = {
  silver: "#D8D9D6",
  obsidian: "#1C1E24",
  titanium: "#8A8D91",
};

interface MonolithProps {
  project: Project;
  theme: "light" | "dark";
  dragRotation: React.MutableRefObject<{ x: number; y: number }>;
  isDragging: React.MutableRefObject<boolean>;
}

function StudioRig({ theme }: { theme: "light" | "dark" }) {
  const spotRef = useRef<THREE.SpotLight>(null);
  const pointRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const targetX = state.pointer.x * 3.8;
    const targetY = state.pointer.y * 2.6 + 1.2;
    const targetZ = 3.6;

    if (spotRef.current) {
      spotRef.current.position.x = THREE.MathUtils.lerp(
        spotRef.current.position.x,
        targetX,
        0.08
      );
      spotRef.current.position.y = THREE.MathUtils.lerp(
        spotRef.current.position.y,
        targetY,
        0.08
      );
      spotRef.current.position.z = THREE.MathUtils.lerp(
        spotRef.current.position.z,
        targetZ,
        0.08
      );
    }

    if (pointRef.current) {
      pointRef.current.position.x = THREE.MathUtils.lerp(
        pointRef.current.position.x,
        targetX * 0.85,
        0.1
      );
      pointRef.current.position.y = THREE.MathUtils.lerp(
        pointRef.current.position.y,
        targetY * 0.85,
        0.1
      );
      pointRef.current.position.z = THREE.MathUtils.lerp(
        pointRef.current.position.z,
        2.8,
        0.1
      );
    }
  });

  return (
    <>
      <ambientLight intensity={theme === "dark" ? 0.45 : 0.85} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={theme === "dark" ? 1.2 : 1.6}
        color={theme === "dark" ? "#E8ECF7" : "#FFFDF9"}
      />
      <spotLight
        ref={spotRef}
        position={[1.5, 2.2, 3.6]}
        angle={0.55}
        penumbra={0.9}
        intensity={theme === "dark" ? 3.2 : 2.4}
        color={theme === "dark" ? "#F0F3FF" : "#FFFFFF"}
      />
      <pointLight
        ref={pointRef}
        position={[0, 1.4, 2.8]}
        intensity={theme === "dark" ? 1.4 : 1.0}
        color={theme === "dark" ? "#DCE3FA" : "#FFFFFF"}
      />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={theme === "dark" ? 2.2 : 3.0}
            rotation-x={Math.PI / 2}
            position={[0, 4, -2]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={theme === "dark" ? 1.5 : 2.0}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 1.2, 1]}
          />
          <Lightformer
            intensity={theme === "dark" ? 1.8 : 1.4}
            rotation-y={-Math.PI / 2}
            position={[5, 2, 1]}
            scale={[8, 1.5, 1]}
          />
        </group>
      </Environment>
    </>
  );
}

function MonolithArtifact({
  project,
  theme,
  dragRotation,
  isDragging,
}: MonolithProps) {
  const groupRef = useRef<THREE.Group>(null);
  const velocityRef = useRef({ x: 0, y: 0, zPos: 0 });
  const currentRotRef = useRef({ x: 0.05, y: -0.18 });
  const currentZRef = useRef(0);

  const screenTexture = useMemo(() => {
    const canvas = createSyntheticScreenCanvas(project, "primary");
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    return tex;
  }, [project]);

  useEffect(() => {
    return () => {
      screenTexture.dispose();
    };
  }, [screenTexture]);

  // Apply a weighted physical impulse when switching active Lot
  useEffect(() => {
    velocityRef.current.y += 0.085;
    velocityRef.current.x -= 0.025;
    velocityRef.current.zPos = -0.18;
  }, [project.slug]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const dt = Math.min(delta, 0.05);

    const pointerInfluenceY = state.pointer.x * 0.14;
    const pointerInfluenceX = -state.pointer.y * 0.09;

    const restY = -0.18 + pointerInfluenceY;
    const restX = 0.05 + pointerInfluenceX;

    if (!isDragging.current) {
      dragRotation.current.x = THREE.MathUtils.lerp(
        dragRotation.current.x,
        0,
        dt * 5.5
      );
      dragRotation.current.y = THREE.MathUtils.lerp(
        dragRotation.current.y,
        0,
        dt * 5.5
      );
    }

    const targetY = restY + dragRotation.current.y;
    const targetX = THREE.MathUtils.clamp(
      restX + dragRotation.current.x,
      -0.65,
      0.65
    );

    const stiffness = 18;
    const damping = 0.82;

    velocityRef.current.y =
      (velocityRef.current.y + (targetY - currentRotRef.current.y) * stiffness * dt) *
      damping;
    velocityRef.current.x =
      (velocityRef.current.x + (targetX - currentRotRef.current.x) * stiffness * dt) *
      damping;
    velocityRef.current.zPos =
      (velocityRef.current.zPos + (0 - currentZRef.current) * stiffness * dt) *
      damping;

    currentRotRef.current.y += velocityRef.current.y;
    currentRotRef.current.x += velocityRef.current.x;
    currentZRef.current += velocityRef.current.zPos;

    groupRef.current.rotation.y = currentRotRef.current.y;
    groupRef.current.rotation.x = currentRotRef.current.x;
    groupRef.current.position.z = currentZRef.current;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.025;
  });

  const chassisColor = CHASSIS_COLORS[project.chassisFinish] ?? "#D8D9D6";

  return (
    <group ref={groupRef} rotation={[0.05, -0.18, 0]}>
      {/* Outer Machined Anodized Aluminum Chassis */}
      <RoundedBox args={[4.5, 2.85, 0.16]} radius={0.09} smoothness={6}>
        <meshPhysicalMaterial
          color={chassisColor}
          metalness={0.88}
          roughness={0.2}
          clearcoat={0.3}
          clearcoatRoughness={0.18}
        />
      </RoundedBox>

      {/* Inner Chamfered Dark Bezel */}
      <RoundedBox args={[4.34, 2.69, 0.165]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color="#0D0E11"
          metalness={0.45}
          roughness={0.35}
        />
      </RoundedBox>

      {/* High-DPI Synthetic UI Screen Mesh */}
      <mesh position={[0, 0, 0.086]}>
        <planeGeometry args={[4.24, 2.58]} />
        <meshStandardMaterial
          map={screenTexture}
          emissiveMap={screenTexture}
          emissive="#FFFFFF"
          emissiveIntensity={theme === "dark" ? 0.34 : 0.16}
          roughness={0.22}
          metalness={0.05}
        />
      </mesh>

      {/* Front Optical Glass Cover Layer for Cursor-Tracked Specular Sweep */}
      <mesh position={[0, 0, 0.089]}>
        <planeGeometry args={[4.32, 2.67]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.14}
          roughness={0.04}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.04}
          reflectivity={1}
        />
      </mesh>

      {/* Rear Milled Backplate Detail */}
      <mesh position={[0, 0, -0.082]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[4.1, 2.45]} />
        <meshStandardMaterial
          color={project.chassisFinish === "obsidian" ? "#14161B" : "#C4C6C2"}
          metalness={0.82}
          roughness={0.28}
        />
      </mesh>
    </group>
  );
}

export default function LotStage3D({
  project,
  interactiveOrbit = true,
  className = "",
}: LotStage3DProps) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme;
  const [fallbackMode, setFallbackMode] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string>("");
  const [draggingUi, setDraggingUi] = useState(false);

  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let webglSupported = true;
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl2") ||
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) webglSupported = false;
    } catch {
      webglSupported = false;
    }

    if (mediaQuery.matches || !webglSupported) {
      setFallbackMode(true);
      setFallbackUrl(createSyntheticScreenDataUrl(project, "primary"));
    } else {
      setFallbackMode(false);
    }
  }, [project]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactiveOrbit || fallbackMode) return;
    isDragging.current = true;
    setDraggingUi(true);
    lastPointer.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactiveOrbit || !isDragging.current) return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    lastPointer.current = { x: e.clientX, y: e.clientY };

    dragRotation.current.y += dx * 0.0065;
    dragRotation.current.x = THREE.MathUtils.clamp(
      dragRotation.current.x + dy * 0.005,
      -0.55,
      0.55
    );
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDraggingUi(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      className={`relative w-full h-full select-none overflow-hidden ${
        interactiveOrbit && !fallbackMode
          ? draggingUi
            ? "cursor-grabbing"
            : "cursor-grab"
          : ""
      } ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {fallbackMode ? (
        <div className="w-full h-full flex items-center justify-center p-6 sm:p-10">
          {fallbackUrl && (
            <img
              src={fallbackUrl}
              alt={`${project.name} — Synthetic Stand-In`}
              className="w-full max-w-[780px] h-auto object-contain shadow-2xl hairline-box"
            />
          )}
        </div>
      ) : (
        <Canvas
          camera={{ position: [0, 0.1, 5.2], fov: 36 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
          }}
        >
          <StudioRig theme={theme} />
          <MonolithArtifact
            project={project}
            theme={theme}
            dragRotation={dragRotation}
            isDragging={isDragging}
          />
          <ContactShadows
            position={[0, -1.75, 0]}
            opacity={theme === "dark" ? 0.68 : 0.36}
            scale={11}
            blur={2.4}
            far={4.2}
            color={theme === "dark" ? "#050608" : "#222320"}
          />
        </Canvas>
      )}

      {/* Unobtrusive Studio Provenance & Interaction Readout */}
      <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-[12px] text-secondary tabular-nums tracking-[0.02em]">
        <span>
          LOT {project.lotNumber} · {project.chassisFinish.toUpperCase()} CHASSIS
        </span>
        <span>
          {fallbackMode
            ? "SYNTHETIC STAND-IN"
            : interactiveOrbit
              ? "SYNTHETIC STAND-IN · DRAG TO INSPECT"
              : "SYNTHETIC STAND-IN"}
        </span>
      </div>
    </div>
  );
}
