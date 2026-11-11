import React from "react";
import Image from "next/image";
import {
  ArrowUpRight01Icon,
  SourceCodeIcon,
  ComputerIcon,
  SmartPhone01Icon,
  SparklesIcon,
  Layers01Icon,
  RocketIcon,
  PencilEdit01Icon,
} from "@/lib/icons";
import BadgePill from "@/components/ui/BadgePill";

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
        {/* Avatar Container: 192px square (sm:w-48 sm:h-48), rounded corners, crisp border, subtle shadow */}
        <div className="w-36 h-36 sm:w-48 sm:h-48 shrink-0 rounded-[8px] overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.3)] relative group sm:mt-1">
          <Image
            src="/avatar.png"
            alt="Jan Lloyd Cagoco"
            fill
            sizes="(max-width: 640px) 144px, 192px"
            priority
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Identity Details: Heading, Compact Inline Badges, Social Links */}
        <div className="flex-1 min-w-0 space-y-2.5 text-center sm:text-left">
          {/* Primary Identity Name */}
          <h1 className="font-pixel text-[26px] sm:text-[30px] tracking-tight text-primary leading-tight pb-0.5">
            Jan Lloyd Cagoco
          </h1>

          <p className="text-[14px] sm:text-[15px] text-secondary leading-[2.35] sm:leading-[2.45]">
            I&apos;m a{" "}
            <BadgePill>
              <SourceCodeIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>full-stack</span>
            </BadgePill>{" "}
            product designer &amp; associate developer at LGU Baggao. I build
            modern{" "}
            <BadgePill>
              <ComputerIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>web</span>
            </BadgePill>{" "}
            &amp;{" "}
            <BadgePill>
              <SmartPhone01Icon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>mobile apps</span>
            </BadgePill>
            , and these days I&apos;m focused on{" "}
            <BadgePill>
              <SparklesIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>public digital tools</span>
            </BadgePill>{" "}
            &amp;{" "}
            <BadgePill>
              <Layers01Icon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>design systems</span>
            </BadgePill>
            .
          </p>

          <p className="text-[14px] sm:text-[15px] text-secondary leading-[2.35] sm:leading-[2.45]">
            Right now I&apos;m building{" "}
            <BadgePill>
              <RocketIcon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>cool new stuff</span>
            </BadgePill>{" "}
            every day. I love turning{" "}
            <BadgePill>
              <PencilEdit01Icon size={13} strokeWidth={2.2} className="text-primary shrink-0" />
              <span>rough ideas</span>
            </BadgePill>{" "}
            into things people actually use.
          </p>

          {/* Social Links Row in Monospace Lowercase */}
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
