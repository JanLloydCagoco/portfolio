"use client";

import React from "react";
import InteractiveAvatar from "./InteractiveAvatar";
import {
  ArrowUpRight01Icon,
  SourceCodeIcon,
  ComputerIcon,
  SmartPhone01Icon,
  SparklesIcon,
  RocketIcon,
  PencilEdit01Icon,
} from "@/frontend/components/icons/NavIcons";
import BadgePill from "@/frontend/components/ui/BadgePill";

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "github", href: "https://github.com/janlloyd" },
  { label: "linkedin", href: "https://linkedin.com/in/janlloyd" },
  { label: "facebook", href: "https://facebook.com/janlloyd" },
];

export default function ProfileIdentityRow() {
  return (
    <div className="w-full select-none">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 w-full">
        <div className="shrink-0 sm:mt-1">
          <InteractiveAvatar />
        </div>

        <div className="flex-1 min-w-0 space-y-2.5 text-center sm:text-left">
          <h1 className="font-pixel text-[26px] sm:text-[30px] tracking-tight text-primary leading-tight pb-0.5">
            Jan Lloyd Cagoco
          </h1>

          <p className="text-[14px] sm:text-[15px] text-secondary leading-[2.25] sm:leading-[2.35]">
            I&apos;m a{" "}
            <BadgePill>
              <SourceCodeIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>full-stack</span>
            </BadgePill>{" "}
            developer building modern{" "}
            <BadgePill>
              <ComputerIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>web</span>
            </BadgePill>{" "}
            &amp;{" "}
            <BadgePill>
              <SmartPhone01Icon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>mobile apps</span>
            </BadgePill>{" "}
            with{" "}
            <BadgePill>
              <SparklesIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>AI-driven development</span>
            </BadgePill>
            .
          </p>

          <p className="text-[14px] sm:text-[15px] text-secondary leading-[2.25] sm:leading-[2.35]">
            Right now I&apos;m focused on crafting{" "}
            <BadgePill>
              <RocketIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>cool digital tools</span>
            </BadgePill>{" "}
            and turning{" "}
            <BadgePill>
              <PencilEdit01Icon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>wild ideas</span>
            </BadgePill>{" "}
            into snappy things people actually use.
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-5 pt-1 text-[13px] text-secondary font-mono tracking-tight select-none">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors lowercase group"
              >
                <span className="group-hover:underline underline-offset-4 decoration-[var(--border-strong)]">{link.label}</span>
                <ArrowUpRight01Icon
                  size={11}
                  className="shrink-0 text-secondary group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
