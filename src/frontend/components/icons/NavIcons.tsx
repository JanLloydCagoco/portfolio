import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon as HugeArrowRight01Icon,
  ArrowLeft01Icon as HugeArrowLeft01Icon,
  ArrowUpRight01Icon as HugeArrowUpRight01Icon,
  ComputerIcon as HugeComputerIcon,
  Sun01Icon as HugeSun01Icon,
  Moon01Icon as HugeMoon01Icon,
  SourceCodeIcon as HugeSourceCodeIcon,
  SmartPhone01Icon as HugeSmartPhone01Icon,
  SparklesIcon as HugeSparklesIcon,
  RocketIcon as HugeRocketIcon,
  PencilEdit01Icon as HugePencilEdit01Icon,
} from "@hugeicons/core-free-icons";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

export function ArrowRight01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeArrowRight01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function ArrowLeft01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeArrowLeft01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function ArrowUpRight01Icon({
  size = 13,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeArrowUpRight01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function ComputerIcon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeComputerIcon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function Sun01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeSun01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function Moon01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeMoon01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function SourceCodeIcon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeSourceCodeIcon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function SmartPhone01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeSmartPhone01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function SparklesIcon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeSparklesIcon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function RocketIcon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugeRocketIcon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export function PencilEdit01Icon({
  size = 14,
  strokeWidth = 1.8,
  className = "",
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      icon={HugePencilEdit01Icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

function CourseraLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.2 13.9a3.9 3.9 0 0 1-2.8-6.6l1.3 1.3a2.1 2.1 0 1 0 2.9 2.9l1.3 1.3c-.7.7-1.7 1.1-2.7 1.1Z"
        fill="#0056D2"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    </svg>
  );
}

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MetaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 7.2c-2.4 0-4.3 1.7-5.5 3.5C5.1 8.6 3.6 7.6 2 7.6 0.9 7.6 0 8.5 0 9.7v5.5c0 1.2 0.9 2.1 2 2.1 1.6 0 3.1-1 4.5-3.1 1.2 1.8 3.1 3.5 5.5 3.5s4.3-1.7 5.5-3.5c1.4 2.1 2.9 3.1 4.5 3.1 1.1 0 2-0.9 2-2.1V9.7c0-1.2-0.9-2.1-2-2.1-1.6 0-3.1 1-4.5 3.1-1.2-1.8-3.1-3.5-5.5-3.5zm-5.1 6.5C5.9 15.2 4.6 16 3.5 16c-.4 0-.8-.3-.8-.8v-4.5c0-.5.4-.8.8-.8 1.1 0 2.4.8 3.4 2.3v1.5zm10.2 0v-1.5c1-1.5 2.3-2.3 3.4-2.3.4 0 .8.3.8.8v4.5c0 .5-.4.8-.8.8-1.1 0-2.4-.8-3.4-2.3z" />
    </svg>
  );
}

function AwsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.864 11.238c-.287 0-.584.09-.806.244-.475.33-.787.842-.787 1.458 0 1.05.748 1.705 1.83 1.705.727 0 1.35-.345 1.73-.836v.736h1.416V9.61h-1.416v.738c-.416-.547-1.127-.905-1.967-.905v.795zm.36 2.378c-.59 0-1.025-.42-1.025-.92 0-.51.435-.918 1.025-.918.57 0 1.002.408 1.002.918 0 .5-.432.92-1.002.92zm6.602-3.935h-1.464l-1.34 4.81h1.416l.302-1.164h1.674l.302 1.164h1.442l-1.332-4.81zm-1.012 2.822.56-2.278.56 2.278h-1.12zm6.654-1.78c-.44-.22-1.024-.34-1.63-.34-1.416 0-2.235.83-2.235 2.015 0 1.22.84 1.815 1.93 2.035.795.16 1.108.41 1.108.73 0 .42-.41.65-1.03.65-.63 0-1.3-.23-1.8-.54l-.42 1.03c.6.43 1.45.65 2.27.65 1.54 0 2.45-.75 2.45-2.02 0-1.13-.72-1.81-1.89-2.02-.8-.15-1.15-.39-1.15-.72 0-.34.33-.55.88-.55.54 0 1.12.18 1.55.43l.47-.94zm-16.94 9.07c4.68 3.19 10.82 3.39 16.32.58.33-.17.69.05.81.35.12.3-.04.66-.35.82-5.83 2.97-12.39 2.76-17.41-.63-.36-.25-.39-.76-.08-1.06.2-.2.5-.24.71-.06zm17.39-1.71c.36.47.96 1.25.96 1.75 0 .2-.1.35-.3.45-.6.3-1.5.15-2.2-.25-.2-.1-.25-.35-.15-.55.1-.2.35-.25.55-.15.45.25.95.3 1.25.1-.15-.35-.55-.95-.8-1.25-.15-.2-.1-.45.1-.6.2-.15.45-.1.59.1z" />
    </svg>
  );
}

function MicrosoftLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  );
}

export function getIssuerIcon(
  issuer: string,
  className = "w-12 h-12 sm:w-14 sm:h-14 shrink-0"
) {
  if (issuer.includes("Google")) {
    return <GoogleLogo className={className} />;
  }
  if (issuer.includes("Meta")) {
    return <MetaLogo className={`${className} text-primary`} />;
  }
  if (issuer.includes("Amazon") || issuer.includes("AWS")) {
    return <AwsLogo className={`${className} text-primary`} />;
  }
  if (issuer.includes("Microsoft") || issuer.includes("Azure")) {
    return <MicrosoftLogo className={className} />;
  }
  return <CourseraLogo className={className} />;
}
